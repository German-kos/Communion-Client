import React from "react";
import "components/my_profile/my_profile_user_display/myProfileUserDisplay.css";
import Avatar from "@mui/material/Avatar";
import { IUserDetails } from "interfaces/UserDetailsInterface";
import { AvatarPresets } from "presets/mui_avatar_presets/mui_avatar_presets_pc";

function MyProfileUserDisplay({ user }: any) {
  console.log(user);
  return (
    <div className="my_profile_user_display">
      <Avatar
        sx={AvatarPresets}
        className="my_profile_user_avatar"
        alt={user?.Username}
        src={user?.ProfilePicture}
      />
    </div>
  );
}

export default MyProfileUserDisplay;
