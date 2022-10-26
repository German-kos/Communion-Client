import React, { useState } from "react";
import "components/navbar/navbar.css";
import store from "redux/store";
import { closeModal, openModal } from "redux/slices/ModalSlice";
function Navbar() {
  const [signInOpen, setSignInOpen] = useState<boolean>();

  store.subscribe(() => setSignInOpen(store.getState().rootReducer.modal.open));

  const openSignIn = () => {
    store.dispatch(openModal());
  };
  const closeSignIn = () => {
    store.dispatch(closeModal());
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
          <a onClick={() => (signInOpen ? closeSignIn() : openSignIn())}>
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
