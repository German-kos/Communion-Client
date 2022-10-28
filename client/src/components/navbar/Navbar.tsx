import React, { useState } from "react";
import "components/navbar/navbar.css";
import store from "redux/store";
import { closeModal, openModal } from "redux/slices/ModalSlice";
import { closeSignIn, openSignIn } from "redux/slices/SignInModalSlice";
function Navbar() {
  const [signInOpen, setSignInOpen] = useState<boolean>();

  store.subscribe(() =>
    setSignInOpen(store.getState().rootReducer.signInModal.open)
  );

  const openSignInModal = () => {
    store.dispatch(openSignIn());
  };
  const closeSignInModal = () => {
    store.dispatch(closeSignIn());
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_left">
          <a>Home</a>
          <a>About</a>
        </div>
        <div className="navbar-links_right">
          <a>Sign Up</a>
          <a
            onClick={() =>
              signInOpen ? closeSignInModal() : openSignInModal()
            }
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
