"use client";

// pages/product/[id].tsx
import React, { useState, useRef, useEffect } from "react";
import Card from "@/components/Card/Card";
import { useParams } from "next/navigation";
import { products, electronics, Thumbnails } from "./products";
import Image from "next/image";
import DeliveryCheck from "@/components/DeliveryCheck/DeliveryCheck";
import ReactImageMagnify from "@blacklab/react-image-magnify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import amazonLogo from "@/public/Amazon-buy.png";
import flipkartLogo from "@/public/Flipkart-buy.png";
import amazonPin from "@/public/Amazon-pin.png";
import flipkartPin from "@/public/Flipkart-pin.png";
import { Dot } from "lucide-react";
interface Product {
    name: string;
    imgSrc: string;
    discount?: string;
    price: string;
    site: number;
    productId: string;
}

interface Thumbnails {
    name: string;
    tag: string;
    imgSrc: string;
}
// Handle zoom in/out events (implement touch and mouse events as needed)

const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get product ID from URL
    const numericId = Number(id);
    const product =
        numericId <= 5 ? products[numericId - 1] : electronics[numericId - 6]; // Fetch product details

    const [selectedImage, setSelectedImage] = useState(product.imgSrc); // State for selected image

    const handleThumbnailsClick = (imageSrc: string) => {
        setSelectedImage(imageSrc); // Update selected image when a Thumbnails is clicked
    };

    const [isLiked, setIsLiked] = useState(false); // Boolean state variable

    const handleLikeClick = () => {
        setIsLiked(!isLiked); // Toggle state on click
    };

    return (
        <>
            <div className="product-container mx-auto px-4 py-8 flex h-screen overflow-hidden">
                <div className="left relative sticky top-0" style={{ width: "40%" }}>
                    <div className="absolute top-3 right-3">
                        <button
                            className={`flex items-center justify-center w-10 h-10 shadow-md rounded-full border border-gray-300 hover:border-gray-500 `} 
                            onClick={handleLikeClick}
                        >
                            <FontAwesomeIcon icon={faHeart} className={isLiked? 'text-red-500': 'text-gray-300'} />
                        </button>
                    </div> 
                    <div className="border border-gray-200 py-6 rounded shadow-sm flex items-center justify-center">
                        {/* Parent container for image and Thumbnails */}
                        <div className="product-image-container">
                            {/* Main product image */}
                            {/* <Image
                            src={selectedImage}
                            alt={product.name}
                            className={`product-img h-96 object-contain shadow-sm`}
                            width={600}
                            height={600}
                        /> */}
                            <ReactImageMagnify
                                imageProps={{
                                    alt: product.name,
                                    src: selectedImage,
                                    className: "product-img w-96 h-96 object-contain shadow-sm",
                                    width: 500,
                                    height: 500,
                                }}
                                magnifiedImageProps={{
                                    src: selectedImage,
                                    width: 400,
                                    height: 400,
                                }}
                                onActivationChanged={function noRefCheck() { }}
                                onDetectedEnvironmentChanged={function noRefCheck() { }}
                                onPositionChanged={function noRefCheck() { }}
                                portalProps={{
                                    horizontalOffset: 10,
                                    id: "portal-test-id",
                                }}
                            />
                            {/* Container for Thumbnails images */}
                            <div className="flex mt-8 justify-center">
                                {Thumbnails.map((thumbnail, index) => (
                                    <Image
                                        key={thumbnail.imgSrc} // Use unique key based on image source
                                        src={thumbnail.imgSrc} // Use actual image URL from "Thumbnails" array
                                        alt={`${product.name} thumbnail ${index + 1}`}
                                        className={`thumbnail cursor-pointer object-contain w-16 h-16
                          ${index === Thumbnails.length - 1 ? "" : "mr-1"}
                          ${selectedImage === thumbnail.imgSrc
                                                ? " border-blue-500 border-2"
                                                : "border border-gray-300"
                                            }`}
                                        width={80}
                                        height={80}
                                        onClick={() => handleThumbnailsClick(thumbnail.imgSrc)} // Pass actual image URL
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className=" right overflow-y-auto bg-white px-4 pb-4"
                    style={{
                        width: "60%",
                        scrollbarWidth: "none",
                        "-ms-overflow-style": "none",
                    }}
                >
                    <div className="text-lg">
                        Acer 21.5 inch Full HD VA Panel with VGA, HDMI, Ergonomic Stand,
                        2X2W Inbuilt Speakers, ZeroFrame Design Monitor (KA222Q) (AMD Free
                        Sync, Response Time: 1 ms, 100 Hz Refresh Rate)
                    </div>
                    <div className="flex items-center">
                        <div className="text-white bg-green-700 p-1 rounded text-xs">
                            4.3★
                        </div>
                        <div className="ml-2 text-gray-500">
                            4,390 Ratings & 554 Reviews
                        </div>
                    </div>
                    <div className="mt-2 text-sm font-semibold text-green-700">
                        Special price
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <div className="mt-2 text-xl pr-2">
                                <Image
                                    src={flipkartLogo}
                                    width={100}
                                    height={20}
                                    alt="Flipkart Logo"
                                />
                            </div>
                            <div className="mt-2 text-xl font-semibold text-red-500 line-through">
                                ₹ 8,799
                            </div>
                            <div className="mt-2 pl-2 pr-2 text-xl font-semibold text-gray-800">
                                ₹ 5,299
                            </div>
                            <div className="mt-2 text-gray-500">38% off</div>
                            <button className="ml-4 mt-2 bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-3 rounded">
                                ✔ Buy Now
                            </button>
                        </div>
                        <div className="flex items-center">
                            <div className="mt-2 text-xl pr-2">
                                <Image
                                    src={amazonLogo}
                                    width={100}
                                    height={20}
                                    alt="Amazon Logo"
                                />
                            </div>
                            <div className="mt-2 text-xl font-semibold text-red-500 line-through">
                                ₹ 8,799
                            </div>
                            <div className="mt-2 pl-2 pr-2 text-xl font-semibold text-gray-800">
                                ₹ 5,799
                            </div>
                            <div className="mt-2 text-gray-500">34% off </div>
                            <button className="ml-4 mt-2 bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-3 rounded">
                                ✔ Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col my-4">
                        <div className="mt-2">
                            <div className="font-bold mb-4">Delivery</div>
                            <div>
                                <div className="ml-3">
                                    <DeliveryCheck />
                                    <div className=" items-center">
                                        <div className="mt-2 flex font-semibold text-sm">
                                            <div className="mt-1 text-xl pr-2">
                                                <Image
                                                    src={amazonPin}
                                                    width={30}
                                                    height={50}
                                                    alt="Amazon Pin"
                                                />
                                            </div>
                                            <div>
                                                Delivery by 5 Mar, Tuesday |{" "}
                                                <span className="text-green-600">Free </span>
                                                <span className="text-gray-500 line-through">₹40</span>
                                                <div className="mt-1 font-normal text-xs">
                                                    if ordered before 7:11 AM
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 flex font-semibold text-sm">
                                            <div className="mt-1 text-xl pr-2">
                                                <Image
                                                    src={flipkartPin}
                                                    width={30}
                                                    height={50}
                                                    alt="Flipkart Pin"
                                                />
                                            </div>
                                            <div>
                                                Delivery by Tomorrow, Friday |{" "}
                                                <span className="text-green-600">Free Delivery </span>
                                                <div className="mt-1 font-normal text-xs">
                                                    Order within{" "}
                                                    <span className="text-green-600">
                                                        {" "}
                                                        4 hrs 34 mins.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 font-semibold text-sm text-blue-600">
                                            View Details
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="font-bold">Highlights</div>
                        <div className="mt-2">
                            <div className="flex items-center">
                                <Dot />
                                <div className="text-sm">
                                    6 GB RAM | 128 GB ROM | Expandable Upto 512 GB
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Dot />
                                <div className="text-sm">
                                    16.64 cm (6.55 inch) Full HD+ Display
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Dot />
                                <div className="text-sm">
                                    64MP + 8MP + 5MP | 16MP Front Camera
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Dot />
                                <div className="text-sm">4250 mAh Li-Polymer Battery</div>
                            </div>
                            <div className="flex items-center">
                                <Dot />
                                <div className="text-sm">
                                    Qualcomm Snapdragon 732G Processor
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="font-bold">Product Description</div>
                        <div className="mt-2">
                            <div className="ml-3">
                                <div className="text-sm">
                                    Get ready to steal glances wherever you go with the Mi 11 Lite
                                    smartphone. Featuring a slim and lightweight construction,
                                    this functional and versatile smartphone is sure to make you
                                    look your stylish best. It features a stunning 64 MP camera,
                                    with TetraPixel technology and 23 Director modes, to help you
                                    capture life's precious moments in all their glory. Moreover,
                                    it runs on the Qualcomm Snapdragon 732G processor, offering
                                    smooth performance and seamless multitasking capabilities at
                                    all times. What's more, it is equipped with a 4250 mAh all-day
                                    battery, to keep you company for long hours without having to
                                    worry about a low-battery notification.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded bg-white border border-gray-100 mt-4">
                        <h2 className="text-2xl font-bold border-b border-gray-100 p-4">
                            Specifications
                        </h2>
                        <div className="text-lg font-bold p-4">General</div>
                        <table className="w-full text-sm table-fixed mx-2">
                            <tbody>
                                <tr>
                                    <td className="p-2">Model Number</td>
                                    <td className="p-2">2109119DI</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Model Name</td>
                                    <td className="p-2">11 Lite</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Color</td>
                                    <td className="p-2">Jazz Blue</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Browse Type</td>
                                    <td className="p-2">Smartphones</td>
                                </tr>
                                <tr>
                                    <td className="p-2">SIM Type</td>
                                    <td className="p-2">Dual Sim</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Hybrid Sim Slot</td>
                                    <td className="p-2">Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Touchscreen</td>
                                    <td className="p-2">Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-2">OTG Compatible</td>
                                    <td className="p-2">Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Quick Charging</td>
                                    <td className="p-2">Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Sound Enhancements</td>
                                    <td className="p-2">
                                        Hi-Res Audio Certification, Dual Speakers (Head: 0.857W/Kg,
                                        Body: 0.777W/Kg)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">SAR Value</td>
                                    <td className="p-2">Not specified</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="border-gray-100 border-b pt-4"></div>
                        <div className="text-lg font-bold p-4">Display Feature</div>
                        <table className="w-full text-sm table-fixed mx-2">
                            <tbody>
                                <tr>
                                    <td className="p-2">Display Size</td>
                                    <td className="p-2">16.64 cm (6.55 inch)</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Resolution</td>
                                    <td className="p-2">2400 x 1080 Pixels</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Resolution Type</td>
                                    <td className="p-2">Full HD+</td>
                                </tr>
                                <tr>
                                    <td className="p-2">GPU</td>
                                    <td className="p-2">Adreno 618</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Display Type</td>
                                    <td className="p-2">Full HD+ AMOLED Dot Display</td>
                                </tr>
                                <tr>
                                    <td className="p-2">HD Game Support</td>
                                    <td className="p-2">Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Display Colors</td>
                                    <td className="p-2">1 Billion</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="electornics-container py-2 font-semibold">
                <div className="text-2xl ml-4 mt-2">Similar Products</div>
                <div className="flex justify-between my-4">
                    {electronics.map((product, index) => {
                        return (
                            <Card
                                key={index}
                                name={product.name}
                                imgSrc={product.imgSrc}
                                discount={product.about}
                                site={product.site}
                                productId={product.productId}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="clothes-container font-semibold">
                <div className="text-bold text-2xl ml-4 mt-2">Fashion Top Deals</div>
                <div className="flex justify-between my-4">
                    {products.map((product, index) => {
                        return (
                            <Card
                                key={index}
                                name={product.name}
                                imgSrc={product.imgSrc}
                                discount={product.discount}
                                site={product.site}
                                productId={product.productId}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="clothes-container font-semibold">
                <div className="text-bold text-2xl ml-4 mt-2">Top Deals</div>
                <div className="flex justify-between my-4">
                    {products.map((product, index) => {
                        return (
                            <Card
                                key={index}
                                name={product.name}
                                imgSrc={product.imgSrc}
                                discount={product.discount}
                                site={product.site}
                                productId={""}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default Product;

// function ProductPage() {
//     const params = useParams<{ id: string }>();

//     // Fetch product details based on the id from the query params
//     // This is a placeholder, you should fetch real data from your backend
//     const {id} = useParams<{ id: string }>();
//     const numericId = Number(id);
//     const product = numericId <= 5 ? products[numericId - 1] : electronics[numericId - 6];

//     return (
//         <div className="custom-container mx-auto px-4 py-8 flex">
//             <div className=" mr-8 w-5/12">
//                 <div style={{width: "80%"}}>
//                     <img src={product.imgSrc} alt={product.name} className="w-full"/>
//                 </div>
//             </div>
//             <div className=" w-7/12 ">
//                 <h1 className="text-2xl">{product.name}</h1>
//                 <div className='my-1'>
//           <span className=' bg-emerald-500 py-1 px-3 rounded-md'>4.5
//             <Image src={starWhite} width={15} height={10} alt='star-white' className='inline'/>
//           </span>
//                     &nbsp; 4,376 Ratings & 553 Reviews
//                 </div>
//                 <div className='my-1 font-semibold text-green-800'>
//                     Special Price
//                 </div>
//                 <div className="my-2 font-bold text-2xl">
//                     ₹{product.price}
//                 </div>
//                 <div className="flex flex-col my-12">
//                     <div className="flex">
//                         <div className='ml-4 mr-28 text-gray-500 mb-24'>Delivery</div>
//                         <div>
//                             <DeliveryCheck/>
//                             <div className="mt-1 font-semibold">Delivery by 5 Mar, Tuesday</div>
//                         </div>
//                     </div>
//                     <div className="flex">
//                         <div className="ml-4 mr-28 text-gray-500 mb-24">Highlights</div>
//                         <ul className='list-disc'>
//                             <li>Suitable For: Mobile</li>
//                             <li>Material: Silicon</li>
//                             <li>Theme: Patterns</li>
//                             <li>Type: Back Cover</li>
//                         </ul>

//                     </div>
//                 </div>
//                 {'discount' in product && <p className="text-lg font-semibold">{product.discount}</p>}
//                 <p className="text-lg">Product Description Goes Here</p>
//                 <div className="my-4">
//                     {product.site === 0 && <a href="link-to-buy-on-site-0">Buy on Site 0</a>}
//                     {product.site === 1 && <a href="link-to-buy-on-site-1">Buy on Site 1</a>}
//                     {product.site === 2 && (
//                         <>
//                             <a href="link-to-buy-on-site-0">Buy on Site 0</a>
//                             <a href="link-to-buy-on-site-1">Buy on Site 1</a>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }
