"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { apiFetch, assetUrl, ENTITY } from "@/client/ApiClient";

function formatTanggalIndo(tanggalString) {
  const tanggal = new Date(tanggalString);
  return tanggal.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    apiFetch(`/article?entity=${ENTITY}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.slice(0, 3)); // Ambil 3 artikel pertama
      });
  }, []);

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white flex flex-col justify-between min-h-150 sm:min-h-175 md:min-h-150 px-3 sm:px-6 md:px-10 pt-6 sm:pt-10 pb-40 sm:pb-32 md:pb-10">
        <Image
          src="/images/rentaiphone_bg.png"
          alt="Scooter Hero"
          fill
          className="object-cover opacity-30"
          style={{ zIndex: 0 }}
        />

        <div className="relative z-10 md:w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4 sm:gap-6">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 sm:mb-6 md:mb-0">
            <Image
              src="/images/iphone2+bayangan.png"
              alt="Iphone dengan Bayangan"
              width={500}
              height={500}
              className="w-35 sm:w-60 md:w-87.5 lg:w-125"
            />
          </div>

          <div className="w-[90%] md:w-1/2 text-center md:text-right px-1 sm:px-4 md:px-0 md:pr-28 sm:mb-4 md:mb-0">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold italic leading-tight">
              Pixelnesia
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Nikmati pengalaman menggunakan iPhone <br className="hidden sm:block" />
              terbaru tanpa beban biaya mahal. Sewa mudah, <br className="hidden sm:block" />
              cepat, dan aman
            </p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center md:justify-end gap-2">
              <a href="/DaftarUnit" className="bg-yellow-300 text-black px-4 sm:px-6 py-2 md:rounded-l-full md:rounded-r-none rounded-full shadow hover:bg-gray-100 text-xs sm:text-sm md:text-base font-semibold">
                Lihat Daftar Iphone
              </a>
              <a href="/Kontak" className="bg-yellow-300 text-black px-4 sm:px-6 py-2 md:rounded-r-full md:rounded-l-none rounded-full shadow hover:bg-gray-100 text-xs sm:text-sm md:text-base font-semibold text-center">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>

         <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white py-4 sm:py-5 px-3 sm:px-6 md:px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 text-center">
            {[
              ["icon_pelayanan.png", "Pelayanan Terbaik"],
              ["icon_keamanan.png", "Keamanan Terjaga"],
              ["icon_perawatan.png", "Tersedia Diberbagai Kota"],
              ["icon_truk.png", "Cash On Delivery"],
            ].map(([icon, label], i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                <Image src={`/images/${icon}`} alt={label} width={40} height={40} className="w-8 sm:w-10 h-8 sm:h-10" />
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-center sm:text-left">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Artikel Terbaru */}
      <section className="bg-[#FFDD00] px-3 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12">
        <div className="w-[94%] mx-auto flex flex-col lg:flex-row gap-4 sm:gap-6">
          {articles[0] && (
            <div className="bg-white rounded-xl shadow-lg w-full lg:w-2/3 h-auto lg:h-150 sm:h-125 overflow-hidden flex flex-col">
              <div className="w-full h-40 md:h-60 sm:h-56 lg:h-80 relative shrink-0">
                <Image
                  src={assetUrl(articles[0].thumbnail)}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                <Link
                  href={`/artikel/${articles[0].slug}`}
                  className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-white text-xs sm:text-sm text-black px-3 sm:px-4 py-1 rounded-full shadow hover:bg-gray-200"
                >
                  Lihat Detail
                </Link>
              </div>
              <div className="p-3 sm:p-4 flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold mb-2 text-black line-clamp-2">{articles[0].title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                  {articles[0].content}
                </p>
              </div>
            </div>
          )}

          <div className="w-full lg:w-1/3 flex flex-col gap-3 sm:gap-4">
            {[articles[1], articles[2]].map(
              (item, index) =>
                item && (
                  <Link
                    key={index}
                    href={`/artikel/${item.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col hover:shadow-xl transition"
                  >
                    <div className="w-full h-32 sm:h-36 relative shrink-0">
                      <Image
                        src={assetUrl(item.thumbnail)}
                        alt={item.title}
                        className="object-cover w-full h-full"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="p-3 flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-black line-clamp-2 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{item.content}</p>
                    </div>
                  </Link>
                )
            )}
            <Link
              href="/artikel"
              className="bg-white text-center text-black font-semibold py-2 sm:py-3 rounded-xl shadow hover:bg-yellow-100 text-sm sm:text-base"
            >
              Jelajahi Artikel
            </Link>
          </div>
        </div>
      </section>

      {/* Produk Highlight */}
      <section className="bg-white py-8 sm:py-12 md:py-10 px-3 sm:px-6 md:px-12 lg:px-20 text-black">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 w-[94%] mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Pixelnesia</h2>
              <h3 className="text-md sm:text-xl font-semibold mb-2 sm:mb-3">
                Rental Iphone Indonesia
              </h3>
              <p className="text-sm sm:text-sm md:text-base leading-relaxed">
                Sebagai bagian dari ekosistem layanan Dahlia Group, Pixelnesia hadir untuk menjawab kebutuhan masyarakat modern yang menginginkan akses mudah terhadap perangkat teknologi tanpa harus membeli. Pixelnesia menyediakan layanan rental Iphone yang fleksibel, ekonomis, dan terpercaya, cocok untuk berbagai kebutuhan pribadi maupun profesional.
                <br />
                <br />
                Melalui Pixelnesia, pelanggan dapat menikmati kemudahan dalam menyewa Iphone, mulai dari proses pemesanan yang cepat, pilihan perangkat terbaru yang terawat, hingga dukungan layanan pelanggan yang sigap dan informatif. Komitmen Dahlia Group dalam menghadirkan layanan unggulan tercermin dalam setiap aspek Pixelnesia, menjadikannya solusi cerdas untuk gaya hidup digital masa kini.
              </p>
          </div>
          <div className="flex-1 w-full sm:max-w-sm">
            <Image
              src="/images/image1+border.png"
              alt="Produk Iphone"
              width={500}
              height={500}
              className="w-full drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-yellow-300 text-black px-3 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="w-[90%] md:w-[88%] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center leading-tight">
            Kenapa Harus Memilih Pixelnesia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {[
              ["icon-syarat.png", "Syarat Sewa yang Ringan dan Tidak Ribet"],
              ["icon-verif.png", "Verifikasi Data Cepat dan Mudah"],
              ["icon-kualitas.png", "Kualitas iPhone Terjamin dan Sudah Legal"],
              ["icon-terbuka.png", "Terbuka untuk Semua Kalangan"],
              ["icon-pembayaran.png", "Metode Pembayaran Aman dan Profesional"],
              ["icon-cod.png", "Layanan Antar Jemput Fleksibel (COD)"],
              ["icon-lokasi.png", "Tersedia di Berbagai Kota Besar di Indonesia"],
              ["icon-data.png", "Data Pribadi Pelanggan Terjamin Aman"],
            ].map(([icon, text], i) => (
              <div
                key={i}
                className="bg-white text-black p-2 sm:p-3 rounded-xl shadow flex items-center gap-2 sm:gap-3 min-h-17.5 sm:min-h-20 md:min-h-22.5 w-full"
              >
                <Image
                  src={`/images/${icon}`}
                  alt={text}
                  width={64}
                  height={64}
                  className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 object-contain shrink-0"
                />
                <p className="text-xs sm:text-sm md:text-base font-semibold leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Komitmen & Showcase */}
      <section className="bg-black text-white text-center py-10 sm:py-14 px-3 sm:px-6">
        <style>{`
          @keyframes scroll-loop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5 leading-relaxed px-2">
          Kami berkomitmen untuk menyediakan unit iPhone terbaik bagi setiap penyewa, <br className="hidden sm:block" />
          karena kenyamanan, kepuasan, dan keamanan Anda adalah prioritas utama kami.
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-10 sm:mb-8">
          NIKMATI MOMENT-MU
        </h1>

        <div className="overflow-hidden w-full mb-6 sm:mb-8 mt-6">
          <div className="flex gap-4 sm:gap-6 w-max" style={{ animation: "scroll-loop 20s linear infinite" }}>
            {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((n, i) => (
              <Image
                key={i}
                src={`/images/handphone${n}.png`}
                alt={`handphone ${n}`}
                width={100}
                height={100}
                className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto"
              />
            ))}
          </div>
        </div>

        <a
          href="/DaftarUnit"
          className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow hover:bg-gray-100 text-xs sm:text-sm md:text-base font-semibold mt-8 inline-block"
        >
          Lihat Daftar Iphone Pixelnesia
        </a>
      </section>

      <Footer />
    </div>
  );
}
