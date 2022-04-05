import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";
import Button from "./helpers/Button";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.logo}>λ</div>
        <div className={styles.link_container}>
          <ul className={styles.links}>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
          <Button text="Contact" isPrimary={true} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
