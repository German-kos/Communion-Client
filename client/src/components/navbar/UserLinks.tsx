import { IUser } from "interfaces/UserInterface";
import React, { useState } from "react";
import { signOut } from "redux/slices/UserSlice";
import store from "redux/store";
import { Avatar } from "primereact/avatar";
import {
  closeSignInModal,
  closeSignUpModal,
  openSignInModal,
  openSignUpModal,
} from "./helpers";
import "components/navbar/navbar.css";

function UserLinks(userState: IUser) {
  const [user, setUser] = useState<IUser>();
  const [signInOpen, setSignInOpen] = useState<boolean>();
  const [signUpOpen, setSignUpOpen] = useState<boolean>();

  store.subscribe(() =>
    setSignInOpen(store.getState().rootReducer.signInModal.open)
  );
  store.subscribe(() =>
    setSignUpOpen(store.getState().rootReducer.signUpModal.open)
  );
  store.subscribe(() => setUser(store.getState().rootReducer.user));

  const signOutUser = () => {
    store.dispatch(signOut());
  };
  return (
    <>
      {!user?.Username && (
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
      )}
      {user?.Username && (
        <Avatar
          className="navbar_avatar"
          image={user.ProfilePicture}
          size="normal"
          onClick={() => signOutUser()}
        />
      )}
      {/* {user?.Username && <a onClick={() => signOutUser()}>Sign Out</a>} */}
      {/* ^^^ should be changed to an avatar and a dropdown menu */}
    </>
  );
}

export default UserLinks;
