'use client';

import '@/components/Profile/Profile.css';
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faLocationDot, faShoppingCart, faLock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ProfileNavigation() {
    const pathname = usePathname();

    return (
        <div className="nav-container">
            <div className="text-bold nav-heading">
                My Account
            </div>
            <ul className="nav-list">
                <Link href="/profile/mydetails">
                    <li className={`nav-list-item ${pathname === '/profile/mydetails' ? 'nav-list-active' : ''}`}>
                        <FontAwesomeIcon icon={faUserCircle} className="text-gray-100 mr-2" style={{ height: '16px', width: '16px' }}/>
                        My Details
                    </li>
                </Link>
                <Link href="/profile/manageaddress">
                    <li className={`nav-list-item ${pathname === '/profile/manageaddress' ? 'nav-list-active' : ''}`}>
                        <FontAwesomeIcon icon={faLocationDot} className="text-gray-100 mr-2" style={{ height: '16px', width: '16px' }}/>
                        Manage Address
                    </li>
                </Link>
                <Link href="/profile/orderhistory">
                    <li className={`nav-list-item ${pathname === '/profile/orderhistory' ? 'nav-list-active' : ''}`}>
                        <FontAwesomeIcon icon={faShoppingCart} className="text-gray-100 mr-2" style={{ height: '16px', width: '16px' }}/> 
                        Order History
                    </li>
                </Link>
                <Link href="/profile/changepassword">
                    <li className={`nav-list-item ${pathname === '/profile/changepassword' ? 'nav-list-active' : ''}`}>
                        <FontAwesomeIcon icon={faLock} className="text-gray-100 mr-2" style={{ height: '16px', width: '16px' }}/>
                        Change Password
                    </li>
                </Link>
            </ul>
        </div>
    );
}
