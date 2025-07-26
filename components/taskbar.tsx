"use client"

interface TaskbarProps {
  openWindows: string[]
  activeWindow: string | null
  onFocusWindow: (windowId: string) => void
  onOpenWindow: (windowId: string) => void
}

export default function Taskbar({ openWindows, activeWindow, onFocusWindow }: TaskbarProps) {
  const socialIcons = [
    {
      name: "LinkedIn",
      icon: "in",
      bgColor: "#0077b5",
      url: "https://linkedin.com/in/victor-torres",
    },
    {
      name: "GitHub",
      icon: "gh",
      bgColor: "#333333",
      url: "https://github.com/victor-torres",
    },
    {
      name: "Behance",
      icon: "Be",
      bgColor: "#1769ff",
      url: "https://behance.net/victor-torres",
    },
    {
      name: "Dribbble",
      icon: "Dr",
      bgColor: "#ea4c89",
      url: "https://dribbble.com/victor-torres",
    },
  ]

  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 lg:h-20 border-t-2 sm:border-t-4 border-gray-700 flex items-center px-2"
      style={{ background: "#4a5568" }}
    >
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        {/* Open Windows - Left side */}
        <div className="flex space-x-1 sm:space-x-2 overflow-x-auto max-w-[50%]">
          {openWindows.map((windowId) => (
            <button
              key={windowId}
              onClick={() => onFocusWindow(windowId)}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded text-white text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeWindow === windowId ? "bg-slate-600" : "bg-slate-700 hover:bg-slate-600"
              }`}
            >
              {windowId}
            </button>
          ))}
        </div>

        {/* Social Icons - Centralized */}
        <div className="flex space-x-1 sm:space-x-3 lg:space-x-6 justify-center flex-1">
          {socialIcons.map((social, index) => (
            <button
              key={index}
              onClick={() => window.open(social.url, "_blank")}
              className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-2xl border-2 sm:border-4 border-gray-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-lg hover:scale-105 transition-transform shadow-lg"
              style={{ backgroundColor: social.bgColor }}
            >
              {social.icon}
            </button>
          ))}
        </div>

        {/* Empty space for balance */}
        <div className="max-w-[50%] w-0"></div>
      </div>
    </div>
  )
}
