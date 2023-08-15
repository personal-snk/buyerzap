import * as React from 'react';
import MicrosoftBadge from '../../assets/home/microsoft_badge.svg'

export default function MicrosoftPartner() {
    return (
        <div className='mt-10 relative'>
            <img src={MicrosoftBadge} className='w-36 absolute top-[-20%] left-[50%] -translate-x-2/4' />
            <div className='h-[100px] bg-gradient-to-r from-[#00D4C6] to-[#30D59A]'></div>
        </div>
    );
}