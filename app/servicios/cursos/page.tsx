'use client';

import BackButton from '@/components/ui/BackButton';

export default function CursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#212121] via-[#121212] to-[#212121] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-5xl space-y-12">
        <h1 className="text-5xl font-extrabold text-[#ec4d58] mb-4 text-center">
          Nuestros Cursos
        </h1>

        {/* Curso 1 */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#ec4d58]/10 shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-white text-center">Introducción y Estrategia para Ganar Dinero con Criptoactivos</h2>
          <h3 className="text-lg text-gray-300 text-center">Aprende los Fundamentos y Diseña tu Estrategia Integral</h3>
          <p className="text-gray-300 text-base leading-relaxed text-center">
            Aprende los fundamentos del blockchain, las criptomonedas principales, cómo usar exchanges, estrategias de trading e inversión, y cómo crear una estrategia completa para ganar dinero con criptoactivos.
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU"
              className="px-6 py-2 rounded-lg border border-[#ec4d58] text-[#ec4d58] font-semibold transition-all duration-300 hover:bg-[#ec4d58] hover:text-black hover:shadow-[0_0_15px_#ec4d58]"
            >
              Ver Curso
            </a>
          </div>
        </div>

        {/* Curso 2 */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#ec4d58]/10 shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-white text-center">El Lado Oscuro de las Finanzas</h2>
          <h3 className="text-lg text-gray-300 text-center">Construye una Estrategia de Trading Digna de un Profesional desde Cero</h3>
          <p className="text-gray-300 text-base leading-relaxed text-center">
            Domina los fundamentos del trading, gestión del riesgo, mercados de futuros, análisis técnico y avanzado, y técnicas profesionales para tomar decisiones estratégicas en los mercados financieros.
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU"
              className="px-6 py-2 rounded-lg border border-[#ec4d58] text-[#ec4d58] font-semibold transition-all duration-300 hover:bg-[#ec4d58] hover:text-black hover:shadow-[0_0_15px_#ec4d58]"
            >
              Ver Curso
            </a>
          </div>
        </div>

        {/* Curso 3 */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#ec4d58]/10 shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-white text-center">Curso Criptomonedas (De 0 a Pro)</h2>

          <ul className="space-y-2 text-gray-300 text-base leading-relaxed">
            <li>✅ Acceso inmediato a formación grabada.</li>
            <li>✅ 15 días prueba.</li>
            <li>✅ A partir del día 16 se desbloquea el 100% del contenido.</li>
            <li>✅ Videos exclusivos (las claves que marcan la diferencia entre ganar y perder, y que jamás encontrarás en YouTube).</li>
            <li>✅ Acceso ilimitado a plataforma.</li>
            <li>✅ Clases en directo periódicamente.</li>
            <li>✅ Resolución de dudas.</li>
          </ul>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">BONUS INCLUIDOS:</h3>
            <ul className="space-y-2 text-gray-300 text-base leading-relaxed">
              <li>🎁 Curso completo Introducción a las cripto (2 horas)</li>
              <li>🎁 Curso Psicología del trading (3.5 horas)</li>
              <li>🎁 BONUS: Master class (x2)</li>
              <li>🎁 BONUS: Resúmenes de libros (x14)</li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 justify-center mt-6">
            <BackButton />
            <a
              href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU"
              className="px-6 py-2 rounded-lg border border-[#ec4d58] text-[#ec4d58] font-semibold transition-all duration-300 hover:bg-[#ec4d58] hover:text-black hover:shadow-[0_0_15px_#ec4d58]"
            >
              Acceder al Curso
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
