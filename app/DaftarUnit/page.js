"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardUnit from '../components/CardUnit/CardUnit';
import { iphoneUnits } from '../../data/units';

export default function DaftarUnit() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({ harga: '', daerah: '', Penyimpanan: '', Warna: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const hasActiveFilter = Object.values(filters).some(v => v);


  const filterByHarga = (harga, selected) => {
    const h = parseInt(harga);
    if (selected === "low") return h >= 50000 && h <= 100000;
    if (selected === "mid") return h > 100000 && h <= 150000;
    if (selected === "high") return h > 150000;
    return true;
  };

  const filteredUnits = iphoneUnits.filter((unit) => {
    const textMatch =
      unit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.description.toLowerCase().includes(searchTerm.toLowerCase());

    const hargaMatch = filterByHarga(unit.harga, filters.harga);
    const daerahMatch =
  !filters.daerah ||
  (Array.isArray(unit.daerah)
    ? unit.daerah.includes(filters.daerah)
    : unit.daerah === filters.daerah);

const PenyimpananMatch =
  !filters.Penyimpanan ||
  (Array.isArray(unit.Penyimpanan)
    ? unit.Penyimpanan.includes(filters.Penyimpanan)
    : unit.Penyimpanan === filters.Penyimpanan);

    const WarnaMatch = !filters.Warna || unit.Warna === filters.Warna;

    return textMatch && hargaMatch && daerahMatch && PenyimpananMatch && WarnaMatch;
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
          <div className="relative z-20 mt-4 w-full max-w-6xl bg-white bg-opacity-10 rounded-lg md:rounded-full shadow-lg p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {/* Harga Range */}
              <select
                className="min-w-[150px] bg-white text-black border border-black px-4 py-2 rounded-full shadow focus:outline-none w-full"
                value={filters.harga}
                onChange={(e) => {
                  setFilters({ ...filters, harga: e.target.value });
                  setCurrentPage(1);
                }}
              >
                <option value="">Harga</option>
                <option value="low">50k++</option>
                <option value="mid">100k++</option>
                <option value="high">150k++</option>
              </select>

              {/* Dropdown lain */}
              {['daerah', 'Penyimpanan', 'Warna'].map((label) => (
                <select
                  key={label}
                  className="min-w-[150px] bg-white text-black border border-black px-4 py-2 rounded-full shadow focus:outline-none w-full"
                  value={filters[label] || ''}
                  onChange={(e) => {
                    setFilters({ ...filters, [label]: e.target.value });
                    setCurrentPage(1);
                  }}
                >
                  <option value="">{label.charAt(0).toUpperCase() + label.slice(1)}</option>
                  {[...new Set(iphoneUnits.flatMap((u) => Array.isArray(u[label]) ? u[label] : [u[label]]).filter(Boolean))].map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ))}
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
