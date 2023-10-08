import * as React from "react";
import { useState } from "react";
import { getImagePath } from "src/utils";
import "./style.scss";

const teamsData = [
  {
    id: 1,
    name: "Bharathi K Das",
    position: "CEO, Founder",
    desc: "Bharathi Das is a seasoned executive with over 13+ years of experience in Customer Experience and Process Excellence. She optimizes operations with lean methodologies across a wide range of domains, including Strategy Consulting, Internet, E-commerce, DIgital Advertising, Cryptocurrency and Blockchain Technology in APAC, NA and EU. Ex- Amazon | Coinbase",
    imageSrc: "ceo.svg",
  },
  {
    id: 2,
    name: "Shamsuddin Butt",
    position: "Program manager - FOM",
    desc: "A quick-learning achiever with 9+ years of extensive and diversified experience across business operations and project management, having demonstrated success in creating, mentoring and leading various processes and projects with multi-geographic cross-functional teams towards successful project closure.",
    imageSrc: "sham.svg",
  },
  {
    id: 3,
    name: "Debanjan Choudhary",
    position: "Data scientist",
    desc: "Data Scientist with around 2 years of working experience in analyzing data, building, and deploying ML models. Capable of creating, developing, testing and building highly adaptive diverse services to translate business and functional qualifications into substantial deliverables. ",
    imageSrc: "deb.svg",
  },
];

export default function TeamsContainer() {
  const [teamImage, setTeamImage] = useState("ceo.svg");
  const [teamDesc, setTeamDesc] = useState(
    "Bharathi Das is a seasoned executive with over 13+ years of experience in Customer Experience and Process Excellence. She optimizes operations with lean methodologies across a wide range of domains, including Strategy Consulting, Internet, E-commerce, DIgital Advertising, Cryptocurrency and Blockchain Technology in APAC, NA and EU. Ex- Amazon | Coinbase"
  );
  const [teamName, setTeamName] = useState("Bharathi K Das");
  const [teamPos, setTeamPos] = useState("CEO, Founder");

  return (
    <div className="teams_section px-20 py-5 md:px-30 md:py-10">
      <div className="flex flex-col justify-center md:flex-row mt-6">
        <div className="team_carousel flex-[1_0_6%]">
          <div className="m-2 flex justify-center md:bg-[#fff] md:p-2 md:max-w-[75%] xl:max-w-[65%] md:border-2 md:border-[#fff] md:border-solid md:rounded-3xl">
            <img
              src={getImagePath(`aboutUs/${teamImage}`)}
              className="rounded-lg h-48 md:h-auto md:w-[100%]"
              alt=""
            />
          </div>
          <div className="flex justify-center mt-2 md:max-w-[60%] font-normal md:text-xl text-[#000080]">
            {teamName}
          </div>
          <div className="flex justify-center mt-2 md:max-w-[60%] font-normal md:text-lg text-[#000080]">
            {teamPos}
          </div>
        </div>
        <div className="md:flex-[1_0_30%]">
          <div className="flex flex-wrap justify-center md:justify-normal team_images">
            <h2 className="flex text-3xl md:text-4xl justify-center font-medium text-white pb-4">
              Meet the Team
            </h2>
            <div className="team_desc leading-6 md:leading-8 w-[100%]">
              {teamDesc}
            </div>
            {teamsData.map((member) => (
              <div
                className="m-2 pt-4"
                onClick={() => {
                  setTeamImage(member.imageSrc);
                  setTeamDesc(member.desc);
                  setTeamName(member.name);
                  setTeamPos(member.position);
                }}
              >
                <img
                  src={getImagePath(`aboutUs/${member.imageSrc}`)}
                  className="rounded-lg w-[130px]"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
