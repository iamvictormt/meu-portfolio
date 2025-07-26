"use client"

import { useState } from "react"
import { useSound } from "@/hooks/use-sound"

interface HelpButtonProps {
  onOpenTutorial: () => void
}

export default function HelpButton({ onOpenTutorial }: HelpButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { playFolderSound } = useSound()

  const handleClick = () => {
    playFolderSound()
    onOpenTutorial()
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        title="Tutorial - Como usar o portfólio"
      >
        <span className="text-xl">❓</span>
      </button>

      {isHovered && (
        <div className="absolute right-0 top-14 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Tutorial - Como usar
          <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      )}
    </div>
  )
}
