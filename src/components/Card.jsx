import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

function Card({ data, trending, index }) {
  const imgURL = useSelector((state) => state.tmdbData.imageURL);

  return (
    <div className="w-full lg:text max-w-[250px]  overflow-hidden rounded h-100 relative">
      <img src={imgURL + data?.poster_path} alt={data?.title || data?.name} />

      <div className="absolute top-2">
        {trending && (
          <div className="bg-black/60 backdrop-blur-3xl rounded-e-xl ps-2 pe-2 overflow-hidden">
            <h2>
              {index}. {data?.title || data?.name}
            </h2>
          </div>
        )}
      </div>
      <div>
        <p className=" absolute w-full  backdrop-blur-3xl py-1 px-4 bottom-0 text-sm bg-black/60  text-center text-neutral-300">
          {moment(data?.release_date).format("YYYY")}
        </p>
      </div>
    </div>
  );
}

export default Card;