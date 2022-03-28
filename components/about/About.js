import React from "react";
import styles from "../../styles/About.module.css";
import about_pic from "../../images/about_pic.png";
import Image from "next/image";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.inner_content}>
          <div className={styles.text}>
            <h4>AHMED SKULJ</h4>
            <p className={styles.job_title}>Frontend Developer</p>
            <div className={styles.desc}>
              <p className={styles.name}>Name: Ahmed Skulj</p>
              <p className={styles.location}>
                Location: Bosnia and Herzegovina
              </p>
              <p className={styles.age}>Age: 21</p>
            </div>
            <button className={styles.button}>SEE MY WORK</button>
          </div>
          <div>
            <Image
              src={about_pic}
              alt="about_pic"
              layout="fixed"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
