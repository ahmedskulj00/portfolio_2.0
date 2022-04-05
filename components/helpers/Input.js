import React from "react";
import styles from "../../styles/Input.module.css";

const Input = ({ isTextArea, placeholder }) => {
  return (
    <>
      {isTextArea ? (
        <textarea
          className={styles.main_textarea}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input className={styles.main_input} placeholder={placeholder}></input>
      )}
    </>
  );
};

export default Input;
