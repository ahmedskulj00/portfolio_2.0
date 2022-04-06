import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import Button from "./helpers/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Hamburger from "../images/hamburger.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container} data-aos="fade-right">
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
        <div className={styles.hamburger_menu} onClick={() => setOpen(!open)}>
          <Image src={Hamburger} layout="fixed" width={40} height={40} />
          {open === true ? (
            <div className={styles.hamburger_options}>
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
              <button
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementsByClassName(
                      "Skills_container__hZE7q"
                    )[0].offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Skills
              </button>

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
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
