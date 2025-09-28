'use client';

export default function ProjectsWindow() {
  const projects = [
    {
      name: 'IMDN',
      description: 'Plataforma de cursos EAD de Angola voltada para o mercado do marketing digital e negócios online.',
      tech: ['Next.js', 'NestJS', 'GraphQL', 'Tailwind', 'AppyPay'],
      status: 'Em Teste',
      color: 'bg-blue-500',
      logo: '/logo sem fundo png letras azuis.png?height=60&width=60',
      liveUrl: 'https://www.institutomdn.com/',
    },
    {
      name: 'OHomemSó',
      description: 'Página profissional do cantor e compositor brasileiro OHomemSó.',
      tech: ['Next.js', 'Tailwind', 'Framer Motion', 'Notion'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/logo-ohomemso.png?height=60&width=60',
      liveUrl: 'https://www.ohomemso.com.br/',
    },
    {
      name: 'Midori coLAB',
      description: 'Projeto de negócios e líderes para um futuro ágil, inovador e regenerativo.',
      tech: ['React', 'Next.js', 'Tailwind'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/logo-midori.png?height=60&width=60',
      liveUrl: 'https://www.midoricolab.com/',
    },
    {
      name: 'Jordanha Targino',
      description:
        'Página profissional para especialista em LOAS e aposentadoria. Voltado ao nicho jurídico/previdenciário.',
      tech: ['Next.js', 'React', 'Tailwind', 'SEO'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/logo-jordanha.png?height=60&width=60',
      liveUrl: 'https://jordanha-targino.vercel.app/',
    },
    {
      name: 'UP Connection',
      description:
        'Plataforma de conexão profissional voltada para networking e profissionais de decoração, geração de oportunidades e parcerias.',
      tech: ['Next.js', 'NestJS', 'GraphQL', 'Tailwind', 'Stripe'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/logo-up.png?height=60&width=60',
      liveUrl: 'https://www.upconnection.app/',
    },
    {
      name: 'Cliqui',
      description:
        'Criação de landing pages acessíveis e com foco em conversão. Construtor de páginas para negócios digitais.',
      tech: ['Next.js', 'React', 'Tailwind', 'Vercel'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/logo-cliqui.png?height=60&width=60',
      liveUrl: 'https://www.usecliqui.com.br/',
    },
    {
      name: 'Monteiro Branding',
      description: 'Estúdio especializado em identidade visual e branding para empresas e profissionais.',
      tech: ['React', 'Next.js', 'Framer Motion', 'Tailwind'],
      status: 'Pausado',
      color: 'bg-orange-500',
      logo: '/logo-monteiro-branding.png?height=60&width=60',
      liveUrl: 'https://monteiro-branding.vercel.app/',
    },
    {
      name: 'VitaFresh',
      description:
        'Projeto de alimentação saudável, com foco em refeições criadas por nutricionistas e ingredientes naturais.',
      tech: ['React', 'Next.js', 'Tailwind', 'CSS'],
      status: 'Pausado',
      color: 'bg-orange-500',
      logo: '/logo-vitafresh.png?height=60&width=60',
      liveUrl: 'https://vita-fresh.vercel.app/',
    },
    {
      name: 'Woof',
      description:
        'Plataforma voltada para o público pet, oferecendo serviços e produtos relacionados a animais domésticos.',
      tech: ['React', 'NextJS', 'Framer Motion', 'Tailwind'],
      status: 'Pausado',
      color: 'bg-orange-500',
      logo: '/logo-woof.png?height=60&width=60',
      liveUrl: 'https://usewoof.vercel.app/',
    },

    {
      name: 'Batata Cheff',
      description:
        'Projeto culinário focado em receitas de batatas recheadas. Landing page de curso digital gastronômico.',
      tech: ['React', 'Next.js', 'Tailwind', 'Analytics'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/logo-batata-chef.png?height=60&width=60',
      liveUrl: 'https://batatas-recheadas.vercel.app/',
    },

    {
      name: 'Ana Silva Fotografia',
      description: 'Projeto de um estúdio de fotografia especializada em eventos, ensaios e natureza.',
      tech: ['React', 'Next.js', 'Tailwind', 'Analytics'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/logo-ana-silva-fotografia.png?height=60&width=60',
      liveUrl: 'https://ana-silva-fotografia.vercel.app/',
    },
  ];

  const handleLiveDemo = (url: string | null) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 h-full overflow-y-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 tracking-wider mb-2">PROJETOS</h2>
        <p className="text-sm sm:text-base text-gray-600">Alguns dos meus projetos desenvolvidos</p>
      </div>

      <div className="space-y-4 pb-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-2"
          >
            {/* Project Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={project.logo || '/placeholder.svg'}
                alt={`${project.name} logo`}
                className="w-60 h-60 object-contain"
              />
            </div>
            <div className="flex items-start space-x-4">
              {/* Project Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">{project.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium text-white ${project.color} ml-2 flex-shrink-0`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleLiveDemo(project.liveUrl)}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <span>🚀</span>
                    <span>Ver Projeto</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          💼 Todos os projetos foram desenvolvidos com foco na experiência do usuário e performance
        </p>
      </div>
    </div>
  );
}
