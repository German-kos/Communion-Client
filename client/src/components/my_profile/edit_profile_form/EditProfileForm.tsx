import React from "react";
import "components/my_profile/edit_profile_form/editProfileForm.css";
import Input from "components/common/input/Input";
import { inputPcPreset } from "presets/custom_input_presets/input_pc";
import SelectCountry from "components/common/select_country/SelectCountry";
import { inputPcPresetTest } from "presets/custom_input_presets/input_pc_test";
import SelectGender from "components/common/select_gender/SelectGender";
import TextArea from "components/common/text_area/TextArea";
import { textAreaPcPreset } from "presets/custom_text_area_presets/text_area_pc";

function EditProfileForm() {
  const submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>EDIT PROFILE</h1>
        <SelectCountry
          preset={inputPcPreset}
          placeholder="Select Country"
          name="Country"
        />
        <SelectGender
          preset={inputPcPreset}
          placeholder="Select Gender"
          name="Gender"
          key="Gender"
        />
        <TextArea
          preset={textAreaPcPreset}
          placeholder="Bio"
          rows={5}
          name="Bio"
          key="Bio"
        />
      </form>
    </div>
  );
}

export default EditProfileForm;
