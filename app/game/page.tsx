'use client';

import { useRouter } from 'next/navigation';

export default function GamePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#212121] via-[#121212] to-[#212121] flex items-center justify-center px-4 py-20">
      <div className="relative w-full max-w-3xl p-[2px] rounded-2xl overflow-hidden">
        {/* Animated light sweep */}
        <div className="absolute inset-0 animate-light-wave z-0"></div>

        {/* Solid dark card content */}
        <div className="relative z-10 bg-[#1a1a1a] rounded-2xl p-10 border border-[#ec4d58]/10 shadow-md">
          <h1 className="text-5xl font-extrabold text-[#ec4d58] mb-6 text-center drop-shadow-[0_0_10px_rgba(236,77,88,0.6)]">
            The Sith Clash
          </h1>

          <p className="text-lg text-white text-center italic mb-8">
            El lado oscuro se está codificando...
          </p>

          <div className="text-gray-300 space-y-5 text-base leading-relaxed">
            <p>
              <strong className="text-white">The Sith Clash</strong> es un juego de combate gamificado que forma parte integral del ecosistema <strong className="text-[#ec4d58]">Crypto Force</strong>.
            </p>
            <p>
              A través del juego, los usuarios podrán <strong>aprender</strong>, <strong>competir</strong> y <strong>ganar tokens</strong> que pueden canjearse por <strong>productos, clases, mentorías</strong> y más.
            </p>
            <p>
              Actualmente, nuestro equipo de desarrollo está trabajando intensamente para ofrecer una experiencia inmersiva, estratégica y educativa, que potencie el crecimiento individual y colectivo dentro de la comunidad.
            </p>
            <p>
              Este juego no solo busca entretener, sino ser una herramienta poderosa para integrar <strong>educación financiera, formación en criptomonedas</strong> y <strong>espíritu colaborativo</strong>.
            </p>
            <p>
              Gracias por tu paciencia y por ser parte del proceso de construcción de esta experiencia única.
            </p>
          </div>

          <p className="text-center text-gray-400 mt-10">
            ¡Pronto sabrás si eres digno del poder oscuro!
          </p>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => router.back()}
              className="px-6 py-2 rounded-lg border border-[#ec4d58] text-[#ec4d58] font-semibold transition-all duration-300 hover:bg-[#ec4d58] hover:text-black hover:shadow-[0_0_15px_#ec4d58]"
            >
              Volver atrás
            </button>
          </div>
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
