import * as React from 'react';


export default function BrandList({data}) {
    return (
        <div className='flex relative justify-center m-2 relative'>
            <img src={require(`src/assets/searchResults/${data.iconURL}`)} alt={`${data.name}`} className='w-48 absolute top-[20%]'/>
            <img src={require(`src/assets/searchResults/${data.imageURL}`)} alt={`${data.name}`} className='w-48'/>
            <div className='absolute bottom-[20%] text-center text-sm'>{data.name}</div>
        </div>
    );
}