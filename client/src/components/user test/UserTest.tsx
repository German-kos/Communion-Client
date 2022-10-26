import { IUser } from "interfaces/UserInterface";
import React, { useEffect, useState } from "react";
import { signIn } from "redux/slices/UserSlice";
import store from "redux/store";

function UserTest() {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    store.subscribe(() => setUser(store.getState().rootReducer.user));
  }, []);

  const clickMe = () => {
    const num = Math.random() * 100;
    const a: IUser = {
      Id: num,
      Username: "Ayo",
      Name: "ye",
      Token: "none",
    };
    store.dispatch(signIn(a));
  };
  console.log(store.getState().rootReducer.user);
  return (
    <div>
      <p>{user?.Id?.toString()}</p>
      <p>{user?.Username?.toString()}</p>
      <p>{user?.Name?.toString()}</p>
      <p>{user?.Token?.toString()}</p>
      <button onClick={() => clickMe()}>press</button>
    </div>
  );
}

export default UserTest;
