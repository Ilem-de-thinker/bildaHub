import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWord?: string;
  subtext?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightWord,
  subtext,
  align = 'center',
  theme = 'dark',
  className = ''
}) => {
  const isLight = theme === 'light';

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  }[align];

  // Render title with highlight word
  const renderTitle = () => {
    if (!highlightWord) {
      return title;
    }

    const parts = title.split(new RegExp(`(${highlightWord})`, 'gi'));
    return parts.map((part, index) => {
      if (part.toLowerCase() === highlightWord.toLowerCase()) {
        return (
          <span
            key={index}
            className={
              isLight
                ? 'text-[#0025ff] underline decoration-[#ffcc00] decoration-wavy decoration-2 underline-offset-4'
                : 'text-[#ffcc00]'
            }
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span
          className={`text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${
            isLight
              ? 'bg-[#0025ff]/10 text-[#0025ff]'
              : 'bg-[#ffcc00]/10 text-[#ffcc00] border border-[#ffcc00]/20'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-balance ${
          isLight ? 'text-[#010e52]' : 'text-white'
        }`}
      >
        {renderTitle()}
      </h2>

      {subtext && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
};
