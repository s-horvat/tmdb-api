import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import ExplorePage from "./ExplorePage";

function SearchPage() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
      // setTotalPageNo(response.data.total_pages);
      // console.log("explore response", response.data.results);
    } catch (error) {
      console.log("Search Page error", error);
    }
  };

  useEffect(() => {
    setPage(1);
    setData([]);
    fetchData();
  }, [location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="pt-16">
      <div className="lg:hidden mx-2 sticky top-20 z-20">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          className="px-4 py-1 text-lg w-full bg-neutral-300 rounded-full text-neutral-900"
        />
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize text-2xl font-semibold m-8 flex justify-center">
          Search Results
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,240px)] gap-8 justify-center lg:justify-start">
          {data.map((searchData, index) => {
            // console.log(searchData);
            return (
              <Card
                data={searchData}
                key={searchData.id + index + "search"}
                explore={searchData}
                vote={false}
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
