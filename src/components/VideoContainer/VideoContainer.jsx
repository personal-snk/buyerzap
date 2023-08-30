import * as React from 'react';
import VideoSection from 'src/assets/home/video_section.svg';
import solution from 'src/assets/home/solution.svg';
import problem from 'src/assets/home/problem.svg';
import Video from 'src/common/video/video';


export default function VideoContainer() {
    return (
        <div className='flex flex-col py-4 md:py-8 rounded-2xl'>
            <div className="flex text-2xl md:text-3xl font-medium justify-center">Why BuyerZap?</div>
            <div className='flex flex-col md:flex-row md:px-20 md:py-10'>
                <Video className='flex m-12 md:w-36 md:mx-10 md:flex-[1_1_10%]'/>
                <div className='flex justify-center md:mx-10 md:flex-[1_1_10%] relative'>
                    <img src={VideoSection} className='mx-12 flex-1 relative'/>
                    <img src={problem} className='w-24 md:w-36 z-50 absolute top-0 left-[20%]'/>
                    <img src={solution} className='w-24 md:w-36 z-50 absolute left-[60%]'/>
                </div>
            </div>
        </div>
    );
}