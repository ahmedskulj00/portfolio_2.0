import React from "react";
import styles from "../styles/Hero.module.css";
import Greeting from "./helpers/Greeting";
import Button from "./helpers/Button";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.greeting_container}>
          <Greeting />
        </div>
        <p className={styles.name}>Ahmed Škulj</p>
        <p className={styles.short_description}>
          Software Engineer from Bosnia and Herzegovina
        </p>
        <div className={styles.button_container}>
          <div className={styles.button_inner_container}>
            <a href="SkuljAhmed_CV.pdf" download>
              <Button
                text="Download CV"
                isPrimary={true}
                width="241px"
                height="83px"
              />
            </a>
            <Button
              text="My Work"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementsByClassName(
                    "Projects_container__8fvpl"
                  )[0].offsetTop,
                  behavior: "smooth",
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
