import { stripBasename } from "@remix-run/router";
import Modal from "components/modal/Modal";
import SignInForm from "components/sign_in_form/SignInForm";
import { useState } from "react";
import { closeSignIn } from "redux/slices/SignInModalSlice";
import store from "redux/store";

function ModalWrapper() {
  const [signInOpen, setSignInOpen] = useState<boolean>();
  const closeSignInModal = () => store.dispatch(closeSignIn());

  store.subscribe(() =>
    setSignInOpen(store.getState().rootReducer.signInModal.open)
  );
  return (
    <>
      {signInOpen && (
        <Modal
          modalOpen={signInOpen}
          handleClose={closeSignInModal}
          component={<SignInForm />}
        />
      )}
    </>
  );
}
export default ModalWrapper;
