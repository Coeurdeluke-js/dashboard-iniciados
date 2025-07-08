export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#212121] via-[#121212] to-[#212121] overflow-x-hidden pt-24 px-4">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Nuestro Equipo</h1>
        <p className="text-gray-300 text-center text-lg mb-12 max-w-3xl mx-auto">
          Somos un grupo diverso de profesionales apasionados por la educación financiera y el trading, unidos por el compromiso de empoderar a otros en su viaje hacia la independencia financiera.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] border border-[#ec4d58]/10 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
            <i className="fas fa-chalkboard-user text-4xl text-[#ec4d58] mb-4 block"></i>
            <h3 className="text-xl font-bold text-white mb-3">Educadores Financieros</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nuestros educadores combinan años de experiencia en los mercados financieros con una pasión por la enseñanza. Cada uno aporta su experiencia única en diferentes aspectos del trading.
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#ec4d58]/10 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
            <i className="fas fa-chart-line text-4xl text-[#ec4d58] mb-4 block"></i>
            <h3 className="text-xl font-bold text-white mb-3">Analistas de Mercado</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Contamos con analistas dedicados que monitorean constantemente los mercados globales, identificando oportunidades y tendencias, desde el análisis fundamental hasta el técnico.
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#ec4d58]/10 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
            <i className="fas fa-user-graduate text-4xl text-[#ec4d58] mb-4 block"></i>
            <h3 className="text-xl font-bold text-white mb-3">Mentores</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nuestros mentores son traders activos que han recorrido el camino del aprendizaje y ahora comparten sus conocimientos, ofreciendo apoyo personalizado.
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#ec4d58]/10 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
            <i className="fas fa-headset text-4xl text-[#ec4d58] mb-4 block"></i>
            <h3 className="text-xl font-bold text-white mb-3">Soporte al Cliente</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Equipo dedicado a garantizar que tu experiencia de aprendizaje sea óptima, brindando asistencia y resolución de dudas de manera oportuna.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
