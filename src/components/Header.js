import { useState } from "react";

export default function Header({changeTheme}) {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">ROCK PAPER SCISSORS GAME</span>
        <div className="form-group">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              disabled=""
              onClick={changeTheme}
              id="customSwitch"
            ></input>
            <label className="custom-control-label" htmlFor="customSwitch">
              Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
}
