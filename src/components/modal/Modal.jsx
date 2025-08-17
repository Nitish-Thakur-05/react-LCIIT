import { createPortal } from "react-dom";
import { motion } from "motion/react";
import styles from "./Modal.module.css";
import { useEffect } from "react";

const Modal = ({ closeModal, header, footer, children }) => {
  useEffect(() => {
    document.body.classList.add(styles.bodyLock);
    return () => {
      document.body.classList.remove(styles.bodyLock);
    };
  }, []);

  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <motion.div
        initial={{ transform: "translateY(250%)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${styles.header}`}>
          {header}
        </div>
        <div className={styles.body}>{children}</div>
        {footer}
      </motion.div>
    </div>,
    document.querySelector("#portal")
  );
};

export default Modal;
