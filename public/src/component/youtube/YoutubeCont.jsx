import React from 'react'
import Link from "next/link";
import styles from "./youtube.module.css";

const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={youtube.snippet.thumbnails.medium.url}
          alt={youtube.snippet.title}
        />
        <span className={styles.ellipsis}>{youtube.snippet.title}</span>
      </a>
    </li>
  );
};



const YoutubeCont = ({youtubes}) => {
  return (
    <>
    <section id="youtubePage" className={styles.container}>
      <div className={styles.youtube__page}>
        <div className={styles.youtube__slider}>youtube__slider</div>
        <div className={styles.youtube__tag}>
          <ul>
         
          </ul>
        </div>
        <div className={styles.youtube__cont}>
          <ul>
            {youtubes.map((youtube, index) => (
              <YoutubeItem key={index} youtube={youtube} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>
  );
};

export default YoutubeCont