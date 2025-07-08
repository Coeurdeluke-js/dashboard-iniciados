'use client';

import Link from 'next/link';

const servicios = [
  {
    icon: "fas fa-user-graduate",
    title: "Mentoría",
    description: "Recibe orientación personalizada de traders expertos que te guiarán en tu camino hacia el éxito en el trading de criptomonedas.",
    link: "/servicios/mentoria",
    buttonText: "Más Información",
  },
  {
    icon: "fas fa-book-open",
    title: "Cursos",
    description: "Accede a nuestro contenido educativo completo sobre trading, análisis técnico y gestión de riesgos.",
    link: "/servicios/cursos",
    buttonText: "Ver Cursos",
  },
  {
    icon: "fas fa-chart-line",
    title: "Señales",
    description: "Recibe alertas y análisis de trading en tiempo real para aprovechar las mejores oportunidades del mercado.",
    link: "/servicios/signals",
    buttonText: "Obtener Señales",
  },
  {
    icon: "fas fa-robot",
    title: "Bot de Trading",
    description: "Trading automático con rentabilidad dinámica de entre el 10% y 20% mensual. Funcionamiento las 24 horas, los 7 días de la semana. Mínimo 500 USDT. Descuentos en comisiones según nivel de fondeo.",
    link: "/servicios/bot",
    buttonText: "Activar Bot",
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-[#212121] via-[#121212] to-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Nuestros Servicios</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {servicios.map((servicio, index) => (
            <div key={index} className="relative p-[2px] rounded-2xl overflow-hidden h-full">
              <div className="absolute inset-0 animate-light-wave z-0"></div>

              <div className="relative z-10 bg-[#1a1a1a] rounded-2xl p-6 border border-[#ec4d58]/10 shadow-md flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">{servicio.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">{servicio.description}</p>
                </div>
                <Link
                  href={servicio.link}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm border border-[#ec4d58] text-[#ec4d58] rounded-lg font-semibold transition-all duration-300 hover:bg-[#ec4d58] hover:text-black self-start"
                >
                  <span>{servicio.buttonText}</span>
                  <i className={`${servicio.icon}`}></i>
                </Link>
              </div>
            </div>
          ))}
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
