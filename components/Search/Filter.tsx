'use client'
import { faAngleDown, faAngleUp, faClose, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react"

interface FilterProps {
    className: string;
}
export default function Filter({ className }: FilterProps) {

    const brand = ["Redmi", "Mi", "Samsung", "Apple",];
    const rating = [4, 3, 2]
    const ram = [8, 6, 4]
    const discount = [30, 20, 10]
    const internalStorage = [64, 128, 256]
    const [internalStorageVisible, setInternalStorageVisble] = useState(true);
    const [brandVisible, setBrandVisible] = useState(false);
    const [ratingVisible, setRatingVisible] = useState(true);
    const [gstVisible, setGstVisible] = useState(false);
    const [ramVisible, setRAMVisible] = useState(true);
    const [filter, setFilter] = useState<string[]>([]);
    const [maxPrice, setMaxPrice] = useState("30000")


    const handleFilter = (item: string) => {
        if (filter.includes(item)) {
            // If item is already in filter array, remove it
            setFilter(prevFilter => prevFilter.filter(filterItem => filterItem !== item));
        } else {
            // Otherwise, add it to the filter array
            setFilter(prevFilter => [...prevFilter, item]);
        }
    };


    return (
        <div className={className}>
            {/* Filter  */}
            <div className="py-2 px-4 border-b border-gray-300">
                <div className="flex justify-between cursor-pointer" >
                    <div className="font-semibold text-xl">Filters</div>
                    -<div className=" text-blue-600 font-semibold text-xs"
                        onClick={() => { setFilter([]); }}
                    >CLEAR ALL</div>
                </div>
                {filter.length > 0 && <div className="flex flex-wrap mt-3">
                    {filter.map((value, index) => {
                        return (
                            <div key={index} className=" bg-gray-200 p-2 mr-2 mb-2 cursor-pointer text-xs" onClick={() => handleFilter(value)}>
                                <FontAwesomeIcon icon={faClose} className="mr-2" style={{ width: '8px' }} />
                                {value}
                            </div>
                        )
                    })}
                </div>}
            </div>

            {/* Price Slider  */}
            <div className="py-4 px-4 border-b border-gray-300">
                <div className="flex justify-between cursor-pointer" >
                    <div className="font-semibold text-xs">PRICE</div>
                    <div className=" text-blue-600 font-semibold text-xs">CLEAR</div>

                </div>
                <div className='slider-container nav-item center-item mt-2'>
                    <input
                        className="w-full slider bg-blue-500"
                        type="range"
                        min="5000"
                        max="30000"
                        value={maxPrice}
                        onChange={(e) => {
                            setMaxPrice(e.target.value);
                        }}
                    />
                </div>
                {/* <div className="mt-3">
                    <select value={maxPrice} onChange={(e) => { setMaxPrice(e.target.value) }}>
                        <option value="">Select an option...</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div> */}
                <div className="mt-3">
                    <span className="text-gray-400">
                        {maxPrice}
                    </span>
                </div>
            </div>

            {/* Brand Filter */}
            <div className="py-4 px-4 border-b border-gray-300">
                <div className="flex justify-between cursor-pointer" onClick={() => { setBrandVisible(!brandVisible) }} >
                    <div className="font-semibold text-xs">BRAND</div>
                    {brandVisible ?
                        <FontAwesomeIcon icon={faAngleUp} className="text-gray-500 pr-2 pt-1" style={{ width: '16px' }} /> :
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-500 pr-2 pt-1" style={{ width: '16px' }} />
                    }

                </div>
                {brandVisible &&
                    <div className="pt-4">
                        {brand.map((value, index) => {
                            return (
                                <label key={index} className="cursor-pointer text-sm">
                                    <input
                                        type="checkbox"
                                        checked={filter.includes(value)}
                                        onChange={() => handleFilter(`${value}`)}
                                    />
                                    <span className="ml-2">{value}</span>
                                </label>
                            )
                        })}
                    </div>}
            </div>

            {/* Customer Rating  */}
            <div className="py-4 px-4 border-b border-gray-300">
                <div className="flex justify-between cursor-pointer" onClick={() => { setRatingVisible(!ratingVisible) }} >
                    <div className="font-semibold text-xs">CUSTOMER RATINGS</div>
                    {ratingVisible ?
                        <FontAwesomeIcon icon={faAngleUp} className="text-gray-500 pr-2 pt-1" style={{ width: '16px' }} /> :
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-500 pr-2 pt-1" style={{ width: '16px' }} />
                    }

                </div>
                {ratingVisible &&
                    <div className="pt-4">
                        {rating.map((value, index) => {
                            return (
                                <label key={index} className="cursor-pointer text-sm">
                                    <input
                                        type="checkbox"
                                        onChange={() => handleFilter(`${value} star & above`)}
                                        checked={filter.includes(`${value} star & above`)}
                                    />
                                    <span className="ml-2">{value}
                                        <FontAwesomeIcon icon={faStar} className="ml-1" style={{ width: '10px' }} />
                                        <span className="text-sm"> & above</span>
                                    </span>
                                </label>
                            )
                        })}

                    </div>}
            </div>

            {/* GST Invoice Available  */}
            <div className="py-4 px-4 border-b border-gray-300">
                <div className="flex justify-between cursor-pointer" onClick={() => { setGstVisible(!gstVisible) }} >
                    <div className="font-semibold text-xs">GST INVOICE AVAILABLE</div>
                    {gstVisible ?
                        <FontAwesomeIcon icon={faAngleUp} className="text-gray-500 pr-2 pt-1" style={{ width: '16px' }} /> :
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-500 pr-2 pt-1" style={{ width: '16px' }} />
                    }

                </div>
                {gstVisible &&
                    <div className="pt-4">
                        <label className=" text-sm">
                            <input
                                type="checkbox"
                                onChange={() => handleFilter("GST Invoice Available")}
                                checked={filter.includes("GST Invoice Available")}
                            />
                            <span className="ml-2">GST Invoice Available</span>
                        </label>

                    </div>}
            </div>

            {/* RAM */}
            <div className="py-4 px-4 border-b border-gray-300">
                <div className="flex justify-between cursor-pointer" onClick={() => { setRAMVisible(!ramVisible) }} >
                    <div className="font-semibold text-xs">RAM</div>
                    {ramVisible ?
                        <FontAwesomeIcon icon={faAngleUp} className="text-gray-500 pr-2 pt-1" style={{ width: '16px' }} /> :
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-500 pr-2 pt-1" style={{ width: '16px' }} />
                    }

                </div>
                {ramVisible &&
                    <div className="pt-4">
                        {ram.map((value, index) => {
                            return (
                                <label key={index} className="cursor-pointer text-sm">
                                    <input
                                        type="checkbox"
                                        onChange={() => handleFilter(`${value} GB`)}
                                        checked={filter.includes(`${value} GB`)}
                                    />
                                    <span className="ml-2">{value} GB</span>
                                </label>
                            )
                        })}
                    </div>}
            </div>

            {/* Internal Storage */}
            <div className="py-4 px-4 border-b border-gray-300">
                <div className="flex justify-between cursor-pointer" onClick={() => { setInternalStorageVisble(!internalStorageVisible) }} >
                    <div className="font-semibold text-xs">INTERNAL STORAGE</div>
                    {internalStorageVisible ?
                        <FontAwesomeIcon icon={faAngleUp} className="text-gray-500 pr-2 pt-1" style={{ width: '16px' }} /> :
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-500 pr-2 pt-1" style={{ width: '16px' }} />
                    }

                </div>
                {internalStorageVisible &&
                    <div className="pt-4">
                        {internalStorage.map((value, index) => {
                            return (
                                <label key={index} className="cursor-pointer text-sm">
                                    <input
                                        type="checkbox"
                                        onChange={() => handleFilter(`${value} GB`)}
                                        checked={filter.includes(`${value} GB`)}
                                    />
                                    <span className="ml-2">{value} GB</span>
                                </label>
                            )
                        })}
                    </div>}
            </div>

            {/* Discount  */}
            <div className="py-4 px-4 border-b border-gray-300">
                <div className="flex justify-between cursor-pointer" onClick={() => { setRatingVisible(!ratingVisible) }} >
                    <div className="font-semibold text-xs">DISCOUNT</div>
                    {ratingVisible ?
                        <FontAwesomeIcon icon={faAngleUp} className="text-gray-500 pr-2 pt-1" style={{ width: '16px' }} /> :
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-500 pr-2 pt-1" style={{ width: '16px' }} />
                    }

                </div>
                {ratingVisible &&
                    <div className="pt-4">
                        {discount.map((value, index) => {
                            return (
                                <label key={index} className="cursor-pointer text-sm">
                                    <input
                                        type="checkbox"
                                        onChange={() => handleFilter(`${value}% or more`)}
                                        checked={filter.includes(`${value}% or more`)}
                                    />
                                    <span className="ml-2">{value}% or more
                                    </span>
                                </label>
                            )
                        })}

                    </div>}
            </div>
        </div>
    )
}