import React from "react";
import styles from "./skills.module.css";
import skills from "../../data/skills.json";
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

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={skillIcons[skill.title]} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
