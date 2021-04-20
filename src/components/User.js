import React, { useState } from "react";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";

export default function User({getUserChoice}) {
  const gameElements = [{ name: "rock", icon: rock }, { name: "paper", icon: paper }, { name: "scissors", icon: scissors }];
  const gameButtons = gameElements.map(({name, icon}) => {
      return (
        <button
          type="button"
          value={name}
          className="user_button btn btn-outline-warning"
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
