import React from 'react';
import Carousel from '../../common/carousel/carousel';
import Categories from '../../components/Categories';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import MicrosoftPartner from '../../components/MicrosoftPartner';
import TopRecommendation from '../../components/TopRecommendation';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import WhatWeDoContainer from '../../components/WhatWeDoContainer';

const Home = () => {

    const categoryMap = [
        {id:1,name:'Grocery',imageURL:'grocery.svg'},
        {id:2,name:'Education',imageURL:'education.svg'},
        {id:3,name:'HealthCare',imageURL:'health.svg'},
        {id:4,name:'Furniture',imageURL:'furniture.svg'},
        {id:5,name:'Automobiles',imageURL:'auto.svg'},
        {id:6,name:'Grocery',imageURL:'grocery.svg'},
        {id:7,name:'Education',imageURL:'education.svg'},
        {id:8,name:'HealthCare',imageURL:'health.svg'},
        {id:9,name:'Furniture',imageURL:'furniture.svg'},
        {id:10,name:'Automobiles',imageURL:'auto.svg'}
    ]

    return(
        <>
            <div class="bg-theme-white">
                <div className="relative w-[90%]">
                    <HeaderContainer/>
                </div>
                <div className="px-4 pt-6 pb-1 ml-6 md:ml-36 text-3xl">BuyerZ Categories</div>
                <Carousel className="w-[90%] ml-6 pb-4 md:ml-36">
                    {categoryMap.map(datum =>
                        <Categories data={datum}/>
                    )}
                </Carousel>
                <TopRecommendation title={'Top 10 Grocery Service Recommendations'} subtitle={'*Based on NLP Score'}/>
                {/* <VideoContainer/>
                <WhatWeDoContainer/> */}
                {/* <MicrosoftPartner/> */}
            </div>
        </>
    )
}

export default Home;