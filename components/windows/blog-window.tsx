'use client';

import { useState } from 'react';

export default function BlogWindow() {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const blogPosts = [
    {
      title: 'Como criar uma API REST com Node.js e Express',
      date: '2025-07-31',
      category: 'Backend',
      readTime: '8 min',
      excerpt: 'Aprenda a construir uma API robusta do zero usando as melhores práticas...',
      tags: ['Node.js', 'Express', 'API', 'JavaScript'],
      views: 1250,
    },
    {
      title: 'React Server Components: O futuro do React',
      date: '2025-07-28',
      category: 'Frontend',
      readTime: '7 min',
      excerpt: 'Descubra como os Server Components estão revolucionando o desenvolvimento React...',
      tags: ['React', 'Next.js', 'Server Components'],
      views: 2100,
    },
    {
      title: 'Deploy automatizado com GitHub Actions',
      date: '2025-07-27',
      category: 'DevOps',
      readTime: '5 min',
      excerpt: 'Configure pipelines de CI/CD eficientes para seus projetos...',
      tags: ['GitHub Actions', 'CI/CD', 'DevOps'],
      views: 890,
    },
    {
      title: 'TypeScript: Dicas avançadas para desenvolvedores',
      date: '2025-07-26',
      category: 'Programming',
      readTime: '6 min',
      excerpt: 'Técnicas avançadas de TypeScript que todo desenvolvedor deveria conhecer...',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      views: 1650,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'bg-blue-500';
      case 'Backend':
        return 'bg-green-500';
      case 'DevOps':
        return 'bg-purple-500';
      case 'Programming':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const backToList = () => setSelectedPost(null);

  return (
    <div className="space-y-4 sm:space-y-6 h-full overflow-y-auto">
      {!selectedPost ? (
        // Lista de posts
        <>
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 tracking-wider mb-2">BLOG</h2>
            <p className="text-sm sm:text-base text-gray-600">Artigos sobre desenvolvimento e tecnologia</p>
          </div>

          <div className="space-y-4 pb-4">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(
                          post.category
                        )}`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime} de leitura</span>
                      <span className="text-xs text-gray-500">👁️ {post.views}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">✍️ Mais artigos em breve!</p>
          </div>
        </>
      ) : (
        // Visualização do post selecionado
        <div className="pb-4">
          <button
            onClick={backToList}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <span>←</span>
            <span>Voltar aos artigos</span>
          </button>

          <article className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getCategoryColor(
                    selectedPost.category
                  )}`}
                >
                  {selectedPost.category}
                </span>
                <span className="text-sm text-gray-500">{selectedPost.readTime} de leitura</span>
                <span className="text-sm text-gray-500">👁️ {selectedPost.views}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">{selectedPost.title}</h1>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>Por Victor Torres</span>
                <span>{new Date(selectedPost.date).toLocaleDateString('pt-BR')}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose max-w-none">
              {selectedPost.title.includes('API REST') && (
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg text-gray-600 mb-6">{selectedPost.excerpt}</p>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Introdução</h2>
                  <p>
                    Criar uma API REST robusta é fundamental para qualquer aplicação moderna. Neste artigo, vamos
                    explorar como construir uma API completa usando Node.js e Express, seguindo as melhores práticas da
                    indústria.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Configuração Inicial</h2>
                  <p>Primeiro, vamos configurar nosso projeto:</p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    <code>
                      npm init -y
                      <br />
                      npm install express cors helmet morgan
                    </code>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Estrutura do Projeto</h2>
                  <p>Uma boa estrutura de pastas é essencial para manter o código organizado:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>controllers/ - Lógica de negócio</li>
                    <li>routes/ - Definição das rotas</li>
                    <li>middleware/ - Middlewares customizados</li>
                    <li>models/ - Modelos de dados</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Implementação</h2>
                  <p>
                    Com a estrutura definida, podemos começar a implementar nossa API seguindo os princípios REST e
                    garantindo segurança e performance.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Conclusão</h2>
                  <p>
                    Uma API bem estruturada é a base para aplicações escaláveis. Continue praticando e explorando novas
                    tecnologias!
                  </p>
                </div>
              )}

              {selectedPost.title.includes('React Server Components') && (
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg text-gray-600 mb-6">{selectedPost.excerpt}</p>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">O que são Server Components?</h2>
                  <p>
                    Os React Server Components representam uma nova forma de pensar sobre renderização no React. Eles
                    permitem que componentes sejam renderizados no servidor, reduzindo o bundle JavaScript enviado ao
                    cliente.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Vantagens</h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Menor bundle size no cliente</li>
                    <li>Melhor performance inicial</li>
                    <li>Acesso direto a recursos do servidor</li>
                    <li>SEO aprimorado</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Como usar no Next.js</h2>
                  <p>O Next.js 13+ oferece suporte nativo aos Server Components através do App Router:</p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    <code>
                      // app/page.tsx
                      <br />
                      export default async function Page() {`{`}
                      <br /> const data = await fetch('...')
                      <br /> return &lt;div&gt;{`{data}`}&lt;/div&gt;
                      <br />
                      {`}`}
                    </code>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Considerações</h2>
                  <p>
                    Embora poderosos, os Server Components requerem uma mudança de mindset. É importante entender quando
                    usar Server vs Client Components.
                  </p>
                </div>
              )}

              {selectedPost.title.includes('GitHub Actions') && (
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg text-gray-600 mb-6">{selectedPost.excerpt}</p>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Introdução ao CI/CD</h2>
                  <p>
                    Continuous Integration e Continuous Deployment são práticas essenciais no desenvolvimento moderno. O
                    GitHub Actions facilita a implementação dessas práticas.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Configuração Básica</h2>
                  <p>Crie um arquivo .github/workflows/deploy.yml:</p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    <code>
                      name: Deploy
                      <br />
                      on: [push]
                      <br />
                      jobs:
                      <br /> deploy:
                      <br /> runs-on: ubuntu-latest
                      <br /> steps:
                      <br /> - uses: actions/checkout@v2
                    </code>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Benefícios</h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Deploys automáticos</li>
                    <li>Testes automatizados</li>
                    <li>Redução de erros humanos</li>
                    <li>Feedback rápido</li>
                  </ul>
                </div>
              )}

              {selectedPost.title.includes('TypeScript') && (
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg text-gray-600 mb-6">{selectedPost.excerpt}</p>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Tipos Avançados</h2>
                  <p>O TypeScript oferece recursos poderosos para tipagem avançada:</p>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Utility Types</h3>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    <code>
                      type Partial&lt;T&gt;
                      <br />
                      type Required&lt;T&gt;
                      <br />
                      type Pick&lt;T, K&gt;
                      <br />
                      type Omit&lt;T, K&gt;
                    </code>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Conditional Types</h3>
                  <p>Permitem criar tipos que dependem de condições:</p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    <code>type ApiResponse&lt;T&gt; = T extends string ? string : number</code>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Dicas Práticas</h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Use const assertions para tipos mais específicos</li>
                    <li>Aproveite o type narrowing</li>
                    <li>Configure o tsconfig.json adequadamente</li>
                    <li>Use branded types para maior segurança</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-600 cursor-not-allowed" disabled>
                    <span>👍</span>
                    <span>Curtir</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 cursor-not-allowed">
                    <span>💬</span>
                    <span>Comentar</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 cursor-not-allowed">
                    <span>📤</span>
                    <span>Compartilhar</span>
                  </button>
                </div>
                <div className="text-sm text-gray-500">{selectedPost.views} visualizações</div>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
