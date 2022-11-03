import React from "react";
import { requiredFields } from "presets/sign_in_presets/sign_in_requirements";
import Input from "components/common/input/Input";
import { inputPcPreset } from "presets/custom_input_presets/input_pc";
import { ISignIn } from "interfaces/SignInInterface";
import axios from "axios";
import store from "redux/store";
import { signIn } from "redux/slices/UserSlice";
import { closeModal } from "redux/slices/ModalSlice";
import OutlinedButton from "components/common/button/outlined_button/OutlinedButton";
import { buttonPcPreset } from "presets/custom_button_presets/button_pc";
import { closeSignIn } from "redux/slices/SignInModalSlice";
import { openSignUp } from "redux/slices/SignUpModalSlice";

function SignInForm() {
  const switchToSignUp = () => {
    store.dispatch(closeSignIn());
    store.dispatch(openSignUp());
  };

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
              ProfilePicture: response.data.profilePicture,
            })
          );

        formData.keepLogged.checked &&
          localStorage.setItem("currentUser", JSON.stringify(response.data));

        // here the spinner should end
        store.dispatch(closeSignIn());
      })
      .catch((error) => {
        console.log(error.response.data); // display this message to indicate login failed
      });
  };
  return (
    <div className="sign_in_form_container">
      <form className="sign_in_form" onSubmit={submitForm}>
        <div className="sign_in_title_container">
          <h1>SIGN IN</h1>
        </div>
        {requiredFields.map((field) => {
          return (
            <Input
              preset={inputPcPreset}
              placeholder={field}
              name={field}
              key={field}
            />
          );

          /* make a seperate component for a password field (with eye that shows/hides password) */
        })}
        <div className="sign_in_checkbox_container">
          <input type="checkbox" id="keepLogged" name="keepLogged" />
          <label htmlFor="keepLogged">Keep me signed in</label>
        </div>
        <div className="sign_in_submit_container">
          <OutlinedButton
            text="Sign In"
            preset={buttonPcPreset}
            type="submit"
          />
        </div>
        {/* <input type="submit" /> make a component for submit button */}
      </form>
      <div className="not_a_member_container">
        <p>Not a member?</p>
        <a className="sign_in_sign_up_link" onClick={() => switchToSignUp()}>
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default SignInForm;
