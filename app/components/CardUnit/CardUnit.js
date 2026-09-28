"use client";

import Link from 'next/link';
import Image from 'next/image';

const formatHarga = (value) => {
  if (!value) return "Rp 0";

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(Number(value));
};

const CardUnit = ({ id, name, description, image, price, role = "Mahasiswa" }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 w-full h-full flex flex-col">
      <div className="relative w-full h-36 sm:h-40 bg-white overflow-hidden rounded-t-lg">
        <Image 
          src={image} 
          alt={name} 
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 100%"
        />
      </div>
      <div className="bg-white px-4 py-4 flex flex-col flex-1">
        {/* <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-2 w-fit">
          {role}
        </span> */}
        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-2 min-h-[2.5rem]">{name}</h3>
          <p className="text-md font-extrabold text-yellow-600 mt-2">{formatHarga(price)}</p>
          <p className="text-sm text-gray-700 mt-2 line-clamp-3 flex-1">{description}</p>
        </div>
        <Link href={`/DetailUnit/${id}`} className="mt-4 block">
          <button className="bg-[#FCC729] text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition-all duration-200 w-full text-sm font-semibold">
            Lihat Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardUnit;
