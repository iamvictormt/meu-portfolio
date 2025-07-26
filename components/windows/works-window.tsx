export default function WorksWindow() {
  const tools = [
    {
      name: "GitHub",
      icon: "📁",
      bgColor: "#24292e",
      textColor: "white",
    },
    {
      name: "VS Code",
      icon: "📁",
      bgColor: "#007acc",
      textColor: "white",
    },
    {
      name: "Figma",
      icon: "📁",
      bgColor: "#f24e1e",
      textColor: "white",
    },
    {
      name: "Canva",
      icon: "📁",
      bgColor: "#00c4cc",
      textColor: "white",
    },
    {
      name: "Google\nDocs",
      icon: "📁",
      bgColor: "#4285f4",
      textColor: "white",
    },
    {
      name: "Google\nSheets",
      icon: "📁",
      bgColor: "#34a853",
      textColor: "white",
    },
    {
      name: "Microsoft\nWord",
      icon: "📁",
      bgColor: "#2b579a",
      textColor: "white",
    },
    {
      name: "Microsoft\nExcel",
      icon: "📁",
      bgColor: "#217346",
      textColor: "white",
    },
  ]

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Orange header bar */}
      <div className="bg-orange-400 h-6 sm:h-8 w-full -mx-3 sm:-mx-6 lg:-mx-8 -mt-3 sm:-mt-6 lg:-mt-8"></div>

      <div className="text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-800 tracking-wider mb-4 sm:mb-8 lg:mb-12">
          TOOLS
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 lg:gap-8 max-w-2xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-1 sm:space-y-3 cursor-pointer hover:scale-105 transition-transform"
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-gray-600 flex items-center justify-center shadow-lg"
                style={{ backgroundColor: tool.bgColor }}
              >
                <span className="text-lg sm:text-2xl lg:text-3xl font-bold" style={{ color: tool.textColor }}>
                  {tool.icon}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center leading-tight whitespace-pre-line">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
