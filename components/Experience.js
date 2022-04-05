import React from "react";
import styles from "../styles/Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.inner_container}>
          <div className={styles.info_box}>
            <p>20+</p>
            <p>repositories</p>
          </div>
          <div className={styles.info_box}>
            <p>9</p>
            <p>months</p>
            <p>of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
