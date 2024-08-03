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
    <div className={styles.modal__overlay}>
      <div className={`${styles.modal} ${className ? className : ""}`}>
        <div className={styles.modal__header}>
          <p>{}</p>
          <button className={styles.close__button} onClick={handleClose}>
            ×
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
