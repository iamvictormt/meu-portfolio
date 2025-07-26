"use client"

import { useState } from "react"
import { useSound } from "@/hooks/use-sound"

interface TutorialModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TutorialModal({ isOpen, onClose }: TutorialModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const { playFolderSound } = useSound()

  const steps = [
    {
      title: "👋 Bem-vindo ao meu Portfólio!",
      content:
        "Olá! Sou Victor Torres, desenvolvedor full-stack. Este é meu portfólio interativo inspirado no Windows. Vou te mostrar como navegar por aqui!",
      highlight: null,
      position: "center",
    },
    {
      title: "📁 Explore as Pastas",
      content:
        "Clique nas pastas do lado esquerdo para abrir diferentes seções do meu portfólio. Cada pasta contém informações específicas sobre mim e meu trabalho.",
      highlight: "desktop-icons",
      position: "right",
    },
    {
      title: "🖱️ Janelas Interativas",
      content:
        "As janelas podem ser arrastadas pela barra superior e fechadas com o botão vermelho. Você pode ter várias janelas abertas ao mesmo tempo!",
      highlight: null,
      position: "center",
    },
    {
      title: "📋 Barra de Tarefas",
      content:
        "Na parte inferior, você encontra as janelas abertas (esquerda) e meus links sociais (centro). Clique nos ícones sociais para me encontrar nas redes!",
      highlight: "taskbar",
      position: "top",
    },
    {
      title: "🎵 Experiência Sonora",
      content:
        "Cada pasta tem seu próprio som quando clicada. Mantenha o áudio ligado para uma experiência mais imersiva!",
      highlight: null,
      position: "center",
    },
    {
      title: "🚀 Pronto para Explorar!",
      content:
        "Agora você já sabe como navegar! Explore minhas habilidades, projetos, certificações e muito mais. Divirta-se conhecendo meu trabalho!",
      highlight: null,
      position: "center",
    },
  ]

  const currentStepData = steps[currentStep]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      playFolderSound()
      setCurrentStep(currentStep + 1)
    } else {
      handleClose()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      playFolderSound()
      setCurrentStep(currentStep - 1)
    }
  }

  const handleClose = () => {
    localStorage.setItem("portfolio-tutorial-seen", "true")
    onClose()
  }

  const skipTutorial = () => {
    playFolderSound()
    handleClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]" onClick={handleClose} />

      {/* Highlight areas */}
      {currentStepData.highlight === "desktop-icons" && (
        <div className="fixed top-0 left-0 w-32 h-full bg-white bg-opacity-10 border-2 border-blue-400 rounded-lg z-[101] pointer-events-none animate-pulse" />
      )}

      {currentStepData.highlight === "taskbar" && (
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-white bg-opacity-10 border-2 border-blue-400 rounded-t-lg z-[101] pointer-events-none animate-pulse" />
      )}

      {/* Modal */}
      <div
        className={`fixed z-[102] bg-white rounded-2xl shadow-2xl border-4 border-gray-800 p-6 max-w-md w-[90%] ${
          currentStepData.position === "center"
            ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            : currentStepData.position === "right"
              ? "top-1/2 right-8 transform -translate-y-1/2"
              : currentStepData.position === "top"
                ? "top-8 left-1/2 transform -translate-x-1/2"
                : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <button onClick={skipTutorial} className="text-gray-500 hover:text-gray-700 text-sm font-medium">
            Pular Tutorial
          </button>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">{currentStepData.title}</h2>
          <p className="text-gray-600 leading-relaxed">{currentStepData.content}</p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>
              Passo {currentStep + 1} de {steps.length}
            </span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentStep === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            ← Anterior
          </button>

          <div className="flex space-x-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            {currentStep === steps.length - 1 ? "Finalizar" : "Próximo →"}
          </button>
        </div>
      </div>
    </>
  )
}
