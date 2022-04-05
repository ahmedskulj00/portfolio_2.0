import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import about_image from "../images/about_image.png";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.image_container}>
          <Image src={about_image} layout="fixed" width={450} height={450} />
        </div>
        <div className={styles.text_container}>
          <h4 className={styles.about_me}>About me</h4>
          <p>
            Hi, I'm Ahmed Skulj. I'm a Junior Frontend Developer from Bosnia and
            Herzegovina. Currently, I'm studying Software Engineering at the
            University of Zenica. Apart from studying I also work as a Junior
            Frontend Developer.{" "}
          </p>
          <p>
            In my spare time I like to play video games. My favourite game of
            all time is Half Life 2, which is the reason the logo of my website
            is the Greek letter lambda.
          </p>
          <p>
            Apart from playing video games I also like to watch/play basketball,
            and football. The teams I support are: Oklahoma City Thunders (NBA)
            and A.C. Milan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
