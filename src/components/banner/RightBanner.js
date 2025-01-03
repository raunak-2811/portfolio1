import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div
      className="w-full lgl:w-1/2 flex justify-center items-center relative"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1800"
    >
      <img
        className="w-[300px] h-[300px] lgl:w-[400px] lgl:h-[400px] z-10 rounded-full object-cover"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute   flex justify-center items-center  rounded-lg">
        <div className="w-[415px] h-[415px] bg-white opacity-10 rounded-full object-cover "></div>
      </div>
    </div>
  );
};

export default RightBanner;
