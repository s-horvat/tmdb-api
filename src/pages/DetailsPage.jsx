import { React } from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";

function DetailsPage() {
  const params = useParams();
  const imgURL = useSelector((state) => state.tmdbData.imageURL);
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );

  console.log("data", data);
  console.log("credits", castData);

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
      <div className="container mx-auto px-4 lg:py-0 py-16 flex hap-10 flex-col lg:flex-row gap-4">
        <div className="relative mx-auto lg:-mt-28 rounded-lg lg:mx-0 flex">
          <img
            src={imgURL + data?.poster_path}
            alt={data?.title || data?.nam}
            className="lg:w-[26rem] w-60 object-cover rounded-xl lg:border-t-2 m-0 mt-3"
          />
        </div>
        <div className=" pl-3 py-3 text-center">
          <h1 className="font-bold text-2xl">{data?.title || data?.name}</h1>
          <p className="text-center mb-5">{data?.tagline}</p>

          <div className="flex my-1 gap-5 justify-center">
            <p>Rating: {Number(data?.vote_average).toFixed(1)}</p>
            <p>Duration: {data?.runtime} min</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Overview:</h3>
            <p>{data?.overview}</p>
          </div>
          <div>
            <p className="mt-4 text-start">
              Release date:{" "}
              {moment(data?.first_air_date || data?.release_date).format(
                "MMMM Do YYYY"
              )}
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
