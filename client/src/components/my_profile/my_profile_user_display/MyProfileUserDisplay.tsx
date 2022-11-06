import React, { useState } from "react";
import "components/my_profile/my_profile_user_display/myProfileUserDisplay.css";
import { IUserDetails } from "interfaces/UserDetailsInterface";
import { AvatarPresets } from "presets/mui_avatar_presets/mui_avatar_pc";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { IconButton } from "@mui/material";
import { IUser } from "interfaces/UserInterface";
import axios from "axios";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function MyProfileUserDisplay({ user }: any) {
  // const [file, setFile] = useState<string | Blob>();

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target.files?.item(0));
    const userJson = localStorage.getItem("currentUser");
    if (userJson) {
      let currentUser = JSON.parse(userJson);
      // console.log(currentUser);
      let file = event.target.files?.item(0);
      let formdata = new FormData();
      if (file) {
        formdata.append("File", file);
        formdata.append("Username", currentUser.username);
        await axios({
          method: "post",
          url: "https://localhost:7066/api/account/upload-pfp",
          data: formdata,
          headers: { "Content-Type": "multipart/form-data" },
        }).catch((error) => {
          console.log(error);
        });
      }
    }
  };
  return (
    <div className="my_profile_user_display">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        badgeContent={
          <IconButton>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={(e) => handleUpload(e)}
            />
            <label htmlFor="file">
              <ChangeCircleIcon
                sx={{ color: "white", height: "40px", width: "40px" }}
              />
            </label>
          </IconButton>
        }
      >
        <StyledBadge>
          <Avatar
            sx={AvatarPresets}
            className="my_profile_user_avatar"
            alt={user?.Username}
            src={user?.ProfilePicture}
          />
        </StyledBadge>
      </Badge>
      <p className="my_profile_username">{user?.Username}</p>
      <p className="my_profile_name">{user?.Name}</p>
    </div>
  );
}

export default MyProfileUserDisplay;
