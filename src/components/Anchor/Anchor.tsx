import React from "react";
import styles from "./Anchor.module.scss";

interface IAnchor {
  content: string | JSX.Element;
  href: string | undefined;
  variant: "menu" | "icon" | "showcase" |"project" | "footer";
}

export const Anchor: React.FC<IAnchor> = ({ content, href, variant }) => {
  return (
    <a href={href} className={styles[`anchor--${variant}`]}>
      {content}
    </a>
  );
};
