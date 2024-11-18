import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.tmdbData.bannerData);
  console.log("trending", trendingData);

  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRated } = useFetch("/movie/top_rated");

  return (
    <div>
      <BannerHome />
      {/* <HorizontalScrollCard
        data={trendingData}
        heading={"Trending"}
        trending={true}
      /> */}
      <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} />
      <HorizontalScrollCard data={topRated} heading={"Top Rated"} />
    </div>
  );
};

export default Home;
