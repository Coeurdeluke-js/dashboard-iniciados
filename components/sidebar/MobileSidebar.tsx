import { sidebarItems } from "./sidebarItems";
import Link from "next/link";
import React from "react";
import { FiUser, FiLogOut, FiChevronRight } from "react-icons/fi";

const MobileSidebar = ({ collapsed, onToggle }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#121212] border-t border-gray-800/50 z-50 md:hidden backdrop-blur-sm">
      <ul className="flex justify-around items-center h-14 px-1">
        {sidebarItems.slice(0, 8).map((item, idx) => {
          const isLocked = idx > 3;
          return (
            <li key={item.label} className="flex-1 text-center">
              {!isLocked ? (
                <Link 
                  href={item.href} 
                  className="group flex flex-col items-center justify-center text-[#fafafa] hover:text-[#ec4d58] transition-all duration-300 ease-in-out text-xs whitespace-nowrap py-1 px-0.5 hover:scale-105"
                >
                  <span className="text-lg mb-0.5 transition-all duration-300 ease-in-out text-[#fafafa] group-hover:text-[#ec4d58] group-hover:scale-110">
                    {typeof item.icon === 'string' ? item.icon : React.createElement(item.icon)}
                  </span>
                  <span className="text-[8px] leading-tight font-medium transition-all duration-300 ease-in-out text-[#fafafa] group-hover:text-[#ec4d58] max-w-[50px] overflow-hidden text-ellipsis">
                    {item.label.split(' ')[0]}
                  </span>
                </Link>
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-500 opacity-60 cursor-not-allowed text-xs py-1 px-0.5 select-none">
                  <span className="text-lg mb-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </span>
                  <span className="text-[8px] leading-tight font-medium max-w-[50px] overflow-hidden text-ellipsis">
                    {item.label.split(' ')[0]}
                  </span>
                </div>
              )}
              {/* Ícono de despliegue/contracción debajo de Ajustes básicos */}
              {collapsed && idx === 3 && (
                <button
                  onClick={onToggle}
                  className="flex flex-col items-center justify-center mx-auto mt-1 text-[#ec4d58] hover:text-white transition-all"
                  style={{ fontSize: 18 }}
                  aria-label="Expandir sidebar"
                >
                  <FiChevronRight />
                  <span className="text-[8px]">Abrir</span>
                </button>
              )}
            </li>
          );
        })}
        {/* Botón Perfil */}
        <li className="flex-1 text-center">
          <Link
            href="/dashboard/perfil"
            className="group flex flex-col items-center justify-center text-[#fafafa] hover:text-[#ec4d58] transition-all duration-300 ease-in-out text-xs whitespace-nowrap py-1 px-0.5 hover:scale-105"
          >
            <span className="text-lg mb-0.5 transition-all duration-300 ease-in-out text-[#fafafa] group-hover:text-[#ec4d58] group-hover:scale-110">
              <FiUser />
            </span>
            <span className="text-[8px] leading-tight font-medium transition-all duration-300 ease-in-out text-[#fafafa] group-hover:text-[#ec4d58] max-w-[50px] overflow-hidden text-ellipsis">
              Perfil
            </span>
          </Link>
        </li>
        {/* Botón Salir */}
        <li className="flex-1 text-center">
          <Link
            href="/logout"
            className="group flex flex-col items-center justify-center text-[#fafafa] hover:text-[#ec4d58] transition-all duration-300 ease-in-out text-xs whitespace-nowrap py-1 px-0.5 hover:scale-105"
          >
            <span className="text-lg mb-0.5 transition-all duration-300 ease-in-out text-[#fafafa] group-hover:text-[#ec4d58] group-hover:scale-110">
              <FiLogOut />
            </span>
            <span className="text-[8px] leading-tight font-medium transition-all duration-300 ease-in-out text-[#fafafa] group-hover:text-[#ec4d58] max-w-[50px] overflow-hidden text-ellipsis">
              Salir
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileSidebar;