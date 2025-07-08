export default function MaestroDashboard() {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-6 space-y-4">
      {/* Header */}
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


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Métricas Globales */}
        <div className="bg-[#1E1E1E] rounded-lg border border-purple-500/20 p-4 shadow-lg">
          <h2 className="text-base font-bold text-purple-400 mb-3">Métricas Globales</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-purple-900/20 p-2 rounded-lg">
              <span className="text-sm text-gray-300">Usuarios Activos</span>
              <span className="text-base font-bold text-purple-400">2,345</span>
            </div>
            <div className="flex justify-between items-center bg-purple-900/20 p-2 rounded-lg">
              <span className="text-sm text-gray-300">Engagement</span>
              <span className="text-base font-bold text-purple-400">87%</span>
            </div>
            <div className="flex justify-between items-center bg-purple-900/20 p-2 rounded-lg">
              <span className="text-sm text-gray-300">Retención</span>
              <span className="text-base font-bold text-purple-400">92%</span>
            </div>
          </div>
        </div>

        {/* Estado del Sistema */}
        <div className="bg-[#1E1E1E] rounded-lg border border-purple-500/20 p-4 shadow-lg">
          <h2 className="text-base font-bold text-purple-400 mb-3">Estado del Sistema</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 bg-purple-900/20 p-2 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-sm text-gray-300">Servicios operativos</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-900/20 p-2 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <span className="text-sm text-gray-300">Seguridad actualizada</span>
            </div>
          </div>
        </div>

        {/* Alertas */}
        <div className="bg-[#1E1E1E] rounded-lg border border-purple-500/20 p-4 shadow-lg">
          <h2 className="text-base font-bold text-purple-400 mb-3">Alertas</h2>
          <div className="flex items-center space-x-2 bg-yellow-900/20 p-2 rounded-lg border border-yellow-500/20">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <span className="text-sm text-yellow-400">2 alertas pendientes</span>
          </div>
        </div>

        {/* Cultura y Valores */}
        <div className="col-span-2 bg-[#1E1E1E] rounded-lg border border-pink-500/20 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-pink-400 mb-4">Cultura y Valores</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-pink-900/20 p-4 rounded-lg border border-pink-500/20">
              <h3 className="text-lg font-medium text-pink-400 mb-3">Participación Emocional</h3>
              <div className="h-40 flex items-end justify-around gap-2">
                {[65, 80, 45, 90, 70].map((height, index) => (
                  <div key={index} className="w-12 bg-gradient-to-t from-pink-500 to-purple-500 rounded-t-lg transition-all hover:opacity-90" style={{ height: `${height}%` }}></div>
                ))}
              </div>
            </div>
            <div className="bg-pink-900/20 p-4 rounded-lg border border-pink-500/20">
              <h3 className="text-lg font-medium text-pink-400 mb-3">Clima Grupal</h3>
              <div className="space-y-2">
                <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Bajo</span>
                  <span>Medio</span>
                  <span>Alto</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-pink-400">80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gobernanza */}
        <div className="col-span-2 bg-[#1E1E1E] rounded-lg border border-emerald-500/20 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-emerald-400 mb-4">Gobernanza</h2>
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-emerald-900/20 p-4 rounded-lg hover:bg-emerald-800/30 transition-all duration-300 border border-emerald-500/20 group">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-emerald-400 rounded-full group-hover:rotate-180 transition-transform duration-300"></div>
                </div>
                <span className="text-emerald-400">Ciclos</span>
              </div>
            </button>
            <button className="bg-emerald-900/20 p-4 rounded-lg hover:bg-emerald-800/30 transition-all duration-300 border border-emerald-500/20 group">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-emerald-400 rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <span className="text-emerald-400">Estructura</span>
              </div>
            </button>
            <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-500/20">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">Roles</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Activos</span>
                <span className="text-xl font-bold text-emerald-400">15/15</span>
              </div>
            </div>
          </div>
        </div>

        {/* Configuración */}
        <div className="col-span-3 bg-[#1E1E1E] rounded-lg border border-red-500/20 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-red-400 mb-4">Configuración</h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { text: 'Seguridad', icon: <div className="w-6 h-6 border-2 border-red-400 rounded-lg group-hover:rotate-45 transition-transform duration-300"></div> },
              { text: 'Backups', icon: <div className="w-6 h-6 border-2 border-red-400 rounded-full group-hover:scale-110 transition-transform duration-300"></div> },
              { text: 'Arquitectura', icon: <div className="w-6 h-6 border-2 border-red-400 rotate-45 group-hover:rotate-90 transition-transform duration-300"></div> },
              { text: 'Mantenimiento', icon: <div className="w-6 h-6 border-2 border-red-400 rounded group-hover:scale-110 transition-transform duration-300"></div> }
            ].map((item, index) => (
              <button key={index} className="bg-red-900/20 p-4 rounded-lg hover:bg-red-800/30 transition-all duration-300 border border-red-500/20 group">
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}