import { React } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import Devider from "../components/Devider";
import HorizontalScrollCard from "../components/HorizontalScrollCard";

function DetailsPage() {
  const params = useParams();
  const imgURL = useSelector((state) => state.tmdbData.imageURL);
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  const { data: similarData } = useFetch(
    `/${params?.explore}/${params?.id}/similar`
  );

  // console.log("data", data);
  console.log("star cast", castData);
  const writer = castData?.crew
    ?.filter((el) => el?.job === "Writer")
    ?.map((el) => el?.name)
    ?.join(", ");
  const director = castData?.crew
    ?.filter((el) => el?.job === "Director")
    ?.map((el) => el?.name)
    ?.join(", ");
  const producer = castData?.crew
    ?.filter((el) => el?.job === "Producer")
    ?.map((el) => el?.name)
    ?.join(", ");
  console.log("similar", similarData);

  return (
    <div>
      <div className="w-full h-[500px] relative pt-17 hidden lg:block ">
        <div className="w-full h-full ">
          <img
            src={imgURL + data?.backdrop_path}
            alt={data?.title || data?.nam}
            className=" w-full h-full object-cover "
          />
          <div className="absolute w-full h-full top-0 "></div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:py-0 py-16 flex gap-10 flex-col lg:flex-row  ">
        <div className="relative mx-auto lg:-mt-28 rounded-lg lg:mx-0 flex justify-evenly">
          <img
            src={imgURL + data?.poster_path}
            alt={data?.title || data?.nam}
            className="min-w-60 h-80 object-cover rounded-xl lg:border-t-2 m-0 mt-3 "
          />
        </div>
        <div className="pl-3 py-3 grid lg:grid-cols-[repeat(1,700px)] 2xl:grid-cols-[repeat(1,1000px)] justify-center gap-4 ">
          <h1 className="font-bold text-center lg:text-start text-2xl">
            {data?.title || data?.name}
          </h1>
          <p className="text-center lg:text-start mb-5">{data?.tagline}</p>

          <Devider />

          <div className="flex my-1 gap-5 justify-center lg:text-start">
            <p className="lg:text-start">
              Rating:{" "}
              <span className="bg-yellow-700 p-0.5 text-black text- font-bold rounded-full ml-1">
                {Number(data?.vote_average).toFixed(1)}
              </span>
            </p>
            <span>|</span>
            <p>Duration: {data?.runtime} min</p>
            <span>|</span>
            <p>
              Release date:{" "}
              {moment(data?.first_air_date || data?.release_date).format(
                "MMMM Do YYYY"
              )}
              .
            </p>
          </div>
          <Devider />
          <div className="flex flex-col">
            <h3 className="text-xl font-bold pb-1">Overview:</h3>
            <p>{data?.overview}</p>
          </div>

          <Devider />
          <div>
            <p>Director: {director}</p>
            <p>Producer: {producer}</p>
            <p>Writer: {writer}</p>
          </div>
        </div>
      </div>
      <div className="container w-full pl-10 ">
        <span>
          <Devider />
        </span>
        <h2 className="lg:text-3xl text-xl font-bold mb-10">Cast:</h2>
        <div className="grid grid-cols-[repeat(auto-fit,96px)] justify-center gap-4">
          {castData?.cast
            ?.filter((el) => el?.profile_path)
            .slice(0, 50)
            .map((cast, index) => {
              return (
                <div key={index}>
                  <div>
                    <img
                      src={imgURL + cast?.profile_path}
                      alt={cast?.name}
                      className="w-26 h-26 object-cover rounded-3xl "
                    />
                  </div>
                  <p className="text-center">{cast?.name}</p>
                </div>
              );
            })}
        </div>
      </div>
      <Devider />
      <div className="pb-5">
        <HorizontalScrollCard
          key={similarData?.id + "similar"}
          data={similarData}
          media_type={params?.explore}
          heading={"More like this:"}
        />
      </div>
    </div>
  );
}

export default DetailsPage;
