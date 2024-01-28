import React from "react";
import style from "./TimeWithImage.module.css";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Head from "../../ComponentHeading/Head";

const TimeWithImage = () => {
  const generateImage = (imageNumber) => ({
    original: require(`../../../../assets/images/imageGallery/ImageGallery__${imageNumber}.jpg`),
    thumbnail: require(`../../../../assets/images/imageGallery/ImageGallery__${imageNumber}.jpg`),
    description: "",
  });

  const images = Array.from({ length: 20 }, (_, index) =>
    generateImage(index + 1)
  );

  return (
    <>
      <Head
        title="Image Gallery"
        textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
        textTwo="Lorem ipsum dolor sit amet consectetur."
      />
      <div className={style.imageGallery_display}>
        <Gallery
          // itemsSize={customImageSize}
          items={images}
          showThumbnails={true}
          thumbnailPosition="right"
          slideDuration={500}
          slideOnThumbnailOver
          showNav={true}
          // showIndex
          // showBullets
          transitionEffect="fade"
          transitionDuration={1000}
          // itemsSize={customImageSize}
          isRTL={false}
          enableFullscreen={true}
        />
      </div>
    </>
  );
};

export default TimeWithImage;
