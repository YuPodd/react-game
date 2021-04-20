import React, { useState, useEffect } from "react";
import User from "./User";
import Computer from "./Computer";
import Score from "./Score";
import { gameElements } from "./constants";

export default function Main() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
      
    compareElements();
  }, [userChoice, computerChoice]);

  function getUserChoice(name) {
    setUserChoice(name);
    createComputerChoice();
  }

  function createComputerChoice() {
    const randomElement = Math.floor(Math.random() * gameElements.length);
    setComputerChoice(gameElements[randomElement]);
  }
  function compareElements() {
    if (
      (computerChoice.name === "scissors" && userChoice === "rock") ||
      (computerChoice.name === "paper" && userChoice === "scissors") ||
      (computerChoice.name === "rock" && userChoice === "paper")
    ) {
      setScore(score + 1);
    } else if (
      (computerChoice.name === "rock" && userChoice === "scissors") ||
      (computerChoice.name === "paper" && userChoice === "rock") ||
      (computerChoice.name === "scissors" && userChoice === "paper")
    ) {
      setScore(score - 1);
    }
  }

  return (
    <main>
      <User getUserChoice={getUserChoice} />
      <Computer computerChoice={computerChoice} />
      <Score score={score} />
    </main>
  );
}
