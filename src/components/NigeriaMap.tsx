import React, { useState } from 'react';
import { MapPin, Users, Building, ArrowUpRight } from 'lucide-react';

export interface Chapter {
  id: string;
  name: string;
  region: string;
  members: string; // PLACEHOLDER
  lead: string; // PLACEHOLDER
  hubLocation: string; // PLACEHOLDER
  x: number; // percentage coordinate on SVG
  y: number;
}

export const chaptersList: Chapter[] = [
  {
    id: 'lagos',
    name: 'Lagos Hub (HQ)',
    region: 'South West',
    members: '2,400+ Builders',
    lead: 'Tunde & Blessing',
    hubLocation: 'Yaba Tech Corridor & Gbagada Hub',
    x: 20,
    y: 78
  },
  {
    id: 'ibadan',
    name: 'Ibadan Chapter',
    region: 'South West',
    members: '680+ Builders',
    lead: 'Zainab Aliyu',
    hubLocation: 'UI / Bodija Innovation Pod',
    x: 24,
    y: 70
  },
  {
    id: 'abuja',
    name: 'Abuja Innovation Hub',
    region: 'North Central',
    members: '1,100+ Builders',
    lead: 'Amina Bello',
    hubLocation: 'Wuse II & Baze University Tech Centre',
    x: 48,
    y: 52
  },
  {
    id: 'kano',
    name: 'Kano Chapter',
    region: 'North West',
    members: '540+ Builders',
    lead: 'Ibrahim Danjuma',
    hubLocation: 'Bayero Tech Hive',
    x: 58,
    y: 22
  },
  {
    id: 'ph',
    name: 'Port Harcourt Hub',
    region: 'South South',
    members: '720+ Builders',
    lead: 'Chidiebere Umeh',
    hubLocation: 'Peter Odili Tech Space',
    x: 47,
    y: 86
  },
  {
    id: 'calabar',
    name: 'Calabar Chapter',
    region: 'South South',
    members: '380+ Builders',
    lead: 'Blessing Udoh',
    hubLocation: 'Marina Tech Park',
    x: 62,
    y: 84
  }
];

export const NigeriaMap: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter>(chaptersList[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Interactive Map Visual */}
      <div className="lg:col-span-7 relative bg-[#04146a]/60 rounded-2xl p-6 md:p-8 border border-white/10 overflow-hidden shadow-2xl">
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ffcc00]">
          <span className="w-2 h-2 rounded-full bg-[#ffcc00] animate-ping" />
          Interactive Hub Network
        </div>

        {/* Stylized SVG Map of Nigeria */}
        <div className="relative aspect-[4/3] w-full max-w-[550px] mx-auto mt-4">
          <svg
            viewBox="0 0 500 400"
            className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Nigeria Continental Outline (Geometrically simplified high-fidelity polygonal vector) */}
            <path
              d="M 60 270 
                 L 45 220 
                 L 65 170 
                 L 110 130 
                 L 160 85 
                 L 220 50 
                 L 310 55 
                 L 370 70 
                 L 440 95 
                 L 480 145 
                 L 470 200 
                 L 420 230 
                 L 400 270 
                 L 360 300 
                 L 310 320 
                 L 290 355 
                 L 230 365 
                 L 170 350 
                 L 120 330 
                 L 70 300 Z"
              fill="#010e52"
              stroke="#0025ff"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Inner Topo Contour Mesh */}
            <path
              d="M 110 130 Q 220 180 370 70"
              stroke="rgba(0,37,255,0.3)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 65 170 Q 200 240 310 320"
              stroke="rgba(0,37,255,0.3)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 160 85 Q 260 210 230 365"
              stroke="rgba(0,37,255,0.3)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* Niger / Benue confluence symbolic river curves */}
            <path
              d="M 120 130 Q 180 200 235 245 Q 330 255 420 230"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 235 245 Q 240 290 230 365"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Chapter glowing coordinate nodes */}
            {chaptersList.map((chap) => {
              const svgX = (chap.x / 100) * 500;
              const svgY = (chap.y / 100) * 400;
              const isSelected = selectedChapter.id === chap.id;

              return (
                <g
                  key={chap.id}
                  onClick={() => setSelectedChapter(chap)}
                  className="cursor-pointer group"
                >
                  {/* Pulse halo */}
                  <circle
                    cx={svgX}
                    cy={svgY}
                    r={isSelected ? 16 : 9}
                    fill={isSelected ? '#ffcc00' : '#0025ff'}
                    fillOpacity={isSelected ? 0.35 : 0.2}
                    className="transition-all duration-300"
                  />
                  {/* Inner node */}
                  <circle
                    cx={svgX}
                    cy={svgY}
                    r={isSelected ? 7 : 4.5}
                    fill={isSelected ? '#ffcc00' : '#ffffff'}
                    stroke={isSelected ? '#010e52' : '#0025ff'}
                    strokeWidth="2"
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                  {/* City Label */}
                  <text
                    x={svgX}
                    y={svgY - 12}
                    textAnchor="middle"
                    fill={isSelected ? '#ffcc00' : '#ffffff'}
                    fontSize={isSelected ? "13" : "11"}
                    fontWeight={isSelected ? "bold" : "600"}
                    className="pointer-events-none select-none transition-all duration-200"
                  >
                    {chap.name.split(' ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Quick legend footer */}
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
          <span>Click any glowing node on the map to view chapter details</span>
          <span className="text-[#ffcc00] font-semibold">6 Active Campuses & Hubs</span>
        </div>
      </div>

      {/* Selected Chapter Detail Card */}
      <div className="lg:col-span-5 flex flex-col gap-4">
        <div className="glass-card rounded-2xl p-6 md:p-8 border border-[#ffcc00]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffcc00]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#8ea4ff]">
                {selectedChapter.region}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">
                {selectedChapter.name}
              </h3>
            </div>
            <span className="px-3 py-1 text-xs font-bold bg-[#ffcc00] text-[#010e52] rounded-full shrink-0">
              Active Hub
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <Users className="w-5 h-5 text-[#ffcc00] shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">Community Strength</span>
                <span className="font-semibold text-white">{selectedChapter.members}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-200">
              <Building className="w-5 h-5 text-[#ffcc00] shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">Physical Hub & Co-working</span>
                <span className="font-semibold text-white">{selectedChapter.hubLocation}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-200">
              <MapPin className="w-5 h-5 text-[#ffcc00] shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">Chapter Lead(s)</span>
                <span className="font-semibold text-white">{selectedChapter.lead}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-300">Weekly meetups every Saturday</span>
            <a
              href="#join-form"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffcc00] hover:underline"
            >
              Join this Chapter <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Quick selector pill chips */}
        <div className="flex flex-wrap gap-2">
          {chaptersList.map((chap) => (
            <button
              key={chap.id}
              onClick={() => setSelectedChapter(chap)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedChapter.id === chap.id
                  ? 'bg-[#ffcc00] text-[#010e52] font-bold shadow-md'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {chap.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
