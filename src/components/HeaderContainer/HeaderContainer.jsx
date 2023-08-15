import * as React from 'react';
import logo from '../../assets/buyer_icon.svg';
import SearchBar from '../SearchBar/SearchBar';
import './style.scss'


export default function HeaderContainer() {
    return (
        <div className='headerContainer py-4 border rounded-r-[40px]'>
                <div className='relative px-4 md:px-10 pb-2'>
                    <img src={logo} alt='logo' className='w-28 md:w-48'/>
                </div>
                <div className='px-4 md:px-10 relative font-light py-1 text-white text-[10px]'>
                    <SearchBar/>
                </div>
                <div className='triangle absolute'></div>
        </div>
    );
}