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

  const chevronClass = (name) =>
    `inline-flex h-8 w-8 items-center justify-center bg-white transition-all duration-300 ease-out ${
      activeDropdown === name ? "rotate-180" : "rotate-0"
    }`;

  const socials = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      icon: "/images/logos_whatsapp-icon.png",
      textColor: "text-green-700",
      buttonClass: "bg-green-600 hover:bg-green-700",
      content: (
        <button
          onClick={() => handleWhatsappClick("085134688201")}
          className="inline-block bg-green-600 text-white px-5 py-2.5 rounded-full mt-1 text-sm font-medium hover:bg-green-700"
        >
          085134688201
        </button>
      ),
    },
    {
      key: "tiktok",
      label: "TikTok",
      icon: "/images/logos_tiktok-icon.png",
      textColor: "text-black",
      buttonClass: "bg-black hover:opacity-90",
      content: (
        <a
          href="https://www.tiktok.com/@pindahloka"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 inline-block"
        >
          @pindahloka
        </a>
      ),
    },
    {
      key: "instagram",
      label: "Instagram",
      icon: "/images/logos_instagram-icon.png",
      textColor: "text-pink-500",
      buttonClass: "bg-pink-500 hover:bg-pink-600",
      content: (
        <a
          href="https://instagram.com/pindahloka"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-600 inline-block"
        >
          @pindahloka
        </a>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center md:items-start gap-4 w-full">
      {socials.map((item) => (
        <div key={item.key} className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
          <button
            onClick={() => toggleDropdown(item.key)}
            className={`flex items-center justify-between w-full px-4 py-3 font-semibold text-lg ${item.textColor}`}
          >
            <div className="flex items-center gap-3">
              <Image src={item.icon} alt={item.label} width={28} height={28} />
              <span>{item.label}</span>
            </div>
            <span className={`${chevronClass(item.key)} ml-4`} aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  d="M5.25 7.5 10 12.25 14.75 7.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </button>

          <div
            className={`grid transition-all duration-300 ease-out overflow-hidden ${
              activeDropdown === item.key ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-6 pt-2 text-black text-base">{item.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SosialMediaDropdown;