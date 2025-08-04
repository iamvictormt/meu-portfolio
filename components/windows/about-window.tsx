export default function AboutWindow() {
  return (
    <div className="space-y-4 sm:space-y-6 h-full overflow-y-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 tracking-wider mb-2">SOBRE MIM</h2>
        <p className="text-sm sm:text-base text-gray-600">
          Conheça um pouco sobre mim
        </p>
      </div>

      <div className="space-y-6 pb-4 text-left">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-3">👋 Prazer, sou o Victor!</h3>
          <p className="text-gray-700 leading-relaxed">
            Sou bacharel em Engenharia de Software e desenvolvedor full-stack com mais de 7 anos de experiência. Tenho
            paixão por transformar ideias em soluções digitais inteligentes e funcionais, sempre utilizando tecnologias
            modernas e práticas ágeis.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-3">🎯 Minha missão</h3>
          <p className="text-gray-700 leading-relaxed">
            Criar aplicações web e mobile que vão além da performance: que encantem pela experiência, usabilidade e
            design centrado no usuário.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-3">💡 O que me inspira</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Resolver desafios complexos com código limpo e eficiente</li>
            <li>• Estar sempre aprendendo e explorando novas tecnologias</li>
            <li>• Colaborar em projetos inovadores com impacto real</li>
            <li>• Compartilhar conhecimento e crescer junto à comunidade dev</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-3">📍 Onde estou</h3>
          <p className="text-gray-700">Anápolis - GO, Brasil 🇧🇷</p>
        </div>
      </div>
    </div>
  );
}
