import React, { useState, useEffect } from "react";
import "../styles/style.css"
import User from "./User";
import Computer from "./Computer";
import Score from "./Score";
import { gameElements } from "./constants";
import CircleLoader from "react-spinners/CircleLoader";

export default function Main() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#36a4d7;");

  useEffect(() => {
    compareElements();
  }, [userChoice, computerChoice]);

  function getUserChoice(name) {
    setUserChoice(name);
    setLoading(true);
    setTimeout(() => {
        createComputerChoice();
      }, 500);
  }

  function createComputerChoice() {
    const randomElement = Math.floor(Math.random() * gameElements.length);
    setComputerChoice(gameElements[randomElement]);
    setLoading(false);
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
      <section className="computer_wrapper">
      <h4>Computer:</h4>
      {loading ? <CircleLoader color={color} loading={loading} size={50} /> : <Computer computerChoice={computerChoice} /> }
      </section>
      <Score score={score} />
     </main>
  );
}
