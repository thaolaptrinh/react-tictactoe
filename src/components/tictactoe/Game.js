import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWiner } from "../../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setX] = useState(true);
  const winner = calculateWiner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = isX ? "X" : "O";
    setBoard(boardCopy);
    setX(!isX);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setX(true);
  };

  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
      {winner && <div className="game-result">The winner is: {winner}</div>}
    </div>
  );
};

export default Game;
