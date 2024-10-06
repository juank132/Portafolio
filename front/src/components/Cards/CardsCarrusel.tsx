'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  src: string;
  name: string;
  alt: string;
  price: number;

}

const Card: React.FC<CardProps> = ({ src, name, alt, price }) => {
  return (
    <div className="border p-4 rounded-lg">
              <Image src="/proyecto1.png" alt="Proyecto 1" width={300} height={200} />
              <h3 className="text-xl font-semibold mt-2">{name}</h3>
              <p className="text-gray-300">
              {alt}
              </p>
              <Link href="https://github.com/mi-proyecto" className="text-blue-500 mt-2 block" target="_blank">
                Ver en GitHub
              </Link>
            </div>
  );
};

export default Card;