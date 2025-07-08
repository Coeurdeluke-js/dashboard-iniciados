"use client";
import React from "react";
import Link from "next/link";
import { sidebarItems, sidebarItemsAcolito } from "./sidebarItems";
import SidebarToggle from "./SidebarToggle";
import { useSidebar } from "./SidebarContext";
import { usePathname } from "next/navigation";
import { FiUser, FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const { isExpanded, toggleSidebar } = useSidebar();
  const pathname = usePathname();
  const isAcolito = pathname.startsWith("/dashboard/acolito");
  const items = isAcolito ? sidebarItemsAcolito : sidebarItems;

  // Determinar si mostrar footer (solo si no están en la lista principal)
  const showFooter = !items.some(item => item.label === "Perfil" || item.label === "Salir");

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-[#121212] shadow-2xl z-40 flex flex-col border-r border-gray-800/50 transition-all duration-500 ease-in-out pt-12 ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      {/* Header con logo */}
      <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="flex-shrink-0 relative overflow-hidden border-b border-gray-800/30 bg-[#121212]">
        {isExpanded && (
          <img 
            src="/logo-dark-theme.png" 
            alt="Logo" 
            className="h-28 w-auto transition-all duration-300"
            style={{ display: 'block', margin: '0 auto' }}
          />
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 pt-6 pb-6 px-3">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={item.label}>
              {item.label === "Mensaje de bienvenida" ? (
                <button
                  onClick={() => {
                    window.dispatchEvent(new Event('abrirModalBienvenida'));
                  }}
                  className="group relative flex items-center py-3 px-3 text-[#fafafa] hover:bg-[#232323] rounded-lg transition-all duration-300 ease-in-out hover:scale-105 w-full"
                  title={!isExpanded ? item.label : undefined}
                >
                  {/* Ícono */}
                  <span
                    className="flex items-center justify-center"
                    style={{ width: '2.5rem', minWidth: '2.5rem' }}
                  >
                    {typeof item.icon === 'string' ? item.icon : React.createElement(item.icon)}
                  </span>
                  {/* Texto con fade-in/fade-out */}
                  <span 
                    className={`font-medium whitespace-nowrap text-[#fafafa] group-hover:text-[#ec4d58] transition-all duration-500 ease-in-out 
                      ${isExpanded 
                        ? 'opacity-100 max-w-xs w-auto' 
                        : 'opacity-0 max-w-0 w-0'}
                    `}
                    style={{
                      transitionProperty: 'opacity',
                      transitionDuration: '300ms',
                      transitionTimingFunction: 'ease-in-out',
                      transitionDelay: isExpanded ? '200ms' : '0ms',
                      display: 'inline-block',
                      verticalAlign: 'middle',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`font-medium whitespace-nowrap text-[#fafafa] group-hover:text-[#ec4d58] transition-all duration-500 ease-in-out
                      ${isExpanded
                        ? 'opacity-0 max-w-0 w-0'
                        : 'opacity-100 max-w-xs w-auto'}
                    `}
                    style={{
                      transitionProperty: 'max-width, width',
                      transitionDuration: '300ms',
                      transitionTimingFunction: 'ease-in-out',
                      transitionDelay: isExpanded ? '0ms' : '200ms',
                      display: 'inline-block',
                      verticalAlign: 'middle',
                      position: 'absolute',
                      pointerEvents: 'none',
                      visibility: 'hidden',
                    }}
                  >
                    {item.label}
                  </span>
                  
                  {/* Tooltip para modo colapsado */}
                  {!isExpanded && (
                    <div 
                      className="absolute left-full ml-2 px-2 py-1 bg-[#232323] text-[#fafafa] text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap"
                      style={{
                        transform: 'translateY(-50%)',
                        top: '50%'
                      }}
                    >
                      {item.label}
                    </div>
                  )}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="group relative flex items-center py-3 px-3 text-[#fafafa] hover:bg-[#232323] rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
                  title={!isExpanded ? item.label : undefined}
                >
                  {/* Ícono */}
                  <span
                    className="flex items-center justify-center"
                    style={{ width: '2.5rem', minWidth: '2.5rem' }}
                  >
                    {typeof item.icon === 'string' ? item.icon : React.createElement(item.icon)}
                  </span>
                  {/* Texto con fade-in/fade-out */}
                  <span 
                    className={`font-medium whitespace-nowrap text-[#fafafa] group-hover:text-[#ec4d58] transition-all duration-500 ease-in-out 
                      ${isExpanded 
                        ? 'opacity-100 max-w-xs w-auto' 
                        : 'opacity-0 max-w-0 w-0'}
                    `}
                    style={{
                      transitionProperty: 'opacity',
                      transitionDuration: '300ms',
                      transitionTimingFunction: 'ease-in-out',
                      transitionDelay: isExpanded ? '200ms' : '0ms',
                      display: 'inline-block',
                      verticalAlign: 'middle',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`font-medium whitespace-nowrap text-[#fafafa] group-hover:text-[#ec4d58] transition-all duration-500 ease-in-out
                      ${isExpanded
                        ? 'opacity-0 max-w-0 w-0'
                        : 'opacity-100 max-w-xs w-auto'}
                    `}
                    style={{
                      transitionProperty: 'max-width, width',
                      transitionDuration: '300ms',
                      transitionTimingFunction: 'ease-in-out',
                      transitionDelay: isExpanded ? '0ms' : '200ms',
                      display: 'inline-block',
                      verticalAlign: 'middle',
                      position: 'absolute',
                      pointerEvents: 'none',
                      visibility: 'hidden',
                    }}
                  >
                    {item.label}
                  </span>
                  
                  {/* Tooltip para modo colapsado */}
                  {!isExpanded && (
                    <div 
                      className="absolute left-full ml-2 px-2 py-1 bg-[#232323] text-[#fafafa] text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap"
                      style={{
                        transform: 'translateY(-50%)',
                        top: '50%'
                      }}
                    >
                      {item.label}
                    </div>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer con acciones del usuario, solo si no están en la lista principal */}
      {showFooter && (
        <div className="flex-shrink-0 p-3">
          {isAcolito && <hr className="border-t border-gray-700/50 mb-3" />}
          <hr className="border-t border-gray-700/30 mb-3" />
          <div className="space-y-2">
            <Link 
              href="/dashboard/perfil" 
              className="group relative flex items-center py-3 px-3 text-[#fafafa] hover:bg-[#232323] rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
              title={!isExpanded ? "Perfil" : undefined}
            >
              <span 
                className={`text-xl w-6 text-center flex-shrink-0 transition-all duration-300 ease-in-out text-[#fafafa] group-hover:text-[#ec4d58] group-hover:scale-110 ${
                  isExpanded ? 'mr-3' : 'mr-0'
                }`}
              >
                {React.createElement(FiUser)}
              </span>
              <span 
                className={`font-medium whitespace-nowrap transition-all duration-500 ease-in-out text-[#fafafa] group-hover:text-[#ec4d58] ${
                  isExpanded 
                    ? 'opacity-100 translate-x-0 delay-100' 
                    : 'opacity-0 translate-x-2 w-0 overflow-hidden'
                }`}
              >
                Perfil
              </span>
              
              {!isExpanded && (
                <div 
                  className="absolute left-full ml-2 px-2 py-1 bg-[#232323] text-[#fafafa] text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap"
                  style={{
                    transform: 'translateY(-50%)',
                    top: '50%'
                  }}
                >
                  Perfil
                </div>
              )}
            </Link>
            <Link 
              href="/logout" 
              className="group relative flex items-center py-3 px-3 text-[#fafafa] hover:bg-[#232323] rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
              title={!isExpanded ? "Salir" : undefined}
            >
              <span 
                className={`text-xl w-6 text-center flex-shrink-0 transition-all duration-300 ease-in-out text-[#fafafa] group-hover:text-[#ec4d58] group-hover:scale-110 ${
                  isExpanded ? 'mr-3' : 'mr-0'
                }`}
              >
                {React.createElement(FiLogOut)}
              </span>
              <span 
                className={`font-medium whitespace-nowrap transition-all duration-500 ease-in-out text-[#fafafa] group-hover:text-[#ec4d58] ${
                  isExpanded 
                    ? 'opacity-100 translate-x-0 delay-100' 
                    : 'opacity-0 translate-x-2 w-0 overflow-hidden'
                }`}
              >
                Salir
              </span>
              
              {!isExpanded && (
                <div 
                  className="absolute left-full ml-2 px-2 py-1 bg-[#232323] text-[#fafafa] text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap"
                  style={{
                    transform: 'translateY(-50%)',
                    top: '50%'
                  }}
                >
                  Salir
                </div>
              )}
            </Link>
          </div>
        </div>
      )}

      {/* Toggle button - Reposicionado */}
      <SidebarToggle collapsed={!isExpanded} onToggle={toggleSidebar} />
    </aside>
  );
}