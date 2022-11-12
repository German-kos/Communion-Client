import MyProfilePage from "pages/my_profile/MyProfilePage";
import { Navigate } from "react-router-dom";
import store from "redux/store";

export const myProfileNavigator = () => {
  const userJson = localStorage.getItem("currentUser");
  if (store.getState().rootReducer.user) return <MyProfilePage />;
  return <Navigate to="/" />;
};
