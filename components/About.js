import React, { useEffect } from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import about_image from "../images/about_image.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      className={styles.container}
      data-aos="slide-right"
      data-aos-duration="1000"
    >
      <div className={styles.inner_container}>
        <div className={styles.image_container}>
          <Image
            src={about_image}
            layout="fill"
            objectFit="cover"
            alt="about_image"
          />
        </div>
        <div className={styles.text_container}>
          <h4 className={styles.about_me}>About me</h4>
          <p>
            Hi, I&apos;m Ahmed Skulj. I&apos;m a Junior Frontend Developer from
            Bosnia and Herzegovina. Currently, I&apos;m studying Software
            Engineering at the University of Zenica. Apart from studying I also
            work as a Junior Frontend Developer.{" "}
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
