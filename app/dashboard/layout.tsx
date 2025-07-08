'use client';

import { ReactNode } from 'react';
import { SidebarProvider } from '@/components/sidebar/SidebarContext';
import Sidebar from '@/components/sidebar/Sidebar';
import MobileSidebar from '@/components/sidebar/MobileSidebar';
import RoleSelector from '@/components/layout/RoleSelector';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))] flex flex-col">
        {/* Sidebar Desktop */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {/* Sidebar Mobile */}
        <div className="md:hidden">
          <MobileSidebar />
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen">
          <header className="bg-white dark:bg-[#121212] shadow-sm border-b border-gray-200 dark:border-gray-700 px-4 py-4 sticky top-0 z-30">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
              <RoleSelector />
            </div>
          </header>
          <main className="flex-1 p-4 pb-20 md:pb-4 overflow-auto">
            <div className="max-w-7xl mx-auto w-full">
              {children}
            </div>
          </main>
          <footer className="bg-white dark:bg-[#121212] border-t border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-4">
                <span>© 2024 Crypto Force Academy</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Versión 1.0</span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  <i className="fas fa-question-circle mr-1"></i>
                  <span className="hidden sm:inline">Ayuda</span>
                </button>
                <button className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  <i className="fas fa-bug mr-1"></i>
                  <span className="hidden sm:inline">Reportar</span>
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}