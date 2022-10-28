import { createSlice } from "@reduxjs/toolkit";
import { IModal } from "interfaces/ModalInterface";
import { RootState } from "redux/store";

const initialState: IModal = { open: false };

export const signInModalSlice = createSlice({
  name: "signInModalState",
  initialState,
  reducers: {
    openSignIn: (state) => {
      state.open = true;
    },
    closeSignIn: (state) => {
      state.open = false;
    },
  },
});

export const { openSignIn, closeSignIn } = signInModalSlice.actions;

export const SelectModal = (state: RootState) => state.rootReducer.modal;

export default signInModalSlice.reducer;
