import { createSlice } from "@reduxjs/toolkit";
import { IModal } from "interfaces/ModalInterface";
import { RootState } from "redux/store";

const initialState: IModal = { open: false };

export const editProfileModalSlice = createSlice({
  name: "signInModalState",
  initialState,
  reducers: {
    openEditProfile: (state) => {
      state.open = true;
    },
    closeEditProfile: (state) => {
      state.open = false;
    },
  },
});

export const { openEditProfile, closeEditProfile } =
  editProfileModalSlice.actions;

export const SelectModal = (state: RootState) => state.rootReducer.modal;

export default editProfileModalSlice.reducer;
