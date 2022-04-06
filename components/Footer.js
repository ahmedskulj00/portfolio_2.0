import React, { useEffect } from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Instagram from "../images/insta.png";
import LinkedIn from "../images/linkedin.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className={styles.container} data-aos="slide-right">
      <div className={styles.inner_container}>
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/ahmedskulj00/"
            target="_blank"
            className={styles.insta_link}
          >
            <Image src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmedskulj/"
            target="_blank"
            className={styles.linkedin_link}
          >
            <Image src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <p className={styles.copyright}>
          Copyright ©2022 Ahmed Skulj. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
