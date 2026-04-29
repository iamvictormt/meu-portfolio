"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Trophy, Play, RotateCcw, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react"

interface Point {
  x: number
  y: number
}

export default function SnakeWindow() {
  const GRID_SIZE = 20
  const INITIAL_SNAKE: Point[] = [
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 },
  ]
  const INITIAL_DIRECTION = { x: 0, y: -1 } // Movendo para cima

  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE)
  const [food, setFood] = useState<Point>({ x: 5, y: 5 })
  const [direction, setDirection] = useState<Point>(INITIAL_DIRECTION)
  const [gameOver, setGameOver] = useState(false)
  const [isGameActive, setIsGameActive] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Carregar recorde do localStorage
  useEffect(() => {
    const savedScore = localStorage.getItem("snake-highscore")
    if (savedScore) {
      setHighScore(Number(savedScore))
    }
  }, [])

  // Gerar comida em posição aleatória
  const generateFood = useCallback((currentSnake: Point[]) => {
    let newFood: Point
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      }
      // Garantir que a comida não caia em cima da cobra
    } while (currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y))
    setFood(newFood)
  }, [])

  // Reiniciar jogo
  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE)
    setDirection(INITIAL_DIRECTION)
    setScore(0)
    setGameOver(false)
    setIsGameActive(true)
    generateFood(INITIAL_SNAKE)
  }, [generateFood])

  // Mover a cobra
  const moveSnake = useCallback(() => {
    if (gameOver || !isGameActive) return

    setSnake((prevSnake) => {
      const head = prevSnake[0]
      const newHead = {
        x: (head.x + direction.x + GRID_SIZE) % GRID_SIZE,
        y: (head.y + direction.y + GRID_SIZE) % GRID_SIZE,
      }

      // Verificar colisão com o próprio corpo
      if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true)
        setIsGameActive(false)
        if (score > highScore) {
          setHighScore(score)
          localStorage.setItem("snake-highscore", String(score))
        }
        return prevSnake
      }

      const newSnake = [newHead, ...prevSnake]

      // Verificar se comeu a comida
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((prev) => prev + 10)
        generateFood(newSnake)
      } else {
        newSnake.pop() // Remove a cauda
      }

      return newSnake
    })
  }, [direction, food, gameOver, isGameActive, score, highScore, generateFood])

  // Game loop
  useEffect(() => {
    if (isGameActive && !gameOver) {
      gameIntervalRef.current = setInterval(moveSnake, 150)
    }
    return () => {
      if (gameIntervalRef.current) clearInterval(gameIntervalRef.current)
    }
  }, [isGameActive, gameOver, moveSnake])

  // Lidar com controles do teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isGameActive) return

      // Impedir rolagem da página com as setas
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault()
      }

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          if (direction.y !== 1) setDirection({ x: 0, y: -1 })
          break
        case "ArrowDown":
        case "s":
        case "S":
          if (direction.y !== -1) setDirection({ x: 0, y: 1 })
          break
        case "ArrowLeft":
        case "a":
        case "A":
          if (direction.x !== 1) setDirection({ x: -1, y: 0 })
          break
        case "ArrowRight":
        case "d":
        case "D":
          if (direction.x !== -1) setDirection({ x: 1, y: 0 })
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [direction, isGameActive])

  // Controles Mobile/Interface
  const changeDirection = (newDir: Point) => {
    if (!isGameActive) return
    // Evitar que a cobra volte para trás
    if (newDir.x !== 0 && direction.x !== -newDir.x) {
      setDirection(newDir)
    }
    if (newDir.y !== 0 && direction.y !== -newDir.y) {
      setDirection(newDir)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-3 font-mono">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 tracking-wider">SNAKE GAME</h2>
        <p className="text-xs text-gray-500">Use as setas ou WASD</p>
      </div>

      {/* Placar */}
      <div className="flex justify-between w-full max-w-[240px] bg-gray-800 text-green-400 px-4 py-2 rounded-lg border border-gray-600 shadow-inner">
        <div className="text-center">
          <div className="text-[10px] uppercase opacity-70">Pontos</div>
          <div className="text-lg font-bold">{score}</div>
        </div>
        <div className="text-center">
          <div className="text-[10px] uppercase opacity-70 flex items-center gap-1">
            <Trophy className="w-3 h-3 text-yellow-500 inline" /> Recorde
          </div>
          <div className="text-lg font-bold text-yellow-500">{highScore}</div>
        </div>
      </div>

      {/* Tela do Jogo (Grade) */}
      <div className="relative bg-slate-900 p-1 rounded-lg border-4 border-slate-700 shadow-2xl aspect-square w-[240px] sm:w-[280px] max-h-[280px]">
        {!isGameActive && (
          <div className="absolute inset-0 bg-black/80 z-10 flex flex-col items-center justify-center rounded-md text-white p-4">
            {gameOver ? (
              <>
                <span className="text-red-500 font-bold text-lg mb-2 animate-pulse">FIM DE JOGO</span>
                <span className="text-sm text-gray-400 mb-4">Pontuação: {score}</span>
                <button
                  onClick={resetGame}
                  className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded flex items-center gap-2 transition-colors border-b-4 border-green-800 active:border-b-0 active:mt-1"
                >
                  <RotateCcw className="w-4 h-4" /> Tentar Novamente
                </button>
              </>
            ) : (
              <button
                onClick={resetGame}
                className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl flex items-center gap-2 transition-colors text-lg border-b-4 border-green-800 active:border-b-0 active:mt-1 shadow-lg"
              >
                <Play className="w-5 h-5 fill-white" /> COMEÇAR
              </button>
            )}
          </div>
        )}

        <div
          className="grid w-full h-full"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
            const x = index % GRID_SIZE
            const y = Math.floor(index / GRID_SIZE)
            const isSnake = snake.some((segment) => segment.x === x && segment.y === y)
            const isHead = snake[0]?.x === x && snake[0]?.y === y
            const isFood = food.x === x && food.y === y

            return (
              <div
                key={index}
                className={`w-full h-full rounded-sm ${
                  isHead
                    ? "bg-green-400 border border-green-600"
                    : isSnake
                      ? "bg-green-600"
                      : isFood
                        ? "bg-red-500 animate-pulse rounded-full"
                        : "bg-transparent"
                }`}
              />
            )
          })}
        </div>
      </div>

      {/* Controles na Tela (Mobile) */}
      <div className="grid grid-cols-3 gap-2 w-[150px] sm:hidden mt-2">
        <div></div>
        <button
          onClick={() => changeDirection({ x: 0, y: -1 })}
          className="p-2 bg-gray-300 border-b-4 border-gray-500 rounded-lg flex justify-center active:bg-gray-400 active:border-b-0 active:mt-1"
        >
          <ArrowUp className="w-5 h-5 text-gray-700" />
        </button>
        <div></div>

        <button
          onClick={() => changeDirection({ x: -1, y: 0 })}
          className="p-2 bg-gray-300 border-b-4 border-gray-500 rounded-lg flex justify-center active:bg-gray-400 active:border-b-0 active:mt-1"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={resetGame}
          className="p-2 bg-gray-400 border-b-4 border-gray-600 rounded-lg flex justify-center active:bg-gray-500 active:border-b-0 active:mt-1"
          title="Reiniciar"
        >
          <RotateCcw className="w-5 h-5 text-gray-800" />
        </button>
        <button
          onClick={() => changeDirection({ x: 1, y: 0 })}
          className="p-2 bg-gray-300 border-b-4 border-gray-500 rounded-lg flex justify-center active:bg-gray-400 active:border-b-0 active:mt-1"
        >
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </button>

        <div></div>
        <button
          onClick={() => changeDirection({ x: 0, y: 1 })}
          className="p-2 bg-gray-300 border-b-4 border-gray-500 rounded-lg flex justify-center active:bg-gray-400 active:border-b-0 active:mt-1"
        >
          <ArrowDown className="w-5 h-5 text-gray-700" />
        </button>
        <div></div>
      </div>
    </div>
  )
}
