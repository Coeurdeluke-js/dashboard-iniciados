'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import BackButton from '@/components/ui/BackButton';
import VerContenidoButton from '@/components/ui/VerContenidoButton';
import TimeZoneClock from '@/components/ui/TimeZoneClock';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function CompetenciaPerfecta() {
  const [user, setUser] = useState<any>(null);
  const [isAllowed, setIsAllowed] = useState(false);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const checkAccess = () => {
      const completed = JSON.parse(localStorage.getItem('completedModules') || '[]');

      if (completed.includes(2)) {
        setIsAllowed(true);

        setTimeout(() => {
          const currentCompleted = JSON.parse(localStorage.getItem('completedModules') || '[]');
          if (!currentCompleted.includes(3)) {
            const updated = [...currentCompleted, 3].sort((a, b) => a - b);
            localStorage.setItem('completedModules', JSON.stringify(updated));
            window.dispatchEvent(new Event('completedModulesUpdated'));
          }
        }, 10000);
      } else {
        window.location.href = '/dashboard/iniciado';
      }
    };

    if (typeof window !== 'undefined') {
      checkAccess();
    }
  }, []);

  if (!isAllowed) return null;

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))] overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-8 pt-20">

        {/* Header */}
        <header className="card flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
              <Image 
                src={user?.user_metadata?.avatar_url || "/images/default-avatar.png"} 
                alt="Avatar" 
                width={64} 
                height={64} 
                className="rounded-full" 
                priority 
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{user?.email || 'Iniciado'}</h1>
              <p className="text-gray-600 dark:text-gray-400">Rango: Iniciado</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <TimeZoneClock />
            <ThemeToggle />
          </div>
        </header>

        {/* Contenido del módulo */}
        <div className="card relative">
          <div className="absolute top-4 left-4">
            <BackButton />
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-[#ec4d58]">Competencia Perfecta</h2>
            <p className="mb-4 text-lg">La estructura del mercado influye en el comportamiento de precios, producción y eficiencia económica. Este módulo aborda el caso ideal de competencia perfecta, sus condiciones, implicancias y su relación con el mercado cripto.</p>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">1. Introducción: ¿Por qué importa la estructura del mercado?</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Ejemplo comparativo: nafta vs. agua potable</li>
                <li>Impacto de la competencia sobre el precio y la producción</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">2. ¿Qué es un Mercado Competitivo?</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Definición de competencia perfecta</li>
                <li>Muchos compradores y vendedores</li>
                <li>Bienes homogéneos</li>
                <li>Libre entrada y salida del mercado</li>
                <li>Empresas tomadoras de precios</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">3. Ingresos y Decisiones en Empresas Competitivas</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Ingreso total, medio y marginal</li>
                <li>Maximización de beneficios: IMg = CMg</li>
                <li>Ajustes de producción marginales</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">4. Producción y Oferta en el Corto Plazo</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Curvas: costo marginal, costo total promedio</li>
                <li>Relación entre el precio y la curva de costo marginal</li>
                <li>Estrategia racional de producción</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">5. Decisión de Cierre a Corto Plazo</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Diferencia entre cerrar y salir</li>
                <li>Criterio de cierre: P &lt; CVP</li>
                <li>Costos hundidos y pérdidas inevitables</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">6. Entrada y Salida del Mercado a Largo Plazo</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Salir si P &lt; CTP</li>
                <li>Entrar si P &gt; CTP</li>
                <li>Efectos sobre estructura del mercado y equilibrio</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">7. El Equilibrio de Beneficio Cero</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>¿Por qué siguen operando las empresas?</li>
                <li>Costo de oportunidad</li>
                <li>Sostenibilidad del sistema competitivo</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">8. Criptomonedas: ¿Un mercado perfectamente competitivo?</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Bitcoin como medio de pago y reserva de valor</li>
                <li>Volatilidad, descentralización, ausencia de regulación</li>
                <li>¿Libre mercado real?</li>
              </ul>
            </details>

            <details>
              <summary className="font-semibold cursor-pointer">9. Evaluación de Comprensión</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Preguntas de análisis práctico</li>
                <li>Decisiones de precios, ingreso y salida de empresas</li>
              </ul>
            </details>
            {/* Ver Contenido Button debajo del índice */}
            <div className="mt-6 flex justify-start">
              <VerContenidoButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}