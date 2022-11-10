import "components/common/button/outlined_button/outlinedButton.css";
import { IButtonComponent } from "interfaces/ButtonComponentInterface";

import React from "react";

function OutlinedButton({ text, preset, type }: IButtonComponent) {
  return (
    <button className="outlinedButton" type={type} style={preset}>
      {text}
    </button>
  );
}

export default OutlinedButton;
