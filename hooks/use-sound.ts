"use client"

import { useCallback, useRef } from "react"

export function useSound() {
  const audioContextRef = useRef<AudioContext | null>(null)

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    return audioContextRef.current
  }, [])

  const playTone = useCallback(
    (frequency: number, duration: number, type: OscillatorType = "sine", volume = 0.1) => {
      try {
        const audioContext = getAudioContext()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)
        oscillator.type = type

        gainNode.gain.setValueAtTime(0, audioContext.currentTime)
        gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration)

        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + duration)
      } catch (error) {
        console.log("Audio not supported")
      }
    },
    [getAudioContext],
  )

  const playSequence = useCallback(
    (notes: { frequency: number; duration: number; delay: number; type?: OscillatorType; volume?: number }[]) => {
      notes.forEach((note, index) => {
        setTimeout(() => {
          playTone(note.frequency, note.duration, note.type || "sine", note.volume || 0.1)
        }, note.delay)
      })
    },
    [playTone],
  )

  const playFolderSound = useCallback(() => {
    // Som de "hello" amigável - tom ascendente (mesmo som para todas as pastas)
    const helloSequence = [
      { frequency: 523, duration: 0.2, delay: 0, type: "sine" as OscillatorType, volume: 0.1 }, // C5
      { frequency: 659, duration: 0.2, delay: 200, type: "sine" as OscillatorType, volume: 0.1 }, // E5
      { frequency: 784, duration: 0.3, delay: 400, type: "sine" as OscillatorType, volume: 0.12 }, // G5
    ]
    playSequence(helloSequence)
  }, [playSequence])

  // Usar o mesmo som para todas as pastas
  const playWorksSound = playFolderSound
  const playContactSound = playFolderSound
  const playResumeSound = playFolderSound
  const playProfileSound = playFolderSound
  const playProjectsSound = playFolderSound
  const playAboutSound = playFolderSound
  const playSkillsSound = playFolderSound
  const playBlogSound = playFolderSound
  const playCertificatesSound = playFolderSound

  const playWindowOpenSound = useCallback(() => {
    // Som clássico de abertura do Windows
    const windowSequence = [
      { frequency: 523, duration: 0.1, delay: 0, type: "sine" as OscillatorType, volume: 0.08 },
      { frequency: 659, duration: 0.1, delay: 100, type: "sine" as OscillatorType, volume: 0.08 },
      { frequency: 784, duration: 0.15, delay: 200, type: "sine" as OscillatorType, volume: 0.1 },
    ]
    playSequence(windowSequence)
  }, [playSequence])

  const playWindowCloseSound = useCallback(() => {
    // Som de fechamento - descendente
    const closeSequence = [
      { frequency: 784, duration: 0.1, delay: 0, type: "sine" as OscillatorType, volume: 0.08 },
      { frequency: 659, duration: 0.1, delay: 100, type: "sine" as OscillatorType, volume: 0.06 },
      { frequency: 523, duration: 0.15, delay: 200, type: "sine" as OscillatorType, volume: 0.04 },
    ]
    playSequence(closeSequence)
  }, [playSequence])

  return {
    playWorksSound,
    playContactSound,
    playResumeSound,
    playProfileSound,
    playProjectsSound,
    playAboutSound,
    playSkillsSound,
    playBlogSound,
    playCertificatesSound,
    playFolderSound,
    playWindowOpenSound,
    playWindowCloseSound,
  }
}
