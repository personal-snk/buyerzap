import * as React from "react";
import Video from "src/common/video/video";
import { getImagePath } from "src/utils";

export default function VideoContainer() {
  return (
    <>
      <div className="flex flex-col py-4 rounded-2xl">
        <div className="flex flex-col md:flex-row md:px-20 md:py-10">
          <div className="flex flex-col flex-1 px-6 md:px-10">
            <div className="flex flex-1 text-2xl md:text-3xl font-medium items-center">
              Why BuyerZap?
            </div>
            <div className="flex-1 py-4 md:p-0 text-sm md:text-lg">
              At Buyerzap, we leverage the capabilities of Natural Language
              Processing (NLP) to efficiently summarise a wide range of online
              reviews, converting vast amounts of information into user-friendly
              snapshots. This enables us to curate and present the most valuable
              reviews, empowering you to make well-informed decisions with ease.
            </div>
          </div>
          <div className="flex justify-center md:mx-10 md:flex-[1_1_10%] relative">
            <img
              src={getImagePath("home/video_section.svg")}
              className="mx-12 flex-1 relative"
            />
            <img
              src={getImagePath("home/problem.svg")}
              className="w-24 md:w-36 z-10 absolute top-0 left-[20%]"
            />
            <img
              src={getImagePath("home/solution.svg")}
              className="w-24 md:w-36 z-10 absolute left-[60%]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center md:px-10 md:py-10">
        <Video className="md:mx-10 w-[28rem]" />
      </div>
    </>
  );
}
