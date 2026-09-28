"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardUnit from '../components/CardUnit/CardUnit';
import { iphoneUnits } from '../../data/units';

export default function DaftarUnit() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({ harga: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const formatHarga = (value) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(Number(value));

  const priceOptions = [...new Set(iphoneUnits.map((unit) => String(unit.harga)))]
    .sort((a, b) => Number(a) - Number(b))
    .map((harga) => ({
      value: harga,
      label: formatHarga(harga),
    }));

  const filteredUnits = iphoneUnits.filter((unit) => {
    const textMatch =
      unit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.description.toLowerCase().includes(searchTerm.toLowerCase());

    const hargaMatch = !filters.harga || String(unit.harga) === filters.harga;

    return textMatch && hargaMatch;
  });

  const totalPages = Math.ceil(filteredUnits.length / itemsPerPage);
  const paginatedUnits = filteredUnits.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Header: Search + Filter */}
      <div
        className="relative bg-cover bg-center h-48 flex flex-col items-center justify-center px-4"
        style={{ backgroundImage: "url('/images/wp4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex items-center w-full max-w-2xl">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Cari Unit.."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full py-2 pl-4 pr-10 rounded-l-full rounded-r-none outline-none border border-white text-black bg-white placeholder-gray-400 focus:ring-2 focus:ring-white"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
          <div className="w-2" />
          <button
            className="bg-white text-black px-4 py-2 h-full border border-white rounded-r-full"
            onClick={() => setShowFilter(!showFilter)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M6 8h12M4 12h16M8 16h8M10 20h4" />
            </svg>
          </button>
        </div>

        {/* Filter Dropdown */}
        {showFilter && (
          <div className="relative z-20 mt-4 w-full max-w-xl bg-white bg-opacity-10 rounded-lg shadow-lg p-4">
            <div className="grid grid-cols-1 gap-4">
              <select
                className="min-w-[150px] bg-white text-black border border-black px-4 py-2 rounded-full shadow focus:outline-none w-full"
                value={filters.harga}
                onChange={(e) => {
                  setFilters({ harga: e.target.value });
                  setCurrentPage(1);
                }}
              >
                <option value="">Semua Harga</option>
                {priceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
      

      {/* List Unit */}
      <div className="md:w-[86%] w-[92%] mx-auto px-2 sm:px-6 lg:px-2 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedUnits.map((unit) => (
            <CardUnit
              key={unit.id}
              id={unit.id}
              name={unit.name}
              description={unit.description}
              image={unit.image}
              price={unit.harga}
              role={unit.role}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              &lt;
            </button>

            <span className="text-sm font-semibold">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              &gt;
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
