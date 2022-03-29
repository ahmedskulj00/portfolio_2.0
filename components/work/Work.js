import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Work.module.css";
import Todo from "../../images/todo.png";
import Quiz from "../../images/quiz.png";
import Crypto from "../../images/crypto.png";

const Work = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.top_container}>
          <div className={styles.top_text}>
            <h4>PORTFOLIO</h4>
            <p>My Projects</p>
          </div>
          <div className={styles.link_container}>
            <Link href="https://github.com/ahmedskulj00">
              <button>EXPLORE MORE</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.grid_container}>
        <div className={styles.grid_item}>
          <Image src={Todo} />
        </div>
        <div className={styles.grid_item}>
          <Image src={Quiz} />
        </div>
        <div className={styles.grid_item}>
          <Image src={Crypto} />
        </div>
      </div>
    </div>
  );
};

export default Work;
