import React from "react";
import styles from "../styles/Skills.module.css";
import C from "../images/c.png";
import CSS from "../images/css.png";
import HTML from "../images/html.png";
import JS from "../images/js.png";
import NextIcon from "../images/next.png";
import Node from "../images/node.png";
import ReactIcon from "../images/react.png";
import SQL from "../images/sql.png";
import Image from "next/image";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.title_container}>
          <h3>My Skills</h3>
        </div>
        <div className={styles.grid_container}>
          <div className={styles.grid_item}>
            <div className={styles.icon_container}>
              <Image src={HTML} />
            </div>
            <div className={styles.skill_name}>HTML</div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.icon_container}>
              <Image src={CSS} />
            </div>
            <div className={styles.skill_name}>CSS</div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.icon_container}>
              <Image src={JS} />
            </div>
            <div className={styles.skill_name}>JavaScript</div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.icon_container}>
              <Image src={ReactIcon} />
            </div>
            <div className={styles.skill_name}>React</div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.icon_container}>
              <Image src={SQL} />
            </div>
            <div className={styles.skill_name}>SQL</div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.icon_container}>
              <Image src={Node} />
            </div>
            <div className={styles.skill_name}>Node.js</div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.icon_container}>
              <Image src={C} />
            </div>
            <div className={styles.skill_name}>C++</div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.icon_container}>
              <Image src={NextIcon} />
            </div>
            <div className={styles.skill_name}>Next.js</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
