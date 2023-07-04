import React, { useRef } from "react";
import styles from "./unsplash.module.css";

const UnsplashSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    // unsplash__search container
    <div className={`${styles.unsplash__search} ${styles.container}`}>
      {/* blind */}
      <h2 className="blind">검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        onKeyPress={onKeyPress}
        placeholder="이미지를 검색하세요!"
      />
      <button type="submit" onClick={onClick}>
        검색하기
      </button>
    </div>
  );
};
export default UnsplashSearch;
