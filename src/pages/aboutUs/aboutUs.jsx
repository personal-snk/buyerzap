import React from 'react';
import './style.css';

import pillarImg from 'src/assets/aboutUs/pillars.svg';
import WhatWeDoContainer from 'src/components/WhatWeDoContainer';
import VisionContainer from 'src/components/VisionContainer';
import TeamsContainer from 'src/components/TeamsContainer';
import Breadcrum from 'src/common/breadcrum';
import VideoContainer from 'src/components/VideoContainer';

const AboutUs = () => {
    return(
        <div className="about_us_page">
            <Breadcrum navArr={['Home','About Us']} />
            <div className='about px-10 md:px-40'>
                <h2 className='flex text-3xl justify-normal md:justify-start md:text-4xl font-medium'>About BuyerZap</h2>
                {/* <div className='intro_section pt-5'>
                    <div className='desc leading-6 md:leading-8'>
                    Lorem ipsum dolor sit amet consectetur. Lorem morbi ut in neque. Id tortor in molestie cras mauris amet massa faucibus pulvinar. Quis placerat nisl urna eget interdum ultrices quam velit. Nullam egestas consectetur eleifend ipsum mauris leo sapien fringilla augue. At donec nulla neque duis eget malesuada. Quam sed et nibh id risus ultrices quam feugiat eget. Pulvinar odio nunc in aliquam nam nisl. Pellentesque amet fermentum posuere fames adipiscing ullamcorper viverra. Blandit netus in etiam leo phasellus elit tellus mauris. Arcu rhoncus justo orci pulvinar. Dignissim eleifend fermentum arcu posuere placerat ornare ut. Diam sed suscipit platea id. Posuere et cras cras etiam.
                    <ul className='list-inside leading-6 py-6 list-disc md:leading-8 md:indent-2'>
                        <li>Pulvinar odio nunc in aliquam nam pellentesque amet fermentum posuere fames ullamcorper viverra</li>
                        <li>Pulvinar odio nunc in aliquam nam pellentesque amet fermentum posuere fames ullamcorper viverra</li>
                        <li>Pulvinar odio nunc in aliquam nam pellentesque amet fermentum posuere fames ullamcorper viverra</li>
                        <li>Pulvinar odio nunc in aliquam nam pellentesque amet fermentum posuere fames ullamcorper viverra</li>
                    </ul>
                    </div>
                </div> */}
            </div>
            <VisionContainer/>
            <VideoContainer/>
            <WhatWeDoContainer/>
            {/* <div className='flex flex-col values py-5 px-10 md:flex-row md:items-center md:py-20 md:px-40 bg-[#D9D9D9]'>
                <h2 className='flex text-3xl justify-center md:justify-start md:text-6xl font-light md:flex-[1_1_10%]'>Values</h2>
                <div className='md:flex-[1_1_60%] pt-5 leading-6 md:leading-8 value_desc'>
                    Lorem ipsum dolor sit amet consectetur. Lorem morbi ut in neque. Id tortor in molestie cras mauris amet massa faucibus pulvinar. Quis placerat nisl urna eget interdum ultrices quam velit. Nullam egestas consectetur eleifend ipsum mauris leo sapien fringilla augue. At donec nulla neque duis eget malesuada. Quam sed et nibh id risus ultrices quam feugiat eget. Pulvinar odio nunc in aliquam nam nisl. Pellentesque amet fermentum posuere fames adipiscing ullamcorper viverra. Blandit netus in etiam leo phasellus elit tellus mauris. Arcu rhoncus justo orci pulvinar. Dignissim eleifend fermentum arcu posuere placerat ornare ut. Diam sed suscipit platea id. Posuere et cras cras etiam.
                </div>
            </div> */}
            <div className='pillars_section grid grid-cols-2 md:items-center md:flex md:px-20'>
                <img src={pillarImg} className='w-[200px] md:w-[15%] md:flex-[1_1_10%]'/>
                <div className="justify-around md:hidden flex flex-col md:flex-row py-5">
                    <h2 className='text-2xl md:text-4xl font-medium md:flex-[1_1_10%]'>BuyerZap Pillars</h2>
                    <div className='value_desc md:flex-[1_1_10%]'>
                        <ul className='list-inside md:py-6 list-disc md:leading-8 indent-2'>
                        <li>Be Qualitative</li>
                        <li>Be Ethical & Efficient</li>
                        <li>Be Data Driven</li>
                        <li>Be Result Oriented</li>
                        <li>Be an Owner</li>
                        <li>Be the BEST</li>
                        </ul>
                    </div>
                </div>
                <h2 className='hidden md:flex text-2xl md:text-4xl font-medium md:flex-[1_1_10%]'>BuyerZap Pillars</h2>
                <div className='hidden md:flex value_desc md:flex-[1_1_10%]'>
                    <ul className='list-inside md:py-6 list-disc md:leading-8 indent-2'>
                        <li>Be Qualitative</li>
                        <li>Be Ethical & Efficient</li>
                        <li>Be Data Driven</li>
                        <li>Be Result Oriented</li>
                        <li>Be an Owner</li>
                        <li>Be the BEST</li>
                    </ul>
                </div>
            </div>
            <TeamsContainer/>
        </div>
    )
}

export default AboutUs;