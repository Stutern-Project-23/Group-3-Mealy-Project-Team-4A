import React from "react";
import "../styles/buttons.css";
//import { getByText } from "@testing-library/react";

function ButtonLarge({ text }) {
  return (
    <button type="submit" className="button-large">
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
