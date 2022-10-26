import { createSlice } from "@reduxjs/toolkit";
import { IModal } from "interfaces/ModalInterface";
import { RootState } from "redux/store";

const initialState: IModal = { open: false };

export const modalSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const SelectModal = (state: RootState) => state.rootReducer.modal;

export default modalSlice.reducer;
