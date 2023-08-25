import React from 'react';
import VideoContainer from 'src/components/VideoContainer';
import Carousel from '../../common/carousel/carousel';
import Categories from '../../components/Categories';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';

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
                <div className="relative w-[90%] md:w-[80%]">
                    <HeaderContainer/>
                </div>
                <div>
                <div className="relative w-[90%] ml-8 pt-4 md:w-[80%]">
                    Categories
                </div>
                <Carousel className="w-[90%] ml-6 pb-4 md:ml-36">
                    {categoryMap.map(datum =>
                        <Categories data={datum}/>
                    )}
                </Carousel>
                </div>
                <VideoContainer/>
                {/* <TopRecommendation title={'Top 10 Grocery Service Recommendations'} subtitle={'*Based on NLP Score'}/> */}
                {/* <VideoContainer/>
                <WhatWeDoContainer/> */}
                {/* <MicrosoftPartner/> */}
            </div>
        </>
    )
}

export default Home;