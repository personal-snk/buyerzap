import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import VideoContainer from 'src/components/VideoContainer';
import Carousel from '../../common/carousel/carousel';
import Categories from '../../components/Categories';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';

const Home = () => {

    const history = useHistory();

    const categoryMap = [
        {id:1,name:'Grocery',imageURL:'grocery.svg',resultQuery:'Which is the fastest grocery services near me?'},
        {id:2,name:'Education',imageURL:'education.svg',resultQuery:''},
        {id:3,name:'HealthCare',imageURL:'health.svg',resultQuery:''},
        {id:4,name:'Furniture',imageURL:'furniture.svg',resultQuery:''},
        {id:5,name:'Automobiles',imageURL:'auto.svg',resultQuery:''},
        {id:6,name:'Grocery',imageURL:'grocery.svg',resultQuery:''},
        {id:7,name:'Education',imageURL:'education.svg',resultQuery:''},
        {id:8,name:'HealthCare',imageURL:'health.svg',resultQuery:''},
        {id:9,name:'Furniture',imageURL:'furniture.svg',resultQuery:''},
        {id:10,name:'Automobiles',imageURL:'auto.svg',resultQuery:''}
    ]

    const selectCategory =(data)=> {
        // if(data)
        history.push(`/searchResults?query=${data?.resultQuery}`)
    }

    return(
        <>
            <div class="bg-theme-white">
                <div className="relative w-[90%] md:w-[80%]">
                    <HeaderContainer/>
                </div>
                <div>
                <div className="relative md:text-3xl ml-8 md:ml-40 pt-4 md:pt-10">
                    Categories
                </div>
                <Carousel className="w-[90%] ml-6 pb-4 md:ml-36">
                    {categoryMap.map(datum =>
                        <Categories data={datum} onClick={() => selectCategory(datum)}/>
                    )}
                </Carousel>
                </div>
                <VideoContainer/>
            </div>
        </>
    )
}

export default Home;