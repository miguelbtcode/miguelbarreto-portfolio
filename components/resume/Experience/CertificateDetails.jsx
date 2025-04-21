// 3. CertificateDetails.jsx
import React from "react";
import { ChevronLeft, Info, Download } from "lucide-react";

const CertificateDetails = ({
  item,
  showInfo,
  downloadPDF,
  toggleInfoPanel,
  isMobile,
}) => {
  return (
    <div
      className={`${
        showInfo ? "block" : "hidden md:block"
      } md:w-1/3 flex flex-col bg-[#1E1E1E] border-t md:border-t-0 md:border-l border-gray-800 h-full md:max-h-[600px]`}
    >
      {/* Header section with gradient background */}
      <div
        className={`bg-[#1E1E1E] px-6 ${
          isMobile ? "pt-20 pb-3" : "py-5"
        } border-b border-gray-800`}
      >
        <h2 className="text-2xl font-bold text-white">{item.position}</h2>
        <div className="flex items-center mt-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <p className="text-white/80 ml-2">{item.company}</p>
        </div>
        <p className="text-green-500 font-medium mt-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {item.duration}
        </p>
      </div>

      {/* Main content section - Scrollable */}
      <div
        className={`p-6 space-y-5 ${
          isMobile ? "overflow-hidden" : "overflow-y-auto"
        } flex-grow ${isMobile ? "max-h-[calc(100vh-300px)]" : ""}`}
      >
        {item.certificateDescription && (
          <div className="bg-[#252525] p-5 rounded-xl border border-gray-800/50 shadow-sm">
            <h3 className="font-semibold text-white text-lg mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Detalles del Certificado
            </h3>
            <p className="text-white/70 leading-relaxed">
              {item.certificateDescription}
            </p>
          </div>
        )}

        {/* PDF viewer info with icon */}
        <div className="bg-green-900/20 p-4 rounded-lg border border-green-800/30 shadow-sm">
          <h3 className="font-semibold text-white text-lg mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Visualización del Documento
          </h3>
          <p className="text-white/70 leading-relaxed">
            Este certificado incluye herramientas nativas de visualización.
            {showInfo && isMobile ? (
              <span className="block mt-2 text-green-400">
                Toca el botón <ChevronLeft className="inline w-4 h-4" /> en la
                esquina superior izquierda para ver el PDF.
              </span>
            ) : (
              " Puedes navegar, hacer zoom y explorar el documento usando los controles en la parte superior del visor."
            )}
          </p>
        </div>
      </div>

      {/* Download section with fixed position at bottom */}
      <div
        className={`p-6 pt-0 bg-[#1E1E1E] border-t border-gray-800/40 mt-auto ${
          isMobile ? "pb-8" : ""
        }`}
      >
        <button
          onClick={downloadPDF}
          className="w-full bg-green-600 hover:bg-green-500 text-white py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-green-900/20"
        >
          <Download className="w-5 h-5 mr-2" />
          <span className="font-medium">Descargar Certificado</span>
        </button>

        {/* Mobile-only view toggle */}
        {isMobile && (
          <button
            onClick={toggleInfoPanel}
            className="w-full mt-3 bg-[#252525] hover:bg-[#333333] text-white/80 hover:text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center text-sm"
          >
            {showInfo ? (
              <>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Ver PDF
              </>
            ) : (
              <>
                <Info className="w-4 h-4 mr-2" />
                Ver detalles
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificateDetails;
