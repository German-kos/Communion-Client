import React, { useState } from "react";
import "components/navbar/navbar.css";
import store from "redux/store";
import { closeModal, openModal } from "redux/slices/ModalSlice";
import { closeSignIn, openSignIn } from "redux/slices/SignInModalSlice";
import { closeSignUp, openSignUp } from "redux/slices/SignUpModalSlice";
function Navbar() {
  const [signInOpen, setSignInOpen] = useState<boolean>();
  const [signUpOpen, setSignUpOpen] = useState<boolean>();

  store.subscribe(() =>
    setSignInOpen(store.getState().rootReducer.signInModal.open)
  );
  store.subscribe(() =>
    setSignUpOpen(store.getState().rootReducer.signUpModal.open)
  );

  const openSignInModal = () => {
    store.dispatch(openSignIn());
  };
  const closeSignInModal = () => {
    store.dispatch(closeSignIn());
  };

  const openSignUpModal = () => {
    store.dispatch(openSignUp());
  };
  const closeSignUpModal = () => {
    store.dispatch(closeSignUp());
  };
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_left">
          <a>Home</a>
          <a>About</a>
        </div>
        <div className="navbar-links_right">
          <a
            onClick={() =>
              signInOpen ? closeSignInModal() : openSignInModal()
            }
          >
            Sign In
          </a>
          <a
            onClick={() =>
              signUpOpen ? closeSignUpModal() : openSignUpModal()
            }
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
