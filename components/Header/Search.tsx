// components/Search.js
'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'

export default function Search() {
    const [isInputActive, setIsInputActive] = useState(false);
    const [query, setQuery] = useState('');
    const router = useRouter()

    const handleInputFocus = () => {
        setIsInputActive(true);
    };

    const handleInputBlur = () => {
        setIsInputActive(false);
    };

    const handleSubmit = () => {
        // Do something with the form submission
        console.log('Form submitted with value:', query);
        setIsInputActive(false);
        router.push(`/search/${encodeURIComponent(query)}`)

    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Submit the form when Enter key is pressed
            event.preventDefault(); // Prevent the default behavior of Enter key
            // You can also call handleSubmit directly here if you're not using a form element
            // handleSubmit();
            handleSubmit();
        }
    };

    const options = ["mobiles", "shoes", "t-Shirt", "laptop", "watches", "tv"];

    return (
        <div className={`relative bg-white px-8 py-3 rounded-md border-2px ${isInputActive ? 'border-white' : ''}`}>
            <div className="absolute inset-y-0 left-0 pl-3 pr-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500" style={{ height: '22px', width: '22px' }} />
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    title="Search for Products, Brands and More"
                    placeholder="Search for Products, Brands and More"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onKeyDown={handleKeyPress}
                    className=" ml-4 text-black w-5/6 outline-none"
                />
            </form>

            <ul className={`z-10 text-black absolute left-0 w-full mt-6 bg-white border-spacing-1 rounded-xl shadow-md overflow-hidden ${isInputActive ? "" : "hidden"}`}>
                <li className="py-2 px-2 flex justify-start">
                    <span className="font-bold text-gray-500">
                        Discover More
                    </span>
                </li>
                {options.map((value, index) => {
                    return (
                        <li key={index} className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-start" onClick={handleSubmit}>
                            <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" style={{ height: '16px', width: '16px' }} />
                            {value}
                        </li>
                    )
                })}

            </ul>
        </div>
    );
}

