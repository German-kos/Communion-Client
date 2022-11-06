import { formatDate } from "helpers/format_date";
import React from "react";

function MyProfileUserInformation({ user }: any) {
  const date = new Date(user?.RegistrationDate);
  const bday = new Date(user?.DateOfBirth);
  const ns = "Not specified";
  if (user !== undefined)
    return (
      <div className="profile_user_information">
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
        <div>
          Bio:
          <p>{user.Bio ? user.Bio : ns}</p>
        </div>
      </div>
    );
  else return <div>Loading</div>;
}

export default MyProfileUserInformation;
