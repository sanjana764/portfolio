import React from "react";
import heroImage from "../../assets/hero/heroImage.png";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sai Sanjana Jadhav</h1>
        <p className={styles.description}>
          I am a final-year B.Tech Computer Science student with a specialization in Artificial Intelligence and Machine Learning, and a strong interest in software development and AI.
        </p>
        <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.contactBtn}
>
  View Resume
</a>


      </div>
      <img src={heroImage} alt="Hero image of me" className={styles.heroImg} />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};