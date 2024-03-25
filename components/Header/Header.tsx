"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUserAlt, faSignInAlt, faEllipsisVertical, faBell, faUsers, faBullhorn, faDownload }
    from "@fortawesome/free-solid-svg-icons";

import Search from './Search';
import { revalidatePath } from 'next/cache';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Check if localStorage is available before accessing it
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedUsername = localStorage.getItem('username');
            if (storedUsername) {
                setUsername(storedUsername);
            }
        }
    }, []);

    function handleLogout() {
        localStorage.setItem("auth_token", '');
        localStorage.setItem("refresh_token", '');
        localStorage.setItem("username", '');
        localStorage.setItem("email", '');
        localStorage.setItem("phone", '');
        // revalidatePath("/");
    }

    const handleMouseLeave = () => {
        setTimeout(() => {
            if (ref.current !== null) {
                if (!ref.current.contains(document.activeElement)) {
                    setIsOpen(false);
                }
            }
        }, 3000); // Adjust this delay as needed
    };

    return (
        <nav className="bg-gray-800 text-white py-4 sticky top-0 z-20">
            <div className="mx-auto flex justify-between items-center">
                <div className="ml-11 text-xl font-bold">
                    <a href='/'>G-Shopper</a>
                </div>

                {/* <div className="ml-11 text-xl">
                    <button onClick={handleLogout} >Logout</button>
                </div> */}

                <div className="flex-1 max-w-3xl">
                    <Search />
                </div>

                <div className='mr-4 flex justify-center'>
                    <div className=" ml-1">
                        <a href='/cart' className='flex hover:text-gray-500'>
                            <FontAwesomeIcon icon={faHeart} className="text-gray-100 mt-1" />
                            <span className='mx-4'>Wishlist</span>
                        </a>
                    </div>

                    <div className="ml-5">
                        <a href="/profile/mydetails" className="flex hover:text-gray-500">
                            <FontAwesomeIcon icon={faUserAlt} className="text-gray-100 mt-1" />
                            <span className='mx-4'>Profile</span>
                        </a>
                    </div>

                    <div className="ml-5">
                        <a href={username ? '/' : '/login'} className="flex hover:text-gray-500">
                            <FontAwesomeIcon icon={faSignInAlt} className="text-gray-100 mt-1" />
                            <span className='mx-4'>{username ? username : "Login"}</span>
                        </a>
                    </div>

                    <div className="ml-5 mr-8 relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={handleMouseLeave}>
                        <div ref={ref} className="relative">
                            <FontAwesomeIcon icon={faEllipsisVertical} className="text-gray-100 mt-1 cursor-pointer" />
                            {isOpen && (
                                <div
                                    className="absolute mt-2 w-60 bg-white rounded-lg shadow-lg right-0"
                                    onMouseEnter={() => setIsOpen(true)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <ul style={{ color: '#303030', padding: '20px', listStyle: 'none', margin: 0 }}>
                                        <li><FontAwesomeIcon icon={faBell} className="text-gray-600" style={{ height: '16px', width: '16px' }} /> <a href="#notification" style={{ textDecoration: 'none', color: '#303030' }}>Notification Preferences</a></li>
                                        <li><FontAwesomeIcon icon={faUsers} className="text-gray-600" style={{ height: '16px', width: '16px' }} /> <a href="#customer_care" style={{ textDecoration: 'none', color: '#303030' }}>Customer Care 24x7</a></li>
                                        <li><FontAwesomeIcon icon={faBullhorn} className="text-gray-600" style={{ height: '16px', width: '16px' }} /> <a href="#advertise" style={{ textDecoration: 'none', color: '#303030' }}>Advertise</a></li>
                                        <li><FontAwesomeIcon icon={faDownload} className="text-gray-600" style={{ height: '16px', width: '16px' }} /> <a href="#download_app" style={{ textDecoration: 'none', color: '#303030' }}>Download App</a></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}