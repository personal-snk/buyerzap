import * as React from 'react';
import scraping from '../../assets/home/webscrapping.svg';
import ai from '../../assets/home/ds_genai.svg';
import nlp from '../../assets/home/nlp.svg';
import './style.scss'


export default function WhatWeDoContainer() {
    return (
        <div className='whatweDoContainer py-4 md:py-8'> 
            <div className="flex text-3xl font-medium justify-center">How do we do it?</div>
            <div className='flex flex-col mt-4 md:flex-row'>
                <div className='flex flex-col items-center p-2 m-2'>
                    <img src={scraping} className='h-48'/>
                    <div className="title text-center m-2 text-3xl text-[#303030]">Web Scraping</div>
                    <div className='description m-2 text-center text-[#303030]'>Empowering you with consolidated data from diverse sources, we take ownership in web scraping and analysis. Our mission is to provide up-to-date information, saving you time and enabling informed decisions. Rely on our cutting-edge technologies and expert insights for smarter choices.</div>
                </div>
                <div className='flex flex-col items-center p-2 m-2'>
                <img src={ai} className='h-48'/>
                    <div className="title text-center m-2 text-3xl text-[#303030]">Data Science & Generative AI</div>
                    <div className='description text-center m-2 text-[#303030]'>Our expert team preprocesses text data and deploys cutting-edge machine learning and deep learning models to classify sentiments as positive, negative, or neutral. Trust us for comprehensive and reliable analysis to gain valuable understanding from your text data.</div>
                </div>
                <div className='flex flex-col items-center p-2 m-2'>
                <img src={nlp} className='h-48'/>
                    <div className="title text-center text-3xl m-2 text-[#303030]">Empowering Buying Decisions with NLP Ranking</div>
                    <div className="description text-center m-2 text-[#303030]">Our cutting-edge NLP algorithms gauge sentiment and extract relevant topics, enabling you to understand and shape brand perception with precision and confidence. Trust us to unravel the voice of your customers and stay ahead in the market.</div>
                </div>
            </div>
            <div className='text-[#000080] flex font-bold text-center text-[14px] px-6 md:text-lg md:py-10 md:px-20'>At Buyerzap, we leverage the capabilities of Natural language processing (NLP) to efficiently summarise a wide range of online reviews, converting vast amounts of information into user-friendly snapshots. This enables us to curate and present the most valuable reviews, empowering you to make well-informed decisions with ease.</div>
        </div>
    );
}