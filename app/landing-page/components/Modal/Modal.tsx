import React from "react";
import styles from "./modal.module.css";

interface Props {
  className?: string;
  handleClose: () => void;
  show: boolean;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({
  className,
  children,
  handleClose,
  title,
  show,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modal} ${className ? className : ""}`}>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
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
