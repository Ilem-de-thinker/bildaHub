import React, { useEffect, useRef, useState } from 'react';

interface FluidCanvasProps {
  className?: string;
  intensity?: number;
  interactive?: boolean;
  mode?: 'hero' | 'ambient';
}

export const FluidCanvas: React.FC<FluidCanvasProps> = ({
  className = '',
  intensity = 1.0,
  interactive = true,
  mode = 'hero'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [webGLFailed, setWebGLFailed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      depth: false,
      stencil: false,
      antialias: false,
      powerPreference: 'high-performance'
    });

    if (!gl) {
      setWebGLFailed(true);
      return;
    }

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) * 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Advanced Navier-Stokes / Curl vorticity fluid shader with dynamic mouse-injected splats
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec2 u_mouse_vel;
      uniform float u_intensity;
      uniform float u_mode; // 1.0 for hero, 0.0 for ambient
      varying vec2 v_uv;

      // Noise functions
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ; m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // Curl-noise fluid velocity field
      vec2 curl(vec2 p, float time) {
        float eps = 0.01;
        float n1 = snoise(p + vec2(0.0, eps) + vec2(time * 0.15));
        float n2 = snoise(p - vec2(0.0, eps) + vec2(time * 0.15));
        float n3 = snoise(p + vec2(eps, 0.0) + vec2(time * 0.15));
        float n4 = snoise(p - vec2(eps, 0.0) + vec2(time * 0.15));
        return vec2((n1 - n2) / (2.0 * eps), -(n3 - n4) / (2.0 * eps));
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;
        vec2 p = uv;
        p.x *= aspect;

        vec2 mouseP = u_mouse / u_resolution.xy;
        mouseP.x *= aspect;

        // Interactive mouse velocity & displacement
        float distToMouse = length(p - mouseP);
        float mouseRad = (u_mode > 0.5) ? 0.45 : 0.55;
        float mouseImpulse = smoothstep(mouseRad, 0.0, distToMouse);
        vec2 mousePush = u_mouse_vel * mouseImpulse * 1.8;

        float t = u_time * 0.25;

        // Fluid movement pattern: Cascading advection streams
        vec2 fluidFlow = curl(p * 1.4, t) + mousePush * 0.8;
        vec2 p1 = p + fluidFlow * 0.45;

        vec2 q = vec2(
          snoise(p1 * 2.2 + vec2(t * 0.4, t * 0.2)),
          snoise(p1 * 2.2 + vec2(-t * 0.25, t * 0.35))
        );

        vec2 r = vec2(
          snoise(p1 * 3.5 + q * 2.5 + vec2(1.7, 9.2) + vec2(t * 0.18)),
          snoise(p1 * 3.5 + q * 2.5 + vec2(8.3, 2.8) - vec2(t * 0.16))
        );

        float f = snoise(p1 * 2.5 + r * 2.0 + mousePush * 0.5);
        f = (f + 1.0) * 0.5;

        // Color definitions
        vec3 colorNavy = vec3(0.0039, 0.0549, 0.3216);      // #010e52
        vec3 colorElectric = vec3(0.0, 0.145, 1.0);         // #0025ff
        vec3 colorYellow = vec3(1.0, 0.80, 0.0);            // #ffcc00
        vec3 colorWhite = vec3(1.0, 1.0, 1.0);

        vec3 col = colorNavy;

        if (u_mode > 0.5) {
          // HERO SECTION: Intense, rich fluid movement pattern
          // 1. Swirling electric-blue rivers
          float blueStream = smoothstep(0.18, 0.82, f + q.x * 0.5 + mouseImpulse * 0.4);
          col = mix(col, colorElectric, blueStream * 0.9);

          // 2. Yellow energy crests & splats
          float yellowCrest = smoothstep(0.64, 0.94, f + r.y * 0.7 + mouseImpulse * 0.8);
          col = mix(col, colorYellow, yellowCrest * 0.95);

          // 3. White fluid foam & sparkle
          float whiteFoam = smoothstep(0.91, 0.99, f + r.x * 0.5 + mouseImpulse * 0.6);
          col = mix(col, colorWhite, whiteFoam * 0.7);

          // Soft ambient vignette
          float vignette = smoothstep(1.25, 0.3, length(uv - 0.5) * 1.15);
          col = mix(colorNavy, col, clamp(vignette, 0.4, 1.0));
          
          gl_FragColor = vec4(col, 0.95 * u_intensity);
        } else {
          // OTHER PAGES: Smooth ambient mouse movement pattern
          float ambientBlue = smoothstep(0.3, 0.75, f + mouseImpulse * 0.5);
          col = mix(col, colorElectric, ambientBlue * 0.45);

          float ambientYellow = smoothstep(0.7, 0.95, f + mouseImpulse * 0.7);
          col = mix(col, colorYellow, ambientYellow * 0.4);

          gl_FragColor = vec4(col, 0.45 * u_intensity);
        }
      }
    `;

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.warn('Shader compile failed:', glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) {
      setWebGLFailed(true);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setWebGLFailed(true);
      return;
    }
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setWebGLFailed(true);
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uMouseVel = gl.getUniformLocation(program, 'u_mouse_vel');
    const uIntensity = gl.getUniformLocation(program, 'u_intensity');
    const uMode = gl.getUniformLocation(program, 'u_mode');

    let animationFrameId: number;
    let startTime = performance.now();
    let mouseX = window.innerWidth * 0.5;
    let mouseY = window.innerHeight * 0.5;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let velX = 0;
    let velY = 0;
    let lastEventTime = performance.now();

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth || window.innerWidth;
      const height = canvas.clientHeight || window.innerHeight;
      const displayWidth = Math.floor(width * dpr);
      const displayHeight = Math.floor(height * dpr);

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Global pointer listener so mouse movement on other pages triggers the fluid
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;

      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const currentX = (clientX - rect.left) * (canvas.width / rect.width);
      const currentY = (rect.height - (clientY - rect.top)) * (canvas.height / rect.height);

      const now = performance.now();
      const dt = Math.max(1, now - lastEventTime);
      velX = (currentX - targetMouseX) / dt * 0.25;
      velY = (currentY - targetMouseY) / dt * 0.25;

      targetMouseX = currentX;
      targetMouseY = currentY;
      lastEventTime = now;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      if (isVisible) {
        const now = performance.now();
        const elapsed = (now - startTime) * 0.001;

        mouseX += (targetMouseX - mouseX) * 0.1;
        mouseY += (targetMouseY - mouseY) * 0.1;
        velX *= 0.94;
        velY *= 0.94;

        gl.uniform2f(uResolution, canvas.width, canvas.height);
        gl.uniform1f(uTime, elapsed);
        gl.uniform2f(uMouse, mouseX, mouseY);
        gl.uniform2f(uMouseVel, velX, velY);
        gl.uniform1f(uIntensity, intensity);
        gl.uniform1f(uMode, mode === 'hero' ? 1.0 : 0.0);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, interactive, mode, prefersReducedMotion]);

  if (webGLFailed || prefersReducedMotion) {
    return (
      <div
        className={`absolute inset-0 bg-[#010e52] pointer-events-none overflow-hidden ${className}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,#0025ff_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#ffcc00_0%,transparent_40%),radial-gradient(circle_at_50%_50%,#010e52_0%,transparent_70%)] animate-pulse" />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      style={{ touchAction: 'none' }}
      aria-hidden="true"
    />
  );
};
