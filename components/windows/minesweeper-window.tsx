"use client"

import { useState, useEffect, useCallback } from "react"
import { Bomb, Flag, Smile, Frown, Trophy, RefreshCw } from "lucide-react"

interface Cell {
  x: number
  y: number
  isMine: boolean
  isRevealed: boolean
  isFlagged: boolean
  neighborMines: number
}

export default function MinesweeperWindow() {
  const [gridSize] = useState(10)
  const [minesCount] = useState(15)
  const [board, setBoard] = useState<Cell[][]>([])
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [minesLeft, setMinesLeft] = useState(minesCount)
  const [flagMode, setFlagMode] = useState(false)

  const createBoard = useCallback(() => {
    // Inicializar tabuleiro vazio
    const newBoard: Cell[][] = []
    for (let y = 0; y < gridSize; y++) {
      const row: Cell[] = []
      for (let x = 0; x < gridSize; x++) {
        row.push({
          x,
          y,
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          neighborMines: 0,
        })
      }
      newBoard.push(row)
    }

    // Colocar minas aleatoriamente
    let minesPlaced = 0
    while (minesPlaced < minesCount) {
      const randomX = Math.floor(Math.random() * gridSize)
      const randomY = Math.floor(Math.random() * gridSize)

      if (!newBoard[randomY][randomX].isMine) {
        newBoard[randomY][randomX].isMine = true
        minesPlaced++
      }
    }

    // Calcular minas vizinhas
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        if (!newBoard[y][x].isMine) {
          let count = 0
          // Verificar os 8 vizinhos
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              const ny = y + dy
              const nx = x + dx
              if (ny >= 0 && ny < gridSize && nx >= 0 && nx < gridSize) {
                if (newBoard[ny][nx].isMine) count++
              }
            }
          }
          newBoard[y][x].neighborMines = count
        }
      }
    }

    setBoard(newBoard)
    setGameOver(false)
    setGameWon(false)
    setMinesLeft(minesCount)
  }, [gridSize, minesCount])

  useEffect(() => {
    createBoard()
  }, [createBoard])

  const revealCell = (x: number, y: number) => {
    if (gameOver || gameWon || board[y][x].isFlagged || board[y][x].isRevealed) return

    const newBoard = [...board.map((row) => [...row])]
    const cell = newBoard[y][x]

    if (cell.isMine) {
      // Game Over
      cell.isRevealed = true
      setGameOver(true)
      // Revelar todas as minas
      newBoard.forEach((row) => {
        row.forEach((c) => {
          if (c.isMine) c.isRevealed = true
        })
      })
      setBoard(newBoard)
      return
    }

    // Revelar célula
    cell.isRevealed = true

    // Se não tiver minas vizinhas, revelar vizinhos recursivamente
    if (cell.neighborMines === 0) {
      const queue: [number, number][] = [[x, y]]
      while (queue.length > 0) {
        const [currX, currY] = queue.shift()!

        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const ny = currY + dy
            const nx = currX + dx

            if (ny >= 0 && ny < gridSize && nx >= 0 && nx < gridSize) {
              const neighbor = newBoard[ny][nx]
              if (!neighbor.isRevealed && !neighbor.isFlagged && !neighbor.isMine) {
                neighbor.isRevealed = true
                if (neighbor.neighborMines === 0) {
                  queue.push([nx, ny])
                }
              }
            }
          }
        }
      }
    }

    setBoard(newBoard)
    checkWin(newBoard)
  }

  const flagCell = (x: number, y: number, e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    if (gameOver || gameWon || board[y][x].isRevealed) return

    const newBoard = [...board.map((row) => [...row])]
    const cell = newBoard[y][x]

    if (cell.isFlagged) {
      cell.isFlagged = false
      setMinesLeft((prev) => prev + 1)
    } else {
      if (minesLeft > 0) {
        cell.isFlagged = true
        setMinesLeft((prev) => prev - 1)
      }
    }

    setBoard(newBoard)
    checkWin(newBoard)
  }

  const handleCellClick = (x: number, y: number) => {
    if (flagMode) {
      flagCell(x, y)
    } else {
      revealCell(x, y)
    }
  }

  const checkWin = (currentBoard: Cell[][]) => {
    let unrevealedSafeCells = 0
    currentBoard.forEach((row) => {
      row.forEach((cell) => {
        if (!cell.isMine && !cell.isRevealed) {
          unrevealedSafeCells++
        }
      })
    })

    if (unrevealedSafeCells === 0) {
      setGameWon(true)
    }
  }

  const getNumberColor = (num: number) => {
    switch (num) {
      case 1:
        return "text-blue-600 font-bold"
      case 2:
        return "text-green-600 font-bold"
      case 3:
        return "text-red-600 font-bold"
      case 4:
        return "text-purple-600 font-bold"
      case 5:
        return "text-maroon-600 font-bold"
      case 6:
        return "text-teal-600 font-bold"
      case 7:
        return "text-black font-bold"
      case 8:
        return "text-gray-600 font-bold"
      default:
        return ""
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4 font-mono">
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold text-gray-800 tracking-wider">CAMPO MINADO</h2>
        <p className="text-xs text-gray-500">Evite as minas terrestres!</p>
      </div>

      {/* Painel de Controle */}
      <div className="bg-gray-200 p-3 rounded-lg border-2 border-gray-400 flex items-center justify-between w-full max-w-[320px] shadow-inner">
        <div className="bg-black text-red-500 px-2 py-1 rounded text-xl font-bold min-w-[45px] text-center border border-gray-600">
          {String(minesLeft).padStart(3, "0")}
        </div>

        <button
          onClick={createBoard}
          className="p-2 bg-gray-300 border-2 border-gray-100 border-r-gray-500 border-b-gray-500 active:border-gray-500 active:border-r-gray-100 active:border-b-gray-100 rounded flex items-center justify-center"
        >
          {gameOver ? (
            <Frown className="w-6 h-6 text-yellow-600" />
          ) : gameWon ? (
            <Trophy className="w-6 h-6 text-yellow-600" />
          ) : (
            <Smile className="w-6 h-6 text-yellow-600" />
          )}
        </button>

        <button
          onClick={() => setFlagMode(!flagMode)}
          className={`p-2 rounded border-2 flex items-center gap-1 text-xs ${
            flagMode
              ? "bg-red-100 border-red-500 text-red-700 font-bold"
              : "bg-gray-300 border-gray-400 text-gray-700"
          }`}
          title={flagMode ? "Modo Bandeira Ativo" : "Modo Revelar Ativo"}
        >
          <Flag className={`w-4 h-4 ${flagMode ? "text-red-600" : "text-gray-600"}`} />
          <span className="hidden sm:inline">{flagMode ? "Bandeira" : "Revelar"}</span>
        </button>
      </div>

      {/* Grade do Jogo */}
      <div
        className="bg-gray-300 p-2 rounded-lg border-4 border-gray-400 shadow-lg select-none touch-none"
        onContextMenu={(e) => e.preventDefault()}
      >
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          }}
        >
          {board.map((row, y) =>
            row.map((cell, x) => (
              <div
                key={`${x}-${y}`}
                onClick={() => handleCellClick(x, y)}
                onContextMenu={(e) => flagCell(x, y, e)}
                className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-sm cursor-pointer select-none transition-all ${
                  cell.isRevealed
                    ? "bg-gray-100 border border-gray-300"
                    : "bg-gray-200 border-2 border-gray-100 border-r-gray-500 border-b-gray-500 active:bg-gray-300"
                }`}
              >
                {cell.isRevealed ? (
                  cell.isMine ? (
                    <Bomb className="w-4 h-4 text-black fill-red-500" />
                  ) : cell.neighborMines > 0 ? (
                    <span className={getNumberColor(cell.neighborMines)}>{cell.neighborMines}</span>
                  ) : null
                ) : cell.isFlagged ? (
                  <Flag className="w-4 h-4 text-red-600 fill-red-200" />
                ) : null}
              </div>
            )),
          )}
        </div>
      </div>

      {/* Mensagem de Status */}
      {gameOver && <p className="text-red-600 font-bold text-sm animate-bounce">BOOM! Você perdeu.</p>}
      {gameWon && <p className="text-green-600 font-bold text-sm animate-bounce">Parabéns! Você venceu! 🎉</p>}

      {/* Instrução */}
      <p className="text-[10px] text-gray-500 text-center mt-2 max-w-[280px]">
        Dica: Toque para revelar. Ative o modo "Bandeira" para marcar minas, ou clique com o botão direito no desktop.
      </p>
    </div>
  )
}
