import axios from "axios";
import { IUserDetails } from "interfaces/UserDetailsInterface";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

function ProfileUserDisplay() {
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
    <div>
      <Avatar alt={userProfile?.Username} src={userProfile?.ProfilePicture} />
      <p>{userProfile?.Username}</p>
      <p>{userProfile?.Name}</p>
    </div>
  );
}

export default ProfileUserDisplay;
