import React from 'react';
import win from '../assets/win.mp4';
import "animate.css/animate.css";


export default function Win({startNewGame}){
    return(
        <section className="result_wrapper">
        <video autoPlay src={win} className="win"></video>
        <h3 className="win_text animate__animated animate__fadeInDown">You Win!</h3>
        <button type="button" className="btn btn-outline-warning try_again" onClick={() => {
            startNewGame(0);
            }}>Try again</button>
          </section>
    )
}