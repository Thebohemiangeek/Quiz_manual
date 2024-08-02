import React from "react";
import styles from "./button.module.css";

interface Props {
  block?: boolean;
  className?: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  loading?: boolean;
}

const Button: React.FC<Props> = ({ block, className, loading, onClick }) => {
  return (
    <button
      className={`${styles.button} ${className ? className : ""} ${
        block ? styles.block : ""
      } `}
      onClick={onClick}
    >
      {loading ? <span>Loading...</span> : "Take the Quiz"}
    </button>
  );
};

export default Button;
