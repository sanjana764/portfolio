
import React from "react";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import emailIcon from "../../assets/contact/emailIcon.png";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Mobile No.: 8121506091</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:sanjanasan764@gmail.com">sanjanasan764@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/jadhav-sai-sanjana-610234294/">linkedin.com/saisanjana</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="GitHub icon" />
          <a href="https://github.com/sanjana764">github.com/saisanjana</a>
        </li>
      </ul>
    </footer>
  );
};