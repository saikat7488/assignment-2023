import React from "react";
import style from "./style.module.css";
import Head from "../ComponentHeading/Head";

export default function WhyChoosenUs() {
  return (
    <>
      <div className={style.customContainer}>
        <Head
          title="Why Choose Us"
          textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
          textTwo="Lorem ipsum dolor sit amet consectetur."
        />
        <div className={style.swatch}>
          <div>
            <span>Diverse Course Offerings</span>
          </div>
          <div>
            <span>Flexible Learning Options</span>
          </div>
          <div>
            <span>Quality Instruction</span>
          </div>
          <div>
            <span>Interactive Learning Tools</span>
          </div>
          <div>
            <span>Affordability</span>
          </div>
          <div>
            <span>Accreditation and Recognition</span>
          </div>
        </div>
        <div className={style.textContent}>
          <h3>
            "Our professional leadership is truthly commited to producting
            <br /> the best results for our clients very successfully..."
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed
            dicta corrupti iste eaque tenetur dolore <br /> fuga deserunt,
            dignissimos laborum voluptatem! Sunt deserunt pariatur sint.
          </p>
        </div>
      </div>
    </>
  );
}
