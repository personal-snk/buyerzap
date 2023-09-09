import React from 'react';
import './style.css';
import PieChart from 'src/common/pieChart';
import { getImagePath } from 'src/utils';

const BrandDetails = () => {
    return(
        <div className="about_us_page">
            <div className='breadcrum px-10 pb-5 md:pb-10 md:px-40'>Home / Brand: Zepto</div>
            <div className='about_section px-10 md:px-40'>
                <h2 className='flex text-3xl justify-center md:justify-start md:text-5xl font-medium'>Zepto</h2>
                <div className='intro_section py-4 md:py-10 flex flex-col-reverse md:flex-row items-center'>
                    <div className='desc leading-6 md:leading-8 m-4 md:w-[60%] md:mr-10'>
                    Zepto is an Indian q-commerce company focused on grocery and food delivery. Founded in 2020 and launched in July 2021, Zepto became well-known as one of the fastest growing technology startups in Indian history.
                    <br/>
                    <br/>
                    Founded           : 2020
                    <br/>
                    Headquarters   : Mumbai, India
                    <br/>
                    Website             : zeptonow.com
                    </div>
                    <div className='logo_section border-2 border-solid rounded-lg border-[#D9D9D9]'>
                        <img src={getImagePath('searchResults/zeptoIcon.svg')} className='w-60 md:flex-[1_1_10%]'/>
                    </div>
                </div>
            </div>
            <h2 className='flex text-3xl pt-4 justify-center md:justify-normal md:text-4xl font-medium md:pt-10 md:px-40'>Social Feedback</h2>
            <div className='flex flex-col md:flex-row md:items-center'>
                <div className='flex flex-col values py-5 px-10 md:items-center md:px-40 flex-[1_1_10%]'>
                    <div className='flex border-b-2 border-solid border-[#D9D9D9] py-5 leading-6 md:leading-8 items-center feedback_review_section'>
                        <div className="flex flex-[1_1_20%]">
                            <img src={getImagePath('brandDetails/positiveRating.svg')} className='w-16 mx-4 md:mx-10'/>
                        </div>
                        <div className='flex flex-col flex-[1_1_100%]'>
                            <div className='font-semibold'>Ice Cream received was amazing</div>
                            <div className='font-normal'>We ordered ice cream and it was delivered within 15mins where the ice cream was still very much enjoyable. Thanks for delivery executive for speedy delivery...</div>
                        </div>
                    </div>
                    <div className='flex border-b-2 border-solid border-[#D9D9D9] py-5 leading-6 md:leading-8 items-center feedback_review_section'>
                    <div className="flex flex-[1_1_20%]">
                            <img src={getImagePath('brandDetails/negativeRating.svg')} className='w-16 mx-4 md:mx-10'/>
                        </div>
                        <div className='flex flex-col flex-[1_1_100%]'>
                            <div className='font-semibold'>Ice Cream received was amazing</div>
                            <div className='font-normal'>We ordered ice cream and it was delivered within 15mins where the ice cream was still very much enjoyable. Thanks for delivery executive for speedy delivery...</div>
                        </div>
                    </div>
                    <div className='flex border-b-2 border-solid border-[#D9D9D9] py-5 leading-6 md:leading-8 items-center feedback_review_section'>
                    <div className="flex flex-[1_1_20%]">
                            <img src={getImagePath('brandDetails/negativeRating.svg')} className='w-16 mx-4 md:mx-10'/>
                        </div>
                        <div className='flex flex-col flex-[1_1_100%]'>
                            <div className='font-medium'>Ice Cream received was amazing</div>
                            <div className='font-normal'>We ordered ice cream and it was delivered within 15mins where the ice cream was still very much enjoyable. Thanks for delivery executive for speedy delivery...</div>
                        </div>
                    </div>
                </div>
                <div className='flex review_graph_container w-[100%] h-[360px] my-8 md:flex-[1_1_10%]'>
                    <PieChart/>
                </div>
            </div>
        </div>
    )
}

export default BrandDetails;