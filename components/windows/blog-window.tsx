export default function BlogWindow() {
  const blogPosts = [
    {
      title: "Como criar uma API REST com Node.js e Express",
      date: "2024-01-15",
      category: "Backend",
      readTime: "8 min",
      excerpt: "Aprenda a construir uma API robusta do zero usando as melhores práticas...",
      tags: ["Node.js", "Express", "API", "JavaScript"],
      views: 1250,
    },
    {
      title: "React Server Components: O futuro do React",
      date: "2024-01-10",
      category: "Frontend",
      readTime: "12 min",
      excerpt: "Descubra como os Server Components estão revolucionando o desenvolvimento React...",
      tags: ["React", "Next.js", "Server Components"],
      views: 2100,
    },
    {
      title: "Deploy automatizado com GitHub Actions",
      date: "2024-01-05",
      category: "DevOps",
      readTime: "15 min",
      excerpt: "Configure pipelines de CI/CD eficientes para seus projetos...",
      tags: ["GitHub Actions", "CI/CD", "DevOps"],
      views: 890,
    },
    {
      title: "TypeScript: Dicas avançadas para desenvolvedores",
      date: "2023-12-28",
      category: "Programming",
      readTime: "10 min",
      excerpt: "Técnicas avançadas de TypeScript que todo desenvolvedor deveria conhecer...",
      tags: ["TypeScript", "JavaScript", "Programming"],
      views: 1650,
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "bg-blue-500"
      case "Backend":
        return "bg-green-500"
      case "DevOps":
        return "bg-purple-500"
      case "Programming":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6 h-full overflow-y-auto">
      {/* Orange header bar */}
      <div className="bg-orange-400 h-6 sm:h-8 w-full -mx-3 sm:-mx-6 lg:-mx-8 -mt-3 sm:-mt-6 lg:-mt-8"></div>

      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 tracking-wider mb-2">BLOG</h2>
        <p className="text-sm sm:text-base text-gray-600">Artigos sobre desenvolvimento e tecnologia</p>
      </div>

      <div className="space-y-4 pb-4">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(post.category)}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime} de leitura</span>
                  <span className="text-xs text-gray-500">👁️ {post.views}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors">{post.title}</h3>
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
              <span className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString("pt-BR")}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">✍️ Mais artigos em breve! Acompanhe minhas redes sociais para novidades.</p>
      </div>
    </div>
  )
}
