import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import blood from "../../assets/projects/blood.png";
import project from "../../assets/projects/project.png";
const imageMap = {
  bloodbank: blood,
  project: project,
};
export const ProjectCard = ({
  project: { title, image, description, skills, source },
}) => {
  return (
    <div className={styles.container}>
      <img src={imageMap[image]} alt={title} className={styles.image} />

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};