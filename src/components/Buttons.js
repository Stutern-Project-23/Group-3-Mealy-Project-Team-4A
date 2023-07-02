import React from "react";
import "../styles/buttons.css";
// import { getByText } from "@testing-library/rea

function ButtonLarge({ text,classname,onclick }) {
  return (
    <button type="submit" onClick={onclick} className={`button-large ${classname}`}>
      {text}
    </button>
  );
}

export function ButtonPill({ text, className }) {
  return (
    <button type="submit" className={`${className}  button-pill`}>
      {text}
    </button>
  );
}

export default ButtonLarge;
