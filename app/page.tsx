// HomePage.tsx
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function HomePage() {
  const [showZoomexDetails, setShowZoomexDetails] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      '.zwtc-header, .zwtc-description, .zwtc-text, .zwtc-benefits, .zwtc-dates, .key-points, .video-guide, .opportunity-section'
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-b from-[#212121] via-[#121212] to-[#121212] overflow-x-hidden relative z-0">
      <div className="relative">
        <main className="text-white flex flex-col md:flex-row justify-center items-start p-4 md:p-[60px_30px_30px] gap-6 md:gap-12 h-full relative overflow-y-auto scrollbar-thin scrollbar-thumb-[#ec4d58] scrollbar-track-[#121212]">

          {/* Izquierda: Logo + botones */}
          <div className="w-full md:w-1/2 max-w-[800px] px-4 md:px-0 flex flex-col items-center mt-4 md:mt-8 gap-6">
            <div className="flex justify-center items-center mx-auto max-w-[300px] md:max-w-[500px]">
              <Image
                src="/logo.png"
                alt="Crypto Force Logo"
                className="w-full h-auto filter drop-shadow-md hover:scale-101 transition-transform duration-300"
                width={700}
                height={400}
                priority
              />
            </div>

            <div className="flex flex-col gap-3 md:gap-4 w-full max-w-[400px]">
              <a
                href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#ec4d58] text-white rounded-lg hover:bg-[#d43d47] transition-all duration-300 text-base font-semibold"
              >
                <i className="fas fa-rocket"></i> Comienza tu Viaje Galáctico
              </a>
              <a
                href="/login"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#3a3a3a] transition-all duration-300 text-base font-semibold"
              >
                <i className="fas fa-home"></i> Accede a tu Cuenta
              </a>
            </div>
          </div>

          {/* Derecha: Card premium estilo Sith */}
          <div className="w-full md:w-1/2 max-w-[700px] px-4 md:px-0 mt-4 md:mt-8 flex flex-col gap-6">
            <div className="relative w-full p-[2px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 animate-light-wave-red z-0"></div>
              <div className="relative z-10 bg-[#1a1a1a] rounded-2xl p-8 border border-[#ec4d58]/10 shadow-md">
                <h2 className="text-3xl font-extrabold text-[#ec4d58] mb-4 text-center">
                  ⚠️ CURSO PREMIUM -40% OFF ⚠️
                </h2>
                <ul className="text-gray-300 space-y-2 text-sm leading-snug">
                  <li className="flex gap-2"><i className="fas fa-check text-green-400 mt-1"></i>Acceso inmediato a formación grabada.</li>
                  <li className="flex gap-2"><i className="fas fa-check text-green-400 mt-1"></i>15 días de período de prueba.</li>
                  <li className="flex gap-2"><i className="fas fa-check text-green-400 mt-1"></i>Videos exclusivos con las claves que marcan la diferencia.</li>
                  <li className="flex gap-2"><i className="fas fa-check text-green-400 mt-1"></i>Resolución de dudas personalizada.</li>
                  <li className="flex gap-2"><i className="fas fa-check text-green-400 mt-1"></i>Clases en vivo periódicas.</li>
                  <li className="flex gap-2"><i className="fas fa-check text-green-400 mt-1"></i>100% del contenido se desbloquea el día 16.</li>
                  <li className="flex gap-2"><i className="fas fa-check text-green-400 mt-1"></i>Acceso ilimitado a la plataforma.</li>
                </ul>
                <h3 className="text-[#ffd700] font-bold mt-4 mb-2">🎁 BONUS INCLUIDOS:</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><i className="fas fa-book text-yellow-400 mt-1"></i>Curso completo Introducción a las cripto</li>
                  <li className="flex gap-2"><i className="fas fa-book text-yellow-400 mt-1"></i>Master class exclusivas</li>
                  <li className="flex gap-2"><i className="fas fa-book text-yellow-400 mt-1"></i>Curso Psicología del trading</li>
                  <li className="flex gap-2"><i className="fas fa-book text-yellow-400 mt-1"></i>Resúmenes de libros especializados</li>
                </ul>
                <div className="mt-4 text-center space-y-2">
                  <span className="text-gray-400 line-through text-sm">450€</span>
                  <div className="text-[#ec4d58] text-3xl font-bold">270€</div>
                  <span className="text-gray-400 text-sm">Código: 40%OFF</span>
                  <button className="w-full mt-3 py-2.5 bg-[#ec4d58] text-white font-bold rounded-lg hover:bg-[#d43d47] transition-colors text-base">
                    🚀 INSCRÍBETE AHORA
                  </button>
                  <button className="w-full py-2.5 bg-[#2a2a2a] text-white font-bold rounded-lg hover:bg-[#3a3a3a] transition-colors text-base">
                    📋 VER TEMARIO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* ZOOMEX SECCIÓN ACTUALIZADA */}
        <div className="w-full px-4 md:px-12 mt-10 mb-12">
          <div className="relative w-full max-w-[850px] mx-auto p-[2px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 animate-light-wave-cyan z-0"></div>
            <div className="relative z-10 bg-[#121212] border border-[#10d7be]/10 rounded-2xl px-6 py-6 flex flex-col gap-4 shadow-xl transition-all duration-300">
              <div className="flex flex-col text-left">
              <p className="text-base text-gray-300">
                Tenemos una <strong className="text-[#10d7be]">alianza explosiva</strong> con{' '}
                <Image
                  src="/images/zoomex-logo.png"
                  alt="Zoomex Logo"
                  width={100}
                  height={28}
                  className="inline-block align-middle -ml-2 w-auto h-auto"
                  priority
                />
              </p>

                <p className="text-base text-gray-300">
                  Haz click{' '}
                  <button
                    onClick={() => setShowZoomexDetails(!showZoomexDetails)}
                    className="text-[#10d7be] font-semibold underline underline-offset-2 cursor-pointer"
                    aria-expanded={showZoomexDetails}
                    aria-controls="zoomex-details"
                  >
                    aquí
                  </button>{' '}
                  para conocer los regalos que te esperan 👇
                </p>
              </div>

              <div
                id="zoomex-details"
                className={clsx(
                  'transition-all duration-700 ease-in-out overflow-hidden',
                  showZoomexDetails ? 'opacity-100 max-h-[900px]' : 'opacity-0 max-h-0'
                )}
              >
                <div className="text-sm md:text-base text-gray-300 text-left mt-2">
                  <p className="mb-3">
                    💸 <strong className="text-[#10d7be]">¡Recibe hasta el 50% de tu primer depósito!</strong> Si depositas <strong>100 USDT</strong>, te reembolsan <strong>50 USDT</strong>. Sin letra chica.
                  </p>
                  <p className="mb-3">
                    🏆 Y si haces tu primer trade por 100 USDT, ganas <strong className="text-[#10d7be]">otros 50 USDT</strong>. ¡Doble recompensa!
                  </p>
                  <p className="mb-3">
                    📱 Solo necesitas verificar tu número móvil. Es fácil y rápido.
                  </p>
                  <p className="mb-3 text-sm text-gray-400">
                    🧠 Las recompensas se entregan cada jueves. Lee las reglas en el Centro de Recompensas.
                  </p>
                  <a
                    href="https://partner.zoomex.com/CryptoForce50"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-[#10d7be] text-white font-semibold rounded-lg hover:bg-[#3bb2f6] transition-colors duration-300 text-lg w-full"
                  >
                    🚀 Abre tu cuenta y reclama tus 100 USDT
                  </a>
                </div>
              </div>
            </div>
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
        .animate-light-wave-red {
          background: radial-gradient(
            circle at 30% 50%,
            rgba(236, 77, 88, 0.1),
            transparent 60%
          );
          animation: lightWave 6s ease-in-out infinite;
        }
        .animate-light-wave-cyan {
          background: radial-gradient(
            circle at 30% 50%,
            rgba(16, 215, 190, 0.15),
            transparent 60%
          );
          animation: lightWave 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
