import React, { useEffect } from "react";
import styles from "../styles/Experience.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.inner_container}>
          <div className={styles.info_box}>
            <p data-aos="fade">20+</p>
            <p data-aos="fade">repositories</p>
          </div>
          <div className={styles.info_box}>
            <p data-aos="fade">9</p>
            <p data-aos="fade">months</p>
            <p data-aos="fade">of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
