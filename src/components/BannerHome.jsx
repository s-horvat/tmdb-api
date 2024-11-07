import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.tmdbData.bannerData);
  //   console.log("banner", bannerData);

  const imgURL = useSelector((state) => state.tmdbData.imageURL);
  //   console.log("imgurl", imgURL);
  //   console.log("banner Home", bannerData);
  const [currentImg, setCurrentImg] = useState(0);

  const handleNext = () => {
    if (currentImg < bannerData.length - 1) {
      setCurrentImg((prev) => prev + 1);
    }
  };
  const handePrevious = () => {
    if (currentImg > 0) {
      setCurrentImg((prev) => prev - 1);
    }
  };
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h[95vh] overflow-hidden">
        {bannerData.map((data) => {
          // console.log("data", data);

          return (
            <div
              key={data.id}
              className="min-w-full min-h[450px] lg:min-h-full overflow-hidden relative group"
              style={{ transform: `translateX(-${currentImg * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  alt={data.original_title}
                  src={imgURL + data.backdrop_path}
                  className="h-full w-full object-cover"
                />
                {/* btn next and previous */}
                <div className="absolute top-0 h-full w-full hidden group-hover:lg:flex items-center justify-between px-4   ">
                  <button
                    onClick={handePrevious}
                    className="bg-white p1 rounded-full text-4xl z-10 text-black "
                  >
                    <FaAngleLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-white p1 rounded-full text-4xl z-10 text-black"
                  >
                    <FaAngleRight />
                  </button>
                </div>
                {/* end btn */}
                <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              </div>
              <div className="container mx-auto">
                <div className=" w-full absolute bottom-0 max-w-md px-3">
                  <h2 className="font-bold text-2xl margin-0  lg:text-4xl text-white drop-shadow-3xl">
                    {data.original_title}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p>Rading: {Number(data.vote_average).toFixed(1)}</p>
                    <p>
                      Popularity: {Number(data.popularity).toFixed(0)}
                      <span className="m-2"> | </span>
                      Vote count: {data.vote_count}
                    </p>
                  </div>
                  <button className="bg-white px-4 my-2 font-bold  text-black rounded content-between  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
