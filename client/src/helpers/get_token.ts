import { IUserLS } from "interfaces/LocalStorageUserInterface";

export const getToken = (): string | void => {
  var userJson = localStorage.getItem("currentUser");
  if (userJson) {
    var user: IUserLS = JSON.parse(userJson) as IUserLS;
    return user.token;
  }
};
