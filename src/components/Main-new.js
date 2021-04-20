import React, { useState } from "react";
import User from "./User";
import Computer from "./Computer";
import Score from "./Score";

export default function Main() {
  const [userChoice, setUserChoice] = useState('');
  function getUserChoice(name) {
    setUserChoice(name);
  }
  return (
    <div className="wrapper">
        {userChoice}
      <User getUserChoice={getUserChoice} />
      <Computer />
      <Score />
    </div>
  );
}
