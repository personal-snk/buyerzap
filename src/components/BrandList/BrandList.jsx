import * as React from 'react';
import { getImagePath } from 'src/utils';


export default function BrandList({data}) {
    return (
        <div className='flex relative justify-center m-2 relative'>
            <img src={getImagePath(`searchResults/${data.iconURL}`)} alt={`${data.name}`} className='w-48 absolute top-[20%]'/>
            <img src={getImagePath(`searchResults/${data.imageURL}`)} alt={`${data.name}`} className='w-48'/>
            <div className='absolute bottom-[20%] text-center text-sm'>{data.name}</div>
        </div>
    );
}