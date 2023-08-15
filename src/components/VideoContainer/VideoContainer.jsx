import * as React from 'react';
import VideoIcon from '../../assets/home/video_icon.svg';
import VideoSection from '../../assets/home/video_section.svg';
import solution from '../../assets/home/solution.svg';
import problem from '../../assets/home/problem.svg';


export default function VideoContainer() {
    return (
        <div className='flex flex-col py-4 md:py-8 rounded-2xl'>
            <div className="flex text-3xl font-medium justify-center">Why BuyerZap?</div>
            <div className='flex flex-col md:flex-row my-10 md:px-20'>
                <img src={VideoIcon} className='flex m-12 md:w-36 md:mx-10 md:flex-[1_1_10%]'/>
                <div className='flex justify-center md:mx-10 md:flex-[1_1_10%] relative'>
                    <img src={VideoSection} className='mx-12 flex-1 relative'/>
                    <img src={problem} className='w-36 z-50 absolute top-0 left-[20%]'/>
                    <img src={solution} className='w-36 z-50 absolute left-[60%]'/>
                </div>
            </div>
        </div>
    );
}