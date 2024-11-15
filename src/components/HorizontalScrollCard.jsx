import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function HorizontalScrollCard({ data = [], heading }) {
  const containerRef = useRef();

  const trendingData = useSelector((state) => state.tmdbData.bannerData);

  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };

  const handePrevious = () => {
    containerRef.current.scrollLeft -= 300;
  };
  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
        Trending
      </h2>
      <div className="relative ">
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(20,230px)] gap-6 grid-flow-col relative overflow-hidden  scroll-smooth transition-all"
        >
          {trendingData.map((data, index) => {
            return (
              <Card
                key={data.id}
                data={data}
                index={index + 1}
                trending={true}
              />
            );
          })}
        </div>
        <div className="absolute top-0 h-full w-full flex items-center justify-between px-2">
          <button
            onClick={handePrevious}
            className="bg-white p1 rounded-full text-3xl  text-black "
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-white  p1 rounded-full text-3xl text-black"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScrollCard;