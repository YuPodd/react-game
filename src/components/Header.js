import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand">
            ROCK PAPER SCISSORS GAME
          </span>
          <div className="form-group">
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                disabled=""
                id="customSwitch2"
              ></input>
              <label className="custom-control-label" htmlFor="customSwitch2">
                Dark Mode
              </label>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
