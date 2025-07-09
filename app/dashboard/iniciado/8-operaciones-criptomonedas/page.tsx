'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import BackButton from '@/components/ui/BackButton';
import VerContenidoButton from '@/components/ui/VerContenidoButton';
import TimeZoneClock from '@/components/ui/TimeZoneClock';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function OperacionesCriptomonedas() {
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

      if (completed.includes(7)) {  // Módulo 7 completado
        setIsAllowed(true);

        setTimeout(() => {
          const currentCompleted = JSON.parse(localStorage.getItem('completedModules') || '[]');
          if (!currentCompleted.includes(8)) { // Marca módulo 8 como completado
            const updated = [...currentCompleted, 8].sort((a, b) => a - b);
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
            <h2 className="text-3xl font-bold mb-6 text-[#ec4d58]">Operaciones con Criptomonedas</h2>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">1. Introducción a las operaciones con criptomonedas</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Qué es una wallet o billetera virtual</li>
                <li>Plataformas populares en Argentina</li>
                <li>Proceso de registro y verificación de identidad</li>
                <li>Métodos para ingresar fondos (transferencia, efectivo, otras billeteras)</li>
                <li>Límites y tiempos de acreditación</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">2. Cómo comprar y vender criptomonedas</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Procedimiento de compra: selección de criptomoneda y monto</li>
                <li>Conversión al tipo de cambio vigente</li>
                <li>Monto mínimo de inversión y alternativas populares: BTC, ETH, DAI, USDC</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">3. Comisiones por operar</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Costos por depositar fondos</li>
                <li>Comisión de compra/venta</li>
                <li>Cargos adicionales por retiro de inversión</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">4. Usos y opciones con criptomonedas</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Ahorro y especulación</li>
                <li>Transferencias nacionales e internacionales</li>
                <li>Compras de bienes y servicios</li>
                <li>Identificación por código (similar a CBU)</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">5. Criptomonedas como fuente de financiación empresarial</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Introducción al blockchain y las ICOs</li>
                <li>Emisión de tokens a cambio de capital</li>
                <li>Ejemplo: DAO y el análisis de la SEC</li>
                <li>El Test de Howey para determinar si un token es un valor negociable</li>
                <li>Diferencias regulatorias entre EE.UU. y Europa (ESMA)</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">6. Sectores que utilizan criptomonedas</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Sector financiero: transacciones globales sin fricción</li>
                <li>Industria de los casinos y juegos en línea</li>
                <li>Industria musical: monetización directa para creadores</li>
                <li>Empresas que aceptan cripto como forma de pago (KFC, Microsoft, Subway, etc.)</li>
              </ul>
            </details>

            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">7. Criptomonedas en Argentina</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Comercios que aceptan Bitcoin en el país</li>
                <li>Distribución geográfica y ejemplos destacados</li>
                <li>Casos de uso reales: hoteles, librerías, restaurantes, etc.</li>
              </ul>
            </details>

            <details>
              <summary className="font-semibold cursor-pointer">8. Criptomonedas como solución a la exclusión financiera</summary>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Acceso para quienes no tienen servicios bancarios tradicionales</li>
                <li>Beneficios de la descentralización</li>
                <li>Reducción de costos operativos y tarifas</li>
                <li>Potencial para una economía global más conectada y equitativa</li>
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
