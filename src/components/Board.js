import React, { useState } from "react";
import "./Board.css";
function Board() {
  const [board, setBoard] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);

  function handleClick(row, col) {
    // Don't allow moves if the game is over
    if (gameOver) return;

    // Make a move
    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    // Check for a win
    if (checkForWin(newBoard)) {
      setGameOver(true);
      return;
    }

    // Switch players
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function checkForWin(boards) {
    // Check columns
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (boards[i][j] && boards[i][j] === boards[i + 1][j + 1]) {
          return true;
        }
      }
    }
    // Check columns
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (boards[i][j] && boards[i][j] === boards[i][j + 1]) {
          return true;
        }
      }
    }
    // Check columns
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (boards[i][j] && boards[i][j] === boards[i + 1][j]) {
          return true;
        }
      }
    }
    // Check columns
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (boards[i][j] && boards[i][j] === boards[i + 1][j - 1]) {
          return true;
        }
      }
    }

    // Check diagonals

    return false;
  }

  const handleReset = () => {
    setBoard([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ]);
  };

  return (
    <div className="board">
      {board.map((rows, rowIndex) => (
        <div key={rowIndex} className="row">
          {rows.map((col, colIndex) => (
            <div
              key={colIndex}
              className="cell"
              onClick={() => handleClick(rowIndex, colIndex)}
            >
              {col}
            </div>
          ))}
        </div>
      ))}
      <button className="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Board;
