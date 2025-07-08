'use client';
import { useEffect, useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';

export default function IntroPage() {
  const [showVolumeMessage, setShowVolumeMessage] = useState(true);

  useEffect(() => {
    const handleClick = () => setShowVolumeMessage(false);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#212121] via-[#121212] to-[#212121] overflow-x-hidden">
      <div className="relative w-full max-w-6xl mx-auto pt-8 px-4">
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
          <VideoPlayer 
            src="/promo-video.mp4"
            poster="/video-poster.jpg"
          />
          
          {showVolumeMessage && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
              <div className="flex items-center gap-3 px-6 py-3 bg-black/80 rounded-lg">
                <i className="fas fa-volume-up text-xl"></i>
                <span><strong>Sube el volumen para escuchar</strong></span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center"> Introducción a <span className="text-[#ec4d58]">Crypto Force</span></h1>
        
        <div className="space-y-6 text-gray-300">
          <p className="leading-relaxed">
            Hola equipo, quiero presentarles un proyecto que nació de una idea simple pero transformadora: 
            <strong className="text-white"> Crypto Force</strong>. Este sistema educativo está diseñado para 
            <strong className="text-white"> empoderarnos con conocimiento</strong> necesario para navegar el mundo de las criptomonedas e inversiones.
          </p>

          <p>
            <strong className="text-white">Crypto Force</strong> es una <strong>comunidad</strong> donde aprendemos juntos, 
            crecemos como equipo y desarrollamos <strong>habilidades reales</strong> para tomar decisiones 
            <strong> informadas y responsables</strong> en un entorno de constante cambio.
          </p>

          <p>
            Sabemos que el mundo de las criptomonedas puede parecer <strong>confuso</strong>, incluso <strong>intimidante</strong>, 
            pero no tiene por qué serlo. Nuestro propósito con <strong>Crypto Force</strong> es <strong>acercar ese mundo</strong>  
            a las personas de forma <strong>accesible, comprensible y humana</strong>.
            Queremos crear un espacio donde no solo adquiramos habilidades, sino donde también 
            <strong> compartamos experiencias</strong>, aprendamos de nuestros errores y <strong>celebremos nuestros logros</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-[#ec4d58] mt-10">🚀 Lo que nos mueve</h2>
          <p>
            En <strong>Crypto Force</strong>, creemos que el <strong>verdadero poder está en el conocimiento</strong>.
            Cuando entendemos cómo funcionan las cosas, <strong>ganamos confianza</strong> para tomar decisiones.
            El dinero, las inversiones y los mercados son <strong>herramientas</strong>, pero el conocimiento es 
            <strong> la verdadera libertad</strong> para usarlas a nuestro favor.
          </p>

          <p>
            Lo más valioso de este proyecto es la <strong>comunidad</strong> que estamos formando. Porque aquí, <strong>nadie está solo</strong>.
            Nos apoyamos, compartimos lo que aprendemos y <strong>crecemos juntos</strong>. 
            <strong>Crypto Force</strong> no es solo un equipo de trading, es una <strong>red de personas</strong> 
            que creen en el <strong>poder de la educación</strong> y el <strong>crecimiento colectivo</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-[#ec4d58] mt-10">📚 Empoderar a través del conocimiento</h2>
          <p>
            Nuestro enfoque va más allá de enseñar a operar en los mercados. Queremos que cada uno de ustedes 
            <strong> tome el control de su futuro financiero</strong>, <strong>a su propio ritmo</strong>, con apoyo y sin presiones.
          </p>

          <p>
            Aquellos que se destaquen podrán <strong>compartir lo aprendido</strong> y además 
            <strong> recibir un beneficio económico</strong> por ello. Aquí, creemos que 
            <strong> enseñar y aprender son dos caras de la misma moneda</strong>, y ambas tienen un <strong>valor inmenso</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-[#ec4d58] mt-10">🔄 ¿Cómo seguimos adelante?</h2>
          <p>
            Este es el momento de <strong>escucharnos</strong>. Cada opinión y comentario nos ayuda a <strong>dar forma</strong> 
            a este proyecto. <strong>Crypto Force</strong> es una <strong>construcción colectiva</strong>.
          </p>

          <p>
            No buscamos <strong>éxito inmediato</strong> ni <strong>ganancias rápidas</strong>. 
            Estamos construyendo <strong>algo a largo plazo</strong>, un espacio donde cada uno encuentre su camino 
            y <strong>avance a su ritmo</strong>.
          </p>

          <p>
            <strong>Crypto Force</strong> será lo que cada uno quiera que sea, porque aquí, 
            <strong> el poder del conocimiento es lo que realmente importa</strong>.
          </p>

          <p className="mt-6">
            <strong>Gracias</strong> por estar aquí, por ser parte de esta aventura y por <strong>confiar en el proceso</strong>. 
            Juntos, <strong>podemos crear algo realmente significativo</strong>.
          </p>

          <p className="text-right text-[#ec4d58] font-semibold">Con afecto, <br />El equipo de Crypto Force</p>
        </div>
      </div>
    </div>
  );
}
