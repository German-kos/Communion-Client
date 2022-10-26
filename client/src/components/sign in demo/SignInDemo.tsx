import axios from "axios";
import { ISignIn } from "interfaces/SignInInterface";
import { IUser } from "interfaces/UserInterface";
import React, { useState } from "react";
import { signIn, signOut } from "redux/slices/UserSlice";
import store from "redux/store";

function SignInDemo() {
  const [user, setUser] = useState<IUser>();

  store.subscribe(() => setUser(store.getState().rootReducer.user)); // subscribe to changes in user state

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & ISignIn;
    console.log(target.Username.value); // how to extract the input text

    await axios({
      method: "post",
      url: "https://localhost:7066/api/account/signin",
      headers: { "Content-Type": "application/json" },
      data: {
        username: target.Username.value,
        password: target.Password.value,
      },
    })
      .then((response) => {
        console.log(response.data);

        response.data &&
          store.dispatch(
            signIn({
              Id: response.data.id,
              Username: response.data.username,
              Name: response.data.name,
              Token: response.data.token,
            })
          );
      })
      .catch((err) => console.log(err.response.data)); // how to get error message
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="username" name="Username" placeholder="username" />
        <input type="password" name="Password" placeholder="password" />
        <button type="submit">Sign In</button>
      </form>
      <button onClick={() => store.dispatch(signOut())}>Sign Out</button>
      <div>
        <h1>Current User</h1>
        <p>ID: {user?.Id}</p>
        <p>Username: {user?.Username}</p>
        <p>Name: {user?.Name}</p>
        <p>Token: {user?.Token}</p>
      </div>
    </div>
  );
}

export default SignInDemo;
