// GalleryItem.js
import React from "react";
import PropTypes from "prop-types";
import galleryStyle from "./imageGallery.module.css";
// const imagePath =
// require(`../../../assets/images/imageGallery/ImageGallery__23.jpg`).default;

const GalleryItem = ({ className, alt, src }) => {


  return (
    <div className={`${galleryStyle.gallery__item} ${className}`}>
      <img
        alt={alt}
        src={require(`../../../assets/images/imageGallery/${src}`)}
        className={`${galleryStyle.gallery__img}`}
      />
    </div>
  );
};

GalleryItem.propTypes = {
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default GalleryItem;
