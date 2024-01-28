import React, { memo } from "react";
import * as Image1 from "../../../assets/images/svg/image_1.svg";
import * as Image2 from "../../../assets/images/svg/image_2.svg";
import * as Image3 from "../../../assets/images/svg/image_3.svg";
import * as Image4 from "../../../assets/images/svg/image_4.svg";
import * as Image5 from "../../../assets/images/svg/image_5.svg";
import * as Image6 from "../../../assets/images/svg/image_6.svg";
import * as Image7 from "../../../assets/images/svg/image_7.svg";
import * as Image8 from "../../../assets/images/svg/image_8.svg";
import * as Image9 from "../../../assets/images/svg/image_9.svg";

import * as Image10 from "../../../assets/images/svg/image_10.svg";
import * as Image11 from "../../../assets/images/svg/image_11.svg";
import * as Image12 from "../../../assets/images/svg/image_12.svg";
import * as Image13 from "../../../assets/images/svg/image_13.svg";
import * as Image14 from "../../../assets/images/svg/image_14.svg";
import * as Image15 from "../../../assets/images/svg/image_15.svg";
import * as Image16 from "../../../assets/images/svg/image_16.svg";
import * as Image17 from "../../../assets/images/svg/image_17.svg";
import * as Image18 from "../../../assets/images/svg/image_18.svg";
import * as Image19 from "../../../assets/images/svg/image_19.svg";

import * as Image20 from "../../../assets/images/svg/image_20.svg";
import * as Image21 from "../../../assets/images/svg/image_21.svg";
import * as Image22 from "../../../assets/images/svg/image_22.svg";
import * as Image23 from "../../../assets/images/svg/image_23.svg";
import * as Image24 from "../../../assets/images/svg/image_24.svg";
import * as Image25 from "../../../assets/images/svg/image_25.svg";
import * as Image26 from "../../../assets/images/svg/image_26.svg";
import * as Image27 from "../../../assets/images/svg/image_27.svg";
import * as Image28 from "../../../assets/images/svg/image_28.svg";
import * as Image29 from "../../../assets/images/svg/image_29.svg";

import * as Image30 from "../../../assets/images/svg/image_30.svg";
import * as Image31 from "../../../assets/images/svg/image_31.svg";
import * as Image32 from "../../../assets/images/svg/image_32.svg";
import * as Image33 from "../../../assets/images/svg/image_33.svg";
import * as Image34 from "../../../assets/images/svg/image_34.svg";
import * as Image35 from "../../../assets/images/svg/image_35.svg";
import * as Image36 from "../../../assets/images/svg/image_36.svg";
import * as Image37 from "../../../assets/images/svg/image_37.svg";
import * as Image38 from "../../../assets/images/svg/image_38.svg";
import * as Image39 from "../../../assets/images/svg/image_39.svg";

import * as Image40 from "../../../assets/images/svg/image_41.svg";
import * as Image41 from "../../../assets/images/svg/image_41.svg";
import * as Image42 from "../../../assets/images/svg/image_42.svg";
import * as Image43 from "../../../assets/images/svg/image_43.svg";
import * as Image44 from "../../../assets/images/svg/image_44.svg";
import * as Image45 from "../../../assets/images/svg/image_45.svg";
import * as Image46 from "../../../assets/images/svg/image_46.svg";
import * as Image47 from "../../../assets/images/svg/image_47.svg";
import * as Image48 from "../../../assets/images/svg/image_48.svg";
import * as Image49 from "../../../assets/images/svg/image_49.svg";

import * as Image50 from "../../../assets/images/svg/image_50.svg";

const IconSystem = ({ icon }) => {
  const wantedWidth = 80;
  const wantedHeight = 80;
  const originalWidth = 512;
  const originalHeight = 512;
  const aspectRatio = originalWidth / originalHeight;
  const newHeight = wantedHeight / aspectRatio;
  const newWidth = wantedWidth / aspectRatio;

  const IconMap = {
    image_1: Image1,
    image_2: Image2,
    image_3: Image3,
    image_4: Image4,
    image_5: Image5,
    image_6: Image6,
    image_7: Image7,
    image_8: Image8,
    image_9: Image9,
    image_10: Image10,
    image_11: Image11,
    image_12: Image12,
    image_13: Image13,
    image_14: Image14,
    image_15: Image15,
    image_16: Image16,
    image_17: Image17,
    image_18: Image18,
    image_19: Image19,
    image_20: Image20,
    image_21: Image21,
    image_22: Image22,
    image_23: Image23,
    image_24: Image24,
    image_25: Image25,
    image_26: Image26,
    image_27: Image27,
    image_28: Image28,
    image_29: Image29,
    image_30: Image30,
    image_31: Image31,
    image_32: Image32,
    image_33: Image33,
    image_34: Image34,
    image_35: Image35,
    image_36: Image36,
    image_37: Image37,
    image_38: Image38,
    image_39: Image39,
    image_40: Image40,
    image_41: Image41,
    image_42: Image42,
    image_43: Image43,
    image_44: Image44,
    image_45: Image45,
    image_46: Image46,
    image_47: Image47,
    image_48: Image48,
    image_49: Image49,
    image_50: Image50,
  };

  const SvgComponent = IconMap[icon];

  return (
    <>
      {SvgComponent && (
        <SvgComponent
          fill="black"
          stroke="black"
          height={newHeight}
          width={newWidth}
        />
      )}
    </>
  );
};

export default memo(IconSystem);
