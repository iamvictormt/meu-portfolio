'use client';

import { useSound } from '@/hooks/use-sound';

interface DesktopIconProps {
  id: string;
  label: string;
  icon: string;
  color: string;
  onClick: () => void;
}

export default function DesktopIcon({ label, icon, color, onClick }: DesktopIconProps) {
  const {
    playWorksSound,
    playContactSound,
    playResumeSound,
    playProjectsSound,
    playAboutSound,
    playSkillsSound,
    playBlogSound,
    // playCertificatesSound,
  } = useSound();

  const getFolderContent = (folderId: string) => {
    switch (folderId) {
      case 'works':
        return {
          bgColor: '#fbbf24',
          tabColor: '#f59e0b',
          innerIcon: '💻',
          innerBg: '#1f2937',
          decorations: 'works',
        };
      case 'contact':
        return {
          bgColor: '#fbbf24',
          tabColor: '#f59e0b',
          innerIcon: '📧',
          innerBg: '#dc2626',
          decorations: 'contact',
        };
      case 'resume':
        return {
          bgColor: '#fbbf24',
          tabColor: '#f59e0b',
          innerIcon: '📄',
          innerBg: '#ffffff',
          decorations: 'resume',
        };
      case 'projects':
        return {
          bgColor: '#fbbf24',
          tabColor: '#f59e0b',
          innerIcon: '🚀',
          innerBg: '#7c3aed',
          decorations: 'projects',
        };
      case 'about':
        return {
          bgColor: '#fbbf24',
          tabColor: '#f59e0b',
          innerIcon: '👤',
          innerBg: '#3b82f6',
          decorations: 'about',
        };
      case 'skills':
        return {
          bgColor: '#fbbf24',
          tabColor: '#f59e0b',
          innerIcon: '⚡',
          innerBg: '#f59e0b',
          decorations: 'skills',
        };
      case 'blog':
        return {
          bgColor: '#fbbf24',
          tabColor: '#f59e0b',
          innerIcon: '📝',
          innerBg: '#8b5cf6',
          decorations: 'blog',
        };
      case 'certificates':
        return {
          bgColor: '#fbbf24',
          tabColor: '#f59e0b',
          innerIcon: '🏆',
          innerBg: '#eab308',
          decorations: 'certificates',
        };
      default:
        return {
          bgColor: '#fbbf24',
          tabColor: '#f59e0b',
          innerIcon: '📁',
          innerBg: '#3b82f6',
          decorations: 'default',
        };
    }
  };

  const handleClick = () => {
    // Tocar som específico baseado no tipo de pasta
    switch (label) {
      case 'works':
        playWorksSound();
        break;
      case 'contact':
        playContactSound();
        break;
      case 'resume':
        playResumeSound();
        break;
      case 'projects':
        playProjectsSound();
        break;
      case 'about':
        playAboutSound();
        break;
      case 'skills':
        playSkillsSound();
        break;
      case 'blog':
        playBlogSound();
        break;
      // case 'certificates':
      //   playCertificatesSound();
      //   break;
      default:
        // Sem som padrão
        break;
    }

    // Pequeno delay para sincronizar com o som
    setTimeout(() => {
      onClick();
    }, 100);
  };

  return (
    <div
      className="flex flex-col items-center cursor-pointer group w-14 sm:w-16 lg:w-20"
      onClick={handleClick}
      onDoubleClick={handleClick}
    >
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center mb-1 sm:mb-2 group-hover:brightness-110 transition-all`}
      >
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
            <div className="absolute top-1 right-1 flex space-x-[1px]">
              <div className="w-[2px] h-[2px] sm:w-1 sm:h-1 bg-green-400 rounded-full"></div>
              <div className="w-[2px] h-[2px] sm:w-1 sm:h-1 bg-yellow-400 rounded-full"></div>
              <div className="w-[2px] h-[2px] sm:w-1 sm:h-1 bg-red-400 rounded-full"></div>
            </div>

            {/* Conteúdo principal dentro da pasta */}

            {/* Sombra interna para dar profundidade */}
            <div
              className="absolute inset-0 rounded-md pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.1) 100%)',
              }}
            ></div>

            {/* Brilho no canto superior esquerdo */}
            <div
              className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 rounded-br-full opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)' }}
            ></div>

            {/* Sombra no canto inferior direito */}
            <div
              className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 rounded-tl-full opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.5) 0%, transparent 70%)' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Label sem fundo branco */}
      <span className="text-xs sm:text-sm text-gray-900 font-medium text-center max-w-full truncate drop-shadow-sm">
        {label}
      </span>
    </div>
  );
}
