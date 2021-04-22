import React from "react";
import win from "../assets/win.mp4";
import lose from "../assets/lose.mp4";
import "animate.css/animate.css";

export default function Result({ startNewGame, score }) {
  let displayResult;
  const winResult = {
    src: win,
    text: "You Win!",
  };
  const loseResult = {
    src: lose,
    text: "You Lose",
  };

  Math.sign(score) === 1
    ? (displayResult = winResult)
    : (displayResult = loseResult);

  return (
    <section className="result_wrapper">
      <video autoPlay src={displayResult.src} className="result_video"></video>
      <h3 className="result_text animate__animated animate__fadeInDown">
        {displayResult.text}
      </h3>
      <button
        type="button"
        className="btn btn-outline-warning try_again"
        onClick={() => {
          startNewGame(0);
        }}
      >
        Try again
      </button>
    </section>
  );
}
