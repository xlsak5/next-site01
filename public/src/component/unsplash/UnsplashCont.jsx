import React from "react";
import styles from "./unsplash.module.css";
//import styles from "./movie.module.css";
// import UnsplashImg from "@/component/unsplash/UnsplashImg";

const UnsplashImg = ({ image }) => {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${image.id}`}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </a>
    </li>
  );
};

const UnsplashCont = ({ images }) => {
  return (
    // unsplash__cont container
    <div className={`${styles.unsplash__cont} ${styles.container}`}>
      <ul>
        {images.map((image, index) => (
          <UnsplashImg key={index} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default UnsplashCont;
