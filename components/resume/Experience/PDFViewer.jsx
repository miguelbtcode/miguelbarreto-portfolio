import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import {
  ZoomIn,
  ZoomOut,
  Loader,
  Download,
  Share,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PDFViewer = ({ item, isMobile, isLandscape, downloadPDF }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [loading, setLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    if (pageNumber > 1) {
      changePage(-1);
    }
  }

  function nextPage() {
    if (pageNumber < numPages) {
      changePage(1);
    }
  }

  function handleZoom(factor) {
    setScale((prevScale) => {
      const newScale = prevScale + factor;
      return Math.max(0.5, Math.min(newScale, 2.5));
    });
  }

  const resetZoom = () => {
    setScale(1.0);
  };

  const handleShare = () => {
    if (navigator.share && item.certificate) {
      navigator
        .share({
          title: `${item.position} - ${item.company} Certificate`,
          text: `Certificate of employment for ${item.position} at ${item.company}.`,
          url: item.certificate,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  const copyLink = () => {
    if (item.certificate) {
      navigator.clipboard
        .writeText(item.certificate)
        .then(() => {
          alert("Enlace copiado al portapapeles");
          setShowShareOptions(false);
        })
        .catch((err) => console.error("Error al copiar:", err));
    }
  };

  const shareViaEmail = () => {
    if (item.certificate) {
      const subject = encodeURIComponent(
        `Certificado de ${item.company}: ${item.position}`
      );
      const body = encodeURIComponent(
        `Hola,\n\nComparto contigo mi certificado de ${item.company}.\n\nAccede al documento aquí: ${item.certificate}\n\nSaludos.`
      );
      window.open(`mailto:?subject=${subject}&body=${body}`);
      setShowShareOptions(false);
    }
  };

  return (
    <div className="relative flex-grow flex flex-col w-full h-full">
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center z-10 bg-[#0A0A0A]/90"
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Loader className="h-10 w-10 text-green-500 mb-4" />
            </motion.div>
            <p className="text-white/70">Cargando PDF...</p>
          </div>
        </motion.div>
      )}

      {showShareOptions && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 right-4 z-30 bg-[#1A1A1A] rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-2 flex flex-col gap-1">
            <button
              onClick={copyLink}
              className="flex items-center px-3 py-2 hover:bg-[#252525] rounded text-left text-white/90 text-sm"
            >
              <span className="mr-2">🔗</span> Copiar enlace
            </button>
            <button
              onClick={shareViaEmail}
              className="flex items-center px-3 py-2 hover:bg-[#252525] rounded text-left text-white/90 text-sm"
            >
              <span className="mr-2">✉️</span> Compartir por email
            </button>
          </div>
        </motion.div>
      )}

      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="absolute top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-gray-800/50 flex justify-between items-center px-3 py-2 z-10"
        >
          <div className="flex items-center space-x-2">
            <button
              onClick={previousPage}
              disabled={pageNumber === 1}
              className={`p-2 rounded-full ${
                pageNumber === 1
                  ? "text-gray-500 bg-gray-800/30"
                  : "text-white bg-gray-800 hover:bg-gray-700"
              } transition-colors`}
              aria-label="Previous Page"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <span className="text-white text-sm">
              {pageNumber} / {numPages}
            </span>

            <button
              onClick={nextPage}
              disabled={pageNumber === numPages}
              className={`p-2 rounded-full ${
                pageNumber === numPages
                  ? "text-gray-500 bg-gray-800/30"
                  : "text-white bg-gray-800 hover:bg-gray-700"
              } transition-colors`}
              aria-label="Next Page"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleZoom(-0.2)}
              disabled={scale <= 0.5}
              className={`p-2 rounded-full ${
                scale <= 0.5
                  ? "text-gray-500 bg-gray-800/30"
                  : "text-white bg-gray-800 hover:bg-gray-700"
              } transition-colors`}
              aria-label="Zoom Out"
            >
              <ZoomOut className="h-4 w-4" />
            </button>

            <button
              onClick={resetZoom}
              className="p-2 rounded-full text-white bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Reset Zoom"
            >
              <RotateCcw className="h-4 w-4" />
            </button>

            <button
              onClick={() => handleZoom(0.2)}
              disabled={scale >= 2.5}
              className={`p-2 rounded-full ${
                scale >= 2.5
                  ? "text-gray-500 bg-gray-800/30"
                  : "text-white bg-gray-800 hover:bg-gray-700"
              } transition-colors`}
              aria-label="Zoom In"
            >
              <ZoomIn className="h-4 w-4" />
            </button>

            <div className="h-5 w-px bg-gray-700 mx-1"></div>

            <button
              onClick={handleShare}
              className={`p-2 rounded-full ${
                showShareOptions
                  ? "text-green-500 bg-gray-800"
                  : "text-white bg-gray-800 hover:bg-gray-700"
              } transition-colors`}
              aria-label="Share Certificate"
            >
              <Share className="h-4 w-4" />
            </button>

            <button
              onClick={downloadPDF}
              className="p-2 rounded-full text-white bg-green-700 hover:bg-green-600 transition-colors"
              aria-label="Download Certificate"
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}

      <div className="w-full h-full overflow-auto flex items-start justify-center bg-[#0A0A0A] pt-12">
        <Document
          file={item.certificate}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error("Error loading PDF:", error)}
          loading={
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin h-10 w-10 rounded-full border-4 border-gray-300 border-t-green-500"></div>
            </div>
          }
          className="pdf-document"
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="pdf-page shadow-lg"
          />
        </Document>
      </div>

      <style jsx global>{`
        .pdf-document {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        .pdf-page {
          margin-bottom: 20px;
          background-color: white;
        }
        .pdf-page canvas {
          max-width: 100%;
          height: auto !important;
        }
        button:focus,
        div:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default PDFViewer;
