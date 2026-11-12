import React from 'react';

interface AnimalIllustrationProps {
  animalId: string;
  className?: string;
  animated?: boolean;
}

export const AnimalIllustration: React.FC<AnimalIllustrationProps> = ({
  animalId,
  className = 'w-32 h-32',
  animated = false,
}) => {
  const animClass = animated ? 'transition-transform duration-300 group-hover:scale-105' : '';

  switch (animalId) {
    case 'lion':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Glorious Sunburst Mane */}
          <circle cx="80" cy="80" r="66" fill="#D97706" />
          <circle cx="80" cy="80" r="58" fill="#B45309" />
          <g fill="#F59E0B">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <path key={deg} transform={`rotate(${deg} 80 80)`} d="M80 14 L88 32 L72 32 Z" />
            ))}
          </g>
          {/* Ears */}
          <circle cx="48" cy="52" r="14" fill="#F59E0B" />
          <circle cx="48" cy="52" r="8" fill="#FDE68A" />
          <circle cx="112" cy="52" r="14" fill="#F59E0B" />
          <circle cx="112" cy="52" r="8" fill="#FDE68A" />
          {/* Face */}
          <circle cx="80" cy="86" r="42" fill="#FCD34D" />
          {/* Cheerful Eyes */}
          <circle cx="66" cy="80" r="7" fill="#1E293B" />
          <circle cx="68" cy="78" r="2.5" fill="#FFFFFF" />
          <circle cx="94" cy="80" r="7" fill="#1E293B" />
          <circle cx="96" cy="78" r="2.5" fill="#FFFFFF" />
          {/* Cute Blushing Cheeks */}
          <circle cx="56" cy="94" r="6" fill="#FCA5A5" opacity="0.6" />
          <circle cx="104" cy="94" r="6" fill="#FCA5A5" opacity="0.6" />
          {/* Muzzle */}
          <ellipse cx="80" cy="98" rx="16" ry="12" fill="#FEF3C7" />
          <polygon points="73,92 87,92 80,100" fill="#92400E" />
          <path d="M76 102 Q80 106 84 102" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" />
          {/* Whiskers */}
          <line x1="50" y1="96" x2="62" y2="98" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="50" y1="102" x2="62" y2="102" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="98" y1="98" x2="110" y2="96" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="98" y1="102" x2="110" y2="102" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'elephant':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Big Flapping Ears */}
          <ellipse cx="40" cy="80" rx="30" ry="34" fill="#9CA3AF" />
          <ellipse cx="40" cy="80" rx="20" ry="24" fill="#FBCFE8" opacity="0.7" />
          <ellipse cx="120" cy="80" rx="30" ry="34" fill="#9CA3AF" />
          <ellipse cx="120" cy="80" rx="20" ry="24" fill="#FBCFE8" opacity="0.7" />
          {/* Head */}
          <circle cx="80" cy="80" r="42" fill="#6B7280" />
          {/* Cute Tuft on Head */}
          <path d="M76 38 Q80 32 84 38" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" />
          {/* Eyes */}
          <circle cx="65" cy="74" r="6" fill="#111827" />
          <circle cx="67" cy="72" r="2" fill="#FFFFFF" />
          <circle cx="95" cy="74" r="6" fill="#111827" />
          <circle cx="97" cy="72" r="2" fill="#FFFFFF" />
          {/* Rosy Cheeks */}
          <circle cx="58" cy="88" r="5" fill="#F472B6" opacity="0.5" />
          <circle cx="102" cy="88" r="5" fill="#F472B6" opacity="0.5" />
          {/* Playful Curling Trunk */}
          <path d="M74 88 C74 116 86 128 98 126 C106 124 108 112 100 110 C92 108 86 116 88 122" stroke="#4B5563" strokeWidth="12" strokeLinecap="round" fill="none" />
          {/* Cute Tusks */}
          <path d="M68 96 Q62 108 58 106 Q64 96 70 94" fill="#FFFFFF" />
          <path d="M92 96 Q98 108 102 106 Q96 96 90 94" fill="#FFFFFF" />
        </svg>
      );

    case 'monkey':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Big Rounded Ears */}
          <circle cx="36" cy="76" r="22" fill="#78350F" />
          <circle cx="36" cy="76" r="14" fill="#FED7AA" />
          <circle cx="124" cy="76" r="22" fill="#78350F" />
          <circle cx="124" cy="76" r="14" fill="#FED7AA" />
          {/* Head */}
          <circle cx="80" cy="80" r="44" fill="#92400E" />
          {/* Heart/Mask Face Shape */}
          <ellipse cx="68" cy="72" rx="18" ry="16" fill="#FDE68A" />
          <ellipse cx="92" cy="72" rx="18" ry="16" fill="#FDE68A" />
          <ellipse cx="80" cy="94" rx="26" ry="20" fill="#FDE68A" />
          {/* Sparkling Mischievous Eyes */}
          <circle cx="68" cy="70" r="6" fill="#1E293B" />
          <circle cx="70" cy="68" r="2" fill="#FFFFFF" />
          <circle cx="92" cy="70" r="6" fill="#1E293B" />
          <circle cx="94" cy="68" r="2" fill="#FFFFFF" />
          {/* Nose & Big Grin */}
          <ellipse cx="76" cy="88" rx="2" ry="3" fill="#78350F" />
          <ellipse cx="84" cy="88" rx="2" ry="3" fill="#78350F" />
          <path d="M68 96 Q80 110 92 96" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'tiger':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ears */}
          <circle cx="48" cy="50" r="16" fill="#EA580C" />
          <circle cx="48" cy="50" r="10" fill="#FFFFFF" />
          <circle cx="112" cy="50" r="16" fill="#EA580C" />
          <circle cx="112" cy="50" r="10" fill="#FFFFFF" />
          {/* Head */}
          <circle cx="80" cy="84" r="46" fill="#F97316" />
          {/* Camouflage Stripes */}
          <path d="M80 44 L80 60 M72 46 L76 56 M88 46 L84 56" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
          <path d="M38 80 L52 82 M36 90 L50 90" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
          <path d="M122 80 L108 82 M124 90 L110 90" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
          {/* White Cheeks */}
          <ellipse cx="64" cy="98" rx="14" ry="12" fill="#FFFFFF" />
          <ellipse cx="96" cy="98" rx="14" ry="12" fill="#FFFFFF" />
          {/* Fierce yet friendly eyes */}
          <ellipse cx="66" cy="78" rx="7" ry="8" fill="#FCD34D" />
          <circle cx="66" cy="78" r="5" fill="#1E293B" />
          <circle cx="68" cy="76" r="1.5" fill="#FFFFFF" />
          <ellipse cx="94" cy="78" rx="7" ry="8" fill="#FCD34D" />
          <circle cx="94" cy="78" r="5" fill="#1E293B" />
          <circle cx="96" cy="76" r="1.5" fill="#FFFFFF" />
          {/* Pink Nose */}
          <polygon points="74,92 86,92 80,98" fill="#F43F5E" />
          <path d="M74 100 Q80 106 86 100" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Whiskers */}
          <line x1="50" y1="98" x2="36" y2="98" stroke="#1E293B" strokeWidth="1.5" />
          <line x1="50" y1="102" x2="38" y2="105" stroke="#1E293B" strokeWidth="1.5" />
          <line x1="110" y1="98" x2="124" y2="98" stroke="#1E293B" strokeWidth="1.5" />
          <line x1="110" y1="102" x2="122" y2="105" stroke="#1E293B" strokeWidth="1.5" />
        </svg>
      );

    case 'frog':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Giant Bulging Red Eyes */}
          <circle cx="52" cy="58" r="22" fill="#16A34A" />
          <circle cx="52" cy="58" r="17" fill="#EF4444" />
          <ellipse cx="52" cy="58" rx="5" ry="12" fill="#1E293B" />
          <circle cx="50" cy="54" r="3" fill="#FFFFFF" />

          <circle cx="108" cy="58" r="22" fill="#16A34A" />
          <circle cx="108" cy="58" r="17" fill="#EF4444" />
          <ellipse cx="108" cy="58" rx="5" ry="12" fill="#1E293B" />
          <circle cx="106" cy="54" r="3" fill="#FFFFFF" />

          {/* Smooth Green Head & Body */}
          <ellipse cx="80" cy="94" rx="46" ry="34" fill="#22C55E" />
          {/* Pale Belly */}
          <ellipse cx="80" cy="104" rx="28" ry="18" fill="#BBF7D0" />
          {/* Blushing Cheeks */}
          <circle cx="54" cy="96" r="6" fill="#F472B6" opacity="0.6" />
          <circle cx="106" cy="96" r="6" fill="#F472B6" opacity="0.6" />
          {/* Huge Happy Smile */}
          <path d="M56 94 Q80 114 104 94" stroke="#14532D" strokeWidth="3.5" strokeLinecap="round" />
          {/* Nostril Dots */}
          <circle cx="76" cy="82" r="2" fill="#15803D" />
          <circle cx="84" cy="82" r="2" fill="#15803D" />
        </svg>
      );

    case 'owl':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Feathered Ear Tufts */}
          <polygon points="50,45 35,25 65,35" fill="#78350F" />
          <polygon points="110,45 125,25 95,35" fill="#78350F" />
          {/* Body */}
          <ellipse cx="80" cy="86" rx="44" ry="46" fill="#92400E" />
          {/* Heart Shaped Mask */}
          <ellipse cx="64" cy="74" rx="20" ry="22" fill="#FEF3C7" />
          <ellipse cx="96" cy="74" rx="20" ry="22" fill="#FEF3C7" />
          {/* Huge Night Eyes with Golden Ring */}
          <circle cx="64" cy="74" r="14" fill="#F59E0B" />
          <circle cx="64" cy="74" r="9" fill="#0F172A" />
          <circle cx="67" cy="71" r="3" fill="#FFFFFF" />

          <circle cx="96" cy="74" r="14" fill="#F59E0B" />
          <circle cx="96" cy="74" r="9" fill="#0F172A" />
          <circle cx="99" cy="71" r="3" fill="#FFFFFF" />

          {/* Sharp Little Curved Beak */}
          <polygon points="76,82 84,82 80,94" fill="#D97706" />
          {/* Feather Patterns on Chest */}
          <path d="M68 108 Q80 114 92 108" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M72 118 Q80 124 88 118" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'wolf':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pointy Wolf Ears */}
          <polygon points="46,65 34,26 64,48" fill="#475569" />
          <polygon points="48,60 38,34 60,50" fill="#F87171" opacity="0.7" />
          <polygon points="114,65 126,26 96,48" fill="#475569" />
          <polygon points="112,60 122,34 100,50" fill="#F87171" opacity="0.7" />
          {/* Head */}
          <ellipse cx="80" cy="85" rx="42" ry="40" fill="#64748B" />
          {/* Cheek Ruffs */}
          <polygon points="38,85 24,95 40,105" fill="#64748B" />
          <polygon points="122,85 136,95 120,105" fill="#64748B" />
          {/* Pale Muzzle & Inner Face */}
          <path d="M62 76 Q80 66 98 76 L92 110 Q80 118 68 110 Z" fill="#F1F5F9" />
          {/* Golden Amber Eyes */}
          <circle cx="65" cy="76" r="6" fill="#F59E0B" />
          <circle cx="65" cy="76" r="3.5" fill="#0F172A" />
          <circle cx="66" cy="74.5" r="1" fill="#FFFFFF" />
          <circle cx="95" cy="76" r="6" fill="#F59E0B" />
          <circle cx="95" cy="76" r="3.5" fill="#0F172A" />
          <circle cx="96" cy="74.5" r="1" fill="#FFFFFF" />
          {/* Nose */}
          <ellipse cx="80" cy="98" rx="7" ry="5" fill="#1E293B" />
          <path d="M75 106 Q80 110 85 106" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'dolphin':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Water Splash background */}
          <circle cx="45" cy="115" r="5" fill="#93C5FD" />
          <circle cx="115" cy="118" r="4" fill="#93C5FD" />
          {/* Dorsal Fin */}
          <path d="M70 45 C78 28 92 34 88 56 Z" fill="#0284C7" />
          {/* Smooth Leaping Body */}
          <path d="M30 105 C35 70 70 48 115 62 C135 68 142 82 135 94 C120 112 85 118 45 110 Z" fill="#38BDF8" />
          {/* White Belly */}
          <path d="M48 108 C75 114 105 108 126 94 C112 104 85 112 48 108 Z" fill="#FFFFFF" />
          {/* Flippers */}
          <path d="M78 95 C86 112 98 118 102 110 C98 98 90 92 78 95 Z" fill="#0284C7" />
          {/* Playful Snout / Beak */}
          <ellipse cx="128" cy="80" rx="14" ry="8" fill="#38BDF8" />
          <path d="M120 83 Q132 86 138 82" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" />
          {/* Sparkling Eye */}
          <circle cx="110" cy="74" r="5" fill="#0F172A" />
          <circle cx="112" cy="72" r="1.5" fill="#FFFFFF" />
          {/* Blowhole */}
          <ellipse cx="85" cy="56" rx="3" ry="1.5" fill="#0369A1" />
        </svg>
      );

    case 'duck':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shiny Emerald Green Head */}
          <circle cx="75" cy="65" r="28" fill="#047857" />
          {/* White Ring Collar */}
          <path d="M62 88 Q75 94 88 88" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          {/* Brown Chubby Body */}
          <ellipse cx="90" cy="104" rx="38" ry="24" fill="#92400E" />
          {/* Wing */}
          <ellipse cx="88" cy="102" rx="24" ry="14" fill="#B45309" />
          <path d="M96 102 L108 102" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          {/* Bright Orange Bill */}
          <ellipse cx="44" cy="70" rx="16" ry="8" fill="#F97316" />
          <circle cx="48" cy="67" r="1.5" fill="#C2410C" />
          {/* Friendly Eye */}
          <circle cx="68" cy="58" r="5" fill="#0F172A" />
          <circle cx="70" cy="56" r="1.8" fill="#FFFFFF" />
          {/* Water ripples */}
          <path d="M40 130 Q70 135 100 130 Q130 135 150 130" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'cow':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Little Horns */}
          <path d="M46 50 C42 36 34 38 36 48" stroke="#D97706" strokeWidth="6" strokeLinecap="round" />
          <path d="M114 50 C118 36 126 38 124 48" stroke="#D97706" strokeWidth="6" strokeLinecap="round" />
          {/* Ears */}
          <ellipse cx="34" cy="64" rx="16" ry="8" fill="#FFFFFF" transform="rotate(-20 34 64)" />
          <ellipse cx="34" cy="64" rx="10" ry="4" fill="#F472B6" transform="rotate(-20 34 64)" />
          <ellipse cx="126" cy="64" rx="16" ry="8" fill="#FFFFFF" transform="rotate(20 126 64)" />
          <ellipse cx="126" cy="64" rx="10" ry="4" fill="#F472B6" transform="rotate(20 126 64)" />
          {/* Head */}
          <circle cx="80" cy="78" r="38" fill="#FFFFFF" />
          {/* Black Patches */}
          <path d="M60 48 Q74 54 70 70 Q56 68 60 48 Z" fill="#1E293B" />
          <path d="M96 52 Q112 60 110 76 Q92 78 96 52 Z" fill="#1E293B" />
          {/* Friendly Big Eyes with Lashes */}
          <circle cx="62" cy="74" r="5" fill="#1E293B" />
          <circle cx="64" cy="72" r="1.5" fill="#FFFFFF" />
          <circle cx="98" cy="74" r="5" fill="#1E293B" />
          <circle cx="100" cy="72" r="1.5" fill="#FFFFFF" />
          {/* Pink Big Muzzle */}
          <ellipse cx="80" cy="98" rx="26" ry="16" fill="#FBCFE8" />
          <ellipse cx="70" cy="96" rx="3.5" ry="5" fill="#BE185D" />
          <ellipse cx="90" cy="96" rx="3.5" ry="5" fill="#BE185D" />
          <path d="M72 105 Q80 110 88 105" stroke="#BE185D" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'rooster':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bright Red Comb on top */}
          <path d="M64 42 C62 30 72 32 75 40 C78 28 88 30 90 40 C94 30 104 34 100 48 Z" fill="#DC2626" />
          {/* Head & Neck */}
          <circle cx="80" cy="68" r="24" fill="#EA580C" />
          {/* Cheerful Golden Eyes */}
          <circle cx="74" cy="64" r="5" fill="#F59E0B" />
          <circle cx="74" cy="64" r="3" fill="#0F172A" />
          <circle cx="75" cy="63" r="1" fill="#FFFFFF" />
          {/* Yellow Beak */}
          <polygon points="56,66 40,74 58,80" fill="#FBBF24" />
          {/* Red Wattle below beak */}
          <path d="M56 80 C50 90 58 98 62 90 Z" fill="#DC2626" />
          {/* Colorful Plumage Body */}
          <ellipse cx="96" cy="98" rx="34" ry="24" fill="#047857" />
          {/* Arched Tail Feathers */}
          <path d="M120 90 C136 70 148 76 142 98 C148 85 152 95 140 108" stroke="#1D4ED8" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M116 94 C132 80 142 88 134 104" stroke="#059669" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'sheep':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fluffy Cloud Body */}
          <g fill="#F1F5F9">
            <circle cx="80" cy="80" r="32" />
            <circle cx="56" cy="70" r="22" />
            <circle cx="104" cy="70" r="22" />
            <circle cx="58" cy="98" r="22" />
            <circle cx="102" cy="98" r="22" />
            <circle cx="80" cy="108" r="20" />
            <circle cx="80" cy="52" r="18" />
          </g>
          {/* Droopy Ears */}
          <ellipse cx="46" cy="76" rx="12" ry="6" fill="#334155" transform="rotate(-30 46 76)" />
          <ellipse cx="114" cy="76" rx="12" ry="6" fill="#334155" transform="rotate(30 114 76)" />
          {/* Dark Soft Face */}
          <ellipse cx="80" cy="85" rx="22" ry="24" fill="#1E293B" />
          {/* Fluffy Wool Tuft on forehead */}
          <circle cx="80" cy="65" r="10" fill="#FFFFFF" />
          <circle cx="74" cy="66" r="8" fill="#FFFFFF" />
          <circle cx="86" cy="66" r="8" fill="#FFFFFF" />
          {/* Sweet Eyes */}
          <ellipse cx="72" cy="82" rx="3.5" ry="4" fill="#F8FAFC" />
          <ellipse cx="72" cy="82" rx="2" ry="2.5" fill="#0F172A" />
          <ellipse cx="88" cy="82" rx="3.5" ry="4" fill="#F8FAFC" />
          <ellipse cx="88" cy="82" rx="2" ry="2.5" fill="#0F172A" />
          {/* Pink Nose & Smile */}
          <polygon points="78,92 82,92 80,95" fill="#F472B6" />
          <path d="M76 98 Q80 102 84 98" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'bear':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Round Ears */}
          <circle cx="46" cy="48" r="16" fill="#78350F" />
          <circle cx="46" cy="48" r="9" fill="#FDE68A" />
          <circle cx="114" cy="48" r="16" fill="#78350F" />
          <circle cx="114" cy="48" r="9" fill="#FDE68A" />
          {/* Big Teddy Head */}
          <circle cx="80" cy="84" r="44" fill="#92400E" />
          {/* Eyes */}
          <circle cx="64" cy="74" r="6" fill="#1E293B" />
          <circle cx="66" cy="72" r="2" fill="#FFFFFF" />
          <circle cx="96" cy="74" r="6" fill="#1E293B" />
          <circle cx="98" cy="72" r="2" fill="#FFFFFF" />
          {/* Friendly Muzzle */}
          <ellipse cx="80" cy="96" rx="24" ry="18" fill="#FEF3C7" />
          <polygon points="73,88 87,88 80,97" fill="#451A03" />
          <path d="M74 102 Q80 108 86 102" stroke="#451A03" strokeWidth="2.8" strokeLinecap="round" />
          {/* Cheeks */}
          <circle cx="56" cy="94" r="5" fill="#F87171" opacity="0.4" />
          <circle cx="104" cy="94" r="5" fill="#F87171" opacity="0.4" />
        </svg>
      );

    case 'snake':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Coiled Vibrant Green Body */}
          <path d="M40 120 C40 135 75 140 105 130 C135 120 135 95 110 88 C80 80 50 90 60 110 C70 125 100 120 110 112" stroke="#16A34A" strokeWidth="18" strokeLinecap="round" fill="none" />
          {/* Belly Pattern stripes */}
          <circle cx="80" cy="132" r="4" fill="#FDE047" />
          <circle cx="100" cy="126" r="4" fill="#FDE047" />
          <circle cx="120" cy="100" r="4" fill="#FDE047" />
          {/* Friendly Snake Head */}
          <ellipse cx="65" cy="62" rx="22" ry="18" fill="#22C55E" />
          {/* Big Cartoon Eyes */}
          <circle cx="58" cy="56" r="6" fill="#FEF08A" />
          <circle cx="58" cy="56" r="3.5" fill="#0F172A" />
          <circle cx="59" cy="54.5" r="1" fill="#FFFFFF" />
          <circle cx="74" cy="56" r="6" fill="#FEF08A" />
          <circle cx="74" cy="56" r="3.5" fill="#0F172A" />
          <circle cx="75" cy="54.5" r="1" fill="#FFFFFF" />
          {/* Cute Smile & Forked Red Tongue */}
          <path d="M58 68 Q66 73 74 68" stroke="#14532D" strokeWidth="2" strokeLinecap="round" />
          <path d="M66 72 L66 84 M66 84 L62 88 M66 84 L70 88" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'zebra':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ears with stripes */}
          <polygon points="48,56 40,24 64,46" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
          <polygon points="112,56 120,24 96,46" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
          {/* Spiky Mohawk Mane */}
          <path d="M72 26 L80 18 L88 26 L80 44 Z" fill="#0F172A" />
          {/* Head */}
          <circle cx="80" cy="80" r="42" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
          {/* Crisp Black Camouflage Stripes */}
          <path d="M45 74 L60 76 M42 86 L58 87 M46 96 L62 95" stroke="#0F172A" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M115 74 L100 76 M118 86 L102 87 M114 96 L98 95" stroke="#0F172A" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M80 42 L80 62" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
          {/* Eyes */}
          <circle cx="66" cy="74" r="6" fill="#0F172A" />
          <circle cx="68" cy="72" r="2" fill="#FFFFFF" />
          <circle cx="94" cy="74" r="6" fill="#0F172A" />
          <circle cx="96" cy="72" r="2" fill="#FFFFFF" />
          {/* Dark Charcoal Muzzle */}
          <ellipse cx="80" cy="100" rx="22" ry="14" fill="#334155" />
          <ellipse cx="72" cy="98" rx="2.5" ry="4" fill="#0F172A" />
          <ellipse cx="88" cy="98" rx="2.5" ry="4" fill="#0F172A" />
          <path d="M74 105 Q80 109 86 105" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'kangaroo':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Big Tall Perky Ears */}
          <polygon points="48,60 36,18 64,48" fill="#B45309" />
          <polygon points="50,56 42,28 60,48" fill="#FED7AA" />
          <polygon points="112,60 124,18 96,48" fill="#B45309" />
          <polygon points="110,56 118,28 100,48" fill="#FED7AA" />
          {/* Head & Body */}
          <circle cx="80" cy="80" r="38" fill="#D97706" />
          <ellipse cx="80" cy="116" rx="42" ry="26" fill="#B45309" />
          {/* Front Pouch */}
          <path d="M62 108 Q80 128 98 108" fill="#FEF3C7" stroke="#78350F" strokeWidth="2.5" />
          {/* Tiny Baby Joey peeking out */}
          <circle cx="80" cy="104" r="9" fill="#D97706" />
          <circle cx="77" cy="102" r="1.5" fill="#0F172A" />
          <circle cx="83" cy="102" r="1.5" fill="#0F172A" />
          {/* Eyes */}
          <circle cx="68" cy="74" r="5" fill="#1E293B" />
          <circle cx="70" cy="72" r="1.5" fill="#FFFFFF" />
          <circle cx="92" cy="74" r="5" fill="#1E293B" />
          <circle cx="94" cy="72" r="1.5" fill="#FFFFFF" />
          {/* Dark Snout */}
          <ellipse cx="80" cy="88" rx="8" ry="6" fill="#1E293B" />
          <path d="M76 95 Q80 98 84 95" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'parrot':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Red Crest on head */}
          <path d="M74 34 C76 20 86 22 84 36 C88 24 98 26 92 40" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Scarlet Head & Body */}
          <circle cx="78" cy="72" r="34" fill="#EF4444" />
          {/* Wing layers: Yellow & Blue */}
          <ellipse cx="98" cy="88" rx="28" ry="18" fill="#EAB308" transform="rotate(30 98 88)" />
          <ellipse cx="106" cy="98" rx="24" ry="14" fill="#2563EB" transform="rotate(35 106 98)" />
          {/* White Eye Patch */}
          <circle cx="68" cy="68" r="14" fill="#FFFFFF" />
          <circle cx="68" cy="68" r="5" fill="#0F172A" />
          <circle cx="70" cy="66" r="1.5" fill="#FFFFFF" />
          {/* Strong Hooked Beak */}
          <path d="M52 68 C42 70 32 80 40 92 C46 90 52 82 54 78 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
          <polygon points="46,80 38,90 48,88" fill="#1E293B" />
          {/* Tail Feathers */}
          <path d="M102 110 L128 140 L118 144 L96 116 Z" fill="#2563EB" />
          <path d="M96 112 L120 144 L112 146 L90 118 Z" fill="#EF4444" />
        </svg>
      );

    case 'hippo':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Little Cute Ears */}
          <circle cx="50" cy="52" r="12" fill="#64748B" />
          <circle cx="50" cy="52" r="6" fill="#FBCFE8" />
          <circle cx="110" cy="52" r="12" fill="#64748B" />
          <circle cx="110" cy="52" r="6" fill="#FBCFE8" />
          {/* Big Head */}
          <ellipse cx="80" cy="80" rx="38" ry="34" fill="#475569" />
          {/* Eyes perched up high */}
          <circle cx="62" cy="68" r="7" fill="#0F172A" />
          <circle cx="64" cy="66" r="2" fill="#FFFFFF" />
          <circle cx="98" cy="68" r="7" fill="#0F172A" />
          <circle cx="100" cy="66" r="2" fill="#FFFFFF" />
          {/* Giant Round Chubby Muzzle */}
          <ellipse cx="80" cy="102" rx="36" ry="24" fill="#64748B" />
          {/* Big Nostrils */}
          <circle cx="68" cy="96" r="5" fill="#1E293B" />
          <circle cx="92" cy="96" r="5" fill="#1E293B" />
          {/* Friendly Smile & Little Tooth */}
          <path d="M64 112 Q80 122 96 112" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <rect x="74" y="112" width="5" height="6" rx="1.5" fill="#FFFFFF" />
          <rect x="82" y="112" width="5" height="6" rx="1.5" fill="#FFFFFF" />
        </svg>
      );

    case 'crocodile':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Spiky Back Ridges */}
          <polygon points="40,65 50,50 60,65" fill="#166534" />
          <polygon points="65,60 75,45 85,60" fill="#166534" />
          <polygon points="90,62 100,48 110,62" fill="#166534" />
          {/* Armored Head & Long Snout */}
          <path d="M42 90 C42 70 70 65 110 72 C138 76 142 92 120 102 C85 115 50 110 42 90 Z" fill="#15803D" />
          {/* Yellow Alligator/Croc Eyes on Top */}
          <circle cx="70" cy="64" r="8" fill="#FACC15" />
          <ellipse cx="70" cy="64" rx="2.5" ry="6" fill="#0F172A" />
          <circle cx="92" cy="66" r="8" fill="#FACC15" />
          <ellipse cx="92" cy="66" rx="2.5" ry="6" fill="#0F172A" />
          {/* Snout Nostril Bump */}
          <circle cx="128" cy="80" r="3.5" fill="#166534" />
          {/* Big Zig-Zag Tooth Grin */}
          <path d="M70 94 L80 90 L90 95 L100 90 L110 95 L120 90 L130 92" stroke="#052E16" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Cute white teeth sticking out */}
          <polygon points="84,92 88,98 92,92" fill="#FFFFFF" />
          <polygon points="104,92 108,98 112,92" fill="#FFFFFF" />
        </svg>
      );

    case 'cat':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Triangle Pointy Ears */}
          <polygon points="44,60 36,24 64,46" fill="#F59E0B" />
          <polygon points="46,56 40,32 60,46" fill="#FBCFE8" />
          <polygon points="116,60 124,24 96,46" fill="#F59E0B" />
          <polygon points="114,56 120,32 100,46" fill="#FBCFE8" />
          {/* Ginger Head */}
          <circle cx="80" cy="82" r="42" fill="#FBBF24" />
          {/* Cute Forehead Stripes */}
          <path d="M80 46 L80 58 M72 50 L75 58 M88 50 L85 58" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
          {/* Big Adorable Eyes */}
          <ellipse cx="64" cy="76" rx="7" ry="8" fill="#10B981" />
          <ellipse cx="64" cy="76" rx="3.5" ry="6" fill="#0F172A" />
          <circle cx="66" cy="73" r="1.8" fill="#FFFFFF" />

          <ellipse cx="96" cy="76" rx="7" ry="8" fill="#10B981" />
          <ellipse cx="96" cy="76" rx="3.5" ry="6" fill="#0F172A" />
          <circle cx="98" cy="73" r="1.8" fill="#FFFFFF" />
          {/* Pink Nose & Whiskers */}
          <polygon points="76,88 84,88 80,94" fill="#F43F5E" />
          <path d="M74 97 Q80 102 86 97" stroke="#92400E" strokeWidth="2" strokeLinecap="round" />
          <line x1="48" y1="92" x2="32" y2="90" stroke="#92400E" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="48" y1="98" x2="34" y2="102" stroke="#92400E" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="112" y1="92" x2="128" y2="90" stroke="#92400E" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="112" y1="98" x2="126" y2="102" stroke="#92400E" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'dog':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Floppy Golden Ears */}
          <ellipse cx="36" cy="76" rx="14" ry="26" fill="#B45309" transform="rotate(15 36 76)" />
          <ellipse cx="124" cy="76" rx="14" ry="26" fill="#B45309" transform="rotate(-15 124 76)" />
          {/* Golden Retriever Head */}
          <circle cx="80" cy="80" r="42" fill="#FBBF24" />
          {/* Kind Warm Eyes */}
          <circle cx="64" cy="72" r="6" fill="#1E293B" />
          <circle cx="66" cy="70" r="2" fill="#FFFFFF" />
          <circle cx="96" cy="72" r="6" fill="#1E293B" />
          <circle cx="98" cy="70" r="2" fill="#FFFFFF" />
          {/* Pale Muzzle */}
          <ellipse cx="80" cy="94" rx="22" ry="16" fill="#FEF3C7" />
          <ellipse cx="80" cy="88" rx="8" ry="6" fill="#0F172A" />
          {/* Happy Open Mouth & Pink Tongue */}
          <path d="M72 96 Q80 102 88 96" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M76 98 C76 108 84 108 84 98 Z" fill="#F43F5E" />
          {/* Freckles */}
          <circle cx="66" cy="92" r="1.5" fill="#B45309" />
          <circle cx="70" cy="94" r="1.5" fill="#B45309" />
          <circle cx="90" cy="94" r="1.5" fill="#B45309" />
          <circle cx="94" cy="92" r="1.5" fill="#B45309" />
        </svg>
      );

    case 'horse':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Perky Ears */}
          <polygon points="54,50 48,22 68,40" fill="#9A3412" />
          <polygon points="106,50 112,22 92,40" fill="#9A3412" />
          {/* Flowing Mane */}
          <path d="M74 24 C80 14 86 14 90 26 C96 16 104 22 98 38" stroke="#431407" strokeWidth="5" strokeLinecap="round" fill="none" />
          {/* Head */}
          <ellipse cx="80" cy="76" rx="34" ry="40" fill="#C2410C" />
          {/* White Star Blaze on Forehead */}
          <polygon points="80,50 83,58 90,60 84,65 86,72 80,68 74,72 76,65 70,60 77,58" fill="#FFFFFF" />
          {/* Big Gentle Eyes */}
          <circle cx="62" cy="72" r="5" fill="#0F172A" />
          <circle cx="64" cy="70" r="1.5" fill="#FFFFFF" />
          <circle cx="98" cy="72" r="5" fill="#0F172A" />
          <circle cx="100" cy="70" r="1.5" fill="#FFFFFF" />
          {/* Soft Muzzle */}
          <ellipse cx="80" cy="104" rx="22" ry="14" fill="#9A3412" />
          <ellipse cx="72" cy="102" rx="3" ry="5" fill="#431407" />
          <ellipse cx="88" cy="102" rx="3" ry="5" fill="#431407" />
          <path d="M74 110 Q80 114 86 110" stroke="#431407" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'bee':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Translucent Fluttering Wings */}
          <ellipse cx="64" cy="46" rx="18" ry="24" fill="#BAE6FD" opacity="0.8" transform="rotate(-30 64 46)" />
          <ellipse cx="96" cy="46" rx="18" ry="24" fill="#BAE6FD" opacity="0.8" transform="rotate(30 96 46)" />
          {/* Cute Antennae with little balls */}
          <path d="M70 60 Q60 42 56 46" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="56" cy="46" r="3" fill="#0F172A" />
          <path d="M90 60 Q100 42 104 46" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="104" cy="46" r="3" fill="#0F172A" />
          {/* Plump Striped Bee Body */}
          <ellipse cx="80" cy="90" rx="36" ry="42" fill="#FACC15" />
          {/* Black Fuzzy Stripes */}
          <path d="M46 80 Q80 88 114 80" stroke="#0F172A" strokeWidth="7" strokeLinecap="round" fill="none" />
          <path d="M46 100 Q80 108 114 100" stroke="#0F172A" strokeWidth="7" strokeLinecap="round" fill="none" />
          {/* Stinger */}
          <polygon points="76,132 84,132 80,140" fill="#0F172A" />
          {/* Cheerful Eyes */}
          <circle cx="68" cy="70" r="5" fill="#0F172A" />
          <circle cx="70" cy="68" r="1.8" fill="#FFFFFF" />
          <circle cx="92" cy="70" r="5" fill="#0F172A" />
          <circle cx="94" cy="68" r="1.8" fill="#FFFFFF" />
          {/* Rosy Cheeks & Smile */}
          <circle cx="60" cy="78" r="4" fill="#F472B6" opacity="0.6" />
          <circle cx="100" cy="78" r="4" fill="#F472B6" opacity="0.6" />
          <path d="M74 76 Q80 82 86 76" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'penguin':
      return (
        <svg viewBox="0 0 160 160" className={`${className} ${animClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Black Tuxedo Body & Head */}
          <ellipse cx="80" cy="85" rx="38" ry="46" fill="#0F172A" />
          {/* White Belly */}
          <ellipse cx="80" cy="96" rx="24" ry="32" fill="#FFFFFF" />
          {/* Golden Yellow Neck Flashes */}
          <ellipse cx="60" cy="68" rx="8" ry="12" fill="#F59E0B" />
          <ellipse cx="100" cy="68" rx="8" ry="12" fill="#F59E0B" />
          {/* Flipper Wings */}
          <ellipse cx="40" cy="90" rx="8" ry="24" fill="#0F172A" transform="rotate(20 40 90)" />
          <ellipse cx="120" cy="90" rx="8" ry="24" fill="#0F172A" transform="rotate(-20 120 90)" />
          {/* Sweet Eyes */}
          <circle cx="68" cy="64" r="5" fill="#0F172A" />
          <circle cx="70" cy="62" r="1.8" fill="#FFFFFF" />
          <circle cx="92" cy="64" r="5" fill="#0F172A" />
          <circle cx="94" cy="62" r="1.8" fill="#FFFFFF" />
          {/* Orange Beak */}
          <polygon points="74,70 86,70 80,82" fill="#EA580C" />
          {/* Orange Webbed Feet */}
          <ellipse cx="66" cy="132" rx="12" ry="6" fill="#EA580C" />
          <ellipse cx="94" cy="132" rx="12" ry="6" fill="#EA580C" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="50" fill="#22C55E" />
          <circle cx="65" cy="72" r="6" fill="#FFFFFF" />
          <circle cx="95" cy="72" r="6" fill="#FFFFFF" />
          <path d="M65 92 Q80 108 95 92" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
  }
};
