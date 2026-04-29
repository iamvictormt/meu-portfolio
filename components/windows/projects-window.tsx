'use client';

import { useState } from 'react';
import { ExternalLink, CheckCircle, Clock } from 'lucide-react';

export default function ProjectsWindow() {
  const projects = [
    {
      name: 'TennisPool',
      description: 'Sistema de bolão dos maiores torneios de tênis do mundo com disputa de ranking e premiações.',
      tech: ['Next.js', 'Tailwind', 'Framer Motion', 'ResendAPI', 'NeonDB'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/logo-tennispool.png?height=60&width=60',
      liveUrl: 'https://tennispool.com.br/',
    },
    {
      name: 'FrodoTech',
      description:
        'Landing page profissional para empresa de tecnologia e assessoria em TI, com foco em conversão, apresentação clara dos serviços, credibilidade e geração de leads qualificados.',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/logo-frodo-tech.svg?height=60&width=60',
      liveUrl: 'https://frodotech.vercel.app/',
    },
    {
      name: 'AgroFlow',
      description:
        'Landing page de gestão agropecuária inteligente para centralizar custos, atividades e resultados da sua fazenda.',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/agroflow-icon.png?height=60&width=60',
      liveUrl: 'https://agroflow-blush.vercel.app/',
    },
    {
      name: 'Mente Leve',
      description:
        'Site institucional para clínica psicóloga, oferecendo informações sobre serviços, abordagem terapêutica e agendamento de consultas.',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/mente-leve-icon.png?height=60&width=60',
      liveUrl: 'https://mente-leve-theta.vercel.app/',
    },

    {
      name: 'PromptPilot',
      description:
        'Landing page de ferramenta de gerenciamento de prompts para IA, otimizando fluxos de trabalho e produtividade.',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/prompt-pilot-icon.png?height=60&width=60',
      liveUrl: 'https://prompt-pilot-ashen.vercel.app/',
    },

    {
      name: 'FocusPlay',
      description:
        'Landing page de planner para atletas que organiza rotina, fortalece mentalidade e acelera evolução.',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/focusplay-icon.png?height=60&width=60',
      liveUrl: 'https://focusplay-orcin.vercel.app/',
    },
    {
      name: 'Farejei',
      description: 'Plataforma de localização de pets desaparacidos e anúncio de petshops parceiros.',
      tech: ['Next.js', 'Tailwind', 'Stripe'],
      status: 'Completo',
      color: 'bg-green-500',
      logo: '/farejei-icon.png?height=60&width=60',
      liveUrl: 'https://www.farejeiapp.com.br/',
    },
    {
      name: 'IMDN',
      description: 'Plataforma de cursos EAD de Angola voltada para o mercado do marketing digital e negócios online.',
      tech: ['Next.js', 'NestJS', 'GraphQL', 'Tailwind', 'AppyPay'],
      status: 'Completo',
      color: 'bg-green-500',
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

  const [filter, setFilter] = useState('Todos');

  const handleLiveDemo = (url: string | null) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const filteredProjects = projects.filter(project => {
    if (filter === 'Todos') return true;
    if (filter === 'Completos') return project.status === 'Completo';
    if (filter === 'Pausados') return project.status === 'Pausado';
    return project.tech.includes(filter);
  });

  return (
    <div className="space-y-4 sm:space-y-6 h-full overflow-y-auto font-sans">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 tracking-wider mb-2">PROJETOS</h2>
        <p className="text-sm sm:text-base text-gray-600">Alguns dos meus projetos desenvolvidos</p>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {['Todos', 'Completos', 'Pausados'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              filter === category
                ? 'bg-gray-800 text-white border-gray-800 shadow-sm'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center p-2 flex-shrink-0">
                    <img
                      src={project.logo || '/placeholder.svg'}
                      alt={`${project.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-800 leading-tight">
                      {project.name}
                    </h3>
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold text-white mt-1 ${
                        project.status === 'Completo' ? 'bg-green-600' : 'bg-orange-500'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleLiveDemo(project.liveUrl)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <span>🚀</span>
                <span>Ver Projeto</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center text-gray-500 py-8 text-sm">
          Nenhum projeto encontrado nesta categoria.
        </div>
      )}
    </div>
  );
}

