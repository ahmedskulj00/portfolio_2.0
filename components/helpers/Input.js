import React from "react";
import styles from "../../styles/Input.module.css";

const Input = ({ isTextArea, placeholder, type, name }) => {
  return (
    <>
      {isTextArea ? (
        <textarea
          className={styles.main_textarea}
          placeholder={placeholder}
          name={name}
        ></textarea>
      ) : (
        <input
          className={styles.main_input}
          placeholder={placeholder}
          name={name}
          type={type}
        ></input>
      )}
    </>
  );
};

export default Input;
