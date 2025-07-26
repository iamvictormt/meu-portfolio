import DesktopIcon from "./desktop-icon"

interface DesktopProps {
  onOpenWindow: (windowId: string) => void
}

export default function Desktop({ onOpenWindow }: DesktopProps) {
  const desktopIcons = [
    {
      id: "about",
      label: "about",
      icon: "folder",
      color: "bg-yellow-400",
      onClick: () => onOpenWindow("about"),
    },
    {
      id: "works",
      label: "works",
      icon: "folder",
      color: "bg-yellow-400",
      onClick: () => onOpenWindow("works"),
    },
    {
      id: "skills",
      label: "skills",
      icon: "folder",
      color: "bg-yellow-400",
      onClick: () => onOpenWindow("skills"),
    },
    {
      id: "projects",
      label: "projects",
      icon: "folder",
      color: "bg-yellow-400",
      onClick: () => onOpenWindow("projects"),
    },
    {
      id: "blog",
      label: "blog",
      icon: "folder",
      color: "bg-yellow-400",
      onClick: () => onOpenWindow("blog"),
    },
    // {
    //   id: "certificates",
    //   label: "certificates",
    //   icon: "folder",
    //   color: "bg-yellow-400",
    //   onClick: () => onOpenWindow("certificates"),
    // },
    {
      id: "contact",
      label: "contact",
      icon: "folder",
      color: "bg-yellow-400",
      onClick: () => onOpenWindow("contact"),
    },
    {
      id: "resume",
      label: "resume",
      icon: "folder",
      color: "bg-yellow-400",
      onClick: () => onOpenWindow("resume"),
    },
  ]

  return (
    <div className="absolute inset-0 p-2 sm:p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-fit max-h-full overflow-y-auto">
        {desktopIcons.map((icon, index) => (
          <div key={icon.id}>
            <DesktopIcon {...icon} />
          </div>
        ))}
      </div>
    </div>
  )
}
