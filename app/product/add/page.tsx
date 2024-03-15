'use client';
import React, { useState } from "react";

export default function Add() {

    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');

    return (
        <>
            <form action="" className=" max-w-xl mx-auto">
                <div className="mt-8 mb-4">
                    <label htmlFor="title" className="mb-2">Product Title</label>
                    <input type="text" id="title" className="py-1 px-2 border-2 w-full "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mt-8 mb-4">
                    <label htmlFor="title" className="mb-2">Product Description</label>
                    <input type="text" id="title" className="py-1 px-2 border-2 w-full" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                </div>
            </form>
        </>
    )
}