'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function LordDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [supabase]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

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
        {/* Gestor de Estudiantes Asignados */}
        <section className="bg-blue-900/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-400">👨‍🏫 Gestor de Estudiantes</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((estudiante) => (
                <div key={estudiante} className="p-3 bg-blue-900/20 rounded flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-800"></div>
                  <div>
                    <p className="font-semibold">Acólito {estudiante}</p>
                    <p className="text-sm text-blue-300">Progreso: 75%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simulador de Estrategias */}
        <section className="bg-blue-900/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-400">🧪 Simulador de Estrategias</h2>
          <div className="space-y-4">
            <select className="w-full p-2 bg-blue-900/20 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none">
              <option>Seleccionar estrategia</option>
              <option>Scalping</option>
              <option>Day Trading</option>
              <option>Swing Trading</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-blue-900/20 rounded">
                <p className="font-semibold">Win Rate Simulado</p>
                <p className="text-2xl text-blue-400">68%</p>
              </div>
              <div className="p-3 bg-blue-900/20 rounded">
                <p className="font-semibold">Drawdown Máx</p>
                <p className="text-2xl text-blue-400">15%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Módulo Emocional */}
        <section className="bg-blue-900/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-400">📊 Módulo Emocional</h2>
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 bg-green-500/20 rounded-full">😊 Confiado</button>
              <button className="px-4 py-2 bg-yellow-500/20 rounded-full">😐 Neutral</button>
              <button className="px-4 py-2 bg-red-500/20 rounded-full">😟 Ansioso</button>
              <button className="px-4 py-2 bg-purple-500/20 rounded-full">😤 Frustrado</button>
            </div>
            <textarea
              className="w-full h-32 bg-blue-900/20 rounded p-3 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Notas sobre tu estado emocional post-trading..."
            ></textarea>
          </div>
        </section>

        {/* Editor de Contenido Interno */}
        <section className="bg-blue-900/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-400">📜 Editor de Contenido</h2>
          <div className="space-y-4">
            <input
              type="text"
              className="w-full p-2 bg-blue-900/20 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Título del recurso"
            />
            <textarea
              className="w-full h-32 bg-blue-900/20 rounded p-3 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Describe el recurso que quieres compartir..."
            ></textarea>
            <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition-colors">
              Subir Recurso
            </button>
          </div>
        </section>

        {/* Misiones de Liderazgo */}
        <section className="bg-blue-900/10 p-6 rounded-lg shadow-lg col-span-full">
          <h2 className="text-xl font-bold mb-4 text-blue-400">🧬 Misiones de Liderazgo</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-900/20 rounded">
                <h3 className="font-bold mb-2">Mentoría Grupal</h3>
                <p className="text-sm">Organiza una sesión de estudio con tu equipo</p>
                <div className="mt-4 h-2 bg-blue-200 rounded-full">
                  <div className="h-2 bg-blue-400 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-blue-900/20 rounded">
                <h3 className="font-bold mb-2">Análisis de Mercado</h3>
                <p className="text-sm">Comparte tu visión semanal del mercado</p>
                <div className="mt-4 h-2 bg-blue-200 rounded-full">
                  <div className="h-2 bg-blue-400 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-blue-900/20 rounded">
                <h3 className="font-bold mb-2">Feedback 360</h3>
                <p className="text-sm">Evalúa y recibe feedback de tu equipo</p>
                <div className="mt-4 h-2 bg-blue-200 rounded-full">
                  <div className="h-2 bg-blue-400 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bitácora Comparativa */}
        <section className="bg-blue-900/10 p-6 rounded-lg shadow-lg col-span-full">
          <h2 className="text-xl font-bold mb-4 text-blue-400">🧩 Bitácora Comparativa</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-blue-900/20 rounded">
                <p className="font-semibold">Tu Win Rate</p>
                <p className="text-2xl text-blue-400">65%</p>
                <p className="text-sm text-blue-300">vs. 62% promedio</p>
              </div>
              <div className="p-4 bg-blue-900/20 rounded">
                <p className="font-semibold">Operaciones/Día</p>
                <p className="text-2xl text-blue-400">8</p>
                <p className="text-sm text-blue-300">vs. 12 promedio</p>
              </div>
              <div className="p-4 bg-blue-900/20 rounded">
                <p className="font-semibold">R:R Ratio</p>
                <p className="text-2xl text-blue-400">1:2.5</p>
                <p className="text-sm text-blue-300">vs. 1:2.1 promedio</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}