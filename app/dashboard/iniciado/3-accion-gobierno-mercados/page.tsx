'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import BackButton from '@/components/ui/BackButton';
import VerContenidoButton from '@/components/ui/VerContenidoButton';
import TimeZoneClock from '@/components/ui/TimeZoneClock';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AccionGobiernoMercados() {
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
            <h2 className="text-3xl font-bold mb-6 text-[#ec4d58]">La Acción del Gobierno en los Mercados</h2>
            <p className="mb-4 text-lg">Analizamos por qué los gobiernos intervienen en la economía, sus herramientas y efectos, especialmente en el contexto de las criptomonedas.</p>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">1. Introducción: ¿Por qué interviene el Estado?</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Libre mercado vs. regulación</li>
                <li>Conflicto de intereses: consumidores vs. productores</li>
                <li>Rol del gobierno en la economía</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">2. Control de Precios</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Precio máximo y precio mínimo</li>
                <li>Efectos del precio máximo: sin efecto vs. escasez</li>
                <li>Efectos del precio mínimo: sin efecto vs. exceso de oferta</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">3. Casos Aplicados de Control de Precios</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Control del alquiler: corto y largo plazo, efectos y consecuencias</li>
                <li>El salario mínimo: impacto según perfil y argumentos económicos</li>
                <li>Principios en juego: eficiencia vs. intervención</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">4. Criptomonedas y Regulación Estatal</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Dilemas legales: ¿moneda o activo digital?</li>
                <li>Modelos de regulación internacional</li>
                <li>Casos en América Latina</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">5. El Caso Argentino (BCRA)</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Requerimientos de información a bancos y fintech</li>
                <li>Objetivo: control y trazabilidad</li>
                <li>Impacto sobre exchanges, billeteras y granjas</li>
              </ul>
            </details>

            <details>
              <summary className="font-semibold cursor-pointer">6. Evaluación de Comprensión</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Preguntas de aplicación real</li>
                <li>Dilemas prácticos de política económica</li>
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
