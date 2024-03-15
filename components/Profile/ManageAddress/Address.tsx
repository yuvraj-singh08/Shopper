import React from "react";

interface Props {
    address: Address;
}

interface Address {
    type: string,
    name: string,
    number: number,
    address: string,
    state: string,
    pincode: number
}

export default function Address(props: Props) {
    return (
        <>
            <div className="address mb-8">
                <div className=" bg-gray-200 w-14 text-center mt-2">{props.address.type}</div>
                <div className="flex justify-start">
                    <div className="text-semibold mt-4">{props.address.name}</div>
                    <div className="text-semibold ml-4 mt-4">{props.address.number}</div>
                </div>
                <div className="mt-2">{props.address.address}</div>
                <div className="">{props.address.state} - <span className="text-semibold">{props.address.pincode}</span></div>
            </div>


        </>
    )
}