import React from "react";
import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.tmdbData.bannerData);
  //   console.log("banner", bannerData);

  const imgURL = useSelector((state) => state.tmdbData.imageURL);
  //   console.log("imgurl", imgURL);
  //   console.log("banner Home", bannerData);
  return (
    <div>
      <div>
        {bannerData.map((data, index) => {
          return (
            <div key={data.id}>
              <div>
                <img
                  alt={data.original_title}
                  src={imgURL + data.backdrop_path}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerHome;
