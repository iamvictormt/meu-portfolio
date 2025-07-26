"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useSound } from "@/hooks/use-sound"

interface WindowProps {
  id: string
  title: string
  children: React.ReactNode
  isActive: boolean
  onClose: () => void
  onFocus: () => void
  initialPosition: { x: number; y: number }
}

export default function Window({ title, children, isActive, onClose, onFocus, initialPosition }: WindowProps) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef<HTMLDivElement>(null)
  const { playWindowCloseSound } = useSound()

  const handleClose = () => {
    playWindowCloseSound()
    setTimeout(() => {
      onClose()
    }, 300) // Delay para o som tocar antes de fechar
  }

  const handleFocus = () => {
    onFocus()
  }

  // Ajustar posição inicial baseada no tamanho da tela
  useEffect(() => {
    const adjustPosition = () => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      let adjustedX = initialPosition.x
      let adjustedY = initialPosition.y

      // Mobile: centralizar mais
      if (screenWidth < 768) {
        adjustedX = Math.max(10, Math.min(adjustedX, screenWidth - 340))
        adjustedY = Math.max(10, Math.min(adjustedY, screenHeight - 400))
      }
      // Tablet
      else if (screenWidth < 1024) {
        adjustedX = Math.max(20, Math.min(adjustedX, screenWidth - 620))
        adjustedY = Math.max(20, Math.min(adjustedY, screenHeight - 500))
      }
      // Desktop
      else {
        adjustedX = Math.max(50, Math.min(adjustedX, screenWidth - 650))
        adjustedY = Math.max(50, Math.min(adjustedY, screenHeight - 600))
      }

      setPosition({ x: adjustedX, y: adjustedY })
    }

    adjustPosition()
    window.addEventListener("resize", adjustPosition)
    return () => window.removeEventListener("resize", adjustPosition)
  }, [initialPosition])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains("drag-handle")) {
      setIsDragging(true)
      const rect = windowRef.current?.getBoundingClientRect()
      if (rect) {
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
      handleFocus()
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.x
        const newY = e.clientY - dragOffset.y

        // Limitar movimento dentro da tela
        const maxX = window.innerWidth - (windowRef.current?.offsetWidth || 400)
        const maxY = window.innerHeight - (windowRef.current?.offsetHeight || 300)

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragOffset])

  return (
    <div
      ref={windowRef}
      className={`absolute bg-white border-4 border-gray-800 rounded-2xl shadow-2xl ${isActive ? "z-50" : "z-40"}`}
      style={{
        left: position.x,
        top: position.y,
        cursor: isDragging ? "grabbing" : "default",
        // Responsivo: diferentes tamanhos por breakpoint
        width: "clamp(300px, 90vw, 800px)",
        height: "clamp(400px, 80vh, 600px)",
      }}
      onClick={handleFocus}
    >
      {/* Title Bar */}
      <div
        className="text-white px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between cursor-grab active:cursor-grabbing drag-handle rounded-t-xl flex-shrink-0"
        style={{ background: "#4a5568" }}
        onMouseDown={handleMouseDown}
      >
        <span className="font-mono text-sm sm:text-lg font-bold text-white truncate pr-2">{title}</span>
        <button
          onClick={handleClose}
          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl transition-all hover:brightness-110 flex-shrink-0"
          style={{ background: "#dc2626" }}
        >
          ×
        </button>
      </div>

      {/* Window Content */}
      <div className="p-3 sm:p-6 lg:p-8 bg-gray-50 overflow-hidden" style={{ height: "calc(100% - 60px)" }}>
        {children}
      </div>
    </div>
  )
}
