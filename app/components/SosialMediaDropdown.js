"use client";

import { useState } from "react";
import Image from "next/image";

const SosialMediaDropdown = ({ entity }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleWhatsappClick = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center md:items-start gap-4 w-full">

      {/* WhatsApp */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
        <button
          onClick={() => toggleDropdown("whatsapp")}
          className="flex items-center justify-between w-full px-4 py-3 text-green-700 font-semibold text-lg"
        >
          <div className="flex items-center gap-3">
            <Image src="/images/logos_whatsapp-icon.png" alt="WhatsApp Icon" width={28} height={28} />
            <span>WhatsApp</span>
          </div>
          <span className={`transition-transform text-base pl-4 ${activeDropdown === "whatsapp" ? "rotate-180" : ""}`}>
            &#9650;
          </span>
        </button>

        <div className={`transition-all duration-300 overflow-hidden ${activeDropdown === "whatsapp" ? "max-h-175" : "max-h-0"}`}>
          <div className="px-6 pb-6 pt-2 text-black space-y-4 text-base">
            <div>
              <button
                onClick={() => handleWhatsappClick("085134688201")}
                className="inline-block bg-green-600 text-white px-5 py-2.5 rounded-full mt-1 text-sm font-medium hover:bg-green-700"
              >
                085134688201
              </button>
             
            </div>
          </div>
        </div>
      </div>

      {/* TikTok */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
        <button
          onClick={() => toggleDropdown("tiktok")}
          className="flex items-center justify-between w-full px-4 py-3 text-black font-semibold text-lg"
        >
          <div className="flex items-center gap-3">
            <Image src="/images/logos_tiktok-icon.png" alt="TikTok" width={28} height={28} />
            <span>TikTok</span>
          </div>
          <span className={`transition-transform text-base pl-4 ${activeDropdown === "tiktok" ? "rotate-180" : ""}`}>
            &#9650;
          </span>
        </button>

        <div className={`transition-all duration-300 overflow-hidden ${activeDropdown === "tiktok" ? "max-h-125" : "max-h-0"}`}>
          <div className="px-6 pb-6 pt-2 text-black space-y-4 text-base">
            {[
              {
                users: [{ handle: "@pindahloka", link: "https://www.tiktok.com/@pindahloka" }]
              }
            ].map((region, index) => (
              <div key={index}>
                {index > 0 && <hr className="border-t border-gray-200 my-3" />}
                <div className="font-semibold mb-2">{region.area}</div>
                <div className="flex flex-wrap gap-2">
                  {region.users.map((user, idx) => (
                    <a
                      key={idx}
                      href={user.link}
                      target="_blank"
                      className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:underline"
                    >
                      {user.handle}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
        <button
          onClick={() => toggleDropdown("instagram")}
          className="flex items-center justify-between w-full px-4 py-3 text-pink-500 font-semibold text-lg"
        >
          <div className="flex items-center gap-3">
            <Image src="/images/logos_instagram-icon.png" alt="Instagram" width={28} height={28} />
            <span>Instagram</span>
          </div>
          <span className={`transition-transform text-base pl-4 ${activeDropdown === "instagram" ? "rotate-180" : ""}`}>
            &#9650;
          </span>
        </button>

        <div className={`transition-all duration-300 overflow-hidden ${activeDropdown === "instagram" ? "max-h-250" : "max-h-0"}`}>
          <div className="px-6 pb-6 pt-2 text-black space-y-4 text-base">
            {[
              { 
                users: [{ handle: "@pindahloka", link: "https://instagram.com/pindahloka" }] 
              }
            ].map((region, index) => (
              <div key={index}>
                {index > 0 && <hr className="border-t border-gray-200 my-3" />}
                <div className="font-semibold mb-2">{region.area}</div>
                <div className="flex overflow-x-auto gap-2">
                  {region.users.map((user, idx) => (
                    <a
                      key={idx}
                      href={user.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:underline"
                    >
                      {user.handle}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default SosialMediaDropdown;