'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import BackButton from '@/components/ui/BackButton';
import VerContenidoButton from '@/components/ui/VerContenidoButton';
import TimeZoneClock from '@/components/ui/TimeZoneClock';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function MonopolioYOligopolio() {
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

      if (completed.includes(4)) {
        setIsAllowed(true);

        setTimeout(() => {
          const currentCompleted = JSON.parse(localStorage.getItem('completedModules') || '[]');
          if (!currentCompleted.includes(5)) {
            const updated = [...currentCompleted, 5].sort((a, b) => a - b);
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
            <h2 className="text-3xl font-bold mb-6 text-[#ec4d58]">ÍNDICE MÓDULO 5: MONOPOLIO Y OLIGOPOLIO</h2>
            <p className="mb-4 text-lg">"Cuando pocos dominan el juego, las reglas cambian para todos"</p>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">1. ¿Qué es un Monopolio?</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Definición y características.</li>
                <li>Causas del monopolio (control exclusivo, patentes, monopolios naturales).</li>
                <li>Problemas del monopolio para la sociedad.</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">2. Cómo Actúa el Gobierno ante los Monopolios</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Leyes antimonopolio: objetivos y límites.</li>
                <li>Regulación estatal de precios.</li>
                <li>Propiedad pública vs. propiedad privada.</li>
                <li>Crítica a la intervención excesiva: el riesgo de la “falla política”.</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">3. ¿Qué es un Oligopolio?</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Definición y ejemplos cotidianos.</li>
                <li>Interdependencia estratégica entre empresas.</li>
                <li>Introducción a la Teoría de Juegos.</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">4. La Lógica del Oligopolio</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>La tensión entre cooperación e interés propio.</li>
                <li>Colusión y cárteles: ¿ilegales o inevitables?</li>
                <li>Equilibrio de Nash: qué es y por qué importa.</li>
                <li>El dilema del prisionero explicado paso a paso.</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">5. Oligopolio vs Competencia: Una Frontera Difusa</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Relación entre número de empresas y nivel de competencia.</li>
                <li>Por qué el libre comercio internacional limita el poder oligopólico.</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">6. La Economía de la Cooperación</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Dificultades para cooperar.</li>
                <li>Por qué algunos logran sostener alianzas (juegos repetidos, reputación, confianza).</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">7. El Dilema del Prisionero Aplicado a la Economía</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Explicación del dilema.</li>
                <li>Aplicaciones reales: oligopolios, carreras armamentistas y más.</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">8. ¿Debe el Gobierno Intervenir?</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Leyes antimonopolio (Sherman, Clayton).</li>
                <li>Controversias y límites de la intervención estatal.</li>
              </ul>
            </details>

            <details>
              <summary className="font-semibold cursor-pointer">📘 Bibliografía</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Mankiw, Principios de Economía.</li>
                <li>Tetaz, Economía para Abogados.</li>
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
