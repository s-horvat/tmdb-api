import { React } from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";

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
      <div className="w-full h-[500px] relative pt-16 hidden lg:block ">
        <div className="w-full h-full">
          <img
            src={imgURL + data?.backdrop_path}
            alt={data?.title || data?.nam}
            className=" w-full h-full object-cover "
          />
          <div className="absolute w-full h-full top-0 "></div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="lg:-mt-28 lg:ml-0 relative rounded-lg mx-auto w-fit ">
          <img
            src={imgURL + data?.poster_path}
            alt={data?.title || data?.nam}
            className="w-60 object-cover  rounded-xl lg:border-t-2"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
