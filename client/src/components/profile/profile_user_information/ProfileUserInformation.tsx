import { formatDate } from "helpers/format_date";
import React from "react";
import "components/profile/profile_user_information/profileUserInformation.css";

function ProfileUserInformation({ userProfile }: any) {
  const date = new Date(userProfile?.RegistrationDate);
  const bday = new Date(userProfile?.DateOfBirth);
  const ns = "Not specified";
  if (userProfile !== undefined)
    return (
      <div className="profile_user_information">
        <div>
          Gender: <p>{userProfile?.Gender ? userProfile.Gender : ns}</p>
        </div>
        <div>
          Date of Birth:<p>{userProfile.DateOfBirth ? formatDate(bday) : ns}</p>
        </div>
        <div>
          Email: <p>{userProfile.Email ? userProfile.Email : ns}</p>
        </div>
        <div>
          Member Since:<p>{formatDate(date)}</p>
        </div>
        <div>
          Country:
          <p>{userProfile.Country ? userProfile.Country : ns}</p>
        </div>
        <div>
          Bio:
          <p>{userProfile.Bio ? userProfile.Bio : ns}</p>
        </div>
      </div>
    );
  else return <div>Loading</div>;
}

export default ProfileUserInformation;
