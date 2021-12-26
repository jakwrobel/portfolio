import React from "react";
import { Input } from "./Input/Input";
import { LabeledInput } from "./LabeledInput/LabeledInput";
import { Decoration } from "./Decoration/Decoration";
import styles from "./Contact.module.scss";


export const Contact = () => {
  return (
    <div className={styles.contact__wrap}>
      <form
        action="mailto:kubus_96-1996@tlen.pl"
        className={styles.contact__form}
      >
        <LabeledInput
          element="input"
          name="name"
          type="text"
          variant="contact"
        />
        <LabeledInput
          element="input"
          name="email"
          type="email"
          variant="contact"
        />
        <LabeledInput element="textarea" name="message" type="text" />
        <Input type="submit" variant="submit" name="submit" value="Send" />
      </form>
      <Decoration />
    </div>
  );
};
