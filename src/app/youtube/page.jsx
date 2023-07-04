"use client";
import React, { useState, useEffect } from "react";
import ContTitle from "@/component/title/ContTitle";
import YoutubeTag from "@/component/youtube/YoutubeTag";
import YoutubeSearch from "@/component/youtube/YoutubeSearch";
import YoutubeCont from "@/component/youtube/YoutubeCont";

const Page = () => {
  const [youtubes, setYoutubes] = useState([]);

  // async + await : 동기식
  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=AIzaSyAys6Kt7lJa-dj-2i4zK4pZOhE0BXUdd-Q`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => error);
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=coding&type=video&key=AIzaSyAys6Kt7lJa-dj-2i4zK4pZOhE0BXUdd-Q"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ContTitle title="youtube" />
      <YoutubeSearch onSearch={search} />
      <YoutubeTag onSearch={search} />
      <YoutubeCont youtubes={youtubes} />
    </>
  );
};

export default Page;
