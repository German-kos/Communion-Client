import { stripBasename } from "@remix-run/router";
import { wait } from "@testing-library/user-event/dist/utils";
import Modal from "components/modal/Modal";
import SignInForm from "components/sign_in_form/SignInForm";
import SignUpForm from "components/sign_up_form/SignUpForm";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { closeSignIn } from "redux/slices/SignInModalSlice";
import { closeSignUp } from "redux/slices/SignUpModalSlice";
import store from "redux/store";

function ModalWrapper() {
  const [signInOpen, setSignInOpen] = useState<boolean>();
  const [signUpOpen, setSignUpOpen] = useState<boolean>();

  const closeSignInModal = () => store.dispatch(closeSignIn());
  const closeSignUpModal = () => store.dispatch(closeSignUp());

  store.subscribe(() =>
    setSignInOpen(store.getState().rootReducer.signInModal.open)
  );

  store.subscribe(() =>
    setSignUpOpen(store.getState().rootReducer.signUpModal.open)
  );
  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {signInOpen && (
          <Modal
            modalOpen={signInOpen}
            handleClose={closeSignInModal}
            component={<SignInForm />}
          />
        )}
      </AnimatePresence>

      <AnimatePresence initial={false} mode="wait">
        {signUpOpen && (
          <Modal
            modalOpen={signUpOpen}
            handleClose={closeSignUpModal}
            component={<SignUpForm />}
          />
        )}
      </AnimatePresence>
    </>
  );
}
export default ModalWrapper;
