import Backdrop from "components/backdrop/Backdrop";
import Modal from "components/modal/Modal";
import ModalWrapper from "components/modal_wrapper/ModalWrapper";
import Navbar from "components/navbar/Navbar";
import SignInDemo from "components/sign_in_demo/SignInDemo";
import SignInForm from "components/sign_in_form/SignInForm";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { closeModal, openModal } from "redux/slices/ModalSlice";
import store from "redux/store";
import "./App.css";
import Router from "./router/Router";

function App() {
  const [signInOpen, setSignInOpen] = useState<boolean>();

  const closeSignIn = () => store.dispatch(closeModal());
  store.subscribe(() => setSignInOpen(store.getState().rootReducer.modal.open));

  return (
    <div className="gradient__bg">
      <Router />
      <AnimatePresence initial={false}>
        {/* {signInOpen && (
          <Modal
            modalOpen={signInOpen}
            handleClose={closeSignIn}
            component={<SignInForm />}
          />
        )} */}
        <ModalWrapper />
      </AnimatePresence>
    </div>
  );
}

export default App;
