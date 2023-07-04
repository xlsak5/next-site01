import React from "react";
import styles from "./intro.module.css";

const IntroOpertate = () => {
  return (
    <div className={styles.me__kind}>
      <h1>AnGyonam은 이런 사람</h1>
      <ol className={styles.kind__ol}>
        <li>
          <span>식지 않는 열정</span>
        </li>
        <li>
          <span>조용하게 빠른 적응력</span>
        </li>
        <li>
          <span>뭐든 배우고자 하는 자세</span>
        </li>
      </ol>
    </div>
  );
};

export default IntroOpertate;
