import React from "react";
import { StyledLevel } from "domain/About/Skills/StyledLevel";
import styles from "domain/About/Skills/Skill.module.scss";

interface ISkillProps {
  name: string;
  value: string;
}

export const Skill = ({ name, value}:ISkillProps) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <StyledLevel value={value}>
          {name}
          </StyledLevel>
      </div>
      <div className={styles.number}>{value}</div>
    </div>
  );
};
