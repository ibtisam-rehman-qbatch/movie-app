/* eslint-disable react/prop-types */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ images, backUpImg }) => {
  // w-3/5 sm:h-3/5 md:w-2/3 md:h-2/3  lg:w-5/12  lg:h-5/12
  return (
    <Carousel className="relative w-3/5 sm:h-3/5 md:w-2/3 md:h-2/3  lg:w-5/12  lg:h-5/12">
      {images ? (
        images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))
      ) : (
        <div>
          <img src={backUpImg} alt="Poster" />
        </div>
      )}
    </Carousel>
  );
};
export default ImageSlider;
