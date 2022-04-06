import React, { useEffect } from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import Email from "../images/email.png";
import Input from "../components/helpers/Input";
import Button from "./helpers/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container} data-aos="slide-right">
      <div className={styles.inner_container}>
        <div className={styles.text_section}>
          <div className={styles.title_container}>
            <h3 className={styles.title}>Contact me</h3>
          </div>
          <div className={styles.contact_message}>
            <p>
              If you wish to work with me, you can contact me via this form,
              looking forward to hearing from you!
            </p>
          </div>
          <div className={styles.email_container}>
            <div className={styles.icon_container}>
              <Image src={Email} />
            </div>
            <div className={styles.email_info}>
              <h5>Email</h5>
              <p>ahmedskulj10@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.form_section}>
          <div className={styles.inputs}>
            <div className={styles.name_input}>
              <Input isTextArea={false} placeholder="Name" />
            </div>
            <div className={styles.email_input}>
              <Input isTextArea={false} placeholder="Email" />
            </div>
          </div>
          <div className={styles.message_input}>
            <Input isTextArea={true} placeholder="Message" />
          </div>
          <div className={styles.button_container}>
            <Button
              text="Submit"
              isPrimary={true}
              width="241px"
              height="83px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
