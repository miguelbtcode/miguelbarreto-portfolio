// CertificateModal.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CertificateModalHeader from "./CertificateModalHeader";
import PDFViewer from "./PDFViewer";
import CertificateDetails from "./CertificateDetails";

export const CertificateModal = ({ item, onClose }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false); // For mobile view toggling info panel
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  // Generate iframe src with proper parameters
  const getIframeSrc = () => {
    const baseUrl = item.certificate;
    return `${baseUrl}#toolbar=1&navpanes=0&scrollbar=1&page=1`;
  };

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Reset view when modal opens
  useEffect(() => {
    setPageNumber(1);
    estimateTotalPages();
    setIsLoading(true);
    // On mobile, initially don't show the info panel
    if (isMobile) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  }, [item, isMobile]);

  // Estimate total pages - in a real app you might get this from metadata
  const estimateTotalPages = () => {
    setTotalPages(Math.floor(Math.random() * 5) + 1); // Just for demo
  };

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = item.certificate;
    link.download = `${item.company}_${item.position}_Certificate.pdf`;
    link.click();
  };

  const toggleInfoPanel = () => {
    setShowInfo(!showInfo);
  };

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-0 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-[#1E1E1E] w-full h-full sm:max-w-5xl sm:w-full sm:h-auto sm:max-h-[80vh] rounded-none sm:rounded-xl overflow-hidden shadow-2xl border-0 sm:border sm:border-gray-800 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <CertificateModalHeader
          onClose={onClose}
          toggleInfoPanel={toggleInfoPanel}
          showInfo={showInfo}
        />

        <div className="flex flex-col md:flex-row h-full sm:max-h-[80vh]">
          {/* PDF Viewer - Hidden on mobile when info is shown */}
          <div
            ref={containerRef}
            className={`${
              showInfo ? "hidden md:block" : "block"
            } flex-grow bg-[#121212] relative`}
            style={{ 
              height: isMobile ? "calc(100vh - 160px)" : "calc(100vh - 120px)", 
              maxHeight: "600px" 
            }}
          >
            <PDFViewer
              containerRef={containerRef}
              isLoading={isLoading}
              iframeRef={iframeRef}
              getIframeSrc={getIframeSrc}
              item={item}
              setIsLoading={setIsLoading}
              isMobile={isMobile}
            />
          </div>

          <CertificateDetails
            item={item}
            showInfo={showInfo}
            downloadPDF={downloadPDF}
            toggleInfoPanel={toggleInfoPanel}
            isMobile={isMobile}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificateModal;
