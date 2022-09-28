import React from "react";
import "./switch.css";
function Switch({ isOn, handleToggle, onColor }) {
  return (
    <>
      <input
        className="react-switch-checkbox"
        checked={isOn}
        type="checkbox"
        onChange={handleToggle}
      ></input>
      <label
        style={{ background: isOn && onColor }}
        htmlFor={`react-switch-new`}
        className="react-switch-label"
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
}

export default Switch;
