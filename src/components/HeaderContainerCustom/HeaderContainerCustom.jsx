import * as React from 'react';
import logo from '../../assets/buyer_icon.svg';
import pointer from '../../assets/chat_pointer.svg';
import SearchBar from '../SearchBar/SearchBar';
import './style.scss'


export default function headerContainerCustom(props) {
    const queryString = props.query;
    return (
        <div className='headerContainerCustom py-4 border rounded-r-[40px]'>
                <div className='relative px-4 md:px-10 pb-2'>
                    <img src={logo} alt='logo' className='w-28 md:w-48'/>
                </div>
                {/* <div className='md:px-16 md:pt-4 xl:px-24 xl:pt-8 md:text-lg xl:text-3xl text-[#fff]'>
                    Social Sentiment Search Engine - Real time social listening with advanced search functionality
                </div> */}
                <div className='px-4 md:px-10 xl:px-24 pt-4 relative font-light py-1 text-white'>
                    <SearchBar queryString={queryString}/>
                </div>
                <div className='absolute'><img src={pointer} className='w-10 md:w-16'/></div>
        </div>
    );
}