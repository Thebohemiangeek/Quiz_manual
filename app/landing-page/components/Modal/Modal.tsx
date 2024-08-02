import React from "react";
import styles from "./modal.module.css";

interface Props {
  className?: string;
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ className, children, handleClose, show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modal} ${className ? className : ""}`}>
        <div className={styles.modalHeader}>
          <p>{}</p>
          <button className={styles.closeButton} onClick={handleClose}>
            ×
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
