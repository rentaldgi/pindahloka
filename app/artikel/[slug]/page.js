"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { HiArrowLeft } from "react-icons/hi";
import AnimatePage from "@/app/components/AnimatePage";
import { FaSpinner } from "react-icons/fa";
import Image from "next/image";
import { apiFetch, assetUrl } from "@/client/ApiClient";

export default function DetailArtikel() {
  const { slug } = useParams();
  const [artikel, setArtikel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch(`/article/${slug}`)
      .then((res) => res.json())
      .then((data) => setArtikel(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <FaSpinner className="text-4xl text-yellow-500 animate-spin" />
      </div>
    );
  }

  if (!artikel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Artikel tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <AnimatePage>
        {/* HEADER IMAGE */}
        <div className="relative">
          <Image
            src="/images/wp1.jpg"
            alt="Header"
            width={1920}
            height={320}
            className="w-full h-44 sm:h-56 md:h-80 object-cover"
          />

          {/* BACK BUTTON */}
          <button
            onClick={() => window.history.back()}
            className="absolute top-6 left-4 sm:top-10 sm:left-30 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow flex items-center gap-2 text-sm sm:text-base hover:bg-gray-100 transition"
          >
            <HiArrowLeft className="text-lg" />
            <h2 className="text-md xs:hidden font-medium"> Kembali </h2>
          </button>
        </div>

        {/* CONTENT CARD */}
        <div className="relative z-10 -mt-24 sm:-mt-28 md:-mt-50 px-4 sm:px-6 md:px-10 lg:px-20 mb-14">
          <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur border border-gray-200 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">

            {/* THUMBNAIL */}
            <Image
              src={assetUrl(artikel.data.thumbnail)}
              alt="Gambar Artikel"
              width={1280}
              height={500}
              className="w-full h-40 sm:h-56 md:h-72 object-cover rounded-lg mb-6"
            />

            {/* TITLE */}
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4 leading-snug">
              {artikel.data.title}
            </h1>

            {/* CONTENT */}
            <div className="space-y-4">
              {(artikel.data.content || "").split("\n").map((p, i) => (
                <p
                  key={i}
                  className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify"
                >
                  {p.trim()}
                </p>
              ))}
            </div>

          </div>
        </div>

        <Footer />
      </AnimatePage>
    </div>
  );
} 