"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const aboutCards = [
  {
    image: "/images/foto1.jpeg",
    name: "Pindahloka",
    text: "Menjadi mitra pilihan utama dalam layanan pindahan yang aman, cepat, dan nyaman bagi setiap keluarga maupun bisnis.",
  },
  {
    image: "/images/foto2.jpeg",
    name: "Pindahloka",
    text: "Menyediakan solusi pindahan yang praktis, terorganisir, dan profesional dengan pelayanan yang ramah serta transparan.",
  },
  {
    image: "/images/foto3.jpeg",
    name: "Pindahloka",
    text: "Memberikan pengalaman pindahan dengan tim yang berpengalaman, perlindungan barang yang maksimal, dan hasil yang rapi.",
  },
];


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? aboutCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === aboutCards.length - 1 ? 0 : prev + 1));
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
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-10">
          <div className="relative w-full max-w-sm md:w-full md:max-w-md">
            <div className="bg-white text-black p-4 rounded-2xl shadow-lg flex flex-col gap-3 h-auto">
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <Image
                  src={aboutCards[currentIndex].image}
                  alt={aboutCards[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm text-gray-700 leading-relaxed flex-1">{aboutCards[currentIndex].text}</p>
                <Image
                  src="/images/logo_pixel.png"
                  alt="Logo"
                  width={56}
                  height={56}
                  className="h-14 object-contain shrink-0"
                />
              </div>
            </div>

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

          <div className="flex flex-col items-start w-full md:w-auto">
            <div className="hidden md:flex mt-2 flex-col md:flex-row gap-8 md:ml-8">
              {[
                aboutCards[(currentIndex - 1 + aboutCards.length) % aboutCards.length],
                aboutCards[(currentIndex + 1) % aboutCards.length],
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full max-w-sm md:w-80 bg-white text-black p-4 rounded-2xl shadow-lg flex flex-col gap-3 h-auto"
                >
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm text-gray-700 flex-1 leading-relaxed">{item.text}</p>
                    <Image
                      src="/images/logo_pixel.png"
                      alt="Logo"
                      width={56}
                      height={56}
                      className="h-14 object-contain shrink-0"
                    />
                  </div>
                </div>
              ))}
            </div>

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
