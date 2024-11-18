import React, { useRef } from "react";
import Card from "../components/Card";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function HorizontalScrollCard({ data = [], heading, trending }) {
  const containerRef = useRef();

  const handleNext = () => {
    containerRef.current.scrollLeft += 400;
  };

  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 400;
  };
  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
        {heading}
      </h2>

      <div className="relative">
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(20,230px)] gap-6 grid-flow-col overflow-auto scrollbar-none  scroll-smooth overflow-x-scroll "
        >
          {data.map((data, index) => {
            return (
              <Card
                key={data.id}
                data={data}
                index={index + 1}
                trending={trending}
              />
            );
          })}
        </div>
        <div className="absolute top-0 h-full w-full flex items-center justify-between px-2 ">
          <button
            onClick={handlePrevious}
            className="bg-white p1 rounded-full text-3xl text-black -ml-2 z-20"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-white p1 rounded-full text-3xl text-black -mr-2 z-20"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScrollCard;
