import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "redux/slices/UserSlice";
import modalReducer from "redux/slices/ModalSlice";
import signInModalReducer from "redux/slices/SignInModalSlice";
import signUpModalReducer from "redux/slices/SignUpModalSlice";
import editProfileModalReducer from "redux/slices/EditProfileModalSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  signInModal: signInModalReducer,
  signUpModal: signUpModalReducer,
  editProfileModal: editProfileModalReducer,
});

const store = configureStore({ reducer: { rootReducer } });

export type RootState = ReturnType<typeof store.getState>;

export const AppDispatch = typeof store.dispatch;

export default store;
