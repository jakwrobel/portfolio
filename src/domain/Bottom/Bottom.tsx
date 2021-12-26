import React from "react";
import { Arrow } from "./Arrow/Arrow";
import { Anchor } from "../../components/Anchor/Anchor";
import { Footer } from "./Footer/Footer";

export const Bottom = () => {
  return (
    <div className="footer">
      <Arrow />
      <div className="footer__icons-wrap">
        <Anchor
          content={<img src="../../../../images/footer_facebook.png" />}
          href="https://www.facebook.com/kuba.wrobel.1"
          variant="footer"
        />
        <Anchor
          content={<img src="../../../../images/footer_instagram.png" />}
          href="/"
          variant="footer"
        />
        <Anchor
          content={<img src="../../../../images/footer_linkedin.png" />}
          href="https://www.linkedin.com/in/jakub-wr%C3%B3bel-731931201/"
          variant="footer"
        />
      </div>
      <Footer />
    </div>
  );
};
