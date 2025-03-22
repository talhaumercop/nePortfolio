import React, { useId } from 'react';

type Props = {
  components: React.ElementType;
};

function LanguageIcons({ components: Component }: Props) {
  const id = useId(); // Unique ID for each gradient

  // Soothing color gradients
  const gradients = [
    ['#A1C4FD', '#C2E9FB'], // Light Blue → Sky Blue
    ['#FAD0C4', '#FFD1FF'], // Soft Pink → Light Purple
    ['#89F7FE', '#66A6FF'], // Aqua Blue → Soft Blue
    ['#FFC3A0', '#FFAFBD'], // Peach → Light Rose
    ['#D4FC79', '#96E6A1'], // Lime Green → Soft Green
  ];

  // Select a random gradient
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div className="relative">
      {/* SVG Component with gradient applied via inline styles */}
      <Component
        className="size-10"
        style={{
          fill: `url(#gradient-${id})`,
        }}
      />

      {/* SVG Definitions for Gradient */}
      <svg className="absolute size-0">
        <defs>
          <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={randomGradient[0]} />
            <stop offset="100%" stopColor={randomGradient[1]} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default LanguageIcons;
