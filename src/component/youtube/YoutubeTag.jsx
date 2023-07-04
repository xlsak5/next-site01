import React from "react";
import styles from "./youtube.module.css";

const youtubeTag = [
  { name: "아이브" },
  { name: "react.js" },
  { name: "vue.js" },
  { name: "next.js" },
  { name: "node.js" },
  { name: "next.js" },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className={`${styles.youtube__tag} ${styles.gmarket5}`}>
      <div>
        {youtubeTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeTag;