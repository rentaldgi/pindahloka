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
        if (Array.isArray(data)) {
          setArticles(data.slice(0, 3)); // Ambil 3 artikel pertama
        } else if (data && Array.isArray(data.data)) {
          setArticles(data.data.slice(0, 3)); // Jaga-jaga kalau dibungkus dalam { data: [...] }
        } else {
          setArticles([]); // Jika bukan array, set jadi array kosong biar tidak error
        }
      })
      .catch((err) => {
        console.error("Gagal fetch artikel:", err);
        setArticles([]); // Amankan juga jika terjadi error jaringan
      });
  }, []);

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white flex flex-col justify-between min-h-150 sm:min-h-175 md:min-h-150 px-3 sm:px-6 md:px-10 pt-6 sm:pt-10 pb-40 sm:pb-32 md:pb-10">
        <Image
          src="/images/bg-1.png"
          alt="Scooter Hero"
          fill
          className="object-cover opacity-30"
          style={{ zIndex: 0 }}
        />

        <div className="relative z-10 md:w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4 sm:gap-6">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 sm:mb-6 md:mb-0">
            <Image
              src="/images/logo 2.png"
              alt="Iphone dengan Bayangan"
              width={500}
              height={500}
              className="w-35 sm:w-60 md:w-87.5 lg:w-125"
            />
          </div>

          <div className="w-[90%] md:w-1/2 text-center md:text-right px-1 sm:px-4 md:px-0 md:pr-28 sm:mb-4 md:mb-0">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold italic leading-tight">
              Pindahloka
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Jasa pindahan yang menyediakan layanan pindahan dengan harga terjangkau dan kualitas terbaik
            </p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center md:justify-end gap-2">
              <a href="/DaftarUnit" className="bg-[#FCC729] text-black px-4 sm:px-6 py-2 md:rounded-l-full md:rounded-r-none rounded-full shadow hover:bg-gray-100 text-xs sm:text-sm md:text-base font-semibold">
                Lihat Daftar Layanan
              </a>
              <a href="/Kontak" className="bg-[#FCC729] text-black px-4 sm:px-6 py-2 md:rounded-r-full md:rounded-l-none rounded-full shadow hover:bg-gray-100 text-xs sm:text-sm md:text-base font-semibold text-center">
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
              ["icon_perawatan.png", "Tim Profesional"],
              ["icon_truk.png", "Pindahan dalam & luar kota"],
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
      <section className="bg-[#FCC729] px-3 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Pindahloka</h2>
              <h3 className="text-md sm:text-xl font-semibold mb-2 sm:mb-3">
                Jasa Pindahan Terpercaya
              </h3>
              <p className="text-sm sm:text-sm md:text-base leading-relaxed">
                Sebagai bagian dari keluarga besar Dahlia Group, Pindahloka hadir buat bantu kamu yang pengen urusan pindahan beres tanpa harus pusing atau ribet. Kami nyediain layanan pindahan yang fleksibel, ramah di kantong, dan pastinya bisa diandalkan, cocok banget buat kebutuhan personal maupun profesional kamu.
                <br />
                <br />
                Soal layanan, kami punya solusi all-in-one yang disesuaikan sama kebutuhan kamu. Mulai dari jasa pindahan barang yang terjamin amannya, cleaning service menyeluruh—baik untuk pembersihan rutin, deep cleaning, sampai post-renovation—hingga paket bundling pindahan sekaligus pembersihan tempat lama dan baru. Jadi, kamu tinggal terima beres dan tempat barumu pun langsung siap huni tanpa effort lebih
              </p>
          </div>
          <div className="flex-1 w-full sm:max-w-sm">
            <Image
              src="/images/logo.png"
              alt="Produk Iphone"
              width={500}
              height={500}
              className="w-full drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FCC729] text-black px-3 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="w-[90%] md:w-[88%] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center leading-tight">
            Kenapa Harus Memilih Pindahloka?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {[
              ["done.png", "Seluruh proses pindahan diurus sampai tuntas"],
              ["relax.png", "Kamu bebas santai dan fokus pada kesibukanmu"],
              ["team2.png", "Penanganan penuh oleh tim profesional"],
              ["team1.png", "Tim jujur, berpengalaman, dan cekatan"],
              ["money.png", "Harga transparan tanpa biaya tersembunyi"],
              ["icon-cod.png", "Jadwal fleksibel menyesuaikan waktu kamu"],
              ["time.png", "Hasil akhir dijamin rapi dan makin kinclong"],
              ["comfort.png", "Mengutamakan kenyamanan pelanggan"],
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
        <div className="max-w-6xl mx-auto">
          <p className="text-base sm:text-sm md:text-md lg:text-lg mb-4 sm:mb-5 leading-relaxed px-2 max-w-5xl mx-auto">
            Kami berkomitmen untuk memberikan layanan pindahan yang aman, nyaman, dan terpercaya bagi pelanggan kami. Dengan pengalaman bertahun-tahun, tim profesional kami siap membantu Anda dalam setiap langkah proses pindahan, mulai dari perencanaan hingga pelaksanaan
          </p>
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-[#FCC729] mb-10 sm:mb-8">
            NIKMATI MOMENT-MU
          </h1>
        </div>

        <div className="overflow-hidden w-full mb-6 sm:mb-8 mt-6">
          <div className="flex gap-4 sm:gap-6 animate-scroll-loop" style={{ animation: 'scroll-loop 20s linear infinite' }}>
            {[
              "clean.png",
              "relax.png",
              "team1.png",
              "money.png",
              "done.png",
              "team2.png",
              "comfort.png",
              "time.png",
            ].map((src, i) => (
              <Image
                key={i}
                src={`/images/${src}`}
                alt={`Showcase ${i + 1}`}
                width={100}
                height={100}
                className="h-12 sm:h-16 md:h-18 lg:h-20 w-auto"
              />
            ))}
          </div>
        </div>

        <a
          href="/DaftarUnit"
          className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow hover:bg-[#FCC729] text-xs sm:text-sm md:text-base font-semibold mt-8 inline-block"
        >
          Lihat Daftar Layanan
        </a>
      </section>

      <Footer />
    </div>
  );
}
