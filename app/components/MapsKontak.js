"use client";
import React, { useState, useEffect } from "react";
import { apiFetch, ENTITY } from "@/client/ApiClient";

export default function MapsKontak() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    apiFetch(`/locations?entity=${ENTITY}`)
      .then((res) => res.json())
      .then((data) => setLocations(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Gagal fetch lokasi:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(4);
      }
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const next = () => {
    if (startIndex + itemsPerView < locations.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visible = locations.slice(startIndex, startIndex + itemsPerView);

  if (loading) {
    return <p className="text-center py-12 text-white/80">Memuat lokasi...</p>;
  }

  if (locations.length === 0) {
    return null;
  }

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`grid gap-8 transition-all duration-300 ${
            itemsPerView === 1
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
          }`}
        >
          {visible.map((loc, idx) => (
            <div key={loc.id ?? idx} className="bg-white rounded-xl shadow overflow-hidden">
              <div className="relative w-full h-52 sm:h-60">
                <iframe
                  src={loc.embedUrl}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full border-none"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-2 bg-yellow-300 text-black font-bold px-4 py-1 rounded-r-full text-sm shadow-md">
                  {loc.kota}
                </div>
              </div>
              <div className="p-4 text-sm text-gray-800">
                <a
                  href={loc.link || `https://www.google.com/maps?q=${encodeURIComponent(loc.alamat)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  {loc.alamat}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-6 bg-yellow-300 px-6 text-black py-2 rounded-full shadow">
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className={`text-2xl font-bold ${
                startIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-110 transition"
              }`}
            >
              ‹
            </button>
            <button
              onClick={next}
              disabled={startIndex + itemsPerView >= locations.length}
              className={`text-2xl font-bold ${
                startIndex + itemsPerView >= locations.length
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-110 transition"
              }`}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
