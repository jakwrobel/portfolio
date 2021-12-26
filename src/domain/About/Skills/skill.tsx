import React from "react";
import styles from "./Skill.module.scss";

interface ISkill {
  name: string;
  level: string;
  order: string;
}

export const Skill: React.FC<ISkill> = ({ name, level, order }) => {
  return (
    <div className={styles.skill__wrap}>
      <div className={styles.skill__bar}>
        <div className={styles[`skill__level--${order}`]}>{name}</div>
      </div>
      <div className={styles.skill__number}>{level}</div>
    </div>
  );
};
