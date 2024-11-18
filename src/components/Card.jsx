import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

function Card({ data, trending, index }) {
  const imgURL = useSelector((state) => state.tmdbData.imageURL);

  return (
    <Link
      to={"/" + data.media_type + "/" + data.id}
      className="w-full lg:text min-w-[230px] max-w-[250px]  overflow-hidden rounded-xl h-100 relative z-10"
    >
      <img src={imgURL + data?.poster_path} alt={data?.title || data?.name} />

      <div className="absolute top-2">
        {trending && (
          <div className="justify-between">
            <h2 className="bg-black/70 backdrop-blur-3xl rounded-e-xl ps-2 pe-2 overflow-hidden">
              {index}. {data?.title || data?.name}
            </h2>
          </div>
        )}
      </div>

      <div>
        <p className=" absolute w-full backdrop-blur-3xl py-1 px-4 bottom-0 text-sm bg-black/60 flex justify-between text-neutral-300">
          <span className="m-auto">
            {moment(data?.first_air_date || data?.release_date).format("YYYY")}
          </span>
          <span className="bg-yellow-700 p-0.5 text-black font-bold rounded-full">
            {Number(data?.vote_average).toFixed(1)}
          </span>
        </p>
      </div>
    </Link>
  );
}

export default Card;
