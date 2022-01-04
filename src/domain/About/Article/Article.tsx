import React from "react";
import styles from "domain/About/Article/Article.module.scss";

interface IArticleProps {
  children: React.ReactNode;
}

export const Article = ({ children }: IArticleProps) => {
  return <article className={styles.article}>{children}</article>;
};
