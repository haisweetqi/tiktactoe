import React, { useState } from "react";
import "./Game.css";
import {
  checkColumns,
  checkDiagonalsLeft,
  checkDiagonalsRight,
  checkRow,
} from "../../utils";

const Cell = ({ value, onClick }) => <div onClick={onClick}>{value}</div>;

const Board = ({ board, onClick }) => (
  <div className="board">
    {board.map((row, i) => (
      <div key={i} className="board-row">
        {row.map((cell, j) => (
          <Cell key={j} value={cell} onClick={() => onClick(i, j)} />
        ))}
      </div>
    ))}
  </div>
);

const Game = () => {
  const [board, setBoard] = useState([
    // ["", "", ""],
    // ["", "", ""],
    // ["", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const handleClick = (i, j) => {
    // Don't allow moves on an occupied cell

    if (board[i][j] !== "" || winner !== "") return;

    // Make a copy of the board to update
    const newBoard = [...board];
    newBoard[i][j] = currentPlayer;
    setBoard(newBoard);

    // Check for win or draw
    const result = checkDiagonalsRight(newBoard, i, j);
    console.log(result);
    // setWinner(result);

    // Switch players
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    if (result) {
      setWinner(result);
    }
  };

  const checkWin = (board, i, j) => {
    // Check rows
    const row = checkRow(board, i, j);

    // Check columns
    const column = checkColumns(board, i, j);

    // Check diagonals left
    const left = checkDiagonalsLeft(board, i, j);

    // Check diagonals right
    const right = checkDiagonalsRight(board, i, j);

    // Check for draw
    if (board.flat().every((cell) => cell !== "")) {
      return "draw";
    }

    // No win or draw
    return "";
  };

  return (
    <div className="game">
      {/* {!winner && (
        <div>{winner ? "Its a draw!" : `Player ${winner} wins!`}</div>
      )} */}
      <Board board={board} onClick={handleClick} />
    </div>
  );
};

export default Game;
