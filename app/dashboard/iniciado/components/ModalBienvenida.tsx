'use client';

import React from 'react';

interface ModalBienvenidaProps {
  onClose: () => void;
}

export default function ModalBienvenida({ onClose }: ModalBienvenidaProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center px-4">
      <div className="bg-[rgb(var(--background))] text-[rgb(var(--foreground))] border border-[#ec4d58] p-8 rounded-2xl max-w-xl w-full shadow-2xl space-y-4">
        <h2 className="text-2xl font-bold text-[#ec4d58]">¡Bienvenido/a a Crypto Force!</h2>
        <p className="text-[rgb(var(--foreground))]">
          Felicitaciones por dar el primer paso hacia tu formación en educación financiera y trading de criptomonedas.
          Aquí comienza un viaje de crecimiento personal, técnico y estratégico.
        </p>
        <p className="text-[rgb(var(--foreground))]">
          Te invitamos a comenzar por los <strong>Módulos de Exploración</strong>, diseñados para introducirte en los fundamentos esenciales del ecosistema.
          Una vez completados, dirígete al <strong>Punto de Control</strong> para afianzar tu aprendizaje y continuar con tu progreso.
        </p>
        <p className="text-[rgb(var(--foreground))]">
          Si deseas profundizar aún más, puedes explorar libremente desde la sección <strong>"Explora la Academia"</strong> en la barra lateral.
        </p>
        <p className="text-[rgb(var(--foreground))]">
          📓 Te recomendamos tener a mano un cuaderno o herramienta digital para tomar apuntes. Lo que anotes hoy puede marcar la diferencia en tus decisiones de mañana.
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#ec4d58] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#ff5e6c] transition"
          >
            Comenzar ahora
          </button>
        </div>
      </div>
    </div>
  );
}
