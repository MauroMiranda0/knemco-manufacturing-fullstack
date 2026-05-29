// Icon set — original line icons
const Icon = ({ name, size = 22 }) => {
  const s = size;
  const stroke = "currentColor";
  const sw = 1.5;
  switch (name) {
    case "precision":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
        </svg>
      );
    case "layer":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 L21 7.5 L12 12 L3 7.5 Z" />
          <path d="M3 12 L12 16.5 L21 12" />
          <path d="M3 16.5 L12 21 L21 16.5" />
        </svg>
      );
    case "speed":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 16 A8 8 0 0 1 20 16" />
          <line x1="12" y1="16" x2="16" y2="9" />
          <circle cx="12" cy="16" r="1.2" fill="currentColor" />
        </svg>
      );
    case "temp":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 14 V5 a2 2 0 1 1 4 0 V14 a3.5 3.5 0 1 1 -4 0 Z" />
          <circle cx="12" cy="16.5" r="1.5" fill="currentColor" stroke="none" />
          <line x1="16" y1="6" x2="19" y2="6" />
          <line x1="16" y1="9" x2="18" y2="9" />
        </svg>
      );
    case "spool":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="12" r="6" />
          <circle cx="9" cy="12" r="2" />
          <path d="M15 12 Q19 12 19 8 Q19 5 16 5" />
        </svg>
      );
    case "clock":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <polyline points="12,7 12,12 16,14" />
        </svg>
      );
    case "cube":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 L21 7.5 V16.5 L12 21 L3 16.5 V7.5 Z" />
          <path d="M3 7.5 L12 12 L21 7.5" />
          <line x1="12" y1="12" x2="12" y2="21" />
        </svg>
      );
    case "star":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
          <polygon points="12,3 14.5,9.5 21,10 16,14.5 17.5,21 12,17.5 6.5,21 8,14.5 3,10 9.5,9.5" />
        </svg>
      );
    case "replay":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12 A9 9 0 1 0 6 6" />
          <polyline points="3,3 3,7 7,7" />
        </svg>
      );
    default: return null;
  }
};

window.Icon = Icon;
