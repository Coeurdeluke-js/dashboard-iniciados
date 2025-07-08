'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useSidebar } from '@/components/sidebar/SidebarContext';
import ThemeToggle from '@/components/ui/ThemeToggle';
import TimeZoneClock from '@/components/ui/TimeZoneClock';
import ModuloCarrousel from './modulos/ModuloCarrousel';
import ModalBienvenida from './components/ModalBienvenida';

const tips = [
  "Mantén un diario de trading para registrar tus operaciones",
  "Establece límites claros de pérdidas antes de operar",
  "No inviertas más de lo que puedas permitirte perder",
  "Estudia el análisis técnico y fundamental",
  "La paciencia es clave en el trading",
  "El miedo es el camino hacia el lado oscuro del trading...",
  "La paciencia es la clave del éxito en el trading...",
  "El conocimiento es poder en el mundo crypto...",
  "La disciplina es el puente entre metas y logros..."
];

const modules = [
  { title: 'Introducción y la lógica económica', path: '1-introduccion-logica-economica' },
  { title: 'Las fuerzas del mercado', path: '2-fuerzas-del-mercado' },
  { title: 'La acción del gobierno en los mercados', path: '3-accion-gobierno-mercados' },
  { title: 'Competencia Perfecta', path: '4-competencia-perfecta' },
  { title: 'Monopolio y Oligopolio', path: '5-monopolio-oligopolio' },
  { title: 'La Tecnología Blockchain', path: '6-tecnologia-blockchain' },
  { title: 'Criptomonedas', path: '7-criptomonedas' },
  { title: 'Operaciones con Criptomonedas', path: '8-operaciones-criptomonedas' },
];

export default function IniciadoDashboard() {
  const supabase = createClientComponentClient();
  const { isExpanded } = useSidebar();
  const [user, setUser] = useState<any>(null);
  const [tipDelDia, setTipDelDia] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [watchedSeconds, setWatchedSeconds] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    setTipDelDia(tips[Math.floor(Math.random() * tips.length)]);

    const syncCompletedModules = () => {
      const saved = localStorage.getItem('completedModules');
      if (saved) {
        setCompletedModules(JSON.parse(saved));
      }
    };

    syncCompletedModules();
    window.addEventListener('completedModulesUpdated', syncCompletedModules);
    window.addEventListener('storage', e => {
      if (e.key === 'completedModules' && e.newValue) {
        setCompletedModules(JSON.parse(e.newValue));
      }
    });

    // Mostrar modal solo si es la primera vez
    const alreadyShown = localStorage.getItem('modalBienvenidaShown');
    if (!alreadyShown) {
      setShowModal(true);
      localStorage.setItem('modalBienvenidaShown', 'true');
    }

    // Permitir reabrir modal desde la sidebar
    const handleAbrirModal = () => setShowModal(true);
    window.addEventListener('abrirModalBienvenida', handleAbrirModal);

    return () => {
      window.removeEventListener('completedModulesUpdated', syncCompletedModules);
      window.removeEventListener('storage', () => {});
      window.removeEventListener('abrirModalBienvenida', handleAbrirModal);
    };
  }, []);

  const checklist = {
    perfil: true,
    video: watchedSeconds >= 120,
    exploracion: completedModules.length >= modules.length
  };

  const checklistOrder = [
    {
      key: 'perfil',
      label: 'Crea tu perfil',
      description: 'Completa tu información personal para personalizar tu experiencia de aprendizaje.',
      weight: 1 // Peso: 1 punto
    },
    {
      key: 'video',
      label: 'Ver primer video',
      description: 'Visualiza el video introductorio completo para entender la misión y metodología de Crypto Force Academy.',
      weight: 1 // Peso: 1 punto
    },
    {
      key: 'exploracion',
      label: 'Navega todos los Módulos',
      description: 'Explora y completa los 8 módulos educativos: desde fundamentos económicos hasta operaciones con criptomonedas.',
      weight: 8 // Peso: 8 puntos (uno por cada módulo)
    }
  ];

  // Cálculo proporcional del progreso
  const calculateProgress = () => {
    let completedPoints = 0;
    const totalPoints = checklistOrder.reduce((sum, item) => sum + item.weight, 0); // Total: 10 puntos
    
    // Perfil completado: 1 punto
    if (checklist.perfil) {
      completedPoints += 1;
    }
    
    // Video completado: 1 punto
    if (checklist.video) {
      completedPoints += 1;
    }
    
    // Módulos completados: 1 punto por cada módulo (máximo 8)
    completedPoints += completedModules.length;
    
    return (completedPoints / totalPoints) * 100;
  };

  const progress = calculateProgress();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ec4d58]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      {showModal && <ModalBienvenida onClose={() => setShowModal(false)} />}

      {/* Main Content Container - Completamente responsive */}
      <div className="min-h-screen w-full">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8 pt-4 sm:pt-8 lg:pt-20 px-3 sm:px-4 lg:px-8">
          {/* Header - Responsive */}
          <header className="card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-md flex-shrink-0">
                <Image
                  src={user?.user_metadata?.avatar_url || "/images/default-avatar.png"}
                  alt="Avatar"
                  width={64}
                  height={64}
                  className="rounded-full w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold truncate">{user?.email || 'Iniciado'}</h1>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Rango: Iniciado</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-end">
              <TimeZoneClock />
              <ThemeToggle />
            </div>
          </header>

          {/* Tip del día - Responsive */}
          <div className="card bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white p-4 sm:p-6 rounded-lg shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-2">💡 Tip del día</h2>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{tipDelDia}</p>
          </div>

          {/* Bienvenida con video - Responsive */}
          <div className="card p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">🌟 Bienvenido a la Academia Crypto Force</h2>
            <div className="aspect-video relative mb-3 sm:mb-4 shadow-2xl rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full rounded object-cover"
                controls
                poster="/images/intro-poster.png"
                preload="metadata"
                onTimeUpdate={e => {
                  const v = e.target as HTMLVideoElement;
                  setWatchedSeconds(Math.floor(v.currentTime));
                }}
              >
                <source src="/images/intro.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <p className="text-sm sm:text-base">Tu viaje hacia el dominio del trading comienza aquí.</p>
          </div>

          {/* Módulos - Ya es responsive */}
          <ModuloCarrousel modules={modules} />

          {/* Checklist y progreso - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="card p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">🌱 Primeros Pasos</h2>
              <div className="space-y-3">
                {checklistOrder.map(({ key, label, description }) => (
                  <div key={key} className="relative group">
                    <p
                      className={`text-sm sm:text-base font-medium ${
                        checklist[key] ? 'line-through text-[#ec4d58]' : ''
                      }`}
                    >
                      {label}
                    </p>
                    <div className="absolute left-0 top-full mt-1 z-10 bg-black bg-opacity-90 text-white text-xs rounded px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 w-64 max-w-[90vw] pointer-events-none">
                      {description}
                    </div>

                    {key === 'exploracion' && (
                      <ul className="mt-2 space-y-1 ml-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {modules.map((mod, idx) => {
                          const labelMod = `Explora el módulo ${idx + 1}: ${mod.title}`;
                          const done = completedModules.includes(idx);
                          return (
                            <li key={mod.path} className={done ? 'line-through text-[#ec4d58]' : ''}>
                              {labelMod}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">🎖️ Progreso hacia Acólito</h2>
              <div className="progress-bar bg-gray-200 dark:bg-gray-700 h-3 sm:h-4 rounded-full overflow-hidden">
                <div
                  className="progress-fill bg-[#ec4d58] h-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-2 text-sm sm:text-base font-medium">{progress.toFixed(1)}% completado</p>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Progreso: {Math.floor(progress / 10)} de 10 puntos totales
              </div>
            </div>
          </div>

          {/* Espaciado adicional para móvil */}
          <div className="h-4 sm:h-0"></div>
        </div>
      </div>
    </div>
  );
}