import { closeSignIn, openSignIn } from "redux/slices/SignInModalSlice";
import { closeSignUp, openSignUp } from "redux/slices/SignUpModalSlice";
import store from "redux/store";

export const openSignInModal = () => {
  store.dispatch(openSignIn());
};
export const closeSignInModal = () => {
  store.dispatch(closeSignIn());
};
export const openSignUpModal = () => {
  store.dispatch(openSignUp());
};
export const closeSignUpModal = () => {
  store.dispatch(closeSignUp());
};
