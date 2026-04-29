import DesktopIcon from './desktop-icon';

interface DesktopProps {
  onOpenWindow: (windowId: string) => void;
}

export default function Desktop({ onOpenWindow }: DesktopProps) {
  const desktopIcons = [
    {
      id: 'about',
      label: 'Sobre mim',
      icon: 'folder',
      color: 'bg-yellow-400',
      onClick: () => onOpenWindow('about'),
    },
    {
      id: 'skills',
      label: 'Habilidades',
      icon: 'folder',
      color: 'bg-yellow-400',
      onClick: () => onOpenWindow('skills'),
    },
    {
      id: 'projects',
      label: 'Projetos',
      icon: 'folder',
      color: 'bg-yellow-400',
      onClick: () => onOpenWindow('projects'),
    },
    {
      id: 'blog',
      label: 'Blog',
      icon: 'folder',
      color: 'bg-yellow-400',
      onClick: () => onOpenWindow('blog'),
    },
    {
      id: 'resume',
      label: 'Resumo',
      icon: 'folder',
      color: 'bg-yellow-400',
      onClick: () => onOpenWindow('resume'),
    },
    {
      id: 'contact',
      label: 'Contato',
      icon: 'folder',
      color: 'bg-yellow-400',
      onClick: () => onOpenWindow('contact'),
    },
    {
      id: 'minesweeper',
      label: 'Campo Minado',
      icon: 'folder',
      color: 'bg-yellow-400',
      onClick: () => onOpenWindow('minesweeper'),
    },
    {
      id: 'snake',
      label: 'Snake',
      icon: 'folder',
      color: 'bg-yellow-400',
      onClick: () => onOpenWindow('snake'),
    },
  ];

  return (
    <div className="absolute inset-0 p-2 sm:p-4 pb-14 sm:pb-20 lg:pb-24">
      {/* 
        Grid responsivo:
        - Mobile (< 768px): 1 coluna
        - Tablet (768px - 1024px): 2 colunas
        - Desktop (> 1024px): 1 coluna
      */}
      <div className="flex flex-col flex-wrap gap-4 max-h-full content-start">
        {desktopIcons.map((icon) => (
          <div key={icon.id} className="w-20 sm:w-24 flex-shrink-0">
            <DesktopIcon {...icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
