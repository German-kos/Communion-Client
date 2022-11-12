import React, { useState } from "react";
import "components/my_profile/edit_profile_form/editProfileForm.css";
import { inputPcPreset } from "presets/custom_input_presets/input_pc";
import SelectCountry from "components/common/select_country/SelectCountry";
import SelectGender from "components/common/select_gender/SelectGender";
import TextArea from "components/common/text_area/TextArea";
import { textAreaPcPreset } from "presets/custom_text_area_presets/text_area_pc";
import "react-datepicker/dist/react-datepicker.css";
//
import DatePicker from "react-datepicker";
import OutlinedButton from "components/common/button/outlined_button/OutlinedButton";
import { buttonPcPreset } from "presets/custom_button_presets/button_pc";
import { IEditProfile } from "interfaces/EditProfileInterface";
import axios from "axios";
import { getToken } from "helpers/get_token";
//
function EditProfileForm() {
  const [startDate, setStartDate] = useState(null);
  const [inputDate, setInputDate] = useState(new Date());
  const [dateSelected, setDateSelected] = useState<boolean>(false);
  const submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = event.target as typeof event.target & IEditProfile;
    //
    console.log(formData.DateOfBirth.value.toString() === ""); // true when empty
    console.log(formData.Country.value);
    console.log(formData.Gender.value);
    console.log(formData.Bio.value === ""); // true when empty
    // const token = getToken();
    await axios({
      method: "patch",
      url: "https://localhost:7066/api/account/edit-profile",
      headers: {
        Authorization: `bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
      data: {
        DateOfBirth: formData.DateOfBirth.value,
        Country: formData.Country.value,
        Gender: formData.Gender.value,
        Bio: formData.Bio.value,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="edit_form_container">
          <h1>EDIT PROFILE</h1>
          <DatePicker
            className="customInput date_picker"
            placeholderText="Date of Birth"
            selected={dateSelected ? inputDate : startDate}
            onChange={(date: Date) => {
              setInputDate(date);
              setDateSelected(true);
            }}
            maxDate={new Date()}
            minDate={new Date(1900, 1, 1)}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            name="DateOfBirth"
          />
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
          <OutlinedButton
            text="Submit Changes"
            preset={buttonPcPreset}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default EditProfileForm;
