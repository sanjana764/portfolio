import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <ul className={styles.history}>
        {history.map((historyItem, id) => (
          <li key={id} className={styles.historyItem}>
            <div className={styles.historyItemDetails}>
              <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
              <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              <ul>
                {historyItem.experiences.map((exp, idx) => (
                  <li key={idx}>{exp}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
