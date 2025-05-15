import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificateModalHeader from "./CertificateModalHeader";
import PDFViewer from "./PDFViewer";
import CertificateDetails from "./CertificateDetails";

export const CertificateModal = ({ item, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const containerRef = useRef(null);

  // Check device type for responsive layout
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  // Reset view when modal opens
  useEffect(() => {
    setIsLoading(true);
    setShowInfo(isMobile ? false : true);
  }, [item, isMobile]);

  // Media query for improved responsive behavior
  useEffect(() => {
    const optimizeForMobile = () => {
      if (isMobile && containerRef.current) {
        containerRef.current.style.height = "calc(100vh - 60px)";
        containerRef.current.style.maxHeight = "none";
      }
    };

    // Apply optimizations on mount and resize
    optimizeForMobile();
    window.addEventListener("resize", optimizeForMobile);

    return () => {
      window.removeEventListener("resize", optimizeForMobile);
    };
  }, [isMobile]);

  // Function to download PDF
  const downloadPDF = () => {
    if (item.certificate) {
      const link = document.createElement("a");
      link.href = item.certificate;
      link.download = `${item.company}_${item.position}_Certificate.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const toggleInfoPanel = () => {
    setShowInfo(!showInfo);
  };

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-0 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.4,
          }}
          className="bg-[#121212] w-full h-full sm:max-w-5xl sm:w-full sm:h-auto sm:max-h-[90vh] rounded-none sm:rounded-xl overflow-hidden shadow-2xl border-0 sm:border sm:border-gray-700 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <CertificateModalHeader
            onClose={onClose}
            toggleInfoPanel={toggleInfoPanel}
            showInfo={showInfo}
            isMobile={isMobile}
            position={item.position}
            company={item.company}
          />

          <div className="flex flex-col md:flex-row h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              ref={containerRef}
              className={`${
                showInfo && isMobile ? "hidden" : "block"
              } md:flex-grow bg-[#0A0A0A] relative`}
              style={{
                height: isMobile
                  ? "calc(100vh - 60px)"
                  : isTablet
                  ? "500px"
                  : "600px",
                maxHeight: isMobile ? "none" : "600px",
              }}
            >
              <PDFViewer
                item={item}
                isMobile={isMobile}
                downloadPDF={downloadPDF}
              />
            </motion.div>

            {/* Certificate Details Panel */}
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
    </AnimatePresence>
  );
};

export default CertificateModal;
