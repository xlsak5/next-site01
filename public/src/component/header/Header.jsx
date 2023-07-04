import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

const links = [
  {
    id: 1,
    title: "Intro",
    name: "소개",
    url: "/intro",
  },

  {
    id: 2,
    title: "Port",
    name: "포트폴리오",
    url: "/port",
  },
  {
    id: 3,
    title: "Youtube",
    name: "유튜브",
    url: "/youtube",
  },
  {
    id: 4,
    title: "Movie",
    name: "영화",
    url: "/movie",
  },
  {
    id: 5,
    title: "Unsplash",
    name: "이미지",
    url: "/unsplash",
  },
];

function IntroTitle({ title, url, name }) {
  return (
    <li>
      <Link href={url} title={title}>
        {name}
      </Link>
    </li>
  );
}

const Header = () => {
  return (
    <header
      id="header"
      className="header__wrap gmarket5 bg-blue"
      role="heading"
      aria-level="1"
    >
      <div className={styles.header__inner}>
        <h1 className={styles.header__logo}>
          <Link href="/">
            An <em>site</em>
          </Link>
        </h1>

        <nav className={styles.header__nav} role="navigation">
          <ul>
            {links.map((item, index, Array) => (
              <IntroTitle
                key={item.id}
                title={item.title}
                url={item.url}
                name={item.name}
              />
            ))}
            {/* 선생님 코드 */}
            {/* {links.map((links) => (
              <li key={links.id}>
                <Link href={links.url}>{links.name}</Link>
              </li>
            ))} */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
