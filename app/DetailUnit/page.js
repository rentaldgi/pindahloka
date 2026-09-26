// app/DetailUnit/page.jsx
import Image from 'next/image';
import Footer from '../components/Footer';

export default function DetailUnit() {
  return (
    <div className="w-full font-sans">
      {/* Header */}
      <div className="relative w-full h-30 bg-cover bg-center" style={{ backgroundImage: 'url(/images/RD-topdetailunit.png)' }}>
        <button className="absolute top-10 left-10 bg-white text-black px-4 py-2 rounded-full shadow font-medium">
          ←
        </button>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6 px-10 py-10 bg-white">
        {/* Image */}
        <div className="flex justify-center items-center">
          <Image 
            src="/images/RD-yamahagear.png"
            alt="Yamaha Gear 125"
            width={400}
            height={300}
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Text Detail */}
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-2xl font-bold">Yamaha Gear 125</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Dengan mesin 125cc berteknologi Blue Core, Yamaha Gear 125 menawarkan performa yang responsif sekaligus irit bahan bakar. 
            Dilengkapi pula dengan fitur Smart Motor Generator (SMG) yang membuat suara starter lebih halus saat dinyalakan.
          </p>

          <hr className="my-2 border-black" />

          <div className="flex flex-wrap gap-2 text-sm">
            <span className="border border-yellow-500 px-10 py-1 rounded-full text-gray-800">120 KG</span>
            <span className="border border-yellow-500 px-10 py-1 rounded-full text-gray-800">Bandung</span>
            <span className="border border-yellow-500 px-10 py-1 rounded-full text-gray-800">Mahasiswa</span>
          </div>

          {/* Harga */}
          <div className="mt-4 flex items-center gap-20">
            <span className="font-semibold text-black text-2xl w-38">Harga Sewa</span>
            <div className="flex items-end gap-6 text-red-600 font-bold text-xl">
              <div className="flex flex-col leading-none">
                <span>Rp 85.000</span>
                <span className="text-xs font-normal text-red">Weekday</span>
              </div>
              <span className="text-red-600 text-xl font-bold">|</span>
              <div className="flex flex-col leading-none">
                <span>Rp 110.000</span>
                <span className="text-xs font-normal text-red">Weekend</span>
              </div>
            </div>
          </div>

          {/* Fasilitas */}
          <div className="mt-4 flex items-start gap-20">
            <span className="font-semibold text-black text-2xl w-38">Fasilitas</span>
            <div className="grid grid-cols-2 text-sm gap-x-6 gap-y-1 text-red-700 font-semibold">
              <div className="flex items-center gap-2">
                <span>•</span><p>2 Helm</p>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span><p>Penyangga HP</p>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span><p>2 Jas Hujan</p>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span><p>Gembok Cakram</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="pt-4">
            <button className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 rounded-full">
              Sewa Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Info + Tabel */}
      {/* <div className="bg-red-700 text-white px-10 py-8 grid md:grid-cols-2 gap-10 text-base">
        <div className="space-y-4 leading-relaxed">
          <p>
            Unit motor yang kami sediakan hadir dengan tampilan elegan, menggunakan bahan bakar bensin, dan dalam kondisi prima...
          </p>
          <p>
            Seluruh kendaraan memiliki pajak aktif dan dilengkapi surat-surat resmi...
          </p>
          <p>
            Dengan desain yang simpel serta hemat bahan bakar...
          </p>
        </div>
        <div className="flex justify-center items-start">
          <div className="bg-white text-black rounded-md px-6 py-4 text-sm w-full max-w-md shadow-md">
            <table className="w-full table-fixed">
              <tbody>
                <tr><td className="py-3 pr-4 font-semibold w-1/2">Jenis Transmisi</td><td className="py-3 text-right w-1/2">Metic</td></tr>
                <tr className="bg-gray-100"><td className="py-3 pr-4 font-semibold">Warna Mesin</td><td className="py-3 text-right">125cc</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Pajak</td><td className="py-3 text-right">Aktif</td></tr>
                <tr className="bg-gray-100"><td className="py-3 pr-4 font-semibold">Warna</td><td className="py-3 text-right">Hitam</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Bahan Bakar</td><td className="py-3 text-right">Bensin</td></tr>
                <tr className="bg-gray-100"><td className="py-3 pr-4 font-semibold">Warna Maksimal</td><td className="py-3 text-right">200 Kg</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}
