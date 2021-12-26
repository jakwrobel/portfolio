import React from "react";
import styles from "./Input.module.scss";

interface IInput{
    type: string
    name: string
    value?: string
    variant?: string
}

export const Input: React.FC <IInput> = ({ type, name, variant, value }) => {
  return <input type={type} name={name} id={name} value={value} className={styles[`input--${variant}`]} />;
};
