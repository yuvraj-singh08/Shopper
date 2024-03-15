import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import amazonLogo from '@/public/amazon-logo.png'
import flipkartLogo from '@/public/flipkart-logo.png'

interface Props {
  name: string;
  imgSrc: string;
  discount: string;
  site: number;
  productId: string;
}

export default function Card(props: Props) {

  return (
    <Link href={`/product/${props.productId}`}>
      <div className="my-2 mx-4 rounded overflow-hidden shadow-lg w-60" style={{ height: '22rem' }}>
        <div className="h-60 flex justify-center items-center overflow-hidden">
          <img className="w-full" src={props.imgSrc} alt="Product Image" />
        </div>
        <div className="text-center my-4">
          <div className="">{props.name}</div>
          <div className="text-bold">{props.discount}</div>
          <div className="my-1 flex justify-center">
            {props.site === 0 ? (
              <Image className="ml-1 mb-1" width={55} src={flipkartLogo} alt="Flipkart Logo" />
            ) : null}
            {props.site === 1 ? <Image width={90} src={amazonLogo} alt="Amazon Logo" /> : null}
            {props.site === 2 ? (
              <>
                <div className="flex justify-start">
                  <Image width={90} src={amazonLogo} alt="Amazon Logo" />
                  <Image className="ml-1 mb-1" width={55} src={flipkartLogo} alt="Flipkart Logo" />
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
