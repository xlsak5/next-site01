import Image from "next/image";
import React from "react";
import styles from "./movie.module.css";

const youtuberSrc = [
  {
    img: "/assets/images/movie/movie1.png",
    title: "매트릭스",
    num: "abcde1",
  },
  {
    img: "/assets/images/movie/movie2.jpg",
    title: "소셜네트워크",
    num: "abcde12",
  },
  {
    img: "/assets/images/movie/movie3.jpg",
    title: "소스코드",
    num: "abcde123",
  },
  {
    img: "/assets/images/movie/movie4.jpg",
    title: "스티브 잡스",
    num: "abcde1234",
  },
];

function YoutubeImte2({ src, title }) {
  return (
    <div>
      <Image width={400} height={400} src={src} alt={title} />
    </div>
  );
}

const Movie2 = (props) => {
  return (
    <section id="movieSection" className={(styles.movie__wrap, "bg-blue")}>
      <div className={`${styles.movie__inner} container`}>
        <div className={styles.movie__text}>
          <h3>코딩 영화 추천</h3>
          <p>
            더 다양한 강의는 유튜브를 통해 제공하고 있습니다. <br />
            구독과 좋아요! 부탁드립니다.
          </p>
          <a href="#" className="button-green">
            자세히 보기
          </a>
        </div>
        <div className={styles.movie__item}>
          {youtuberSrc.map((src, index) => (
            <YoutubeImte2 key={index} src={src.img} title={src.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movie2;
