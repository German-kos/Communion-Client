import { motion } from "framer-motion";
import Backdrop from "components/backdrop/Backdrop";
import { useState } from "react";
import { IModal } from "interfaces/ModalInterface";
import store from "redux/store";
import "components/modal/modal.css";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 20,
      stifness: 500,
    },
  },
  exit: {
    y: "100vh",
    // x: "-100vw",
    opacity: 0,
  },
};

// const [modalOpen, setModalOpen] = useState<boolean>();
// store.subscribe(() => setModalOpen(store.getState().rootReducer.modal.open));
function Modal({ handleClose, component }: any) {
  return (
    <Backdrop onClick={() => handleClose()}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        transition={{ duration: 0.5 }}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {component}
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
