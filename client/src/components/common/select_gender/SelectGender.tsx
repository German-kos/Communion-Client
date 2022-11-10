import React from "react";
import "components/common/input/input.css";
import { IInputComponent } from "interfaces/InputComponentInterface";
import { genderSelections } from "presets/gender_select_presets/gender_select_presets";

function SelectGender({ preset, placeholder, name }: IInputComponent) {
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
        {genderSelections.map((gender) => {
          if (gender === "Not Specified")
            return (
              <option value={gender} key={gender}>
                I'd rather not specify
              </option>
            );
          return (
            <option value={gender} key={gender}>
              {gender}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default SelectGender;
