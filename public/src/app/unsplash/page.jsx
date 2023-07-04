"use client";
import React, { useEffect, useState } from "react";
import ContTitle from "@/component/title/ContTitle";
import UnsplashCont from "@/component/unsplash/UnsplashCont";
import UnsplashSearch from "@/component/unsplash/UnsplashSearch";
import UnsplashSlider from "@/component/unsplash/UnsplashSlider";
import UnsplashTag from "@/component/unsplash/UnsplashTag";

const unsplash = () => {
  const [images, setImages] = useState([]);

  // async + await : 동기식
  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=r6e6_4ZwiAV0Dc0WvGopVnh2YGoPLi5X-C52UOikVNc&query=${query}&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => error);
  };
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.unsplash.com/photos?client_id=r6e6_4ZwiAV0Dc0WvGopVnh2YGoPLi5X-C52UOikVNc&per_page=30",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setImages(result))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <ContTitle title="unsplash" />
      <UnsplashSlider />
      <UnsplashSearch onSearch={search} />
      <UnsplashTag onSearch={search} />
      <UnsplashCont images={images} />
    </>
  );
};

export default unsplash;
