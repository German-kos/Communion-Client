import React, { useEffect, useState } from "react";
import "components/navbar/navbar.css";
import store from "redux/store";
import { closeModal, openModal } from "redux/slices/ModalSlice";
import { closeSignIn, openSignIn } from "redux/slices/SignInModalSlice";
import { closeSignUp, openSignUp } from "redux/slices/SignUpModalSlice";
import {
  closeSignInModal,
  closeSignUpModal,
  openSignInModal,
  openSignUpModal,
} from "./helpers";
import { IUser } from "interfaces/UserInterface";
import UserLinks from "./UserLinks";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [user, setUser] = useState<IUser>();
  const [signInOpen, setSignInOpen] = useState<boolean>();
  const [signUpOpen, setSignUpOpen] = useState<boolean>();
  const navigate = useNavigate();

  store.subscribe(() =>
    setSignInOpen(store.getState().rootReducer.signInModal.open)
  );
  store.subscribe(() =>
    setSignUpOpen(store.getState().rootReducer.signUpModal.open)
  );
  store.subscribe(() => setUser(store.getState().rootReducer.user));
  const navbarLinks = () => {
    if (!user) {
      return (
        <>
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
        </>
      );
    }
    return <a>Sign Out</a>;
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_left">
          <a onClick={() => navigate("/")}>Home</a>
          <a>About</a>
        </div>
        <div className="navbar-links_right">
          <UserLinks />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
