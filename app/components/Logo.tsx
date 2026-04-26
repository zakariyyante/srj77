import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-9 h-9 flex-shrink-0">
        <Image
          src="/logo-mark.png"
          alt="UK Casino Win logo mark — gold crown and spade"
          width={72}
          height={72}
          className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(244,185,66,0.35)]"
          priority
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-tight vd-gold-text">
          UKCasinoWin
        </span>
        <span
          className="text-[9px] font-bold tracking-[0.3em] uppercase"
          style={{ color: 'rgba(244,185,66,0.45)' }}
        >
          .com
        </span>
      </div>
    </div>
  );
}
