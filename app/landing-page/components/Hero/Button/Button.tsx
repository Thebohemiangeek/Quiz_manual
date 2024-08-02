import React from "react";

import styles from "./button.module.scss";

interface Props {
  variant: string;
  block?: boolean;
  className?: string;
  loading?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<Props> = ({
  block,
  className,
  loading,
  rounded,
  shadow,
  variant,
  ...props
}) => {
  return (
    <button className={styles.button} {...props}>
      {loading ? <span>Loading...</span> : [props.children]}
    </button>
  );
};

export default Button;
