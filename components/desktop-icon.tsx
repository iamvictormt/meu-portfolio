"use client"

import { useSound } from "@/hooks/use-sound"

interface DesktopIconProps {
  id: string
  label: string
  icon: string
  color: string
  onClick: () => void
}

export default function DesktopIcon({ label, icon, color, onClick }: DesktopIconProps) {
  const {
    playWorksSound,
    playContactSound,
    playResumeSound,
    playProfileSound,
    playProjectsSound,
    playAboutSound,
    playSkillsSound,
    playBlogSound,
    playCertificatesSound,
  } = useSound()

  const getFolderContent = (folderId: string) => {
    switch (folderId) {
      case "Contato":
        return {
          bgColor: "#fbbf24",
          tabColor: "#f59e0b",
          innerIcon: "📧",
          innerBg: "#dc2626",
          decorations: "contact",
        }
      case "Resumo":
        return {
          bgColor: "#fbbf24",
          tabColor: "#f59e0b",
          innerIcon: "📄",
          innerBg: "#ffffff",
          decorations: "resume",
        }
      case "Projetos":
        return {
          bgColor: "#fbbf24",
          tabColor: "#f59e0b",
          innerIcon: "🚀",
          innerBg: "#7c3aed",
          decorations: "projects",
        }
      case "Sobre mim":
        return {
          bgColor: "#fbbf24",
          tabColor: "#f59e0b",
          innerIcon: "👤",
          innerBg: "#3b82f6",
          decorations: "about",
        }
      case "Habilidades":
        return {
          bgColor: "#fbbf24",
          tabColor: "#f59e0b",
          innerIcon: "⚡",
          innerBg: "#f59e0b",
          decorations: "skills",
        }
      case "Blog":
        return {
          bgColor: "#fbbf24",
          tabColor: "#f59e0b",
          innerIcon: "📝",
          innerBg: "#5cf6dfff",
          decorations: "blog",
        }
      default:
        return {
          bgColor: "#fbbf24",
          tabColor: "#f59e0b",
          innerIcon: "📁",
          innerBg: "#3b82f6",
          decorations: "default",
        }
    }
  }

  const handleClick = () => {
    // Tocar som específico baseado no tipo de pasta
    switch (label) {
      case "Contato":
        playContactSound()
        break
      case "Resumo":
        playResumeSound()
        break
      case "Projetos":
        playProjectsSound()
        break
      case "Sobre mim":
        playAboutSound()
        break
      case "Habilidades":
        playSkillsSound()
        break
      case "Blog":
        playBlogSound()
        break
      default:
        // Sem som padrão
        break
    }

    // Pequeno delay para sincronizar com o som
    setTimeout(() => {
      onClick()
    }, 100)
  }

  const renderDecorations = (type: string) => {
    switch (type) {
      case "works":
        return (
          <>
            {/* Código simulado no fundo */}
            <div className="absolute top-1 left-1 text-[6px] sm:text-[8px] text-green-600 font-mono opacity-60">
              {"</>"}
            </div>
            {/* Pontos de status */}
            <div className="absolute top-1 right-1 flex space-x-[1px]">
              <div className="w-[2px] h-[2px] sm:w-1 sm:h-1 bg-green-400 rounded-full"></div>
              <div className="w-[2px] h-[2px] sm:w-1 sm:h-1 bg-yellow-400 rounded-full"></div>
              <div className="w-[2px] h-[2px] sm:w-1 sm:h-1 bg-red-400 rounded-full"></div>
            </div>
            {/* Linhas de código */}
            <div className="absolute bottom-3 left-1 right-1">
              <div className="w-full h-[1px] bg-green-500/30 mb-[1px]"></div>
              <div className="w-3/4 h-[1px] bg-blue-500/30 mb-[1px]"></div>
              <div className="w-1/2 h-[1px] bg-purple-500/30"></div>
            </div>
            {/* Ícone de engrenagem pequeno */}
            <div className="absolute bottom-1 left-1 text-[6px] sm:text-[8px] text-gray-600 opacity-50">⚙️</div>
          </>
        )

      case "contact":
        return (
          <>
            {/* Símbolo @ */}
            <div className="absolute top-1 left-1 text-[8px] sm:text-[10px] text-blue-600 font-bold opacity-70">@</div>
            {/* Indicador de mensagem nova */}
            <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full border border-white flex items-center justify-center">
              <span className="text-[6px] sm:text-[8px] text-white font-bold">!</span>
            </div>
            {/* Ondas de sinal */}
            <div className="absolute bottom-2 left-1 flex space-x-[1px]">
              <div className="w-[2px] h-1 sm:w-[3px] sm:h-2 bg-green-500 rounded-t opacity-60"></div>
              <div className="w-[2px] h-2 sm:w-[3px] sm:h-3 bg-green-500 rounded-t opacity-70"></div>
              <div className="w-[2px] h-3 sm:w-[3px] sm:h-4 bg-green-500 rounded-t opacity-80"></div>
            </div>
            {/* Ícones de redes sociais pequenos */}
            <div className="absolute bottom-1 left-3 sm:left-4 text-[6px] sm:text-[8px] opacity-50">📱</div>
            {/* Envelope pequeno */}
            <div className="absolute top-2 right-2 text-[6px] sm:text-[8px] opacity-60">✉️</div>
          </>
        )

      case "resume":
        return (
          <>
            {/* Linhas de texto simuladas */}
            <div className="absolute top-1 left-1 right-2 space-y-[1px]">
              <div className="w-full h-[1px] bg-gray-600 opacity-40"></div>
              <div className="w-4/5 h-[1px] bg-gray-600 opacity-40"></div>
              <div className="w-3/4 h-[1px] bg-gray-600 opacity-40"></div>
            </div>
            {/* Cabeçalho do documento */}
            <div className="absolute top-1 left-1 w-3 h-1 sm:w-4 sm:h-2 bg-blue-600 opacity-30 rounded-sm"></div>
            {/* Selo de aprovado */}
            <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border border-white flex items-center justify-center">
              <span className="text-[6px] sm:text-[8px] text-white font-bold">✓</span>
            </div>
            {/* Gráfico de habilidades */}
            <div className="absolute bottom-2 left-1 flex space-x-[1px]">
              <div className="w-[2px] h-2 sm:w-[3px] sm:h-3 bg-blue-500 opacity-60"></div>
              <div className="w-[2px] h-3 sm:w-[3px] sm:h-4 bg-green-500 opacity-60"></div>
              <div className="w-[2px] h-1 sm:w-[3px] sm:h-2 bg-yellow-500 opacity-60"></div>
              <div className="w-[2px] h-2 sm:w-[3px] sm:h-3 bg-purple-500 opacity-60"></div>
            </div>
            {/* Estrelas de avaliação */}
            <div className="absolute bottom-1 right-1 text-[6px] sm:text-[8px] text-yellow-500 opacity-70">⭐</div>
            {/* Ícone de graduação */}
            <div className="absolute top-2 right-2 text-[6px] sm:text-[8px] opacity-50">🎓</div>
          </>
        )

      case "projects":
        return (
          <>
            {/* Ícone de foguete pequeno no canto */}
            <div className="absolute top-1 left-1 text-[6px] sm:text-[8px] text-purple-600 opacity-70">🚀</div>
            {/* Estrelas representando projetos */}
            <div className="absolute top-1 right-1 flex flex-col space-y-[1px]">
              <div className="w-[2px] h-[2px] sm:w-1 sm:h-1 bg-yellow-400 rounded-full"></div>
              <div className="w-[2px] h-[2px] sm:w-1 sm:h-1 bg-blue-400 rounded-full"></div>
              <div className="w-[2px] h-[2px] sm:w-1 sm:h-1 bg-green-400 rounded-full"></div>
            </div>
            {/* Barras de progresso dos projetos */}
            <div className="absolute bottom-3 left-1 right-1 space-y-[1px]">
              <div className="w-full h-[1px] bg-green-500/40"></div>
              <div className="w-4/5 h-[1px] bg-blue-500/40"></div>
              <div className="w-3/5 h-[1px] bg-purple-500/40"></div>
            </div>
            {/* Ícone de código */}
            <div className="absolute bottom-1 left-1 text-[6px] sm:text-[8px] text-gray-600 opacity-50">💡</div>
            {/* Badge de "novo" */}
            <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full border border-white flex items-center justify-center">
              <span className="text-[6px] sm:text-[8px] text-white font-bold">N</span>
            </div>
            {/* Ícone de GitHub pequeno */}
            <div className="absolute bottom-1 right-2 text-[6px] sm:text-[8px] opacity-50">⭐</div>
          </>
        )

      case "about":
        return (
          <>
            {/* Ícone de pessoa */}
            <div className="absolute top-1 left-1 text-[6px] sm:text-[8px] text-blue-600 opacity-70">👤</div>
            {/* Coração representando paixão */}
            <div className="absolute top-1 right-1 text-[6px] sm:text-[8px] text-red-500 opacity-70">❤️</div>
            {/* Linhas de biografia */}
            <div className="absolute bottom-3 left-1 right-1 space-y-[1px]">
              <div className="w-full h-[1px] bg-blue-500/40"></div>
              <div className="w-4/5 h-[1px] bg-blue-500/40"></div>
              <div className="w-3/5 h-[1px] bg-blue-500/40"></div>
            </div>
            {/* Localização */}
            <div className="absolute bottom-1 left-1 text-[6px] sm:text-[8px] text-gray-600 opacity-50">📍</div>
          </>
        )

      case "skills":
        return (
          <>
            {/* Raio de energia */}
            <div className="absolute top-1 left-1 text-[6px] sm:text-[8px] text-yellow-600 opacity-70">⚡</div>
            {/* Barras de nível */}
            <div className="absolute top-1 right-1 flex flex-col space-y-[1px]">
              <div className="w-2 h-[1px] sm:w-3 sm:h-[1px] bg-green-500"></div>
              <div className="w-1 h-[1px] sm:w-2 sm:h-[1px] bg-yellow-500"></div>
              <div className="w-2 h-[1px] sm:w-3 sm:h-[1px] bg-blue-500"></div>
            </div>
            {/* Gráfico de progresso */}
            <div className="absolute bottom-2 left-1 flex space-x-[1px]">
              <div className="w-[2px] h-3 sm:w-[3px] sm:h-4 bg-green-500 opacity-60"></div>
              <div className="w-[2px] h-2 sm:w-[3px] sm:h-3 bg-blue-500 opacity-60"></div>
              <div className="w-[2px] h-4 sm:w-[3px] sm:h-5 bg-purple-500 opacity-60"></div>
            </div>
            {/* Ícone de código */}
            <div className="absolute bottom-1 right-1 text-[6px] sm:text-[8px] opacity-50">💻</div>
          </>
        )

      case "blog":
        return (
          <>
            {/* Ícone de escrita */}
            <div className="absolute top-1 left-1 text-[6px] sm:text-[8px] text-purple-600 opacity-70">✍️</div>
            {/* Indicador de posts novos */}
            <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full border border-white flex items-center justify-center">
              <span className="text-[6px] sm:text-[8px] text-white font-bold">3</span>
            </div>
            {/* Linhas de texto do blog */}
            <div className="absolute bottom-3 left-1 right-1 space-y-[1px]">
              <div className="w-full h-[1px] bg-purple-500/40"></div>
              <div className="w-3/4 h-[1px] bg-purple-500/40"></div>
              <div className="w-4/5 h-[1px] bg-purple-500/40"></div>
            </div>
            {/* Ícone de visualizações */}
            <div className="absolute bottom-1 left-1 text-[6px] sm:text-[8px] text-gray-600 opacity-50">👁️</div>
            {/* Tags */}
            <div className="absolute bottom-1 right-1 text-[6px] sm:text-[8px] opacity-50">#</div>
          </>
        )

      case "certificates":
        return (
          <>
            {/* Troféu */}
            <div className="absolute top-1 left-1 text-[6px] sm:text-[8px] text-yellow-600 opacity-70">🏆</div>
            {/* Medalhas */}
            <div className="absolute top-1 right-1 flex space-x-[1px]">
              <div className="w-[2px] h-[2px] sm:w-1 sm:h-1 bg-yellow-500 rounded-full"></div>
              <div className="w-[2px] h-[2px] sm:w-1 sm:h-1 bg-gray-400 rounded-full"></div>
              <div className="w-[2px] h-[2px] sm:w-1 sm:h-1 bg-orange-600 rounded-full"></div>
            </div>
            {/* Certificados empilhados */}
            <div className="absolute bottom-3 left-1 right-2">
              <div className="w-full h-2 bg-white border border-gray-400 rounded-sm opacity-60"></div>
              <div className="w-4/5 h-2 bg-white border border-gray-400 rounded-sm opacity-40 -mt-1 ml-1"></div>
            </div>
            {/* Selo de verificação */}
            <div className="absolute bottom-1 right-1 text-[6px] sm:text-[8px] text-green-600 opacity-70">✓</div>
          </>
        )

      default:
        return null
    }
  }

  return (
    <div
      className="flex flex-col items-center cursor-pointer group w-14 sm:w-16 lg:w-20"
      onClick={handleClick}
      onDoubleClick={handleClick}
    >
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center mb-1 sm:mb-2 group-hover:brightness-110 transition-all`}
      >
        {icon === "folder" ? (
          <div className="relative">
            {/* Aba da pasta */}
            <div
              className="absolute -top-1 left-1 w-6 h-3 sm:w-7 sm:h-4 lg:w-9 lg:h-5 rounded-t-md border-2 border-gray-800 z-10 shadow-sm"
              style={{ backgroundColor: getFolderContent(label).tabColor }}
            >
              {/* Textura na aba */}
              <div className="absolute inset-0 rounded-t-md opacity-20 bg-gradient-to-r from-white/30 to-transparent"></div>
            </div>

            {/* Corpo principal da pasta */}
            <div
              className="w-10 h-8 sm:w-12 sm:h-10 lg:w-16 lg:h-12 rounded-md border-2 border-gray-800 relative overflow-hidden shadow-lg"
              style={{ backgroundColor: getFolderContent(label).bgColor }}
            >
              {/* Decorações específicas de cada tipo */}
              {renderDecorations(getFolderContent(label).decorations)}

              {/* Conteúdo principal dentro da pasta */}
              <div
                className="absolute bottom-1 right-1 w-4 h-3 sm:w-5 sm:h-4 lg:w-6 lg:h-5 rounded-sm border border-gray-600 flex items-center justify-center text-xs sm:text-sm shadow-inner"
                style={{ backgroundColor: getFolderContent(label).innerBg }}
              >
                <span className="text-[8px] sm:text-[10px] lg:text-xs">{getFolderContent(label).innerIcon}</span>
              </div>

              {/* Sombra interna para dar profundidade */}
              <div
                className="absolute inset-0 rounded-md pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.1) 100%)",
                }}
              ></div>

              {/* Brilho no canto superior esquerdo */}
              <div
                className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 rounded-br-full opacity-30"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)" }}
              ></div>

              {/* Sombra no canto inferior direito */}
              <div
                className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 rounded-tl-full opacity-20"
                style={{ background: "radial-gradient(circle, rgba(0,0,0,0.5) 0%, transparent 70%)" }}
              ></div>
            </div>
          </div>
        ) : (
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl border-2 sm:border-4 border-gray-600 flex items-center justify-center shadow-xl relative overflow-hidden"
            style={{
              background: "#4a5568",
              borderColor: "#374151",
            }}
          >
            <span className="text-white text-lg sm:text-xl lg:text-3xl font-bold font-mono z-10">{icon}</span>

            {/* Brilho no ícone profile */}
            <div
              className="absolute inset-0 rounded-lg sm:rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.1) 100%)",
              }}
            ></div>
          </div>
        )}
      </div>

      {/* Label sem fundo branco */}
      <span className="text-xs sm:text-sm text-gray-900 font-medium text-center max-w-full truncate drop-shadow-sm">
        {label}
      </span>
    </div>
  )
}
