import * as React from 'react';


export default function Categories({data}) {
    return (
        <div className='flex justify-center m-2 relative'>
            <img src={require(`src/assets/home/${data.imageURL}`)} alt={`${data.name}`} className='w-96'/>
            <div className='absolute top-[35%] text-sm md:text-xl'>{data.name}</div>
        </div>
    );
}