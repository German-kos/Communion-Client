import { IInputComponent } from "interfaces/InputComponentInterface";
import { ITextAreaComponent } from "interfaces/TextAreaComponentInterface";
import React from "react";
import "components/common/input/input.css";

function TextArea({ preset, name, placeholder, rows }: ITextAreaComponent) {
  const resize = { resize: "none" };
  return (
    <textarea
      name={name}
      className="customInput"
      style={preset}
      placeholder={placeholder}
      rows={rows}
    ></textarea>
  );
}

export default TextArea;
