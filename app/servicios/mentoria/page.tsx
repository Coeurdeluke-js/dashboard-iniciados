'use client';
import BackButton from '@/components/ui/BackButton';

export default function MentoriaPage() {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 bg-gradient-to-b from-[#212121] via-[#121212] to-[#121212] overflow-x-hidden">
      <div className="max-w-4xl mx-auto py-8">
        <section className="space-y-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Mentoría</h1>

          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-md border border-[#ec4d58]/10 space-y-6">
            <h2 className="text-2xl font-semibold text-white">Programa de Mentorías</h2>
            <p className="text-gray-300">
              Instrucción personalizada y acción guiada en análisis y trading de criptomonedas. 
              Diseñado para quienes buscan desarrollar habilidades reales como traders e inversores con el acompañamiento de expertos.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Detalles del Servicio</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>2 sesiones semanales en vivo vía streaming</li>
                <li>8 a 10 sesiones mensuales según calendario, por un único abono</li>
                <li>Opción de acceder a la mitad de sesiones por la mitad del abono</li>
                <li>Acceso al grupo exclusivo de WhatsApp para participantes activos</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Requisitos</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Cuenta en el exchange referenciado por nosotros, correctamente verificada</li>
                <li>Uso de simulador (cuenta demo); el capital real es opcional</li>
                <li>Consulta con tu educador para obtener beneficios en comisiones</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Programa de Estudio</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li><strong>Introducción al Trading:</strong> Tipos de trading, riesgos, herramientas y beneficios</li>
                <li><strong>Análisis Técnico:</strong> Lectura de gráficos, patrones e indicadores (RSI, MACD, etc.)</li>
                <li><strong>Gestión del Riesgo:</strong> Planes personalizados y herramientas fundamentales</li>
                <li><strong>Mercado Spot y Futuros:</strong> Estrategias prácticas y funcionamiento de futuros</li>
                <li><strong>Psicología del Trading:</strong> Control emocional, mindset y manejo del estrés</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Recursos Adicionales</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Materiales de apoyo: videos, artículos, libros</li>
                <li>Sesiones individuales bajo demanda (costo adicional)</li>
                <li>Bot de señales automatizado (consultar condiciones)</li>
                <li>Acceso al Canal de Señales durante 30 días (+60 USDT)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Horarios Propuestos</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2"><i className="far fa-clock"></i> Martes y jueves · 23:15 (Argentina)</li>
                <li className="flex items-center gap-2"><i className="fas fa-hourglass-half"></i> Duración aproximada: 3 horas</li>
                <li className="flex items-center gap-2"><i className="far fa-calendar-alt"></i> 8 a 10 sesiones mensuales</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Contacto</h3>
              <ul className="space-y-2 text-gray-300">
                <li><i className="fas fa-envelope"></i> Info@thecryptoforce.com</li>
                <li><i className="fab fa-telegram-plane"></i> @The_CryptoForce</li>
              </ul>
            </div>

            <div className="flex items-center gap-4 justify-end mt-6">
              <BackButton />
              <a 
                href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU" 
                target="_blank" 
                className="flex items-center gap-2 bg-[#ec4d58] text-white px-6 py-3 rounded-lg hover:bg-[#d93f4a] transition-colors"
              >
                <i className="fab fa-whatsapp text-xl"></i>
                Quiero Aprender
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
