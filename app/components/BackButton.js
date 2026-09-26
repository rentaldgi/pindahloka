"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="absolute top-4 left-4 md:top-10 md:left-10 bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200 font-medium"
    >
      ←
    </button>
  );
}
