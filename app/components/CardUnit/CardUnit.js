"use client";

import Link from 'next/link';
import Image from 'next/image';

const CardUnit = ({ id, name, description, image, role = "Mahasiswa" }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-full flex flex-col">
      <div className="p-4">
        <div className="relative w-full h-36 sm:h-40 bg-white rounded-lg overflow-hidden">
          <Image 
            src={image} 
            alt={name} 
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 100%"
          />
        </div>
      </div>
      <div className="bg-[#F7F5EB] px-4 py-4 flex flex-col justify-between flex-1">
        {/* <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-2 w-fit">
          {role}
        </span> */}
        <div className="flex-grow mb-3">
          <h3 className="text-base font-bold text-gray-800 line-clamp-2">{name}</h3>
          <p className="text-sm text-gray-700 mt-1 line-clamp-3">{description}</p>
        </div>
        <Link href={`/DetailUnit/${id}`}>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl hover:bg-yellow-500 transition-all duration-200 w-full text-sm font-semibold">
            Lihat Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardUnit;
