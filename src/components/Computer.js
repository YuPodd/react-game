import React from "react";

export default function Computer({ computerChoice }) {
  const { name, icon } = computerChoice;
  return (
    <section className="computer_wrapper">
      <h4>Computer:</h4>
      <div className="computer_icons_wrapper"></div>
      <button
        type="button"
        value={name}
        className="computer_button btn btn-outline-info"
      >
        <img className={name} src={icon} alt={name} />
      </button>
    </section>
  );
}
