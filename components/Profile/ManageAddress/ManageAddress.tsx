'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FAQ, faqs } from "@/components/Profile/FAQ";
import '@/components/Profile/Profile.css'
import AddressForm from "./AddressForm";
import Address from "./Address";
import addSmallCustom from '@/public/add-small-custom.svg'
import addSmallWhite from '@/public/add-small-white.svg'
import ServerForm from "./ServerForm";

export default function ManageAddress() {
    const [formVisibility, setFormVisibility] = useState(false)

    function openAddAddressForm() {
        setFormVisibility(true);
    }
    function closeAddAddressForm() {
        setFormVisibility(false);
    }

    const address = {
        type: "Home",
        name: "John",
        number: 1234567890,
        address: "HNo. 111, Street 1, Area 1, Bay Area, San Francisco, USA",
        state: "CA",
        pincode: 12345
    }

    return (
        <>
            <div className="text-bold text-2xl my-4">Manage Address</div>
            {
                !formVisibility &&
                <button onClick={openAddAddressForm}
                    className="addAddressButton flex justify-start">
                    <Image
                        className="add-custom"
                        src={addSmallCustom}
                        width={25}
                        height={25}
                        alt="Picture of the author"
                    />
                    <Image
                        className="add-white"
                        src={addSmallWhite}
                        width={25}
                        height={25}
                        alt="Picture of the author"
                    />
                    <div className="ml-2">Add A New Address</div>
                </button>
            }
            {formVisibility && <ServerForm closeAddAddressForm={closeAddAddressForm} />}

            <div className="address-container mt-4">
                <Address address={address} />
                <Address address={address} />
                <Address address={address} />
            </div>
            {/* FAQs  */}
            <FAQ faqs={faqs} />

        </>
    )
}


