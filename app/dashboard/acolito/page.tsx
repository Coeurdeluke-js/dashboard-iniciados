'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import ThemeToggle from '@/components/ui/ThemeToggle';

interface Course {
  id: number;
  name: string;
  progress: number;
  nextMilestone: string;
}

interface Mission {
  id: number;
  title: string;
  description: string;
  reward: string;
  completed: boolean;
}

interface LogEntry {
  id: number;
  date: string;
  content: string;
  feedback?: string;
}

interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  type: 'class' | 'challenge' | 'live';
}

export default function AcolitoDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  // Estados para los diferentes componentes
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: 'Fundamentos del Trading', progress: 65, nextMilestone: 'Análisis Técnico Avanzado' },
    { id: 2, name: 'Psicología del Trader', progress: 40, nextMilestone: 'Control Emocional' },
    { id: 3, name: 'Gestión de Riesgo', progress: 30, nextMilestone: 'Position Sizing' }
  ]);

  const [missions, setMissions] = useState<Mission[]>([
    { id: 1, title: 'Análisis Semanal', description: 'Completa 5 análisis de mercado', reward: '50 XP', completed: false },
    { id: 2, title: 'Mentor Shadow', description: 'Observa 3 operaciones en vivo', reward: 'Medalla Observador', completed: false },
    { id: 3, title: 'Quiz Trading', description: 'Supera el quiz semanal', reward: '100 XP', completed: true }
  ]);

  const [logEntries, setLogEntries] = useState<LogEntry[]>([
    { id: 1, date: '2024-01-15', content: 'Análisis de BTC/USD', feedback: 'Buen análisis, considera timeframes menores' },
    { id: 2, date: '2024-01-14', content: 'Práctica de Price Action', feedback: 'Excelente identificación de patrones' }
  ]);

  const [events, setEvents] = useState<CalendarEvent[]>([
    { id: 1, title: 'Clase de Análisis Técnico', date: '2024-01-20', type: 'class' },
    { id: 2, title: 'Desafío Semanal', date: '2024-01-22', type: 'challenge' },
    { id: 3, title: 'Trading en Vivo', date: '2024-01-25', type: 'live' }
  ]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error('Error al obtener usuario:', error);
      } finally {
        setLoading(false);
      }
    };
    
    getUser();
  }, [supabase]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pt-20 px-6">
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


      {/* Panel de Progreso Personal */}
      <section className="bg-yellow-900/10 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">📊 Progreso Personal</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-yellow-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">Cursos Completados</h3>
            <p className="text-2xl text-yellow-400">4/12</p>
          </div>
          <div className="p-4 bg-yellow-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">Logros Desbloqueados</h3>
            <p className="text-2xl text-yellow-400">8</p>
          </div>
          <div className="p-4 bg-yellow-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">Medallas</h3>
            <p className="text-2xl text-yellow-400">5</p>
          </div>
          <div className="p-4 bg-yellow-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">XP Total</h3>
            <p className="text-2xl text-yellow-400">1,250</p>
          </div>
        </div>
      </section>

      {/* Vista de Cursos */}
      <section className="bg-yellow-900/10 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">🎓 Mis Cursos</h2>
        <div className="space-y-4">
          {courses.map(course => (
            <div key={course.id} className="p-4 bg-yellow-900/20 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{course.name}</h3>
                <span className="text-yellow-400">{course.progress}%</span>
              </div>
              <div className="w-full bg-yellow-900/30 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-yellow-200">Próximo: {course.nextMilestone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bitácora Digital */}
      <section className="bg-yellow-900/10 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">🧾 Bitácora Digital</h2>
        <div className="space-y-4">
          {logEntries.map(entry => (
            <div key={entry.id} className="p-4 bg-yellow-900/20 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-yellow-200">{entry.date}</span>
              </div>
              <p className="mb-2">{entry.content}</p>
              {entry.feedback && (
                <p className="text-sm text-yellow-400 italic">Feedback: {entry.feedback}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Misiones Semanales */}
      <section className="bg-yellow-900/10 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">🧠 Misiones Semanales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {missions.map(mission => (
            <div key={mission.id} className="p-4 bg-yellow-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">{mission.title}</h3>
              <p className="text-sm mb-2">{mission.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400">{mission.reward}</span>
                <span className={mission.completed ? 'text-green-400' : 'text-gray-400'}>
                  {mission.completed ? '✓ Completado' : 'Pendiente'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Minijuegos */}
      <section className="bg-yellow-900/10 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">🎮 Minijuegos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-yellow-900/20 rounded-lg cursor-pointer hover:bg-yellow-900/30 transition">
            <h3 className="font-semibold mb-2">Economía Básica</h3>
            <p className="text-sm">Aprende conceptos económicos jugando</p>
          </div>
          <div className="p-4 bg-yellow-900/20 rounded-lg cursor-pointer hover:bg-yellow-900/30 transition">
            <h3 className="font-semibold mb-2">Historia del Dinero</h3>
            <p className="text-sm">Explora la evolución del dinero</p>
          </div>
          <div className="p-4 bg-yellow-900/20 rounded-lg cursor-pointer hover:bg-yellow-900/30 transition">
            <h3 className="font-semibold mb-2">Trading Simulator</h3>
            <p className="text-sm">Practica decisiones bajo presión</p>
          </div>
        </div>
      </section>

      {/* Calendario */}
      <section className="bg-yellow-900/10 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">📅 Calendario</h2>
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="p-4 bg-yellow-900/20 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-yellow-200">{event.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                event.type === 'class' ? 'bg-blue-500/20 text-blue-200' :
                event.type === 'challenge' ? 'bg-green-500/20 text-green-200' :
                'bg-purple-500/20 text-purple-200'
              }`}>
                {event.type === 'class' ? 'Clase' :
                 event.type === 'challenge' ? 'Desafío' : 'En Vivo'}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}