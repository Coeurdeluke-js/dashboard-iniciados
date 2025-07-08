export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#212121] via-[#121212] to-[#212121] overflow-x-hidden pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#1e1e1e] rounded-xl p-6 md:p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">CONTACTO</h1>

          <div className="mb-8">
            <p className="text-gray-300 text-center text-lg">Estamos aquí para ayudarte a alcanzar el éxito en el mundo del trading. Si tienes preguntas o necesitas más información, contáctanos a través de los siguientes canales.</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white text-center mb-6">CONTÁCTANOS</h2>
            <div className="flex flex-col gap-4">
              <a href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors duration-300">
                <i className="fab fa-whatsapp text-xl"></i> Únete al Grupo de WhatsApp
              </a>

              <a href="https://instagram.com/The_CryptoForce" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center justify-center gap-3 px-6 py-4 bg-[#E4405F] text-white rounded-lg hover:bg-[#C13584] transition-colors duration-300">
                <i className="fab fa-instagram text-xl"></i> Síguenos en Instagram
              </a>

              {['info@thecryptoforce.com', 'services@thecryptoforce.com', 'infocryptoforce@gmail.com'].map((email, index) => (
                <a key={index} 
                   href={`mailto:${email}`} 
                   className="flex items-center justify-center gap-3 px-6 py-4 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#3a3a3a] transition-colors duration-300">
                  <i className="fas fa-envelope text-xl"></i> {email}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}