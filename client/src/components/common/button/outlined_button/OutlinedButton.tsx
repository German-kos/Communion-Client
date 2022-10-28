import "components/common/button/outlined_button/outlinedButton.css";
import { IButtonComponent } from "interfaces/ButtonComponentInterface";

import React from "react";

function OutlinedButton({ text, preset, type }: IButtonComponent) {
  return (
    <button
      className="outlinedButton"
      type={type}
      style={{
        width: preset.width.toString() + "px",
        fontSize: preset.fontSize.toString() + "px",
        padding: preset.padding.toString() + "px",
      }}
    >
      {text}
    </button>
  );
}

export default OutlinedButton;
