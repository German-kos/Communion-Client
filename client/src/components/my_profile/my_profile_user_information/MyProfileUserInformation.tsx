import { IconButton } from "@mui/material";
import { formatDate } from "helpers/format_date";
import EditIcon from "@mui/icons-material/Edit";
import "components/my_profile/my_profile_user_information/myProfileUserInformation.css";
import store from "redux/store";
import { openEditProfile } from "redux/slices/EditProfileModalSlice";
//
function MyProfileUserInformation({ user }: any) {
  const date = new Date(user?.RegistrationDate);
  const bday = new Date(user?.DateOfBirth);
  const ns = "Not specified";

  const handleOpenEditProfile = () => store.dispatch(openEditProfile());
  if (user !== undefined)
    return (
      <div className="profile_user_information">
        <IconButton onClick={handleOpenEditProfile} className="my_profile_edit">
          {/* add tooltip to edit button */}
          <EditIcon className="my_profile_edit_button" />
        </IconButton>
        <div>
          Gender: <p>{user?.Gender ? user.Gender : ns}</p>
        </div>
        <div>
          Date of Birth:<p>{user.DateOfBirth ? formatDate(bday) : ns}</p>
        </div>
        <div>
          Email: <p>{user.Email ? user.Email : ns}</p>
        </div>
        <div>
          Member Since:<p>{formatDate(date)}</p>
        </div>
        <div>
          Country:
          <p>{user.Country ? user.Country : ns}</p>
        </div>
        <div className="my_profile_bio_container">
          Bio:
          <p className="my_profile_bio">{user.Bio ? user.Bio : ns}</p>
        </div>
      </div>
    );
  else return <div>Loading</div>;
}

export default MyProfileUserInformation;
