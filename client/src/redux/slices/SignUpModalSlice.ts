import { createSlice } from "@reduxjs/toolkit";
import { IModal } from "interfaces/ModalInterface";
import { RootState } from "redux/store";

const initialState: IModal = { open: false };

export const signUpModalSlice = createSlice({
  name: "signInModalState",
  initialState,
  reducers: {
    openSignUp: (state) => {
      state.open = true;
    },
    closeSignUp: (state) => {
      state.open = false;
    },
  },
});

export const { openSignUp, closeSignUp } = signUpModalSlice.actions;

export const SelectModal = (state: RootState) => state.rootReducer.modal;

export default signUpModalSlice.reducer;
