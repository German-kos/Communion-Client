import axios from "axios";
import { IUserLS } from "interfaces/LocalStorageUserInterface";
import { IUser } from "interfaces/UserInterface";
import { signIn } from "redux/slices/UserSlice";
import store from "redux/store";

export const AutoSignIn = () => {
  const checkForUser = localStorage.getItem("currentUser");
  if (checkForUser) {
    const localUser: IUserLS = JSON.parse(checkForUser) as IUserLS;
    const user: IUser = {
      Id: localUser.id,
      Username: localUser.username,
      Name: localUser.name,
      Token: localUser.token,
    };
    axios({
      method: "post",
      url: "https://localhost:7066/api/account/autosignin",
      headers: {
        Authorization: `bearer ${user.Token}`,
        "Content-Type": "application/json",
      },
      data: {
        username: user.Username,
      },
    })
      .then((response) => {
        const user: IUser = {
          Id: response.data.id,
          Username: response.data.username,
          Name: response.data.name,
          Token: response.data.token,
          ProfilePicture: response.data.profilePicture,
        };
        store.dispatch(signIn(user));
      })
      .catch((error) => {
        console.log(error.response.data); // display this message to indicate login failed
      });
  }
};
