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

  // Check device type and orientation for responsive layout
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

  // Reset view when modal opens and set proper default view based on device
  useEffect(() => {
    setIsLoading(true);

    // In landscape on mobile, we want to show both panels side by side if possible
    if (isMobile && isLandscape) {
      setShowInfo(true);
    } else if (isMobile) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  }, [item, isMobile, isLandscape]);

  // Optimize container dimensions based on device and orientation
  useEffect(() => {
    const optimizeContainers = () => {
      if (!containerRef.current) return;

      const headerHeight = 60; // Height of the modal header
      const modalPadding = 0; // Modal padding

      // Get modal height or use window height as fallback
      const modalElement = document.querySelector(".sm\\:max-h-\\[90vh\\]");
      const modalHeight =
        modalElement?.clientHeight || window.innerHeight * 0.9;

      let pdfHeight;
      let containerLayout = "flex-col"; // Default layout direction

      if (isMobile) {
        if (isLandscape) {
          // For landscape mobile, optimize for side-by-side view
          pdfHeight = `${window.innerHeight - headerHeight}px`;
          containerLayout = "flex-row"; // Change to row layout for side-by-side

          if (modalRef.current) {
            modalRef.current.classList.add("landscape-mobile-view");
          }
        } else {
          // Portrait mobile
          pdfHeight = `calc(100vh - ${headerHeight}px)`;

          if (modalRef.current) {
            modalRef.current.classList.remove("landscape-mobile-view");
          }
        }
      } else if (isTablet) {
        // Tablet adjustments
        pdfHeight = `${modalHeight - headerHeight - modalPadding}px`;
      } else {
        // Desktop adjustments
        if (window.innerHeight < 700) {
          pdfHeight = `${
            window.innerHeight - headerHeight - modalPadding - 30
          }px`;
        } else {
          pdfHeight = "600px"; // Default size
        }
      }

      // Apply optimized height
      containerRef.current.style.height = pdfHeight;

      // Set flex direction for the container based on orientation
      if (isMobile && isLandscape) {
        containerRef.current.style.display = "flex";
        containerRef.current.style.flexDirection = containerLayout;
      } else {
        containerRef.current.style.display = "flex";
        containerRef.current.style.flexDirection = "column";
      }
    };

    optimizeContainers();
    window.addEventListener("resize", optimizeContainers);

    return () => {
      window.removeEventListener("resize", optimizeContainers);
    };
  }, [isMobile, isTablet, isLandscape]);

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
                : "flex-col md:flex-row h-full"
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
                isMobile && isLandscape ? "w-1/2" : "md:flex-grow"
              } bg-[#0A0A0A] relative`}
              style={{
                height: isMobile
                  ? isLandscape
                    ? "calc(100vh - 60px)"
                    : "calc(100vh - 60px)"
                  : isTablet
                  ? "500px"
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

            {/* Certificate Details Panel */}
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
    </AnimatePresence>
  );
};

export default CertificateModal;
