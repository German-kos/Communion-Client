import MyProfilePage from "pages/my_profile/MyProfilePage";
import { Navigate } from "react-router-dom";

export const myProfileNavigator = () => {
  const userJson = localStorage.getItem("currentUser");
  if (userJson) return <MyProfilePage />;
  console.log("first");
  return <Navigate to="/" />;
};
