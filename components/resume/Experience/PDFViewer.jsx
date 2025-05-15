import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
} from "lucide-react";

// Worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PDFViewer = ({ item, downloadPDF, isMobile }) => {
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

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
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
    <div className="relative w-full h-full bg-[#0A0A0A]">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#0A0A0A]/90">
          <div className="flex flex-col items-center">
            <div className="animate-spin h-10 w-10 rounded-full border-4 border-white/10 border-t-green-500 mb-4"></div>
            <div className="text-white/70">Cargando PDF...</div>
          </div>
        </div>
      )}

      {showShareOptions && !loading && (
        <div className="absolute bottom-16 right-4 z-30 bg-[#1A1A1A] rounded-lg shadow-lg overflow-hidden">
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
        </div>
      )}

      {/* PDF document container */}
      <div className="w-full h-full overflow-auto flex items-start justify-center bg-white">
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

      {/* Controls overlay */}
      {!loading && (
        <>
          {/* Page navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center bg-[#222]/80 px-3 py-1 rounded-full text-white/90 shadow-md">
            <button
              onClick={previousPage}
              disabled={pageNumber <= 1}
              className={`p-1 ${
                pageNumber <= 1 ? "text-gray-500" : "hover:text-white"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="mx-2 text-sm">
              {pageNumber} / {numPages}
            </span>
            <button
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              className={`p-1 ${
                pageNumber >= numPages ? "text-gray-500" : "hover:text-white"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scale indicator */}
          <div className="absolute bottom-4 left-4 z-20 bg-[#222]/80 px-2 py-1 rounded-full text-white/80 text-xs">
            {Math.round(scale * 100)}%
          </div>

          {/* Action buttons */}
          <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
            <button
              onClick={() => handleZoom(-0.2)}
              className="bg-[#222]/80 hover:bg-[#333]/80 p-2 rounded-full text-white/80 hover:text-white shadow-md"
              title="Alejar"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleZoom(0.2)}
              className="bg-[#222]/80 hover:bg-[#333]/80 p-2 rounded-full text-white/80 hover:text-white shadow-md"
              title="Acercar"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={handleShare}
              className={`bg-[#222]/80 hover:bg-[#333]/80 p-2 rounded-full ${
                showShareOptions
                  ? "text-green-500"
                  : "text-white/80 hover:text-white"
              } shadow-md`}
              title="Compartir certificado"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={downloadPDF}
              className="bg-[#222]/80 hover:bg-[#333]/80 p-2 rounded-full text-white/80 hover:text-white shadow-md"
              title="Descargar certificado"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </>
      )}

      {/* Styles for the PDF viewer */}
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
        /* Eliminar borde azul alrededor de elementos enfocados */
        button:focus,
        div:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default PDFViewer;
