'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import BackButton from '@/components/ui/BackButton';
import VerContenidoButton from '@/components/ui/VerContenidoButton';
import TimeZoneClock from '@/components/ui/TimeZoneClock';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function OfertaDemandaDinero() {
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

      if (completed.includes(5)) {  // Módulo anterior completado (asumí módulo 5)
        setIsAllowed(true);

        setTimeout(() => {
          const currentCompleted = JSON.parse(localStorage.getItem('completedModules') || '[]');
          if (!currentCompleted.includes(6)) { // Marcar módulo 6 como completado
            const updated = [...currentCompleted, 6].sort((a, b) => a - b);
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
            <h2 className="text-3xl font-bold mb-6 text-[#ec4d58]">Oferta y Demanda de Dinero</h2>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">1. Introducción: ¿Qué significa realmente “dinero”?</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>El rol fundamental del dinero en la economía</li>
                <li>Diferencias entre dinero, capital y riqueza</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">2. ¿Qué es la oferta monetaria?</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Definición de base monetaria (M0)</li>
                <li>Agregados monetarios: M1, M2 y M3</li>
                <li>¿Quién crea el dinero? El rol de los bancos centrales y comerciales</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">3. ¿Qué es la demanda de dinero?</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Motivos por los cuales se demanda dinero</li>
                <li>Motivo de transacción</li>
                <li>Motivo de precaución</li>
                <li>Motivo de especulación</li>
                <li>Variables que influyen: ingreso, tasa de interés, inflación esperada</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">4. Equilibrio en el mercado de dinero</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Interacción entre oferta y demanda</li>
                <li>El tipo de interés como precio del dinero</li>
                <li>Gráfica de equilibrio: análisis y desplazamientos</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">5. Influencia del dinero en la economía</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Relación entre cantidad de dinero y nivel de precios (Teoría cuantitativa)</li>
                <li>Política monetaria expansiva vs. contractiva</li>
                <li>Efectos sobre el consumo, la inversión y el crecimiento</li>
              </ul>
            </details>

            <details>
              <summary className="font-semibold cursor-pointer">6. Oferta monetaria y criptomonedas</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>¿Existe oferta monetaria en Bitcoin?</li>
                <li>Comparación entre control centralizado vs. descentralizado</li>
                <li>Límites de emisión y políticas monetarias alternativas</li>
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
