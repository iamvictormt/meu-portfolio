"use client"

import { useState, useEffect } from "react"
import Desktop from "@/components/desktop"
import Taskbar from "@/components/taskbar"
import WindowManager from "@/components/window-manager"
import TutorialModal from "@/components/tutorial-modal"
import HelpButton from "@/components/help-button"

export default function Portfolio() {
  const [openWindows, setOpenWindows] = useState<string[]>([])
  const [activeWindow, setActiveWindow] = useState<string | null>(null)
  const [showTutorial, setShowTutorial] = useState(false)

  // Check if user has seen tutorial before
  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem("portfolio-tutorial-seen")
    if (!hasSeenTutorial) {
      // Show tutorial after a short delay for better UX
      setTimeout(() => {
        setShowTutorial(true)
      }, 1000)
    }
  }, [])

  const openWindow = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId])
    }
    setActiveWindow(windowId)
  }

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter((id) => id !== windowId))
    if (activeWindow === windowId) {
      const remainingWindows = openWindows.filter((id) => id !== windowId)
      setActiveWindow(remainingWindows.length > 0 ? remainingWindows[remainingWindows.length - 1] : null)
    }
  }

  const focusWindow = (windowId: string) => {
    setActiveWindow(windowId)
  }

  const openTutorial = () => {
    setShowTutorial(true)
  }

  const closeTutorial = () => {
    setShowTutorial(false)
  }

  return (
    <div className="h-screen w-full overflow-hidden relative" style={{ background: "#c8b99c" }}>
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,69,19,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,69,19,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
        }}
      />

      <Desktop onOpenWindow={openWindow} />

      <WindowManager
        openWindows={openWindows}
        activeWindow={activeWindow}
        onCloseWindow={closeWindow}
        onFocusWindow={focusWindow}
      />

      <Taskbar
        openWindows={openWindows}
        activeWindow={activeWindow}
        onFocusWindow={focusWindow}
        onOpenWindow={openWindow}
      />

      <HelpButton onOpenTutorial={openTutorial} />

      <TutorialModal isOpen={showTutorial} onClose={closeTutorial} />
    </div>
  )
}
