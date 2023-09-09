import * as React from 'react';
import Video from 'src/common/video/video';
import { getImagePath } from 'src/utils';


export default function VideoContainer() {
    return (
        <div className='flex flex-col py-4 md:py-8 rounded-2xl'>
            <div className="flex text-2xl md:text-3xl font-medium justify-center">Why BuyerZap?</div>
            <div className='flex flex-col md:flex-row md:px-20 md:py-10'>
                <Video className='flex m-12 md:w-36 md:mx-10 md:flex-[1_1_10%]'/>
                <div className='flex justify-center md:mx-10 md:flex-[1_1_10%] relative'>
                    <img src={getImagePath('home/video_section.svg')} className='mx-12 flex-1 relative'/>
                    <img src={getImagePath('home/problem.svg')} className='w-24 md:w-36 z-10 absolute top-0 left-[20%]'/>
                    <img src={getImagePath('home/solution.svg')} className='w-24 md:w-36 z-10 absolute left-[60%]'/>
                </div>
            </div>
        </div>
    );
}