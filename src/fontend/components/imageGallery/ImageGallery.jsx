import React from "react";
import style from "./imageGallery.module.css";
import Head from "../ComponentHeading/Head";
import GalleryItem from "./GalleryItem";
import GoToNext from "../goToNext/GoToNext";

const ImageGallery = () => {
  return (
    <>
      <div className={style.customContainer}>
        <Head
          title="Image Gallery"
          textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
          textTwo="Lorem ipsum dolor sit amet consectetur."
        />

        <div className={style.gallery}>
          {[...Array(23)].map((_, index) => (
            <GalleryItem
              key={index + 1}
              className={`${style.gallery__item} ${
                style[`gallery__item__${index + 1}`]
              }`}
              alt={`gallery__item__${index + 1}`}
              src={`ImageGallery__${index + 1}.jpg`}
            />
          ))}
        </div>

        <GoToNext to="/image-gallery"/>
      </div>
    </>
  );
};

export default ImageGallery;
