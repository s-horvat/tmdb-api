import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.tmdbData.bannerData);

  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRated } = useFetch("/movie/top_rated");
  const { data: popularTVShowsData } = useFetch("/trending/tv/week");
  const { data: airingTodayTVshows } = useFetch("/tv/airing_today");
  console.log("trending", airingTodayTVshows);

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
        media_type={"movie"}
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
        media_type={"tv"}
      />

      <HorizontalScrollCard
        data={topRated}
        heading={"Greatest Movies Of All Time"}
        trending={true}
        media_type={"movie"}
      />
    </div>
  );
};

export default Home;
