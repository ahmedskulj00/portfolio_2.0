import React from "react";
import styles from "../../styles/Button.module.css";

const Button = ({ width, height, text, isPrimary }) => {
  return (
    <>
      <button
        className={isPrimary ? styles.primary_button : styles.secondary_button}
        style={{ width: width, height: height }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
