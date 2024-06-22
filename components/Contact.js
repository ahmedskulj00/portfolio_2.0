import React, { useEffect } from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import Email from "../images/email.png";
import Input from "../components/helpers/Input";
import Button from "./helpers/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [state, handleSubmit] = useForm("mjvleqke");

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
        </div>
        <div className={styles.form_section}>
          {!state.succeeded ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputs}>
                <div className={styles.name_input}>
                  <Input isTextArea={false} placeholder="Name" name="name" />
                </div>
                <div className={styles.email_input}>
                  <Input
                    isTextArea={false}
                    placeholder="Email"
                    type="email"
                    name="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className={styles.message_input}>
                <Input isTextArea={true} placeholder="Message" name="message" />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className={styles.button_container}>
                <Button
                  text="Submit"
                  isPrimary={true}
                  width="241px"
                  height="83px"
                  type="submit"
                  disabled={state.submitting}
                />
              </div>
            </form>
          ) : (
            <p className={styles.success_message} data-aos="fade">
              Thank You for Your message, I will answer as soon as possible!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
