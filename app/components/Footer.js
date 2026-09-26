"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white text-black overflow-hidden border-t-2 border-yellow-100 shadow-md">
      {/* Ornamen kiri atas */}
      <div className="absolute top-0 left-0 z-0 w-32 sm:w-40 md:w-[300px] lg:w-[400px]">
        <Image
          src="/images/logo_footer1.png"
          alt="Ornamen Kiri"
          // layout="responsive"
          width={400}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Ornamen kanan atas */}
      <div className="absolute top-0 right-0 z-0 w-24 sm:w-32 md:w-40 lg:w-52">
        <Image
          src="/images/logo_footer.png"
          alt="Ornamen Kanan"
          layout="responsive"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Isi utama */}
      <div className="relative z-10 w-[94%] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Kolom 1: Sosial & Bank */}
        <div className="flex flex-col items-start gap-6">
          {/* Ikon Media Sosial */}
          <div className="flex space-x-4">

            {/* WhatsApp */}
            <a
              href="https://wa.me/6285899899948"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/images/icon_wa.png" alt="WhatsApp" width={28} height={28} className="w-7 h-7" />
            </a>
          </div>


          {/* Logo Bank */}
          <div className="mt-0 bg-[#FFDD00] py-2 px-4 rounded-full flex flex-wrap items-center justify-center gap-4 shadow-md z-10 w-fit md:w-auto">
            <Image src="/images/pm_bni.png" alt="BNI" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_bca.png" alt="BCA" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_mandiri.png" alt="Mandiri" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_qris.png" alt="QRIS" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_mastercard.png" alt="Mastercard" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_visa.png" alt="Visa" width={24} height={24} className="w-8 h-8 object-contain" />
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Halaman</h4>
            <ul className="space-y-1">
              <li><Link href="/"><span className="hover:text-yellow-500 cursor-pointer">Beranda</span></Link></li>
              <li><Link href="/DaftarUnit"><span className="hover:text-yellow-500 cursor-pointer">Artikel</span></Link></li>
              <li><Link href="/DaftarUnit"><span className="hover:text-yellow-500 cursor-pointer">Daftar Iphone</span></Link></li>
              <li><Link href="/Testimoni"><span className="hover:text-yellow-500 cursor-pointer">Testimoni</span></Link></li>
              <li><Link href="/Kontak"><span className="hover:text-yellow-500 cursor-pointer">Kontak</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Kontak Kami</h4>
            <p>
              <a href="mailto:ptdahliglobalindo@gmail.com" className="hover:text-yellow-500">
                dahliagroup.id
              </a>
            </p>
            <p>
              <a href="https://wa.me/6285899899948" className="hover:text-yellow-500">
                (+62) 858-9989-9948  
              </a>
            </p>
            <Link href="/Kontak">
              <button className="bg-yellow-400 hover:bg-yellow-500 transition mt-2 text-sm font-medium px-4 py-2 rounded-full">
                Lihat Kontak Lainnya
              </button>
            </Link>
          </div>
        </div>

        {/* Kolom 3 */}
        <div className="text-sm">
          <h4 className="font-semibold text-gray-800 mb-2">Alamat</h4>
          <p>
            <a
              href="https://www.google.com/maps?q=Jl.+PSM+RW+No.36,+Kebun+Jayanti,+Bandung"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              Jl. Paseban Raya No.83, RT.1/RW.7, Paseban, Kec. Senen, Kota Jakarta Pusat, DKI Jakarta 10440
            </a>
          </p>
          <Link href="/Kontak">
            <button className="bg-yellow-400 hover:bg-yellow-500 transition mt-2 text-sm font-medium px-4 py-2 rounded-full">
              Lihat Alamat Lainnya
            </button>
          </Link>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="bg-[#FFDD00] justify-center items-center flex py-4">
        <p className="w-[90%] text-center text-xs text-black font-medium"> © 2026 Dahlia Group. Seluruh hak cipta dilindungi undang-undang </p>
      </div>
    </footer>
  );
}
