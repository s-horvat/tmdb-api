import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SearchPage() {
  const location = useLocation();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/collection`, {
        params: {
          query: location?.search?.slice(3),
          page: 1,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
      setTotalPageNo(response.data.total_pages);
      console.log("explore response", response.data.results);
    } catch (error) {
      console.log("Explore Page error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location?.search]);

  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-2xl font-semibold m-2">
          Search Results
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-4">
          {data.map((searchData, index) => {
            // console.log(exploreData.name);
            return (
              <Card
                data={searchData}
                key={exploreData.id + index + "search"}
                explore={exploreData}
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
