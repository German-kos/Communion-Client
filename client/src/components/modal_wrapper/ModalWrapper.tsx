import { stripBasename } from "@remix-run/router";
import { wait } from "@testing-library/user-event/dist/utils";
import Modal from "components/modal/Modal";
import EditProfileForm from "components/my_profile/edit_profile_form/EditProfileForm";
import SignInForm from "components/sign_in_form/SignInForm";
import SignUpForm from "components/sign_up_form/SignUpForm";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { closeEditProfile } from "redux/slices/EditProfileModalSlice";
import { closeSignIn } from "redux/slices/SignInModalSlice";
import { closeSignUp } from "redux/slices/SignUpModalSlice";
import store from "redux/store";

function ModalWrapper() {
  const [signInOpen, setSignInOpen] = useState<boolean>();
  const [signUpOpen, setSignUpOpen] = useState<boolean>();
  const [editProfileOpen, setEditProfileOpen] = useState<boolean>();

  const closeSignInModal = () => store.dispatch(closeSignIn());
  const closeSignUpModal = () => store.dispatch(closeSignUp());
  const closeEditProfileModal = () => store.dispatch(closeEditProfile());

  store.subscribe(() =>
    setSignInOpen(store.getState().rootReducer.signInModal.open)
  );

  store.subscribe(() =>
    setSignUpOpen(store.getState().rootReducer.signUpModal.open)
  );

  store.subscribe(() =>
    setEditProfileOpen(store.getState().rootReducer.editProfileModal.open)
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

      <AnimatePresence initial={false} mode="wait">
        {editProfileOpen && (
          <Modal
            modalOpen={editProfileOpen}
            handleClose={closeEditProfileModal}
            component={<EditProfileForm />}
          />
        )}
      </AnimatePresence>
    </>
  );
}
export default ModalWrapper;
