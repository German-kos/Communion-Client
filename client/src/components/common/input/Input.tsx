import "components/common/input/input.css";
import { IInputComponent } from "interfaces/InputComponentInterface";
import "components/sign_in_form/signInForm.css";

function Input({ preset, placeholder, name }: IInputComponent) {
  return (
    <input
      className="customInput"
      name={name}
      placeholder={placeholder}
      style={{
        width: preset.width.toString() + "px",
        fontSize: preset.fontSize.toString() + "px",
        paddingLeft: preset.paddingLeft.toString() + "px",
      }}
    />
  );
}

export default Input;
