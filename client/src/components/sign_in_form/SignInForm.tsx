import React from "react";
import { requiredFields } from "presets/sign_in_presets/sign_in_requirements";
import Input from "components/common/input/Input";
import { inputPcPreset } from "presets/custom_input_presets/input_pc";
import { ISignIn } from "interfaces/SignInInterface";
import axios from "axios";
import store from "redux/store";
import { signIn } from "redux/slices/UserSlice";
import { closeModal } from "redux/slices/ModalSlice";

function SignInForm() {
  const submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    // add a stay signed in checkbox
    const formData = event.target as typeof event.target & ISignIn;
    // add a spinner that & disable the buttons until the axios call is complete
    // use backdrop to stop user from clicking off

    await axios({
      method: "post",
      url: "https://localhost:7066/api/account/signin",
      headers: { "Content-Type": "application/json" },
      data: {
        username: formData.Username.value,
        password: formData.Password.value,
      },
    })
      .then((response) => {
        response.data &&
          store.dispatch(
            signIn({
              Id: response.data.id,
              Username: response.data.username,
              Name: response.data.name,
              Token: response.data.token,
            })
          );

        formData.keepLogged.checked &&
          localStorage.setItem("currentUser", JSON.stringify(response.data));

        // here the spinner should end
        store.dispatch(closeModal());
      })
      .catch((error) => {
        console.log(error.response.data); // display this message to indicate login failed
      });
  };
  return (
    <>
      <form className="signInForm" onSubmit={submitForm}>
        {requiredFields.map((field) => {
          return (
            <Input
              preset={inputPcPreset}
              placeholder={field}
              name={field}
              key={field}
            />
          );
          {
            /* make a seperate component for a password field (with eye that shows/hides password) */
          }
        })}
        <div className="checkBoxSection">
          <input type="checkbox" id="keepLogged" name="keepLogged" />
          <label htmlFor="keepLogged">Keep me signed in</label>
        </div>
        <input type="submit" /> {/* make a component for submit button */}
      </form>
    </>
  );
}

export default SignInForm;
