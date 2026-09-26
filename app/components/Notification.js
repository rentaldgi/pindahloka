"use client";

import React, { useEffect } from "react";
import { XCircle, CheckCircle, AlertTriangle } from "lucide-react"; // Pastikan install lucide-react

const Notification = ({ type = "success", message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  const icon =
    type === "success" ? <CheckCircle className="text-green-600 w-7 h-7" /> :
    type === "error" ? <XCircle className="text-red-600 w-7 h-7" /> :
    <AlertTriangle className="text-yellow-500 w-7 h-7" />;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/30">
      <div className="bg-white rounded-xl shadow-lg w-80 p-5 relative">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>

        <div className="flex items-start gap-3">
          {/* Icon */}
          <div>{icon}</div>

          {/* Teks */}
          <div className="text-left">
            <h3 className="text-md font-semibold text-gray-800 capitalize">
              {type === "success" ? "Berhasil" : type === "error" ? "Gagal" : "Peringatan"}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
