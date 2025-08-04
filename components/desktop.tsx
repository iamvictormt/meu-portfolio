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
  ];

  return (
    <div className="absolute inset-0 p-2 sm:p-4">
      {/* 
        Grid responsivo:
        - Mobile (< 768px): 1 coluna
        - Tablet (768px - 1024px): 2 colunas
        - Desktop (> 1024px): 1 coluna
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-6 w-fit max-h-full overflow-y-auto">
        {desktopIcons.map((icon, index) => (
          <div key={icon.id}>
            <DesktopIcon {...icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
