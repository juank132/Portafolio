'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


interface CardProps {
  src: string;
  name: string;
  alt: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ src, name, alt, href }) => {
  return (
    <Link 
      href={href} className="flex flex-col relative items-center ml-auto mr-auto bg-white border border-gray-200 rounded-[15px] shadow md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-200 transform hover:scale-105" target="_blank" rel="noopener noreferrer">
      <Image className="object-cover w-full h-[40vw] rounded-t-lg md:h-[30vw] md:w-[1500px] md:rounded-none md:rounded-s-lg" width={900} height={500} src={src} alt="Descriptive"  />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{alt}</p>
      </div>
    </Link>
  );
};

export default Card;