import React from "react";

/* STYLING */
import styles from "@/styles/Contact.module.scss";
/* ICONS */
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import { Element } from "react-scroll";

const ContactLink = ({ Icon, link, delay }) => {
  return (
    <div
      className={styles.contactLinkContainer}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label="My social links to contact me"
      >
        <Icon className={styles.icon} />
      </a>
    </div>
  );
};

const ContactSection = () => {
  return (
    <Element name="contact">
      <div className={styles.contactContainer}>
        <div className={styles.contactIntro}>
          <h1 data-aos="fade-up">Let&#39;s Connect</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Thanks for stopping by! I&#39;m always open to discussing new
            opportunities, interesting projects, or just geeking out about tech.
            Feel free to reach out.
          </p>
        </div>
        <div className={styles.contactLinks} id="contact">
          <ContactLink
            Icon={FaLinkedinIn}
            link="https://linkedin.com/in/sakshi-sahu"
            delay="400"
          />
          <ContactLink
            Icon={FaGithub}
            link="https://github.com/Sakshii15"
            delay="700"
          />
          <ContactLink
            Icon={FaEnvelope}
            link="mailto:sahu.sakshii015@gmail.com"
            delay="1000"
          />
        </div>
      </div>
    </Element>
  );
};

export default ContactSection;
