import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.tmdbData.bannerData);
  // console.log("trending", trendingData);

  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRated } = useFetch("/movie/top_rated");
  const { data: popularTVShowsData } = useFetch("/trending/tv/week");
  const { data: airingTodayTVshows } = useFetch("/tv/airing_today");

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingData}
        heading={"Trending"}
        trending={true}
      />
      <HorizontalScrollCard
        data={nowPlayingData}
        heading={"In Cinemas"}
        trending={true}
      />
      <HorizontalScrollCard
        data={popularTVShowsData}
        heading={"Popular TV Shows"}
        trending={true}
      />
      <HorizontalScrollCard
        data={airingTodayTVshows}
        heading={"TV Shows Airing Today"}
        trending={true}
      />

      <HorizontalScrollCard
        data={topRated}
        heading={"Greatest Of All Time"}
        trending={true}
      />
    </div>
  );
};

export default Home;
