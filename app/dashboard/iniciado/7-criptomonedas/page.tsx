'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import BackButton from '@/components/ui/BackButton';
import VerContenidoButton from '@/components/ui/VerContenidoButton';
import TimeZoneClock from '@/components/ui/TimeZoneClock';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function HerramientasEconomicasCripto() {
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

      if (completed.includes(6)) {  // Asumo módulo anterior (6) completado
        setIsAllowed(true);

        setTimeout(() => {
          const currentCompleted = JSON.parse(localStorage.getItem('completedModules') || '[]');
          if (!currentCompleted.includes(7)) { // Marca módulo 7 como completado
            const updated = [...currentCompleted, 7].sort((a, b) => a - b);
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
            <h2 className="text-3xl font-bold mb-6 text-[#ec4d58]">Herramientas Económicas e Introducción al Mundo de las Criptomonedas</h2>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">1. Introducción al concepto de criptomoneda</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Satoshi Nakamoto y el whitepaper de Bitcoin (2008)</li>
                <li>Principios del sistema descentralizado y confianza distribuida</li>
                <li>Primera generación: Bitcoin, Monero, Litecoin</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">2. Evolución tecnológica de las criptomonedas</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Segunda generación: Ethereum y los contratos inteligentes</li>
                <li>Tercera generación: escalabilidad, velocidad y nuevas soluciones</li>
                <li>Oportunidades de inversión y especulación en criptoactivos emergentes</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">3. Minería de criptomonedas</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>¿Qué es un Rig de minería?</li>
                <li>Complejidades técnicas y operativas</li>
                <li>Tipos de Rig:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>CPU: simplicidad, pero limitado en rendimiento</li>
                    <li>GPU: popularidad y versatilidad para pequeños mineros</li>
                    <li>FPGA: eficiencia intermedia, hoy en desuso</li>
                    <li>ASIC: potencia especializada y dominancia actual</li>
                  </ul>
                </li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">4. Factores a considerar al montar un Rig</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Evaluación de objetivos: inversión, espacio, consumo eléctrico</li>
                <li>Elección de hardware según criptomoneda</li>
                <li>Consideraciones prácticas y logísticas</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">5. Caso de estudio: Dogecoin</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Origen humorístico y adopción masiva</li>
                <li>Influencia mediática (Elon Musk, Snoop Dogg, Gene Simmons)</li>
                <li>Capitalización de mercado y datos económicos actuales</li>
              </ul>
            </details>

            <details>
              <summary className="font-semibold cursor-pointer">6. Conclusiones y tendencias futuras</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Consolidación de proyectos sólidos</li>
                <li>Rol de las criptomonedas en la economía descentralizada</li>
                <li>Cripto como herramienta económica emergente</li>
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
