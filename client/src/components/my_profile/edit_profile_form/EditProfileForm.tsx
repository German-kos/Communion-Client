import React from "react";
import "components/my_profile/edit_profile_form/editProfileForm.css";
import Input from "components/common/input/Input";
import { inputPcPreset } from "presets/custom_input_presets/input_pc";
import SelectCountry from "components/common/select_country/SelectCountry";
import { inputPcPresetTest } from "presets/custom_input_presets/input_pc_test";

function EditProfileForm() {
  const submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>EDIT PROFILE</h1>
        <SelectCountry
          preset={inputPcPresetTest}
          placeholder="Select Country"
          name="country"
        />
        <Input preset={inputPcPreset} placeholder="Bio" name="Bio" key="Bio" />
      </form>
    </div>
  );
}

export default EditProfileForm;
