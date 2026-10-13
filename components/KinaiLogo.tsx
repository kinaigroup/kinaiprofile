'use client';

import React from 'react';

interface KinaiLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'symbol';
  inverted?: boolean;
}

export default function KinaiLogo({
  className = 'h-9 w-auto',
  variant = 'horizontal',
  inverted = false,
}: KinaiLogoProps) {
  const textColor = inverted ? '#FFFFFF' : '#0B3056';
  const subtextColor = inverted ? '#A7F3D0' : '#0B3056';

  // The Pinwheel Symbol Vector
  const PinwheelSymbol = (
    <svg
      viewBox="0 0 200 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-auto shrink-0 select-none"
    >
      {/* Mast / Trunk */}
      <path
        d="M102 74 L97 128 C95 138 93 148 90 156 L108 156 C105 148 103 138 103 128 L104 74 Z"
        fill="#0B3056"
      />

      {/* Undulating Green Ground/Hill Curves */}
      {/* Upper Dark Green Swirl */}
      <path
        d="M52 173 C85 158 125 158 152 168 C135 163 105 163 70 172 Z"
        fill="#1E6B4B"
      />
      {/* Lower Light Green Hill Wave */}
      <path
        d="M78 175 C108 168 138 169 160 173 C138 170 110 171 85 177 Z"
        fill="#66A038"
      />

      {/* 7 Pinwheel Blades (Petals radiating around center hub at 100, 70) */}
      {/* Blade 1: Top (approx 12 o'clock) - Royal Blue */}
      <path
        d="M100 70 C100 48 91 32 108 26 C115 38 111 58 100 70 Z"
        fill="#0E5A9E"
      />
      {/* Blade 2: Upper Right (approx 2 o'clock) - Sky Blue */}
      <path
        d="M100 70 C114 55 129 49 140 58 C137 72 121 78 100 70 Z"
        fill="#0288D1"
      />
      {/* Blade 3: Right / Lower Right (approx 3:30 o'clock) - Warm Golden Yellow */}
      <path
        d="M100 70 C120 71 137 75 142 90 C128 97 113 88 100 70 Z"
        fill="#E5A910"
      />
      {/* Blade 4: Lower Right (approx 5 o'clock) - Vibrant Orange */}
      <path
        d="M100 70 C109 84 115 102 106 114 C98 106 97 88 100 70 Z"
        fill="#F37021"
      />
      {/* Blade 5: Lower Left (approx 7 o'clock) - Fresh Spring Green */}
      <path
        d="M100 70 C93 84 83 100 68 101 C68 89 83 77 100 70 Z"
        fill="#61A534"
      />
      {/* Blade 6: Middle Left (approx 9 o'clock) - Golden Tangerine */}
      <path
        d="M100 70 C83 76 66 79 51 68 C64 61 82 66 100 70 Z"
        fill="#F59E0B"
      />
      {/* Blade 7: Upper Left (approx 10:30 o'clock) - Teal / Turquoise */}
      <path
        d="M100 70 C83 60 75 42 84 34 C94 43 97 58 100 70 Z"
        fill="#00897B"
      />

      {/* Center Circle Hub */}
      <circle cx="100" cy="70" r="7.5" fill="#0B3056" />
    </svg>
  );

  // The KINAI Typography Vector with leaf crossbar in letter 'A'
  const WordmarkText = (
    <svg
      viewBox="0 0 280 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-auto select-none"
    >
      {/* K */}
      <path
        d="M12 10 H26 V44 L50 10 H68 L38 50 L70 82 H51 L26 55 V82 H12 Z"
        fill={textColor}
      />

      {/* I */}
      <path
        d="M78 10 H92 V82 H78 Z"
        fill={textColor}
      />

      {/* N */}
      <path
        d="M102 10 H116 L144 56 V10 H158 V82 H144 L116 36 V82 H102 Z"
        fill={textColor}
      />

      {/* A (Stylized with green leaf crossbar) */}
      <path
        d="M184 10 H198 L222 82 H207 L200 60 H182 L175 82 H160 Z M191 30 L185 50 H197 Z"
        fill={textColor}
      />
      {/* Leaf inside letter A */}
      <path
        d="M183 58 C187 52 195 53 203 57 C197 61 190 62 183 58 Z"
        fill="#558B2F"
      />

      {/* I */}
      <path
        d="M232 10 H246 V82 H232 Z"
        fill={textColor}
      />

      {/* Subtitle: KINCIR ANGIN INDONESIA */}
      <text
        x="130"
        y="108"
        textAnchor="middle"
        fill={subtextColor}
        fontSize="14.5"
        fontWeight="700"
        letterSpacing="0.22em"
        fontFamily="var(--font-sans, system-ui, sans-serif)"
      >
        KINCIR ANGIN INDONESIA
      </text>
    </svg>
  );

  if (variant === 'symbol') {
    return <div className={`inline-flex items-center ${className}`}>{PinwheelSymbol}</div>;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
          {PinwheelSymbol}
        </div>
        <div className="w-48 sm:w-56 h-14 sm:h-16 flex items-center justify-center">
          {WordmarkText}
        </div>
      </div>
    );
  }

  // Horizontal variant (default for Navbar & Footer header)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="h-full aspect-square flex items-center justify-center">
        {PinwheelSymbol}
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center">
          <span
            className="text-lg sm:text-xl font-black tracking-tight leading-none"
            style={{ color: textColor }}
          >
            KINAI
          </span>
        </div>
        <span
          className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] uppercase leading-tight mt-0.5"
          style={{ color: subtextColor }}
        >
          Kincir Angin Indonesia
        </span>
      </div>
    </div>
  );
}
