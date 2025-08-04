export default function ResumeWindow() {
  return (
    <div className="space-y-4 sm:space-y-6 h-full overflow-y-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 tracking-wider mb-2">VICTOR TORRES</h2>
        <p className="text-sm sm:text-base text-gray-600">Desenvolvedor Full Stack</p>
      </div>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-4">Experiência</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg">Desenvolvedor Full Stack</h3>
              <p className="text-green-600 font-medium">Stefanini Group • Dez 2021 - Atual</p>
              <ul className="mt-2 text-gray-700 text-sm space-y-1">
                <li>• Atuação em projetos da Polícia Federal com foco em desenvolvimento full stack</li>
                <li>
                  • Utilização de AngularJS, Angular 10 e Java EE em aplicações críticas e de alta disponibilidade
                </li>
                <li>
                  • Desenvolvimento de APIs com documentação integrada e implementação de práticas modernas de
                  engenharia de software
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg">Desenvolvedor Full Stack</h3>
              <p className="text-green-600 font-medium">Kingspan Isoeste • Abr 2021 - Dez 2021</p>
              <ul className="mt-2 text-gray-700 text-sm space-y-1">
                <li>
                  • Desenvolvimento e arquitetura de sistema interno para controle e gerenciamento de entrada e saída de
                  pessoas e produtos
                </li>
                <li>• Participação ativa na criação e reestruturação dos sistemas de vendas e obras da empresa</li>
                <li>
                  • Atuação full stack com foco em escalabilidade, usabilidade e integração com sistemas existentes
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg">Desenvolvedor Full Stack Júnior</h3>
              <p className="text-green-600 font-medium">Fábrica de Tecnologias Turing • Ago 2018 - Abr 2021</p>
              <ul className="mt-2 text-gray-700 text-sm space-y-1">
                <li>
                  • Atuação full stack nos projetos Virtoo (Sistema internacional Acadêmico e Financeiro) e SeIntegra
                  (Sistema de Gestão Acadêmica e Pedagógica)
                </li>
                <li>• Desenvolvimento backend com Java e frontend com Angular (TypeScript)</li>
                <li>• Responsável por modelagem lógica de dados e colaboração em arquitetura de sistemas</li>
                <li>• Participação em reuniões e cerimônias ágeis seguindo metodologia híbrida (Scrum + OpenUP)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-4">
            Formação Acadêmica
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg">Engenharia de Software</h3>
              <p className="text-green-600 font-medium">Universidade Evangélica de Goiás • 2018 - 2021</p>
              <p className="text-gray-700 text-sm mt-2">Bacharelado em Engenharia de Software</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-4">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'Node.js',
              'Angular',
              'PostgreSQL',
              'MongoDB',
              'Docker',
              'AWS',
              'Git',
              'Tailwind CSS',
              'GraphQL',
              'Maven',
              'Postman',
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-green-100 text-green-800 px-2 py-1 rounded text-center text-xs font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* 
        <section>
          <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-4">Certificações</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg">Arquiteto de Soluções Certificado AWS</h3>
              <p className="text-green-600 font-medium">Amazon Web Services • 2023</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg">Desenvolvedor Profissional Google Cloud</h3>
              <p className="text-green-600 font-medium">Google Cloud • 2022</p>
            </div>
          </div>
        </section> 
        */}

        <section>
          <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-4">Idiomas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <h3 className="font-bold text-base">Português</h3>
              <p className="text-gray-600 text-sm">Nativo</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <h3 className="font-bold text-base">Inglês</h3>
              <p className="text-gray-600 text-sm">Intermediário</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <h3 className="font-bold text-base">Espanhol</h3>
              <p className="text-gray-600 text-sm">Intermediário</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
