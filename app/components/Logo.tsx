interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon/Symbol */}
      <div className="relative">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer ring */}
          <circle cx="20" cy="20" r="18" stroke="#fbbf24" strokeWidth="2" fill="#7c3aed"/>
          
          {/* Inner star */}
          <path 
            d="M20 8L22.5 15.5L30 16L24.5 20.5L26.5 28L20 23.5L13.5 28L15.5 20.5L10 16L17.5 15.5L20 8Z" 
            fill="#fbbf24"
          />
          
          {/* Number 5 */}
          <text 
            x="20" 
            y="26" 
            fontFamily="Arial Black, sans-serif" 
            fontSize="16" 
            fontWeight="900"
            fill="#ffffff" 
            textAnchor="middle"
          >
            5
          </text>
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-0.5">
          <span className="text-yellow-400 font-black text-xl sm:text-2xl">5top</span>
          <span className="text-white font-black text-xl sm:text-2xl">casinos</span>
        </div>
        <span className="text-yellow-400 font-bold text-xs tracking-wider uppercase">UK</span>
      </div>
    </div>
  );
}

