// Fixed PDFViewer.jsx
import React from "react";

const PDFViewer = ({
  containerRef,
  isLoading,
  iframeRef,
  getIframeSrc,
  item,
  setIsLoading,
}) => {
  const handleIframeLoad = () => {
    console.log("PDF frame loaded");
    setIsLoading(false);
  };

  return (
    <>
      {item.certificate ? (
        <>
          {/* Initial loading overlay - only visible while loading */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#121212]/90">
              <div className="flex flex-col items-center">
                <div className="animate-spin h-10 w-10 rounded-full border-4 border-white/10 border-t-green-500 mb-4"></div>
                <div className="text-white/70">Cargando documento...</div>
              </div>
            </div>
          )}

          {/* Iframe with PDF viewer and native toolbar */}
          <iframe
            ref={iframeRef}
            src={getIframeSrc()}
            className="w-full h-full border-0"
            style={{ backgroundColor: "#121212" }}
            title={`${item.company} certificate`}
            onLoad={handleIframeLoad}
          />
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="bg-[#2A2A2A] p-6 rounded-xl max-w-md mx-4">
            <div className="text-white/50 text-center">
              <span className="block text-6xl mb-4">📑</span>
              <h3 className="text-xl font-semibold text-white mb-2">
                Certificado no disponible
              </h3>
              <p>Este puesto no tiene un certificado asociado actualmente.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PDFViewer;
