"use client"

import Window from "./window"
import WorksWindow from "./windows/works-window"
import ProjectsWindow from "./windows/projects-window"
import ContactWindow from "./windows/contact-window"
import ResumeWindow from "./windows/resume-window"
import AboutWindow from "./windows/about-window"
import SkillsWindow from "./windows/skills-window"
import BlogWindow from "./windows/blog-window"
import CertificatesWindow from "./windows/certificates-window"

interface WindowManagerProps {
  openWindows: string[]
  activeWindow: string | null
  onCloseWindow: (windowId: string) => void
  onFocusWindow: (windowId: string) => void
}

export default function WindowManager({ openWindows, activeWindow, onCloseWindow, onFocusWindow }: WindowManagerProps) {
  const getWindowContent = (windowId: string) => {
    switch (windowId) {
      case "works":
        return <WorksWindow />
      case "projects":
        return <ProjectsWindow />
      case "contact":
        return <ContactWindow />
      case "resume":
        return <ResumeWindow />
      case "about":
        return <AboutWindow />
      case "skills":
        return <SkillsWindow />
      case "blog":
        return <BlogWindow />
      case "certificates":
        return <CertificatesWindow />
      default:
        return <div>Window not found</div>
    }
  }

  const getWindowTitle = (windowId: string) => {
    switch (windowId) {
      case "profile":
        return "C:\\VICTOR\\profile"
      case "works":
        return "C:\\VICTOR\\works"
      case "projects":
        return "C:\\VICTOR\\projects"
      case "contact":
        return "C:\\VICTOR\\contact"
      case "resume":
        return "C:\\VICTOR\\resume"
      case "about":
        return "C:\\VICTOR\\about"
      case "skills":
        return "C:\\VICTOR\\skills"
      case "blog":
        return "C:\\VICTOR\\blog"
      case "certificates":
        return "C:\\VICTOR\\certificates"
      default:
        return "Unknown"
    }
  }

  const getInitialPosition = (windowId: string, index: number) => {
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1024
    const screenHeight = typeof window !== "undefined" ? window.innerHeight : 768

    // Posições diferentes baseadas no tamanho da tela
    if (screenWidth < 768) {
      // Mobile: posições mais centralizadas
      return {
        x: Math.max(5, 20 + index * 15),
        y: Math.max(5, 30 + index * 15),
      }
    } else if (screenWidth < 1024) {
      // Tablet: posições intermediárias
      return {
        x: Math.max(20, 50 + index * 25),
        y: Math.max(20, 50 + index * 25),
      }
    } else {
      // Desktop: posições originais
      return {
        x: 100 + index * 30,
        y: 50 + index * 30,
      }
    }
  }

  return (
    <>
      {openWindows.map((windowId, index) => (
        <Window
          key={windowId}
          id={windowId}
          title={getWindowTitle(windowId)}
          isActive={activeWindow === windowId}
          onClose={() => onCloseWindow(windowId)}
          onFocus={() => onFocusWindow(windowId)}
          initialPosition={getInitialPosition(windowId, index)}
        >
          {getWindowContent(windowId)}
        </Window>
      ))}
    </>
  )
}
