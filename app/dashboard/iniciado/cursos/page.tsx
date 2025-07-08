import Link from 'next/link';

const icons = [
  // ... mismos SVGs que en el carrousel ...
  <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" key="icon-1"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" key="icon-2"><path d="M3 17l6-6 4 4 8-8" /><path d="M21 7l-5 5-4-4-6 6" /></svg>,
  <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" key="icon-3"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" key="icon-4"><path d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10l1.68 9.39a2 2 0 01-1.98 2.61H8.3a2 2 0 01-1.98-2.61L7 4z" /><path d="M9 9v6m6-6v6" /></svg>,
  <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" key="icon-5"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" key="icon-6"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
  <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" key="icon-7"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" key="icon-8"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>,
];

const modulosTeoricos = [
  { title: 'Introducción y lógica económica', path: '1-introduccion-logica-economica' },
  { title: 'Fuerzas del mercado', path: '2-fuerzas-del-mercado' },
  { title: 'Acción del gobierno en los mercados', path: '3-accion-gobierno-mercados' },
  { title: 'Competencia perfecta', path: '4-competencia-perfecta' },
  { title: 'Monopolio y oligopolio', path: '5-monopolio-oligopolio' },
  { title: 'Tecnología Blockchain', path: '6-tecnologia-blockchain' },
  { title: 'Criptomonedas', path: '7-criptomonedas' },
  { title: 'Operaciones con criptomonedas', path: '8-operaciones-criptomonedas' },
];

const modulosPracticos = [
  // Aquí se agregarán los módulos prácticos cuando los pases
];

export default function CursosPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-[rgb(var(--foreground))] flex flex-col items-center py-10 px-2">
      <h1 className="text-3xl font-bold mb-8 text-center">Cursos</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Card Teórico */}
        <div className="flex-1 bg-[#121212] rounded-2xl shadow-lg p-4 sm:p-8 border border-[#232323]">
          <h2 className="text-2xl font-bold text-[#ec4d58] mb-4">Teórico</h2>
          <ul className="space-y-3">
            {modulosTeoricos.map((mod, idx) => {
              const isLocked = idx > 3;
              return (
                <li key={mod.path} className="w-full">
                  {!isLocked ? (
                    <Link
                      href={`/dashboard/iniciado/${mod.path}`}
                      className="flex items-center gap-3 sm:gap-4 px-3 sm:px-6 py-3 rounded-lg bg-[#181818] hover:bg-[#232323] transition-all duration-200 text-base font-medium text-white border border-[#232323] hover:border-[#ec4d58] w-full max-w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ec4d58] focus:ring-offset-2 active:scale-[0.98] hover:scale-[1.03]"
                      style={{minWidth: 0}}
                    >
                      <span className="text-[#ec4d58] font-bold" style={{minWidth: 22, textAlign: 'right'}}>{idx + 1}</span>
                      <span className="text-[#ec4d58]">{icons[idx]}</span>
                      <span className="truncate text-left flex-1">{mod.title}</span>
                    </Link>
                  ) : (
                    <div
                      className="flex items-center gap-3 sm:gap-4 px-3 sm:px-6 py-3 rounded-lg bg-[#181818] border border-[#232323] opacity-60 cursor-not-allowed w-full max-w-full select-none relative"
                      style={{minWidth: 0}}
                      title="Completa los módulos anteriores para desbloquear"
                    >
                      <span className="text-[#ec4d58] font-bold" style={{minWidth: 22, textAlign: 'right'}}>{idx + 1}</span>
                      <span className="text-[#ec4d58]">{icons[idx]}</span>
                      <span className="truncate text-left flex-1">{mod.title}</span>
                      <span className="absolute right-4 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      </span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Card Práctico */}
        <div className="flex-1 bg-[#121212] rounded-2xl shadow-lg p-4 sm:p-8 border border-[#232323]">
          <h2 className="text-2xl font-bold text-[#ec4d58] mb-4">Práctico</h2>
          <ul className="space-y-3">
            {/* Aquí se mostrarán los módulos prácticos cuando los pases */}
            <li className="text-gray-400 italic">Próximamente...</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 