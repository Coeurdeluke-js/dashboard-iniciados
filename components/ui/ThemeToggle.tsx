'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ThemeToggle() {
  // Elimina toda lógica de light-mode y forzar dark-mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <button
      className="p-2 rounded-full transition-colors duration-300 hover:bg-[var(--hover-bg)]"
      title="Modo oscuro activado"
      disabled
    >
      <span className="text-xl">🌙</span>
    </button>
  );
}
