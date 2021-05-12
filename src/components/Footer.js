import React, { Component } from "react";
import rs_logo from "../assets/rs_logo.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="footer py-3 fixed-bottom bg-light">
        <div className="footer_wrapper">
          <a href="https://github.com/YuPodd">
            © 2021 Copyright: Yuliya Paddubnik
          </a>
          <a href="https://rs.school/">
            <img src={rs_logo} className="rs_logo" alt="rs" />;
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
