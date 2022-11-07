import React, { useEffect, useState } from "react";
import "components/my_profile/my_profile_container/myProfileContainer.css";
import { IUserDetails } from "interfaces/UserDetailsInterface";
import axios from "axios";
import store from "redux/store";
import MyProfileUserDisplay from "../my_profile_user_display/MyProfileUserDisplay";
import Divider from "@mui/material/Divider";
import { DividerStyle } from "presets/mui_profile_divider_presets/mui_divider_profile_divider_pc";
import MyProfileUserInformation from "../my_profile_user_information/MyProfileUserInformation";
//
function MyProfileContainer() {
  const [user, setUser] = useState<IUserDetails>();
  const userJson = localStorage.getItem("currentUser");
  let username: string;
  if (userJson) username = JSON.parse(userJson).username;

  useEffect(() => {
    axios({
      method: "post",
      url: "https://localhost:7066/api/users/get-user-by-username",
      headers: { "Content-Type": "application/json" },
      data: {
        username: username,
      },
    }).then((response) => {
      setUser({
        Username: response.data.username,
        Name: response.data.name,
        Email: response.data.email,
        Bio: response.data.bio,
        Interests: response.data.interests,
        Country: response.data.country,
        Gender: response.data.gender,
        ProfilePicture: response.data.profilePicture,
        DateOfBirth: response.data.dateOfBirth,
        RegistrationDate: response.data.registrationDate,
      });
    });
  }, []);
  return (
    <div className="my_profile_container">
      <MyProfileUserDisplay user={user} />
      <Divider sx={DividerStyle} />
      <MyProfileUserInformation user={user} />
    </div>
  );
}

export default MyProfileContainer;
