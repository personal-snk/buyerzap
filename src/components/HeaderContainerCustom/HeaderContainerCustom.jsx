import * as React from 'react';
import { getImagePath } from 'src/utils';
import SearchBar from '../SearchBar/SearchBar';
import './style.scss'


export default function headerContainerCustom(props) {
    const queryString = props.query;
    return (
        <div className='headerContainerCustom py-4 border rounded-r-[40px]'>
                <div className='relative px-4 md:px-10 pb-2'>
                    <img src={getImagePath('buyer_icon.svg')} alt='logo' className='w-28 md:w-48'/>
                </div>
                <div className='px-4 md:px-10 xl:px-24 pt-4 relative font-light py-1 text-white'>
                    <SearchBar queryString={queryString}/>
                </div>
                <div className='absolute'><img src={getImagePath('chat_pointer.svg')} className='w-10 md:w-16'/></div>
        </div>
    );
}