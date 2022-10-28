import OutlinedButton from "components/common/button/outlined_button/OutlinedButton";
import Input from "components/common/input/Input";
import "components/sign_up_form/signUpForm.css";
import { buttonPcPreset } from "presets/custom_button_presets/button_pc";
import { inputPcPreset } from "presets/custom_input_presets/input_pc";
import { requiredFields } from "presets/sign_up_presets/sign_up_requirements";
import React from "react";
import { openSignIn } from "redux/slices/SignInModalSlice";
import { closeSignUp } from "redux/slices/SignUpModalSlice";
import store from "redux/store";

function SignUpForm() {
  const switchToSignIn = () => {
    store.dispatch(closeSignUp());
    store.dispatch(openSignIn());
  };

  const submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  return (
    <div className="sign_up_form_container">
      <form className="sign_up_form" onSubmit={submitForm}>
        <div className="sign_up_title_container">
          <h1>SIGN UP</h1>
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
        })}
        <OutlinedButton text="Sign Up" preset={buttonPcPreset} type="submit" />
      </form>
      <div className="already_a_member_container">
        <p>Already a member?</p>
        <a onClick={() => switchToSignIn()}>Sign In</a>
      </div>
    </div>
  );
}

export default SignUpForm;
