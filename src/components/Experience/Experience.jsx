import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import htmlIcon from "../../assets/skills/html.png";
import cssIcon from "../../assets/skills/css.png";
import jsIcon from "../../assets/skills/js.png";
import reactIcon from "../../assets/skills/react.png";
import pythonIcon from "../../assets/skills/python.png";
import javaIcon from "../../assets/skills/Java.png";
import cIcon from "../../assets/skills/C.png";
import powerbiIcon from "../../assets/skills/PowerBi.png";
import sqlIcon from "../../assets/skills/sql.png";
import mlIcon from "../../assets/skills/ml.png";



const skillIcons = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  React: reactIcon,
  Python: pythonIcon,
  Java: javaIcon,
  C: cIcon,
  PowerBi: powerbiIcon,
  SQL: sqlIcon,
  "Machine Learning": mlIcon,
};
export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                 <img src={skillIcons[skill.title]} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};