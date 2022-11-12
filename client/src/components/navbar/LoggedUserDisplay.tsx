import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { signOutUser } from "./helpers";
import "components/navbar/navbar.css";
import { useNavigate } from "react-router";

const LoggedUserDisplay = ({ username, pfp }: any) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const signOut = () => {
    signOutUser();
    navigate("/");
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
        className="navbar_avatar"
        alt={username}
        src={pfp}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => handleClick(event)}
      />

      <Menu
        aria-orientation="vertical"
        anchorOrigin={{ vertical: 44, horizontal: -18.4 }}
        style={{ justifyContent: "flex-end" }}
        autoFocus={false}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() =>
            // later redirect to a seperate component named MyProfile, where the user can edit their account
            navigate(`/myprofile`)
          }
        >
          Profile
        </MenuItem>
        <MenuItem onClick={signOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default LoggedUserDisplay;
