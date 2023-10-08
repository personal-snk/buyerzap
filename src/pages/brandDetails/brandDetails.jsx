import React from "react";
import "./style.css";
import PieChart from "src/common/pieChart";
import { getImagePath } from "src/utils";

const BrandDetails = () => {
  return (
    <div className="about_us_page">
      <div className="breadcrum px-10 pb-5 md:pb-10 md:px-40">
        Home / Brand: Zepto
      </div>
      <div className="about_section md:px-40">
        <h2 className="flex text-3xl justify-center md:justify-start md:text-5xl font-medium">
          Zepto
        </h2>
        <div className="intro_section p-5 flex flex-col-reverse md:flex-row">
          <div className="desc leading-6 md:leading-8 md:w-[60%] md:mr-10">
            Zepto is an Indian q-commerce company focused on grocery and food
            delivery. Founded in 2020 and launched in July 2021, Zepto became
            well-known as one of the fastest growing technology startups in
            Indian history.
            <br />
            <br />
            <b>Founded: </b>2020
            <br />
            <b>Headquarters: </b>Mumbai, India
            <br />
            <b>Website: </b>zeptonow.com
          </div>
          <div className="flex logo_section justify-center">
            <img
              src={getImagePath("searchResults/zeptoIcon.svg")}
              className="w-60 md:flex-[1_1_10%]"
            />
          </div>
        </div>
      </div>
      <h2 className="flex text-3xl pt-4 justify-center md:justify-normal md:text-4xl font-medium md:px-40">
        Social Feedback
      </h2>
      <div className="grid grid-cols-6 gap-2 md:pl-40 md:pr-20">
        <div className="col-span-6 md:col-span-4 values px-5 md:px-0 md:items-center flex-1">
          <div className="grid grid-cols-8 md:grid-cols-9 border-b-2 border-solid border-[#D9D9D9] py-5 leading-6 md:leading-2 items-center feedback_review_section">
            <div className="col-span-1 md:col-span-1">
              <img
                src={getImagePath("brandDetails/positiveRating.svg")}
                className="w-8 md:w-10 md:mx-4"
              />
            </div>
            <div className="col-span-7 md:col-span-8">
              <div className="font-semibold text-sm md:text-md">
                Ice Cream received was amazing
              </div>
              <div className="font-normal text-xs md:text-sm">
                We ordered ice cream and it was delivered within 15mins where
                the ice cream was still very much enjoyable. Thanks for delivery
                executive for speedy delivery...
              </div>
            </div>
          </div>
          <div className="grid grid-cols-8 md:grid-cols-9 border-b-2 border-solid border-[#D9D9D9] py-5 leading-6 md:leading-2 items-center feedback_review_section">
            <div className="col-span-1 md:col-span-1">
              <img
                src={getImagePath("brandDetails/positiveRating.svg")}
                className="w-8 md:w-10 md:mx-4"
              />
            </div>
            <div className="col-span-7 md:col-span-8">
              <div className="font-semibold text-sm md:text-md">
                Ice Cream received was amazing
              </div>
              <div className="font-normal text-xs md:text-sm">
                We ordered ice cream and it was delivered within 15mins where
                the ice cream was still very much enjoyable. Thanks for delivery
                executive for speedy delivery...
              </div>
            </div>
          </div>
          <div className="grid grid-cols-8 md:grid-cols-9 border-b-2 border-solid border-[#D9D9D9] py-5 leading-6 md:leading-2 items-center feedback_review_section">
            <div className="col-span-1 md:col-span-1">
              <img
                src={getImagePath("brandDetails/positiveRating.svg")}
                className="w-8 md:w-10 md:mx-4"
              />
            </div>
            <div className="col-span-7 md:col-span-8">
              <div className="font-semibold text-sm md:text-md">
                Ice Cream received was amazing
              </div>
              <div className="font-normal text-xs md:text-sm">
                We ordered ice cream and it was delivered within 15mins where
                the ice cream was still very much enjoyable. Thanks for delivery
                executive for speedy delivery...
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2 review_graph_container w-[100%] h-[360px] my-8 flex-1">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
