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
              <button
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementsByClassName(
                      "About_container__rRFE8"
                    )[0].offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                About me
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementsByClassName(
                      "Skills_container__hZE7q"
                    )[0].offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementsByClassName(
                      "Projects_container__8fvpl"
                    )[0].offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                Projects
              </button>
            </li>
          </ul>
          <Button
            text="Contact"
            isPrimary={true}
            onClick={() =>
              window.scrollTo({
                top: document.getElementsByClassName(
                  "Contact_container__u4Z1Q"
                )[0].offsetTop,
                behavior: "smooth",
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
