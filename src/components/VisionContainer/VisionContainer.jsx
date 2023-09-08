import * as React from 'react';
import vision from 'src/assets/aboutUs/vision.svg';
import mission from 'src/assets/aboutUs/mission.svg';
import values from 'src/assets/aboutUs/values.svg';
import './style.scss'


export default function visionContainer() {
    return (
        <div className='about py-4 md:py-8 m-auto'> 
            {/* <div className="flex text-3xl font-medium justify-center">How do we do it?</div> */}
            <div className='visionContainer flex flex-col mt-4 md:flex-row flex_[1_1_30%]'>
                <div className='flex flex-col items-center p-2 m-2 flex-1'>
                    <img src={vision} className='h-20'/>
                    <div className="title text-center m-2 text-3xl text-[#303030]">Our Vision</div>
                    <div className='description m-2 text-center text-[#303030]'>Our vision is to enable every buyer on the planet to make faster and better purchasing decisions.</div>
                </div>
                <div className='flex flex-col items-center p-2 m-2 flex-1'>
                <img src={mission} className='h-20'/>
                    <div className="title text-center m-2 text-3xl text-[#303030]">Our Mission</div>
                    <div className='description text-center m-2 text-[#303030]'>Our mission is to build a real-time 'Review Aggregator Platform' that serves as a 'One Stop Solution' to reduce the research time of buyers.</div>
                </div>
                <div className='flex flex-col items-center p-2 m-2 flex-1'>
                <img src={values} className='h-20'/>
                    <div className="title text-center text-3xl m-2 text-[#303030]">Our Values</div>
                    <div className="description text-center m-2 text-[#303030]">We value the buyer's time, effort, and money spent on buying decisions. We are committed to taking a responsible approach to aggregating social media sentiments to make better choices on behalf of all buyers.</div>
                </div>
            </div>
        </div>
    );
}