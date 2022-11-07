import { IUser } from "interfaces/UserInterface";
import React, { useState } from "react";
import { signOut } from "redux/slices/UserSlice";
import store from "redux/store";
import {
  closeSignInModal,
  closeSignUpModal,
  openSignInModal,
  openSignUpModal,
} from "./helpers";
import "components/navbar/navbar.css";
import Avatar from "@mui/material/Avatar";
import LoggedUserDisplay from "./LoggedUserDisplay";

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
        <div className="navbar_user_links_container">
          <LoggedUserDisplay
            username={user.Username}
            pfp={user.ProfilePicture}
          />
          <p className="navbar_username">{user.Username}</p>
        </div>
      )}
    </>
  );
}

export default UserLinks;
