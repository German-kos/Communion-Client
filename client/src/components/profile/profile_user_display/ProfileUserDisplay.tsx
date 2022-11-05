import axios from "axios";
import { IUserDetails } from "interfaces/UserDetailsInterface";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "components/profile/profile_user_display/profileUserDisplay.css";
function ProfileUserDisplay({ userProfile }: any) {
  console.log(userProfile);
  return (
    <div className="profile_user_display">
      <Avatar
        sx={{ width: "100px", height: "100px" }}
        className="profile_user_avatar"
        alt={userProfile?.Username}
        src={userProfile?.ProfilePicture}
      />
      <p className="profile_username">{userProfile?.Username}</p>
      <p className="profile_name">{userProfile?.Name}</p>
    </div>
  );
}

export default ProfileUserDisplay;
