import React from "react";
import styles from "domain/Menu/Navigation/Navigation.module.scss";

interface INavigationProps{
  children: React.ReactNode
}

export const Navigation = ({ children }: INavigationProps) => {
  return <div className={styles.wrap}>{children}</div>;
};
