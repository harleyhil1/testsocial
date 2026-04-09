// Circular geometric logo approximating the AZMA Academy Five Fortunes symbol
export default function Logo({ size = 36, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Montessori Academy logo"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="47" stroke={color} strokeWidth="4" fill="none" />
      {/* Inner circle */}
      <circle cx="50" cy="50" r="33" stroke={color} strokeWidth="3" fill="none" />
      {/* Inner-most circle */}
      <circle cx="50" cy="50" r="10" stroke={color} strokeWidth="3" fill="none" />
      {/* Spokes — 8 directions */}
      <line x1="50" y1="17" x2="50" y2="40" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="60" x2="50" y2="83" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="17" y1="50" x2="40" y2="50" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="50" x2="83" y2="50" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Diagonal spokes */}
      <line x1="26.9" y1="26.9" x2="42.9" y2="42.9" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="57.1" y1="57.1" x2="73.1" y2="73.1" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="73.1" y1="26.9" x2="57.1" y2="42.9" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="42.9" y1="57.1" x2="26.9" y2="73.1" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
