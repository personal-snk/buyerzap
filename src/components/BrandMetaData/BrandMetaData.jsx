import * as React from 'react';
import { getImagePath } from 'src/utils';


export default function BrandMetaData({data}) {
    return (
        <>
        <div className='my-2 md:mt-4 md:mx-20 '>
            <img src={getImagePath(`searchResults/${data.iconURL}`)} className='rounded-lg w-[130px]' alt=''/>
            {/* <StarRating /> */}
        </div>
        <div className='md:flex items-center justify-center mb-4 md:mx-20 relative'>
            <div className='brandDetailsContainer m-2 md:flex-[1_1_30%] '>
                <div className='text-light text-sm'>
                {data.desc}
                </div>
            </div>
            <div className='flex items-center md:border-r-2 md:border-l-2 md:border-solid md:flex-col m-2 fakeReviewContainer text-center md:flex-[1_1_30%] '>
                <div className='text-[#010485] font-bold text-lg md:text-3xl mr-2'>15%</div>
                <div className='text-[#010485] font-medium text-xs md:text-lg mx-2'>Fake Reviews</div>
                <div className='text-[#010485] font-medium text-xs  md:text-sm mx-2'>Social Media Review Presence</div>
            </div>
            <div className='flex m-2 md:flex-col deliveryTimeContainer items-center  md:flex-[1_1_30%] '>
                <div className='text-[#010485] mr-2'><img src={getImagePath('searchResults/deliveryTime.svg')} className='rounded-lg w-6 md:w-auto' alt=''/></div>
                <div className='text-[#010485] font-medium text-sm md:text-lg mx-2'>40 mins</div>
                <div className='text-[#010485] font-medium text-xs mx-2 md:text-sm'>Delivery time Approx.</div>
            </div>
            <div className='viewDetailContainer'>
            </div>
        </div>
        <div className='border-solid border-[1px] opacity-20 border-[#000] md:mx-20'></div>
        </>
    );
}