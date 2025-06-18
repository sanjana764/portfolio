import React from "react";
import webIcon from "../../assets/about/webIcon.png";
import analyticsIcon from "../../assets/about/analyticsIcon.png";
import mlIcon from "../../assets/about/mlIcon.png";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={webIcon} alt="Web icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I'm a web developer with experience in building responsive, optimized, and user-focused websites and web applications using modern technologies and frameworks.

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={analyticsIcon} alt="analytics Icon" />
            <div className={styles.aboutItemText}>
              <h3>Power BI Developer</h3>
              <p>
                
I specialize in creating interactive and insightful Power BI dashboards and reports, enabling data-driven business decisions.

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={mlIcon} alt="ML Icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Enthusiast</h3>
              <p>
                
hands-on experience in building projects from data preprocessing to model training. Focused on applying ML to solve real-world problems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};