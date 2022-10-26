import { motion } from "framer-motion";
import "components/backdrop/backdrop.css";
function Backdrop({ children, onClick }: any) {
  return (
    <motion.div
      className="backdrop"
      onClick={() => onClick()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
