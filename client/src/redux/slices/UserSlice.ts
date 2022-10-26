import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "interfaces/UserInterface";
import { RootState } from "redux/store";

const initialState: IUser = {
  Id: undefined,
  Username: "undefined",
  Name: undefined,
  token: undefined, // later this should the jwt when a user logs in
};

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<IUser>) => {
      state.Id = action.payload.Id;
      state.Username = action.payload.Username;
      state.Name = action.payload.Name;
      state.token = action.payload.token;
    },
    signOut: (state) => {
      // when a user logs out, the localstorage should be cleared of a user as well
      state.Id = undefined;
      state.Username = undefined;
      state.Name = undefined;
      state.token = undefined;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export const SelectUser = (state: RootState) => state.rootReducer.user;

export default userSlice.reducer;
