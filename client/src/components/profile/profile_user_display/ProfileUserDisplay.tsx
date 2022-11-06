import Avatar from "@mui/material/Avatar";
import "components/profile/profile_user_display/profileUserDisplay.css";
import { AvatarPresets } from "presets/mui_avatar_presets/mui_avatar_pc";
function ProfileUserDisplay({ userProfile }: any) {
  console.log(userProfile);
  return (
    <div className="profile_user_display">
      <Avatar
        sx={AvatarPresets}
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
