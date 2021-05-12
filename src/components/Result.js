import React, { useEffect } from "react";
import win from "../assets/win.mp4";
import lose from "../assets/lose.mp4";
import winSound from "../assets/winSound.mp3";
import loseSound from "../assets/loseSound.mp3";
import "animate.css/animate.css";
import useSound from "use-sound";

export default function Result({ startNewGame, score }) {
  const [lose_play] = useSound(loseSound);
  const [win_play] = useSound(winSound);

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

  useEffect(() => {
    displayResult === winResult ? win_play() : lose_play();
  }, [displayResult, win_play, lose_play]);

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
