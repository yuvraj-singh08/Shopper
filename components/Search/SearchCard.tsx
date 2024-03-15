import React, { useState } from "react";
import starWhite from "@/public/star-full-white.svg"
import Link from "next/link";
import Image from "next/image";
import flipkartLogo from '@/public/flipkart-logo.png'
import amazonLogo from '@/public/amazon-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface SearchCardProps {
    className: string;
    data: {
        name: string;
        rating: number;
        reviews: string;
        features: string[];
        price: string;
        trivial: string[];
        imgSrc: string;
        logo: number;
    }
}

export default function SearchCard({ className, data }: SearchCardProps) {
    const [isChecked, setIsChecked] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isLiked, setIsLiked] = useState(false); // Boolean state variable

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }
    return (
        <div className={`${className} hover:cursor-pointer `}
            onMouseEnter={() => { setIsHovering(true) }}
            onMouseLeave={() => { setIsHovering(false) }}
        >
            <div className="flex my-8">
                <div className="imgContaine relative" style={{ width: 200 }}>
                    {/* Using Image component gave error */}
                    <button
                        className={`absolute top-0 right-0 `}
                        onClick={handleLikeClick}
                    >
                        <FontAwesomeIcon icon={faHeart} className={isLiked ? 'text-red-500' : 'text-gray-300'} />
                    </button>
                    <img src={data.imgSrc} width={100} height={400} alt="Product Image" className="mx-auto" />
                </div>
                <div className="px-8" style={{ width: '70%' }}>
                    <Link href={'/product/6'} className={`font-semibold text-xl ${isHovering ? 'text-blue-700' : ''}`}>
                        {data.name}
                    </Link>
                    <div className='my-1'>
                        <span className=' text-white p-1 rounded-md' style={{ backgroundColor: '#388e3c' }}>{data.rating}
                            <Image src={starWhite} width={15} height={10} alt='star-white' className='inline' />
                        </span>
                        &nbsp;
                        <span className="text-gray-400">
                            {data.reviews}
                        </span>
                    </div>

                    {/* Product Features List */}
                    <ul className="list-disc mt-4 ml-8">
                        {data.features.map((data, index) => {
                            return (
                                <li key={index}>
                                    {data}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="py-6 flex">
                    <div>
                        <div className="font-semibold text-xl">
                            {data.price}
                        </div>
                        <div className=" text-green-700 font-medium text-xs">25% off</div>
                    </div>
                    <div className="ml-4">
                        <Image src={data.logo ? amazonLogo : flipkartLogo} width={70} height={1} alt="Flipkart Logo" />
                    </div>
                </div>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    &nbsp;&nbsp;Add to compare
                </label>
            </div>
        </div>
    )
}