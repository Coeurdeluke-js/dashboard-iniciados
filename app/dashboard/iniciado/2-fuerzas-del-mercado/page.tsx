'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import BackButton from '@/components/ui/BackButton';
import VerContenidoButton from '@/components/ui/VerContenidoButton';
import TimeZoneClock from '@/components/ui/TimeZoneClock';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function FuerzasDelMercado() {
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

      if (completed.includes(1)) {
        setIsAllowed(true);

        setTimeout(() => {
          const currentCompleted = JSON.parse(localStorage.getItem('completedModules') || '[]');
          if (!currentCompleted.includes(2)) {
            const updated = [...currentCompleted, 2].sort((a, b) => a - b);
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
            <h2 className="text-3xl font-bold mb-6 text-[#ec4d58]">Las Fuerzas del Mercado</h2>
            <p className="mb-4 text-lg">
              Estudiamos las dinámicas de oferta y demanda que definen los precios y cantidades en los mercados, con especial atención al mercado cripto.
            </p>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">1. Introducción al Mercado</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>¿Qué es un mercado?</li>
                <li>¿Qué es la competencia?</li>
                <li>El concepto de "tomadores de precios"</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">2. La Demanda</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Ley de la demanda</li>
                <li>Demanda individual vs. demanda del mercado</li>
                <li>Tipos de bienes:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Bienes normales</li>
                    <li>Bienes inferiores</li>
                    <li>Bienes sustitutos</li>
                    <li>Bienes complementarios</li>
                  </ul>
                </li>
                <li>Desplazamientos en la curva de la demanda:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Ingreso</li>
                    <li>Precios de bienes relacionados</li>
                    <li>Gustos y preferencias</li>
                    <li>Expectativas</li>
                    <li>Número de compradores</li>
                  </ul>
                </li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">3. La Oferta</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Ley de la oferta</li>
                <li>Oferta individual vs. oferta del mercado</li>
                <li>Desplazamientos en la curva de la oferta:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Precios de los insumos</li>
                    <li>Avances tecnológicos</li>
                    <li>Expectativas del productor</li>
                    <li>Número de vendedores</li>
                  </ul>
                </li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">4. Equilibrio de Mercado</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Precio y cantidad de equilibrio</li>
                <li>Exceso de oferta y exceso de demanda</li>
                <li>Ajuste automático del mercado</li>
                <li>Ley de oferta y demanda</li>
              </ul>
            </details>

            <details>
              <summary className="font-semibold cursor-pointer">5. Aplicación en el Mercado Cripto</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Dinámica del mercado cripto vs. mercados tradicionales</li>
                <li>Oferta, demanda y precio en criptomonedas</li>
                <li>Concepto de descentralización</li>
                <li>Blockchain y validación de transacciones</li>
                <li>Volatilidad y factores que afectan el mercado cripto</li>
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
