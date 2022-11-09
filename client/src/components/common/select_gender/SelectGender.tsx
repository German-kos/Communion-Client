import React from "react";
import "components/common/input/input.css";
import { IInputComponent } from "interfaces/InputComponentInterface";

function SelectGender({ preset, placeholder, name }: IInputComponent) {
  const genderSelect = ["Male", "Female", "Other", "Not specified"];

  return (
    <>
      <select
        id="gender"
        name={name}
        className="customInput"
        placeholder={placeholder}
        style={preset}
      >
        <option value="Not specified" placeholder="Select Gender">
          Select Gender...
        </option>
        {genderSelect.map((gender) => {
          if (gender === "Not Specified")
            return <option value={gender}>I'd rather not specify</option>;
          return <option value={gender}>{gender}</option>;
        })}
      </select>
    </>
  );
}

export default SelectGender;
