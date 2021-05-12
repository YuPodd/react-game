import React from 'react';

export default function Score({score, maxScore}){
    return(
        <section className="score_wrapper">
            <h4>Score:</h4>
            <p>Max Score is {maxScore} points</p>
            <div className="score">{score}</div>
          </section>
    )
}