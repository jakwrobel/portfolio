import React from "react";
import styles from "./Navigation.module.scss";

export const Navigation: React.FC = ({ children }) => {
  return <div className={styles.navigation}>{children}</div>;
};
