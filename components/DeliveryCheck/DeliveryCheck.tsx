import React, { useState } from "react";
import './index.css'
import locationGray from '@/public/location-sharp-gray.svg'
import Image from "next/image";

export default function DeliveryCheck() {
    const [isActive, setIsActive] = useState(false)
    const [pincode, setPincode] = useState<number | string>('');    
    return (
        <>
            <div className={`pb-2 w-72 ${isActive ? 'pincode-container-focus' : 'pincode-container'}`}>
                <span>
                    <Image className='inline' src={locationGray} width={15} height={10} alt='location-gray' />
                </span>
                <input type='text' placeholder='Enter Delivery Pincode' className='ml-2 pincode-input ' onFocus={() => { setIsActive(true) }} onBlur={() => { setIsActive(false) }}
                    style={{ width: '180px' }}
                    value={pincode}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPincode(e.target.value)
                    }}
                />
                <button className={`font-semibold ml-9 ${isActive ? 'text-blue-500' : 'text-blue-600'}`}>Check</button>
            </div>
        </>
    )
}