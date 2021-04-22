import React, { useState, useEffect } from "react";
import useSound from 'use-sound';
import "../styles/style.css";
import User from "./User";
import Computer from "./Computer";
import Score from "./Score";
import { gameElements } from "./constants";
import CircleLoader from "react-spinners/CircleLoader";
import Result from "./Result";
import change from "../assets/compChoise.wav"

export default function Main() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const maxScore = 2;
  const [play] = useSound(change);

  useEffect(() => {
    compareElements();
  }, [userChoice, computerChoice]);

function startNewGame(score){
  setScore(score);
  setUserChoice("");
  setComputerChoice("");
}

  function getUserChoice(name) {
    setUserChoice(name);
    setLoading(true);
    setTimeout(() => {
      createComputerChoice();
    }, 500);
  }

  function createComputerChoice() {
    const randomElement = Math.floor(Math.random() * gameElements.length);
    play();
    setComputerChoice(gameElements[randomElement]);
    setLoading(false);
  }
  function compareElements() {
    let totalScore = 0;
    if (
      (computerChoice.name === "scissors" && userChoice === "rock") ||
      (computerChoice.name === "paper" && userChoice === "scissors") ||
      (computerChoice.name === "rock" && userChoice === "paper")
    ) {
      totalScore = 1;
    } else if (
      (computerChoice.name === "rock" && userChoice === "scissors") ||
      (computerChoice.name === "paper" && userChoice === "rock") ||
      (computerChoice.name === "scissors" && userChoice === "paper")
    ) {
      totalScore = -1;
    }
    setScore(score + totalScore);
  }

  return (
    <main>
      {score === maxScore || score === -maxScore ? (
        <Result startNewGame={startNewGame} score={score}/>
      ) : (
        <>
        <User getUserChoice={getUserChoice} />
          <section className="computer_wrapper">
            <h4>Computer:</h4>
            {loading ? (
              <div className="spinner">
                <CircleLoader color={"#36a4d7;"} loading={loading} size={50} />
              </div>
            ) : (
              <Computer computerChoice={computerChoice} />
            )}
          </section>
          <Score score={score} maxScore={maxScore} /> 
        </>
      )}
    </main>
  );
}
