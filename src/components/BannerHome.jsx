import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import moment from "moment";
import { Link } from "react-router-dom";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.tmdbData.bannerData);
  // console.log("banner", bannerData);

  const imgURL = useSelector((state) => state.tmdbData.imageURL);
  //   console.log("imgurl", imgURL);
  // console.log("banner Home", bannerData);
  const [currentImg, setCurrentImg] = useState(0);

  const handleNext = () => {
    if (currentImg < bannerData.length - 1) {
      setCurrentImg((prev) => prev + 1);
    } else {
      setCurrentImg(0);
    }
  };
  const handePrevious = () => {
    if (currentImg > 0) {
      setCurrentImg((prev) => prev - 1);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentImg < bannerData.length - 1) {
  //       handleNext();
  //     } else {
  //       setCurrentImg(0);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [bannerData, imgURL]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h[95vh] overflow-hidden">
        {bannerData.map((data) => {
          // console.log("data", data);

          return (
            <div
              key={data.id}
              className="min-w-full min-h[450px] lg:min-h-full overflow-hidden relative group mt-4 lg:mt-0  transition-all"
              style={{ transform: `translateX(-${currentImg * 100}%)` }}
            >
              <div className="w-full h-full mt-12 lg:mt-0">
                <img
                  alt={data?.title || data?.name}
                  src={imgURL + data.backdrop_path}
                  className="h-full w-full object-cover bg-gradient-to-t from-neutral-900 to-transparent  "
                />

                {/* btn next and previous  hidden group-hover:lg:flex */}
                <div className="absolute top-0 h-full w-full flex items-center justify-between px-4">
                  <button
                    onClick={handePrevious}
                    className="bg-white p1 rounded-full text-4xl z-20 text-black "
                  >
                    <FaAngleLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-white p1 rounded-full text-4xl z-20 text-black"
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
                    {data?.title || data?.name}
                  </h2>
                  <h6>{moment(data?.release_date).format("YYYY")}</h6>{" "}
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p>Rating: {Number(data.vote_average).toFixed(1)}</p>
                    <p>
                      Popularity: {Number(data.popularity).toFixed(0)}
                      <span className="m-2"> | </span>
                      Vote count: {data.vote_count}
                    </p>
                  </div>
                  <Link
                    to={"/" + data.media_type + "/" + data.id}
                    className="bg-white px-4 my-2 font-bold  text-black rounded content-between  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105"
                  >
                    Details
                  </Link>
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
