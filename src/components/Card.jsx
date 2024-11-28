import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

function Card({ data, trending, index, explore, media_type }) {
  const imgURL = useSelector((state) => state.tmdbData.imageURL);
  const mediaType = data.media_type ?? media_type;

  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className="w-full lg:text min-w-[260px] max-w-[290px] gap-4 overflow-hidden rounded-xl min-h-96 block relative z-10 "
      // hover:scale-105
    >
      {data?.poster_path ? (
        <img src={imgURL + data?.poster_path} alt={data?.title || data?.name} />
      ) : (
        <div className="bg-neutral-800 h-full w-full flex justify-center items-center">
          No Image Found
        </div>
      )}
      {/* <img src={imgURL + data?.poster_path} alt={data?.title || data?.name} /> */}

      <div className="absolute top-2">
        {explore && (
          <h2 className="bg-black/70 backdrop-blur-3xl rounded-e-xl ps-2 pe-2 overflow-hidden transition-all">
            {explore?.name || explore?.title}
          </h2>
        )}

        {/* {trending && (
          <div className="justify-between">
            <h2 className="bg-black/70 backdrop-blur-3xl  line-clamp-1 rounded-e-xl ps-2 pe-2 overflow-hidden">
              {index + `.`} {data?.title || data?.name}
            </h2>
          </div>
        )} */}
      </div>

      <div>
        <p className=" absolute w-full backdrop-blur-xl py-1 px-4 bottom-0 text-sm bg-black/60 flex justify-between text-neutral-300">
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
