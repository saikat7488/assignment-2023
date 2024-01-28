import React from "react";
import newsletterStyle from "./newsletter.module.css";

export default function Newsletter() {
  return (
    <>
      <div className={newsletterStyle.customConatiner}>
        <div className={newsletterStyle.heading}>
          Subscribe to our newsletter
        </div>
        <div className={newsletterStyle.titleText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          exercitationem. Laboriosam modi exercitationem dolor quia est
          voluptatum eveniet, iste obcaecati.
        </div>
        <div className={newsletterStyle.formDesign}>
          <input
            type="text"
            name="newsletterEmail"
            id="newsletterEmail"
            placeholder="Your e-mail address here"
          />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
}
