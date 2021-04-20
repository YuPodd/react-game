import React, { useState } from "react";
import User from "./User";
import Computer from "./Computer";
import Score from "./Score";
import {gameElements} from "./constants"

export default function Main() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  function getUserChoice(name) {
    setUserChoice(name);
    createComputerChoice();
  }
  function createComputerChoice() {
    const randomElement = Math.floor(Math.random() * gameElements.length);
    setComputerChoice(gameElements[randomElement]);
   }

  return (
    <main>
        {userChoice}
      <User getUserChoice={getUserChoice} />
     {userChoice !== '' ? <Computer computerChoice ={computerChoice}/> : <p></p> } 
      <Score />
    </main>
  );
}
