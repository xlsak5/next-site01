import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.port__box}>
      <h1>PORTFOLIO SITE</h1>
      <ul>
        <li>
          <a href="https://xlsak5.github.io/testAnGyonam/">
            <img
              src="/assets/images/port/webstandard.png"
              alt="웹표준 사이트"
            />

            <div className={styles.port__desc}>
              <span>웹표준 사이트입니다.</span>
              <p>
                6개월 동안 배웠던 것들과 만든 것들을 모아 놓은 사이트입니다.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://cloneeee.netlify.app/">
            <img
              src="/assets/images/port/sin1.png"
              alt="신일전자 클론코딩(HTML,CSS,JAVASCRIPT)"
            />

            <div className={styles.port__desc}>
              <span>신일전자 메인 페이지 클론 코딩입니다.</span>
              <p>HTML, CSS, JAVASCRIPT로 만든 다음 React로 변환을 했습니다.</p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://reacttt1.netlify.app/">
            <img src="/assets/images/port/reactClone.png" alt="리액트 사이트" />

            <div className={styles.port__desc}>
              <span>React.js로 제작한 사이트 입니다.</span>
              <p>HTML, CSS로 제작한 다음 React.JS로 변환을 하였습니다.</p>
            </div>
          </a>
        </li>
        <li>
          <a href="http://xlsak3.dothome.co.kr/">
            <img src="/assets/images/port/webstandard.png" alt="만든 사이트1" />

            <div className={styles.port__desc}>
              <span>PHP로 제작한 팀프로젝트 입니다.</span>
              <p>
                6개월 동안 배웠던 것들과 만든 것들을 모아 놓은 사이트입니다.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://tetris-portfolio-d4291.web.app/">
            <img src="/assets/images/port/webstandard.png" alt="만든 사이트1" />

            <div className={styles.port__desc}>
              <span>JAVASCRIPT로 제작한 게임 입니다.</span>
              <p>
                6개월 동안 배웠던 것들과 만든 것들을 모아 놓은 사이트입니다.
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
