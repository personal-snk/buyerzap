import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import HeaderContainerCustom from "src/components/HeaderContainerCustom";
import "./styles.css";
import { getImagePath } from "src/utils";

const ForBusiness = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  return (
    <>
      <div className="relative md:w-[80%] z-20">
        <HeaderContainerCustom query={query} />
      </div>
      <div className="for_business_page">
        <div className="hidden breadcrum px-10 pb-5 md:pb-10 md:pt-4 md:px-24">
          Home / For Business (B2B)
        </div>
        <div className="header_section px-10 py-20 md:p-24">
          <h2 className="flex flex-[1_1_10%] text-xl md:w-[55%] justify-center md:justify-start md:text-4xl font-normal">
            Powered by Buyer experience & Generative AI technology
          </h2>
          <button className="px-4 py-2 my-4 md:px-4 md:py-2 md:my-8 font-medium text-sm md:text-lg rounded-[30px] bg-[#00037C] text-white hover:opacity-75">
            Schedule a call
          </button>
        </div>
      </div>
      <div className="business_casecontainer">
        <div className="px-10 md:px-16 md:pt-10">
          <h2 className="heading_reports text-2xl md:text-5xl md:font-medium">
            AI generated reports
          </h2>
        </div>
        <div className="flex analysis_container">
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
        </div>
      </div>
      <div className="business_casecontainer">
        <div className="px-10 md:px-16 md:pt-10">
          <h2 className="heading_reports text-2xl md:text-5xl md:font-medium">
            AI-Related services
          </h2>
        </div>
        <div className="flex analysis_container">
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Real-Time Sentiment Monitoring</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
          <div className="analysis_card">
            <img src={getImagePath("business/senti.svg")} alt="sentiment" />
            <div className="card_header">Overall Sentiment Analytics</div>
            <div className="card_desc">
              Stay in tune with your brand perception using our continuous
              social media tracking. We also aid in closing the feedback loop
              for ...
            </div>
            <div>Learn More</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForBusiness;
