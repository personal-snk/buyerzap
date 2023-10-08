import React from "react";
import "./style.css";
import WhatWeDoContainer from "src/components/WhatWeDoContainer";
import VisionContainer from "src/components/VisionContainer";
import TeamsContainer from "src/components/TeamsContainer";
import Breadcrum from "src/common/breadcrum";
import VideoContainer from "src/components/VideoContainer";
import { getImagePath } from "src/utils";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import HeaderContainerCustom from "src/components/HeaderContainerCustom";

const AboutUs = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("query");
  return (
    <div className="about_us_page">
      <div className="relative md:w-[80%] z-20">
        <HeaderContainerCustom query={query} />
      </div>
      <div className="about px-10 pt-10 md:px-24">
        <h2 className="flex text-3xl justify-normal md:justify-start md:text-4xl font-medium">
          About BuyerZap
        </h2>
      </div>
      <VisionContainer />
      <VideoContainer />
      <WhatWeDoContainer />
      <div className="pillars_section grid grid-cols-2 md:items-center md:flex md:px-32">
        <img
          src={getImagePath("aboutUs/pillars.svg")}
          className="w-[200px] md:w-[15%] md:flex-[1_1_10%]"
        />
        <div className="justify-around md:hidden flex flex-col md:flex-row py-5">
          <h2 className="text-2xl md:text-4xl font-medium md:flex-[1_1_10%]">
            BuyerZap Pillars
          </h2>
          <div className="value_desc md:flex-[1_1_10%]">
            <ul className="list-inside md:py-6 list-disc md:leading-8 indent-2">
              <li>Be Qualitative</li>
              <li>Be Ethical & Efficient</li>
              <li>Be Data Driven</li>
              <li>Be Result Oriented</li>
              <li>Be an Owner</li>
              <li>Be the BEST</li>
            </ul>
          </div>
        </div>
        <h2 className="hidden md:flex text-2xl md:text-4xl font-medium md:flex-[1_1_10%]">
          BuyerZap Pillars
        </h2>
        <div className="hidden md:flex value_desc md:flex-[1_1_10%]">
          <ul className="list-inside md:py-6 list-disc md:leading-8 indent-2">
            <li>Be Qualitative</li>
            <li>Be Ethical & Efficient</li>
            <li>Be Data Driven</li>
            <li>Be Result Oriented</li>
            <li>Be an Owner</li>
            <li>Be the BEST</li>
          </ul>
        </div>
      </div>
      <TeamsContainer />
    </div>
  );
};

export default AboutUs;
