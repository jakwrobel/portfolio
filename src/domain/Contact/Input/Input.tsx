import React from "react";

import styles from "domain/Contact/Input/Input.module.scss";

interface IInputProps {
  name: string;
  type: string;
  value?: string;
  variant?: "Contact" | "Submit";
}

export const Input = ({
  name,
  type,
  variant,
  value,
}:IInputProps) => {
  return (
    <>
      {type !== "submit" && (
        <label htmlFor={name} className={styles.label}>
          {name}:
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        className={styles[`input${variant}`]}
      />
    </>
  );
};
