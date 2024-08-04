import React, { useEffect } from "react";
import styles from "./Modal.module.css";

interface Props {
  className?: string;
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ className, children, handleClose, show }) => {
  useEffect(() => {
    // Toggle body scroll lock based on modal visibility
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = show ? "hidden" : originalStyle;

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className={styles.modal__overlay} role="dialog" aria-modal="true">
      <div className={`${styles.modal} ${className ? className : ""}`}>
        <div className={styles.modal__header}>
          <div>{}</div>
          <button
            className={styles.close__button}
            onClick={handleClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
