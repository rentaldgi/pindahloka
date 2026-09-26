"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const testimonials = [
  {
    video: "/videos/testimoni-pixel-1.mp4",
    name: "Fasilitas",
    text: "Nikmati fasilitas lengkap untuk pengalaman sewa yang lebih nyaman, mulai dari charger hingga earphone yang tersedia bersama unit iPhone.",
  },
  {
    video: "/videos/testimoni-pixel-2.mp4",
    name: "Tipe iPhone",
    text: "Tersedia berbagai pilihan tipe iPhone yang dapat disesuaikan dengan kebutuhan, mulai dari penggunaan sehari-hari hingga kebutuhan konten.",
  },
  {
    video: "/videos/testimoni-pixel-6.mp4",
    name: "Cabang Utama",
    text: "Kunjungi cabang utama Pixelnesia untuk proses pengambilan dan pengembalian unit yang mudah, cepat, dan praktis.",
  },
];
// {
//   video: "/videos/testimoni-pixel-3.mp4",
//   text: "Harga rental iPhone di Pixelnesia bener-bener bersahabat buat mahasiswa. iPhone-nya lancar banget dan baterai irit.",
// },
// {
//   video: "/videos/testimoni-pixel-4.mp4",
//   text: "Sewa iPhone buat tugas kuliah dan foto-foto, hasilnya jernih! Proses sewa mudah, tinggal klik di website Pixelnesia.",
// },
// {
//   video: "/videos/testimoni-pixel-5.mp4",
//   text: "Jalan-jalan di kota jadi makin seru pake iPhone dari Pixelnesia. Kameranya oke, performa kenceng, puas banget!",
// },


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        backgroundImage: "url('/images/testimonial.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Judul HP */}
        <h2 className="text-2xl md:hidden font-bold text-center mb-6">
          Kata Mereka Tentang Pixelnesia
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
          {/* Box Besar */}
          <div className="relative w-[90%] max-w-sm md:w-full md:max-w-md">
            <div className="bg-white text-black p-4 rounded-2xl shadow-lg flex flex-col h-[400px]">
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <video
                  src={testimonials[currentIndex].video}
                  controls
                  className="w-full h-full object-cover"
                ></video>
              </div>
              <div className="flex items-center mt-3 justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-md font-semibold">{testimonials[currentIndex].name}</div>
                  {/* <div className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    {testimonials[currentIndex].role}
                  </div> */}
                </div>
              </div>
              <div className="flex items-start justify-between mt-2 gap-4">
                <p className="text-sm text-gray-700 flex-1">{testimonials[currentIndex].text}</p>
                <Image
                  src="/images/logo_pixel.png"
                  alt="Logo"
                  width={56}
                  height={56}
                  className="h-14 object-contain"
                />
              </div>
            </div>

            {/* Tombol Navigasi Desktop */}
            <button
              onClick={handlePrev}
              className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Judul & Box Kecil */}
          <div className="flex flex-col items-start w-full md:w-auto">
            {/* Judul Desktop */}
            <h2 className="hidden md:block text-4xl font-bold text-white ml-2 md:ml-8 mb-4">
              Kata Mereka Tentang Pixelnesia
            </h2>

            <div className="hidden md:flex mt-2 flex-col md:flex-row gap-8 md:ml-8">
              {[
                testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length],
                testimonials[(currentIndex + 1) % testimonials.length],
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-[90%] max-w-sm md:w-80 bg-white text-black p-4 rounded-2xl shadow-lg flex flex-col"
                >
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <video
                      src={item.video}
                      controls
                      className="w-full h-full object-cover"
                    ></video>
                  </div>
                  <div className="flex items-center mt-3 justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-md font-semibold">{item.name}</div>
                      {/* <div className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                        {item.role}
                      </div> */}
                    </div>
                  </div>
                  <div className="flex items-start justify-between mt-2 gap-4">
                    <p className="text-sm text-gray-700 flex-1">{item.text}</p>
                    <Image
                      src="/images/logo_pixel.png"
                      alt="Logo"
                      width={56}
                      height={56}
                      className="h-14 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol Navigasi HP */}
            <div className="flex justify-center gap-4 mt-6 md:hidden w-full">
              <button
                onClick={handlePrev}
                className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
