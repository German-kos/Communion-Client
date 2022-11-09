import "components/common/input/input.css";
import { IInputComponent } from "interfaces/InputComponentInterface";
import "components/sign_in_form/signInForm.css";
import { inputPcPresetTest } from "presets/custom_input_presets/input_pc_test";

function Input({ preset, placeholder, name }: IInputComponent) {
  return (
    <input
      className="customInput"
      name={name}
      placeholder={placeholder}
      style={preset}
    />
  );
}

export default Input;
