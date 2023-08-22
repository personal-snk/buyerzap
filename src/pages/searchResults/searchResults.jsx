import React from 'react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom';
import BrandMetaData from 'src/components/BrandMetaData';
import HeaderContainerCustom from 'src/components/HeaderContainerCustom';
import Carousel from '../../common/carousel/carousel';
import BrandList from '../../components/BrandList';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import TopRecommendation from '../../components/TopRecommendation';

const SearchResults = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(false);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");
    const { slug } = useParams();

    const brandMap = [
        {id:1,name:'BigBasket',imageURL:'bigbasket.svg',rating:'4',iconURL:'bigbasketIcon.svg'},
        {id:2,name:'Zepto',imageURL:'zepto.svg',rating:'4',iconURL:'zeptoIcon.svg'},
        {id:3,name:'Blinkit',imageURL:'blinkit.svg',rating:'4',iconURL:'blinkitIcon.svg'},
        {id:4,name:'Swiggy Instamart',imageURL:'instamart.svg',rating:'4',iconURL:'instamartIcon.svg'},
        {id:5,name:'Amazon Fresh',imageURL:'fresh.svg',rating:'4',iconURL:'freshIcon.png'},
        {id:6,name:'BigBasket',imageURL:'bigbasket.svg',rating:'4',iconURL:'bigbasketIcon.svg'},
        {id:7,name:'Zepto',imageURL:'zepto.svg',rating:'4',iconURL:'zeptoIcon.svg'},
        {id:8,name:'Blinkit',imageURL:'blinkit.svg',rating:'4',iconURL:'blinkitIcon.svg'},
        {id:9,name:'Swiggy Instamart',imageURL:'instamart.svg',rating:'4',iconURL:'instamartIcon.svg'},
        {id:10,name:'Amazon Fresh',imageURL:'fresh.svg',rating:'4',iconURL:'freshIcon.png'}
    ];

    const brandMetaData = [
        {id:1,name:'BigBasket',desc:'Big Basket is an Indian q-commerce company focused on grocery and food delivery. Founded in 2020 and launched in July 2021, Zepto became well-known as one of the fastest growing technology startups in Indian history.',rating:'4',iconURL:'bigbasketIcon.svg'},
        {id:2,name:'Dmart',desc:"India's largest retailer, DMart Group, DMart Ready brings the trusted shopping experience to your homes. As an efficient grocery and lifestyle app, we offer seamless online ordering and same-day pick-up from over 200 stores.",rating:'4',iconURL:'dmartIcon.svg'},
        {id:3,name:'Zepto',desc:'Zepto is an Indian q-commerce company focused on grocery and food delivery. Founded in 2020 and launched in July 2021, Zepto became well-known as one of the fastest growing technology startups in Indian history.',rating:'4',iconURL:'zeptoIcon.svg'},
        {id:4,name:'Swiggy Instamart',desc:'In August 2020, Swiggy launched its instant grocery delivery service called Instamart using a network of dark stores. In early 2021, the company closed Swiggy Stores and expanded its operations under Instamart. Operates from 6 AM to late night.',rating:'4',iconURL:'instamartIcon.svg'},
        {id:5,name:'Blinkit',desc:'Blink Commerce Private Limited, Blinkit and formerly Grofers, is an Indian instant delivery service. It was founded in December 2013 and is based out of Gurgaon. Famous for it’s 10 minute delivery Blinkit became very popular. In 2022, Zomato acquired Blinkit for US$568 million in an all-stock deal.',rating:'4',iconURL:'blinkitIcon.svg'},
        {id:6,name:'Spar',desc:'SPAR is the leading hypermarket and focuses to provide its customers with fresh produce every time they visit the store, be it the physical or online grocery store. Apart from physical stores, SPAR also has an online presence.',rating:'4',iconURL:'sparIcon.svg'},
        {id:7,name:"Natures Basket",desc:"Nature's Basket is an Indian grocery delivery chain of retail stores focused in gourmet food. It has a range of organic food, imported ingredients and exotic foods. The company is headquartered in Mumbai, India and has multiple stores in cities like Mumbai, Bengaluru, Pune and Kolkata.",rating:'4',iconURL:'natureBasketIcon.svg'},
    ];

    return(
        <>
            <div class="bg-theme-white">
                <div className="relative md:w-[80%] z-20">
                    <HeaderContainerCustom query={query}/>
                </div>
                <div className='px-4 pt-8 pb-4 text-xs md:ml-20 md:pt-5 md:text-xl'>{`Home / Search Results: ${query}`}</div>
                <div className='px-4 md:ml-20 md:py-5 md:text-xl results_found'>1,02,345 Results Found</div>
                <div className="pt-4 px-4 pb-1 md:ml-20 text-lg md:text-2xl font-medium">Top 10 Faster Grocery Services</div>
                <Carousel className="pb-4 md:ml-20">
                    {brandMap.map(datum =>
                        <BrandList data={datum}/>
                    )}
                </Carousel>
                <TopRecommendation title=""/>
                <div className="px-4 py-4 md:py-8">
                {brandMetaData.map(datum => 
                        <BrandMetaData data={datum}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default SearchResults;