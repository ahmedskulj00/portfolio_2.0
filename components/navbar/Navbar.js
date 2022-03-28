import React from "react";
import styles from "../../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.logo}>λ</div>
        <div className={styles.links}>
          <button>About</button>
          <button>Skills</button>
          <button>Work</button>
        </div>
        <div className={styles.contact_container}>
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
