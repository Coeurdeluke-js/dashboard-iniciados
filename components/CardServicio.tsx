'use client';

import Link from 'next/link';

interface CardServicioProps {
  icon?: string;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

export default function CardServicio({
  icon,
  title,
  description,
  link,
  buttonText,
}: CardServicioProps) {
  return (
    <div className="relative w-full p-[2px] rounded-2xl overflow-hidden">
      {/* Animated light sweep */}
      <div className="absolute inset-0 animate-light-wave z-0"></div>

      {/* Solid dark card content */}
      <div className="relative z-10 bg-[#1a1a1a] rounded-2xl p-8 border border-[#ec4d58]/10 shadow-md">
        <h3 className="text-2xl font-extrabold text-white mb-4 text-center">
          {title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed text-center">{description}</p>

        <div className="flex justify-center mt-6">
          <Link
            href={link}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-[#ec4d58] text-[#ec4d58] font-semibold transition-all duration-300 hover:bg-[#ec4d58] hover:text-black text-sm"
          >
            <span>{buttonText}</span>
            {icon && <i className={`${icon} text-sm`} />}
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes lightWave {
          0% {
            transform: translateX(-100%);
            opacity: 0.1;
          }
          50% {
            transform: translateX(0%);
            opacity: 0.2;
          }
          100% {
            transform: translateX(100%);
            opacity: 0.1;
          }
        }

        .animate-light-wave {
          background: radial-gradient(
            circle at 30% 50%,
            rgba(236, 77, 88, 0.1),
            transparent 60%
          );
          animation: lightWave 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
