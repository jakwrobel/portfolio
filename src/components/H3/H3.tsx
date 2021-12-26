import React from "react";
import styles from "./H3.module.scss";

interface IH3 {
  content: string;
  variant: string;
}

export const H3: React.FC<IH3> = ({ content, variant }) => {
  return <h3 className={styles[`h3--${variant}`]}>{content}</h3>;
};
