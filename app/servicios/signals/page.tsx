'use client';
import BackButton from '@/components/ui/BackButton';

export default function SignalsPage() {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 bg-[#121212]">
      <div className="max-w-4xl mx-auto py-8">
        <section className="space-y-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Señales de Trading
          </h1>

          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-md border border-[#ec4d58]/10 space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Señales Precisas para Maximizar tus Ganancias
            </h2>

            <p className="text-gray-300">
              En Crypto Force, entendemos que el mercado puede ser un campo de batalla implacable.
              Nuestro canal de señales está diseñado para brindarte una ventaja estratégica,
              proporcionándote alertas precisas y oportunidades de trading de alta probabilidad.
            </p>

            <p className="text-gray-300">
              Cada señal que compartimos es el resultado de un análisis técnico y fundamental detallado,
              combinado con estrategias de gestión de riesgo avanzadas.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                💡 Beneficios de nuestras señales de trading
              </h3>
              <ul className="space-y-2 text-gray-300 list-inside list-disc">
                <li>
                  <strong className="text-white">Análisis profesional:</strong> Recibe señales basadas en estudios avanzados de price action, volumen y sentimiento del mercado.
                </li>
                <li>
                  <strong className="text-white">Ejecución rápida:</strong> Accede a alertas en tiempo real con puntos de entrada, stop-loss y take-profit claros.
                </li>
                <li>
                  <strong className="text-white">Aprendizaje continuo:</strong> No solo operas, también entiendes la lógica detrás de cada decisión para mejorar tu trading.
                </li>
                <li>
                  <strong className="text-white">Optimización del tiempo:</strong> No necesitas pasar horas analizando gráficos; nosotros hacemos el trabajo pesado por ti.
                </li>
                <li>
                  <strong className="text-white">Adaptabilidad y precisión:</strong> Ajustamos nuestras señales en función de la volatilidad y las condiciones cambiantes del mercado.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                ⚔️ ¿Por qué confiar en las señales de Crypto Force?
              </h3>
              <ul className="space-y-2 text-gray-300 list-inside list-disc">
                <li>
                  <strong className="text-white">Estrategia de combate:</strong> No operamos con emociones, sino con una metodología basada en datos y disciplina.
                </li>
                <li>
                  <strong className="text-white">Transparencia total:</strong> Cada señal viene con su respectiva explicación y backtesting de efectividad.
                </li>
                <li>
                  <strong className="text-white">Mentoría Sith-Trader:</strong> No solo recibes señales; accedes a una comunidad de traders con mentalidad ganadora.
                </li>
              </ul>
            </div>

            <p className="text-gray-300">
              Deja de operar en la oscuridad. Accede a nuestro canal de señales y empieza a operar con una ventaja real.
              El conocimiento es poder, pero la ejecución disciplinada es lo que realmente te hará ganar.
            </p>

            <div className="flex items-center gap-4 justify-end mt-6">
              <BackButton />
              <a 
                href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU" 
                target="_blank" 
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <i className="fab fa-whatsapp text-xl"></i> Únete ahora
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
