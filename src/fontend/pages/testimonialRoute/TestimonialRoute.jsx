import React, { useEffect } from "react";
import style from "./TestimonialRoute.module.css";

import Testimonial from "../../components/testimonial/Testimonial";

export default function TestimonialRoute() {
  useEffect(() => {
    document.title = "WorldCoder | Testimonial";
  }, []);
  return (
    <>
      <div className={style.pageContainer}>
        <Testimonial paginationSystem={true} contentPerPage="6" />
      </div>
    </>
  );
}
