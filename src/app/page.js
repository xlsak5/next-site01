import React from 'react'

import Slider from '@/component/slider/Slider'
import IntroMain from "@/component/intro/IntroMain"
import Portfolio from '@/component/portfolio/PortfolioMain'
import Youtube from '@/component/youtube/Youtube'
import Movie2 from '@/component/movie/Movie2'
import Unsplash from '@/component/unsplash/Unsplash '

const Home = () => {
  return (
    <>
      <Slider />
      <IntroMain />
      <Portfolio />
      <Youtube />
      <Movie2 />
      <Unsplash />
    </>
  )
}

export default Home;