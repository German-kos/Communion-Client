import Backdrop from "components/backdrop/Backdrop";
import Modal from "components/modal/Modal";
import ModalWrapper from "components/modal_wrapper/ModalWrapper";
import Navbar from "components/navbar/Navbar";
import SignInDemo from "components/sign_in_demo/SignInDemo";
import SignInForm from "components/sign_in_form/SignInForm";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { closeModal, openModal } from "redux/slices/ModalSlice";
import store from "redux/store";
import "./App.css";
import Router from "./router/Router";
import { IUser } from "interfaces/UserInterface";
import { IUserLS } from "interfaces/LocalStorageUserInterface";
import { AutoSignIn } from "helpers/local_storage_sign_in";

function App() {
  const [signInOpen, setSignInOpen] = useState<boolean>();

  const closeSignIn = () => store.dispatch(closeModal());
  store.subscribe(() => setSignInOpen(store.getState().rootReducer.modal.open));

  useEffect(() => {
    AutoSignIn();
  }, []);

  return (
    <div className="gradient__bg">
      <Router />
      <ModalWrapper />
    </div>
  );
}

export default App;
