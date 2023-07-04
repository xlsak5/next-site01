// 선생님꺼
import React, { useRef } from "react";
import styles from "./movie.module.css";

const MovieSearch = ({ onSearch }) => {
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
    <>
    {/* {`${styles.unsplash__search} ${styles.container}`} */}
    <div className={`${styles.movie__search} ${styles.container}`}>
      <h2 className="blind">검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        onKeyPress={onKeyPress}
        placeholder="이미지를 검색하세요!"
      />
      <button type="submit" className={styles.search__btn} onClick={onClick}>
        검색하기
      </button>
    </div>
    </>
  );
};
export default MovieSearch;
