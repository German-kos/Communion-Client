import React, { useEffect, useState } from "react";
import "components/profile/profile_container/profileContainer.css";
import ProfileUserDisplay from "../profile_user_display/ProfileUserDisplay";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router";
import axios from "axios";
import { IUserDetails } from "interfaces/UserDetailsInterface";
import ProfileUserInformation from "../profile_user_information/ProfileUserInformation";

const dividerStyle = {
  width: "1000px",
  maxWidth: 360,
  bgcolor: "background.paper",
};

function ProfileContainer() {
  const [userProfile, setUserProfile] = useState<IUserDetails>();
  const profileUserFromParams = useParams().username;

  useEffect(() => {
    axios({
      method: "post",
      url: "https://localhost:7066/api/users/get-user-by-username",
      headers: { "Content-Type": "application/json" },
      data: {
        username: profileUserFromParams,
      },
    }).then((response) => {
      setUserProfile({
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
    <div className="profile_container">
      <ProfileUserDisplay userProfile={userProfile} />
      <Divider sx={dividerStyle} />
      <ProfileUserInformation userProfile={userProfile} />
    </div>
  );
}

export default ProfileContainer;
