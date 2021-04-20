import React from "react";
import {gameElements} from "./constants"

export default function User({getUserChoice}) {
  
  const gameButtons = gameElements.map(({name, icon}) => {
      return (
        <button
          type="button"
          value={name}
          className="user_button btn btn-outline-warning"
          key={name}
        >
          <img
            src={icon}
            className={name}
            alt={name}
            key={name}
            onClick={() => {
              getUserChoice(name);
            }}
          />
        </button>
      );
    });

  return (
    <section className="user_wrapper">
      <h4>You:</h4>
      <div className="user_icons_wrapper">{gameButtons}</div>
    </section>
  );
};
