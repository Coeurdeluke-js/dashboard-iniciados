'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient, User } from '@supabase/auth-helpers-nextjs';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function DarthDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();

  // Temporalmente comentamos la verificación de autenticación mientras se configura
  /*
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;
        if (!session) {
          router.push('/login');
          return;
        }
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) throw error;
        if (!user?.user_metadata?.role?.includes('darth')) {
          router.push('/dashboard');
          return;
        }
        setUser(user);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);
  */

  if (loading) return <div className="p-8">Cargando...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10">
              <Image 
                src={user?.user_metadata?.avatar_url || '/images/default-avatar.png'}
                alt="Avatar" 
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Darth {user?.user_metadata?.full_name || user?.email}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Nivel 5 - Darth</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Visión Global de Progreso */}
        <div className="col-span-full p-6 border border-red-200 dark:border-red-800 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">🔮 Visión Global de Progreso</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Mapa de Actividad</h4>
              {/* Aquí iría el componente de mapa de calor */}
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Engagement</h4>
              {/* Aquí irían las métricas de engagement */}
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Errores Comunes</h4>
              {/* Aquí iría el análisis de errores */}
            </div>
          </div>
        </div>

        {/* Editor de Cursos */}
        <div className="p-6 border border-red-200 dark:border-red-800 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">🛠️ Editor de Cursos</h3>
          <div className="space-y-4">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200">
              Crear Nuevo Módulo
            </button>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200">
              Editar Módulos Existentes
            </button>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200">
              Lanzar Módulo
            </button>
          </div>
        </div>

        {/* Repositorio de Herramientas */}
        <div className="p-6 border border-red-200 dark:border-red-800 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">📚 Repositorio de Herramientas</h3>
          <div className="space-y-4">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200">
              Subir Recurso
            </button>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Recursos Compartidos</h4>
              {/* Lista de recursos */}
            </div>
          </div>
        </div>

        {/* Gestor de Eventos */}
        <div className="p-6 border border-red-200 dark:border-red-800 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">🧱 Gestor de Eventos</h3>
          <div className="space-y-4">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200">
              Crear Evento
            </button>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eventos Activos</h4>
              {/* Lista de eventos */}
            </div>
          </div>
        </div>

        {/* Broadcast Panel */}
        <div className="p-6 border border-red-200 dark:border-red-800 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">📣 Broadcast Panel</h3>
          <div className="space-y-4">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200">
              Enviar Alerta
            </button>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200">
              Gestionar Banners
            </button>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200">
              Mensajes Grupales
            </button>
          </div>
        </div>

        {/* Mentoría Formal */}
        <div className="p-6 border border-red-200 dark:border-red-800 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">🧑‍🏫 Mentoría Formal</h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Estudiantes Asignados</h4>
              {/* Lista de estudiantes */}
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200">
              Agendar Sesión
            </button>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200">
              Registrar Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}