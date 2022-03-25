import React from "react";
import styles from "../../styles/About.module.css";
import about_pic from "../../images/about_pic.png";
import Image from "next/image";
const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_inner_container}>
        <div className={styles.about_inner_content}>
          <div className={styles.about_text}>
            <h4>AHMED SKULJ</h4>
            <p className={styles.about_job_title}>Frontend Developer</p>
            <div className={styles.about_desc}>
              <p className={styles.about_name}>Name: Ahmed Skulj</p>
              <p className={styles.abuot_location}>
                Location: Bosnia and Herzegovina
              </p>
              <p className={styles.about_age}>Age: 21</p>
            </div>
            <button className={styles.about_button}>SEE MY WORK</button>
          </div>
          <div>
            <Image
              src={about_pic}
              alt="about_pic"
              className={styles.about_img}
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
