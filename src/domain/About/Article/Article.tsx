import React from "react";
import styles from "./Article.module.scss";

interface IArticle {
  content: string;
  variant: string;
}

export const Article: React.FC<IArticle> = ({ content, variant }) => {
  return <article className={styles[`article--${variant}`]}>{content}</article>;
};
