import React, { useEffect, useState } from "react";
import "components/my_profile/my_profile_container/myProfileContainer.css";
import { IUserDetails } from "interfaces/UserDetailsInterface";
import axios from "axios";
import store from "redux/store";
import MyProfileUserDisplay from "../my_profile_user_display/MyProfileUserDisplay";
function MyProfileContainer() {
  const [user, setUser] = useState<IUserDetails>();
  useEffect(() => {
    axios({
      method: "post",
      url: "https://localhost:7066/api/users/get-user-by-username",
      headers: { "Content-Type": "application/json" },
      data: {
        username: store.getState().rootReducer.user.Username,
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
    </div>
  );
}

export default MyProfileContainer;
