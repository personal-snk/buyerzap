import * as React from 'react';
import InfoBubble from '../../assets/home/chat_small.png'


export default function InfoContainer({className}) {
    return (
        <div className={`${className} flex w-[45%]`}>
            <img src={InfoBubble} className='absolute '/>
            <div className='flex flex-col flex-1 p-2'>
                <div className='headerText relative py-1 font-light text-theme-blue text-[12px]'>
                Search<br/>till today
                </div>
                <div className='relative font-bold py-1 text-black text-[14px]'>
                    10.5m
                </div>
            </div>
            <div className='flex px-2 flex-1 justify-center items-center'>
                <div className='relative font-bold py-1 text-black text-[14px]'>
                    10.5m
                </div>
            </div>
        </div>
    );
}