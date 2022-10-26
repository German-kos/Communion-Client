import Backdrop from "components/backdrop/Backdrop";
import Modal from "components/modal/Modal";
import Navbar from "components/navbar/Navbar";
import SignInDemo from "components/sign_in_demo/SignInDemo";
import { useState } from "react";
import { closeModal, openModal } from "redux/slices/ModalSlice";
import store from "redux/store";
import "./App.css";
import Router from "./router/Router";

function App() {
  const [signInOpen, setSignInOpen] = useState<boolean>();

  const closeSignIn = () => store.dispatch(closeModal());
  store.subscribe(() => setSignInOpen(store.getState().rootReducer.modal.open));
  {
    /* <Router /> */
  }
  {
    /* <Navbar /> */
  }
  return (
    <>
      <h1 style={{ color: "white" }}>aaaa</h1>
      <input />
      <button onClick={() => store.dispatch(openModal())}>open</button>
      {signInOpen && (
        <Modal
          modalOpen={signInOpen}
          handleClose={closeSignIn}
          component={<SignInDemo />}
        />
      )}
    </>
    //     <div className="gradient__bg">
    // </div>
  );
}

export default App;
