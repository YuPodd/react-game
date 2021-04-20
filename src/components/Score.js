import React from 'react';

export default function Score({score}){
    return(
        <section className="score_wrapper">
            <h4>Score:</h4>
            <div className="score bg-light">{score}</div>
          </section>
    )
}