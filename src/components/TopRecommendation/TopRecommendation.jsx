import * as React from 'react';
import BarChart from '../../common/barChart';
import './style.scss'

export default function TopRecommendation(props) {
    return (
        <div className='recommendation_container py-5 md:py-8'>
            <div className='flex text-3xl font-medium text-center justify-center'>{props.title}</div>
            <div className='flex text-sm font-light my-2 justify-center'>{props.subtitle}</div>
            <div className='tab_switcher flex flex-col flex-1 p-2'>
            </div>
            <div className='flex flex-row metrics_graph_container w-[100%] h-[360px] md:ml-20 md:w-[90%]'>
                <BarChart/>
            </div>
            {/* <div className='flex graph_tite justify-center py-5 text-[#010480]'>Social Media Review Presence</div>
            <div className='flex flex-row review_graph_container w-[100%] h-[360px] md:w-[100%]'>
                <PieChart/>
            </div> */}
        </div>
    );
}