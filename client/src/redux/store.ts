import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "redux/slices/UserSlice";
import modalReducer from "redux/slices/ModalSlice";
import signInModalReducer from "redux/slices/SignInModalSlice";
export const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  signInModal: signInModalReducer,
});

const store = configureStore({ reducer: { rootReducer } });

export type RootState = ReturnType<typeof store.getState>;

export const AppDispatch = typeof store.dispatch;

export default store;
