import React from "react";
import styles from "../../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_inner_container}>
        <div className={styles.navbar_logo}>λ</div>
        <div className={styles.navbar_links}>
          <button>About</button>
          <button>Skills</button>
          <button>Work</button>
        </div>
        <div className={styles.navbar_contact_container}>
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
