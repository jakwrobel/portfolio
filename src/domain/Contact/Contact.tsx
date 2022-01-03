import React from "react";
import { Input } from "./Input/Input";
import { TextArea } from "./TextArea/TextArea";
import { Decoration } from "./Decoration/Decoration";
import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className={styles.wrap}>
      <form action="mailto:kubus_96-1996@tlen.pl" className={styles.form}>
        <Input name="name" type="text" variant="Contact" />
        <Input name="email" type="email" variant="Contact" />
        <TextArea name="message" />
        <Input name="submit" type="submit" variant="Submit" value="Send" />
      </form>
      <Decoration />
    </div>
  );
};
