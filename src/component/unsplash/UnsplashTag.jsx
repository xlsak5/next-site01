import React from "react";
import styles from "./unsplash.module.css";

const unsplashTagList = [
  { name: "spring" },
  { name: "color" },
  { name: "flower" },
  { name: "black" },
  { name: "blue" },
  { name: "music" },
];

const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    //unsplash__tag gmarket5
    <div className={`${styles.unsplash__tag} ${styles.gmarket5}`}>
      <div>
        {unsplashTagList.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnsplashTag;
