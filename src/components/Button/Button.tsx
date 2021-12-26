import React from "react";
import styles from "./Button.module.scss";

interface IButton {
  content: string;
  variant: string;
}

export const Button: React.FC<IButton> = ({ content, variant }) => {
  return <button className={styles[`button--${variant}`]}>{content}</button>;
};
