'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

const roles = [
  { 
    id: 'iniciado', 
    name: 'Iniciado', 
    level: 'I', 
    color: 'text-white', 
    path: '/dashboard/iniciado',
    description: 'Nivel inicial. Aprende los fundamentos del trading y las bases del análisis técnico.'
  },
  { 
    id: 'acolito', 
    name: 'Acólito', 
    level: 'II', 
    color: 'text-yellow-400', 
    path: '/dashboard/acolito',
    description: 'Trader en desarrollo. Domina estrategias básicas y gestión de riesgos.'
  },
  { 
    id: 'warrior', 
    name: 'Warrior', 
    level: 'III', 
    color: 'text-green-400', 
    path: '/dashboard/warrior',
    description: 'Trader intermedio. Maneja múltiples estrategias y opera con consistencia.'
  },
  { 
    id: 'lord', 
    name: 'Lord', 
    level: 'IV', 
    color: 'text-blue-400', 
    path: '/dashboard/lord',
    description: 'Trader avanzado. Desarrolla estrategias propias y mentora a otros traders.'
  },
  { 
    id: 'darth', 
    name: 'Darth', 
    level: 'V', 
    color: 'text-red-500', 
    path: '/dashboard/darth',
    description: 'Trader experto. Domina el mercado y lidera comunidades de trading.'
  },
  { 
    id: 'maestro', 
    name: 'Maestro', 
    level: 'VI', 
    color: 'text-gray-900', 
    path: '/dashboard/maestro',
    description: 'Nivel máximo. Innovador en estrategias, mentor principal y líder de la comunidad.'
  },
];

export default function RoleSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleRoleSelect = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  if (!mounted) {
    return (
      <button className="flex items-center space-x-2 px-4 py-2 rounded text-[#fafafa] opacity-50">
        <span>Roles</span>
        <i className="fas fa-chevron-down"></i>
      </button>
    );
  }

  const modalContent = isOpen && (
    <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 99999 }}>
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      <div className="relative w-full max-w-md mx-4 bg-[#121212] border border-[#ec4d58]/20 rounded-xl shadow-2xl p-6 animate-fadeIn">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Selecciona tu Rol</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <div className="grid gap-3">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleRoleSelect(role.path)}
              className={`w-full flex items-center justify-between p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#ec4d58]/10 transition-all ${role.color} border border-[#ec4d58]/10 hover:border-[#ec4d58]/30 ${role.id === 'maestro' ? 'bg-[#ec4d58] text-[#121212] hover:bg-[#ec4d58]/90' : ''}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold">{role.level}</span>
                <span className="text-lg">{role.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <i 
                  className="fas fa-info-circle cursor-help opacity-70 hover:opacity-100 transition-opacity"
                  title={role.description}
                />
                <i className="fas fa-chevron-right opacity-50" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 rounded text-[#fafafa] hover:text-[#ec4d58] transition-colors"
      >
        <span>Roles</span>
        <i className="fas fa-chevron-down"></i>
      </button>

      {modalContent && createPortal(modalContent, document.body)}
    </>
  );
}