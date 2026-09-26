"use client";

import { useParams } from "next/navigation";
import { iphoneUnits } from "../../../data/units";
import Footer from "../../components/Footer";
import BackButton from '../../components/BackButton';
import Image from 'next/image';
import { generateWhatsAppLink } from "@/data/adminContacts";
import { HiArrowLeft } from "react-icons/hi";

export default function DetailUnit() {
  const { id } = useParams();
  const unit = iphoneUnits.find((item) => item.id === parseInt(id));

  if (!unit) return <div className="p-6">Unit tidak ditemukan.</div>;

  return (
    <div className="w-full">
      {/* Header */}
      <div
        className="relative w-full h-20 sm:h-24 md:h-30 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/RD-topdetailunit.png)' }}
      >
        <button onClick={() => window.history.back()}
          className="absolute top-6 left-4 sm:top-10 sm:left-10 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow flex items-center gap-2 text-sm sm:text-base hover:bg-gray-100 transition"
        >
          <HiArrowLeft className="text-lg" />
          <h2 className="text-md font-medium text-sm"> Kembali </h2>
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-10 py-6 sm:py-10 bg-white w-[96%] mx-auto">
        {/* Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/2]">
            <Image
              src={unit.image}
              alt={unit.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center gap-3 sm:gap-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
            {unit.name}
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            {unit.description}
          </p>
          {/* <hr className="my-2 border-black" /> */}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            {/* {unit.weight && (
              <span className="border border-yellow-500 px-4 py-1 rounded-full">
                {unit.weight}
              </span>
            )} */}
            {unit.daerah && (
              <span className="border border-yellow-500 px-2 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                {unit.daerah}
              </span>
            )}
            {/* {unit.Penyimpanan && (
              <span className="border border-yellow-500 px-2 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                {unit.Penyimpanan}
              </span>
            )} */}
            {/* {unit.role && (
              <span className="border border-yellow-500 px-4 py-1 rounded-full">
                {unit.role}
              </span>
            )} */}
          </div>

          {/* Harga */}
          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:gap-20">
            <span className="font-semibold text-black text-base sm:text-lg md:text-xl">
              Harga Sewa
            </span>

            <div className="flex flex-row gap-6 md:gap-6 font-bold">
              <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-gray-600 font-normal">
                  Mulai dari
                </span>
                <span className="text-sm sm:text-base leading-tight">
                  Rp {unit.weekdayPrice}
                </span>
                {/* <span className="text-[10px] sm:text-xs text-gray-600 font-normal">
                  Weekday
                </span> */}
              </div>

              {/* <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-gray-600 font-normal">
                  Mulai dari
                </span>
                <span className="text-sm sm:text-base leading-tight">
                  Rp {unit.weekendPrice}
                </span>
                
              </div> */}
            </div>
          </div>

          {/* Fasilitas */}
          {unit.facilities && (
            <div className="mt-3 sm:mt-4 flex flex-col md:flex-row md:items-start gap-3 sm:gap-4 md:gap-32">
              <span className="font-semibold text-black text-base sm:text-lg md:text-xl">Fasilitas</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 text-xs sm:text-sm gap-x-4 gap-y-1 text-black font-semibold">
                {unit.facilities.map((fasilitas, idx) => (
                  <div className="flex items-center gap-2" key={idx}>
                    <span>•</span>
                    <p>{fasilitas}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tombol Sewa */}
          <div className="pt-2">
              <a
                href={generateWhatsAppLink(unit)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 w-full rounded-full shadow text-sm sm:text-base">
                  Sewa Sekarang
                </button>

              </a>
            </div>
          </div>
        </div>

      {/* Info bawah */}
      {/* <div className="bg-yellow-300 text-black py-6 sm:py-10">
        <div className="w-[94%] mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm"> */}
          
          {/* Text */}
          {/* <div className="space-y-3 sm:space-y-4 leading-relaxed">
            <p>
              Unit iPhone yang kami sediakan hadir dengan kondisi fisik mulus dan performa optimal.
              Semua perangkat menggunakan baterai yang sehat, respons layar yang baik, serta siap digunakan kapan saja.
            </p>
            <p>
              Semua unit sudah dilengkapi dengan surat-surat resmi dan rutin diservis agar aman dan nyaman digunakan.
            </p>
            <p>
              Sangat cocok untuk mobilitas harian, perjalanan, maupun kebutuhan kerja.
            </p>
            <p>
            </p>
            <p>
            - Pixelnesia
            </p>
          </div> */}

          {/* Tabel */}
          {/* <div className="flex justify-center md:justify-end items-start">
        <div className="bg-white text-black rounded-md w-full max-w-md shadow-md overflow-hidden">
          <table className="w-full border-collapse text-xs sm:text-sm">
            <tbody>
              <tr className="border-gray-100">
                <td className="px-3 sm:px-4 py-3 font-semibold whitespace-nowrap">
                  Penyimpanan
                </td>
                <td className="px-3 sm:px-4 py-3 text-right text-gray-700">
                  {unit.Penyimpanan}
                </td>
              </tr>

              <tr className="bg-gray-100 border-gray-100">
                <td className="px-3 sm:px-4 py-3 font-semibold">
                  Warna
                </td>
                <td className="px-3 sm:px-4 py-3 text-right text-gray-700">
                  {unit.Warna}
                </td>
              </tr>

              <tr className="border-gray-100">
                <td className="px-3 sm:px-4 py-3 font-semibold">
                  Jaringan
                </td>
                <td className="px-3 sm:px-4 py-3 text-right text-gray-700">
                  {unit.jaringan}
                </td>
              </tr>

              <tr className="bg-gray-100">
                <td className="px-3 sm:px-4 py-3 font-semibold">
                  Kamera
                </td>
                <td className="px-3 sm:px-4 py-3 text-right text-gray-700">
                  {unit.kamera}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


  </div>
</div> */}


      <Footer />
    </div>
  );
}
