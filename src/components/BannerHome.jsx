import React from "react";
import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.tmdbData.bannerData);
  console.log(bannerData);

  const imgURL = useSelector((state) => state.tmdbData.imageURL);
  console.log("banner Home", bannerData);
  return (
    <div>
      <div>
        {bannerData.map((data, index) => {
          return (
            <div>
              <div>
                <img src={imgURL + data.backdrop_path} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerHome;
