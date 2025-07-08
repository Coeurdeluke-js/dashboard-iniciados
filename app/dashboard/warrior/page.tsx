'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function WarriorDashboard() {
  const [user, setUser] = useState<any>(null);

  return (
    <div className="p-8 space-y-6">
      {/* Header con información del usuario */}
      <header className="card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
  {/* Bloque de Avatar y usuario */}
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

  {/* Bloque de reloj + toggle */}
  <div className="flex items-center gap-4 mt-4 md:mt-0 self-end md:self-auto">
    <TimeZoneClock />
    <ThemeToggle />
  </div>
</header>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Panel de Métricas de Consistencia */}
        <section className="bg-green-800/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-green-600">📈 Métricas de Consistencia</h2>
          <div className="space-y-4">
            <div className="p-3 bg-green-800/20 rounded">
              <p className="font-semibold">Winrate: 65%</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="p-3 bg-green-800/20 rounded">
              <p className="font-semibold">Riesgo/Beneficio: 1:2.5</p>
            </div>
          </div>
        </section>

        {/* Panel de Mentoría Iniciada */}
        <section className="bg-green-800/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-green-600">🤝 Mentoría Iniciada</h2>
          <div className="space-y-4">
            <p>Iniciados asignados: 3</p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((iniciado) => (
                <div key={iniciado} className="p-3 bg-green-800/20 rounded text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-green-700"></div>
                  <p>Iniciado {iniciado}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bitácora Expandida */}
        <section className="bg-green-800/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-green-600">📘 Bitácora Expandida</h2>
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-green-800/20 rounded-full text-sm">Trading</span>
              <span className="px-3 py-1 bg-green-800/20 rounded-full text-sm">Análisis</span>
              <span className="px-3 py-1 bg-green-800/20 rounded-full text-sm">Psicología</span>
            </div>
            <textarea
              className="w-full h-32 bg-green-800/20 rounded p-3 resize-none focus:ring-2 focus:ring-green-600 focus:outline-none"
              placeholder="Registra tu operativa diaria..."
            ></textarea>
          </div>
        </section>

        {/* Editor de Estrategias */}
        <section className="bg-green-800/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-green-600">🧩 Editor de Estrategias</h2>
          <div className="space-y-4">
            <select className="w-full p-2 bg-green-800/20 rounded focus:ring-2 focus:ring-green-600 focus:outline-none">
              <option>Seleccionar plantilla</option>
              <option>Scalping</option>
              <option>Swing Trading</option>
              <option>Position Trading</option>
            </select>
            <textarea
              className="w-full h-32 bg-green-800/20 rounded p-3 resize-none focus:ring-2 focus:ring-green-600 focus:outline-none"
              placeholder="Documenta tu estrategia..."
            ></textarea>
          </div>
        </section>

        {/* Sistema de Alertas */}
        <section className="bg-green-800/10 p-6 rounded-lg shadow-lg col-span-full">
          <h2 className="text-xl font-bold mb-4 text-green-600">🔔 Alerta de Errores Comunes</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-900/20 rounded flex items-center gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold">Patrón Detectado: Stop Loss muy ajustado</p>
                <p className="text-sm">Se recomienda revisar la gestión de riesgo en las últimas operaciones.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resumen Semanal */}
        <section className="bg-green-800/10 p-6 rounded-lg shadow-lg col-span-full">
          <h2 className="text-xl font-bold mb-4 text-green-600">🗂️ Resumen Semanal Automático</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-green-800/20 rounded">
                <p className="font-semibold">Operaciones</p>
                <p className="text-2xl text-green-600">24</p>
              </div>
              <div className="p-4 bg-green-800/20 rounded">
                <p className="font-semibold">Winrate</p>
                <p className="text-2xl text-green-600">65%</p>
              </div>
              <div className="p-4 bg-green-800/20 rounded">
                <p className="font-semibold">Profit Factor</p>
                <p className="text-2xl text-green-600">1.8</p>
              </div>
            </div>
            <button className="w-full py-2 bg-green-700 hover:bg-green-800 rounded text-white transition-colors">
              Descargar Informe Completo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}