import * as React from 'react';
import { getImagePath } from 'src/utils';


export default function Categories({data,onClick}) {
    return (
        <div className='flex justify-center m-2 relative' onClick={onClick}>
            <img src={getImagePath(`home/${data.imageURL}`)} alt={`${data.name}`} className='w-96'/>
            <div className='absolute top-[35%] text-sm md:text-xl'>{data.name}</div>
        </div>
    );
}