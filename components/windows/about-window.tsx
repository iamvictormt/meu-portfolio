export default function AboutWindow() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Orange header bar */}
      <div className="bg-orange-400 h-6 sm:h-8 w-full -mx-3 sm:-mx-6 lg:-mx-8 -mt-3 sm:-mt-6 lg:-mt-8"></div>

      <div className="text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 tracking-wider mb-6">ABOUT ME</h2>

        <div className="max-w-2xl mx-auto space-y-6 text-left">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-3">👋 Olá, eu sou Victor!</h3>
            <p className="text-gray-700 leading-relaxed">
              Sou um desenvolvedor full-stack apaixonado por criar soluções digitais inovadoras. Com mais de 5 anos de
              experiência, trabalho com tecnologias modernas para transformar ideias em realidade.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-3">🎯 Minha Missão</h3>
            <p className="text-gray-700 leading-relaxed">
              Desenvolver aplicações web e mobile que não apenas funcionem perfeitamente, mas que também proporcionem
              experiências excepcionais aos usuários.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-3">💡 O que me motiva</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Resolver problemas complexos com código limpo</li>
              <li>• Aprender novas tecnologias constantemente</li>
              <li>• Colaborar em projetos desafiadores</li>
              <li>• Compartilhar conhecimento com a comunidade</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-3">📍 Localização</h3>
            <p className="text-gray-700">São Paulo, Brasil 🇧🇷</p>
          </div>
        </div>
      </div>
    </div>
  )
}
