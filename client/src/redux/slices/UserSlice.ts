import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "interfaces/UserInterface";
import { RootState } from "redux/store";

const initialState: IUser = {
  Id: undefined,
  Username: undefined,
  Name: undefined,
  Token: undefined, // later this should the jwt when a user logs in
};

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<IUser>) => {
      state.Id = action.payload.Id;
      state.Username = action.payload.Username;
      state.Name = action.payload.Name;
      state.Token = action.payload.Token;
    },
    signOut: (state) => {
      // when a user logs out, the localstorage should be cleared of a user as well
      state.Id = undefined;
      state.Username = undefined;
      state.Name = undefined;
      state.Token = undefined;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export const SelectUser = (state: RootState) => state.rootReducer.user;

export default userSlice.reducer;
