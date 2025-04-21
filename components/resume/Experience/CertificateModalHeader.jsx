// 1. CertificateModalHeader.jsx
import React from "react";
import { X, ChevronLeft, Info } from "lucide-react";

const CertificateModalHeader = ({ onClose, toggleInfoPanel, showInfo, isMobile }) => {
  return (
    <>
      {/* Close button with improved UI/UX */}
      <div className="absolute top-0 right-0 z-50 p-4">
        <button
          onClick={onClose}
          className="bg-[#1E1E1E] hover:bg-[#333333] text-white/90 hover:text-white p-3 rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center border border-gray-700 group"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Toggle info button for mobile */}
      <div className="md:hidden absolute top-0 left-0 z-50 p-4">
        <button
          onClick={toggleInfoPanel}
          className="bg-[#1E1E1E] hover:bg-[#333333] text-white/90 hover:text-white p-3 rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center border border-gray-700 group"
          aria-label={showInfo ? "Ver PDF" : "Ver detalles"}
        >
          {showInfo ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <Info className="w-5 h-5" />
          )}
        </button>
      </div>
    </>
  );
};

export default CertificateModalHeader;
