// SVGIcon.js

import React from "react";
import { ReactComponent as MyIcon } from "../../../assets/images/event.svg";
import style from './EventSVG.module.css';

const EventSVG = () => {
    return <MyIcon className={`${style.svgDesign}`} />;
};

export default EventSVG;
