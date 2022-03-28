import React from "react";
import styles from "../../styles/Skills.module.css";
import Image from "next/image";
import C from "../../images/c-.png";
import HTML from "../../images/html5.png";
import CSS from "../../images/css3.png";
import JS from "../../images/js.png";
import Next from "../../images/next-dot-js.png";
import Node from "../../images/node-js.png";
import ReactPNG from "../../images/react.png";
import SQL from "../../images/sql-server.png";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <h2 className={styles.title}>SKILLS</h2>
        <div className={styles.grid_container}>
          <div className={styles.grid_item}>
            <Image src={C} layout="fixed" />
          </div>
          <div className={styles.grid_item}>
            <Image src={HTML} layout="fixed" />
          </div>
          <div className={styles.grid_item}>
            <Image src={CSS} layout="fixed" />
          </div>
          <div className={styles.grid_item}>
            <Image src={JS} layout="fixed" />
          </div>
          <div className={styles.grid_item}>
            <Image src={Next} layout="fixed" />
          </div>
          <div className={styles.grid_item}>
            <Image src={Node} layout="fixed" />
          </div>
          <div className={styles.grid_item}>
            <Image src={ReactPNG} layout="fixed" />
          </div>
          <div className={styles.grid_item}>
            <Image src={SQL} layout="fixed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
