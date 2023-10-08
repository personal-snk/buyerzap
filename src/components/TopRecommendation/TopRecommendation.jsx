import * as React from "react";
import Tabs from "src/common/tabNavBar/tabNavBar";
import { data, data_2, data_3 } from "src/data/data";
import BarChart from "../../common/barChart";
import "./style.scss";

const tabs = [
  {
    id: 1,
    name: "Quality",
    title: "Quality",
    children: (
      <div className="flex flex-row metrics_graph_container w-[100%] h-[360px] md:ml-20 md:w-[90%]">
        <BarChart data={data} id={1} />
      </div>
    ),
  },
  {
    id: 2,
    name: "Price",
    title: "Price",
    children: (
      <div className="flex flex-row metrics_graph_container w-[100%] h-[360px] md:ml-20 md:w-[90%]">
        <BarChart data={data_2} id={2} />
      </div>
    ),
  },
  {
    id: 3,
    name: "Delivery Speed",
    title: "Delivery Speed",
    children: (
      <div className="flex flex-row metrics_graph_container w-[100%] h-[360px] md:ml-20 md:w-[90%]">
        <BarChart data={data_3} id={3} />
      </div>
    ),
  },
];

export default function TopRecommendation(props) {
  return (
    <div className="recommendation_container">
      <div className="flex text-3xl font-medium text-center justify-center">
        {props.title}
      </div>
      <div className="tab_switcher flex justify-center flex-1">
        <Tabs tabs={tabs} />
      </div>
      {/* <div className='flex graph_tite justify-center py-5 text-[#010480]'>Social Media Review Presence</div>
            <div className='flex flex-row review_graph_container w-[100%] h-[360px] md:w-[100%]'>
                <PieChart/>
            </div> */}
    </div>
  );
}
