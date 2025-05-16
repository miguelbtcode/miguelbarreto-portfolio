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
  const [isLandscape, setIsLandscape] = useState(false);

  const containerRef = useRef(null);
  const modalRef = useRef(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const checkDeviceTypeAndOrientation = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsLandscape(width > height);
    };

    checkDeviceTypeAndOrientation();
    window.addEventListener("resize", checkDeviceTypeAndOrientation);
    window.addEventListener("orientationchange", checkDeviceTypeAndOrientation);

    return () => {
      window.removeEventListener("resize", checkDeviceTypeAndOrientation);
      window.removeEventListener(
        "orientationchange",
        checkDeviceTypeAndOrientation
      );
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);

    if (isMobile && isLandscape) {
      setShowInfo(true);
    } else if (isMobile) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  }, [item, isMobile, isLandscape]);

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
        key="certificate-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-0 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.4,
          }}
          className={`bg-[#121212] w-full h-full sm:max-w-5xl sm:w-full sm:h-auto sm:max-h-[90vh] rounded-none sm:rounded-xl overflow-hidden shadow-2xl border-0 sm:border sm:border-gray-700 relative ${
            isMobile && isLandscape ? "landscape-modal" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <CertificateModalHeader
            onClose={onClose}
            toggleInfoPanel={toggleInfoPanel}
            showInfo={showInfo}
            isMobile={isMobile}
            isLandscape={isLandscape}
            position={item.position}
            company={item.company}
          />

          <div
            className={`flex ${
              isMobile && isLandscape
                ? "flex-row h-[calc(100vh-60px)]"
                : "flex-col md:flex-row"
            }`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              ref={containerRef}
              className={`${
                showInfo && isMobile && !isLandscape ? "hidden" : "flex"
              } ${
                isMobile && isLandscape ? "w-1/2" : "w-full md:w-2/3"
              } bg-[#0A0A0A] relative`}
              style={{
                height: isMobile
                  ? isLandscape
                    ? "calc(100vh - 60px)"
                    : "calc(100vh - 60px)"
                  : "600px",
                maxHeight: isMobile ? "none" : "600px",
                overflow: "hidden",
              }}
            >
              <PDFViewer
                item={item}
                isMobile={isMobile}
                isLandscape={isLandscape}
                downloadPDF={downloadPDF}
              />
            </motion.div>

            <CertificateDetails
              item={item}
              showInfo={showInfo}
              downloadPDF={downloadPDF}
              toggleInfoPanel={toggleInfoPanel}
              isMobile={isMobile}
              isLandscape={isLandscape}
            />
          </div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .landscape-modal {
          display: flex !important;
          flex-direction: column !important;
          max-height: 100vh !important;
        }

        @media (orientation: landscape) and (max-width: 767px) {
          .landscape-modal .flex-row {
            display: flex !important;
            flex-direction: row !important;
          }

          .landscape-modal .flex-row > div:first-child {
            width: 50% !important;
          }

          .landscape-modal .flex-row > div:last-child {
            width: 50% !important;
          }
        }

        @media (min-width: 768px) {
          .md\\:w-2\\/3 {
            width: 66.666667% !important;
          }
        }

        iframe {
          background: white;
        }

        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(30, 30, 30, 0.3);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(100, 100, 100, 0.6);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(120, 120, 120, 0.8);
        }
      `}</style>
    </AnimatePresence>
  );
};

export default CertificateModal;
