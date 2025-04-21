import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { BriefcaseIcon, X, Download, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { experience } from "@/app/data/resume.data";

const CertificateModal = ({ item, onClose }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false); // For mobile view toggling info panel

  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  // Generate iframe src with proper parameters
  const getIframeSrc = () => {
    const baseUrl = item.certificate;
    return `${baseUrl}#toolbar=1&navpanes=0&scrollbar=1&page=1`;
  };

  // Reset view when modal opens
  useEffect(() => {
    setPageNumber(1);
    estimateTotalPages();
    setIsLoading(true);
    // On mobile, initially don't show the info panel
    if (window.innerWidth < 768) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  }, [item]);

  const handleIframeLoad = () => {
    console.log("PDF frame loaded");
    setIsLoading(false);
  };

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

        <div className="flex flex-col md:flex-row h-full sm:max-h-[80vh]">
          {/* PDF Viewer - Hidden on mobile when info is shown */}
          <div
            ref={containerRef}
            className={`${
              showInfo ? "hidden md:block" : "block"
            } flex-grow bg-[#121212] relative`}
            style={{ height: "calc(100vh - 120px)", maxHeight: "600px" }}
          >
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
                    <p>
                      Este puesto no tiene un certificado asociado actualmente.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Certificate Details - Hidden on mobile when info is not shown */}
          <div
            className={`${
              showInfo ? "block" : "hidden md:block"
            } md:w-1/3 flex flex-col bg-[#1E1E1E] border-t md:border-t-0 md:border-l border-gray-800 h-full md:max-h-[600px]`}
          >
            {/* Header section with gradient background */}
            <div className="bg-[#1E1E1E] px-6 py-5 border-b border-gray-800">
              <h2 className="text-2xl font-bold text-white">{item.position}</h2>
              <div className="flex items-center mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-white/80 ml-2">{item.company}</p>
              </div>
              <p className="text-green-500 font-medium mt-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {item.duration}
              </p>
            </div>
            
            {/* Main content section - Scrollable */}
            <div className="p-6 space-y-5 overflow-y-auto flex-grow">
              {item.certificateDescription && (
                <div className="bg-[#252525] p-5 rounded-xl border border-gray-800/50 shadow-sm">
                  <h3 className="font-semibold text-white text-lg mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Detalles del Certificado
                  </h3>
                  <p className="text-white/70 leading-relaxed">{item.certificateDescription}</p>
                </div>
              )}
              
              {/* PDF viewer info with icon */}
              <div className="bg-green-900/20 p-4 rounded-lg border border-green-800/30 shadow-sm">
                <h3 className="font-semibold text-white text-lg mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Visualización del Documento
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Este certificado incluye herramientas nativas de visualización. 
                  {showInfo && window.innerWidth < 768 ? (
                    <span className="block mt-2 text-green-400">
                      Toca el botón <ChevronLeft className="inline w-4 h-4" /> en la esquina superior izquierda para ver el PDF.
                    </span>
                  ) : (
                    " Puedes navegar, hacer zoom y explorar el documento usando los controles en la parte superior del visor."
                  )}
                </p>
              </div>
            </div>
            
            {/* Download section with fixed position at bottom */}
            <div className="p-6 pt-0 bg-[#1E1E1E] border-t border-gray-800/40 mt-auto">
              <button
                onClick={downloadPDF}
                className="w-full bg-green-600 hover:bg-green-500 text-white py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-green-900/20"
              >
                <Download className="w-5 h-5 mr-2" />
                <span className="font-medium">Descargar Certificado</span>
              </button>
              
              {/* Mobile-only view toggle */}
              {window.innerWidth < 768 && (
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
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openCertificateModal = (item) => {
    if (item.certificate) {
      setSelectedExperience(item);
    }
  };

  const closeCertificateModal = () => {
    setSelectedExperience(null);
  };

  return (
    <TabsContent value="experience" className="w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 justify-center xl:justify-start">
            <h3 className="text-4xl font-bold">Mi Experiencia</h3>
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              <BriefcaseIcon className="w-10 h-10 text-green-500" />
            </motion.div>
          </div>
          <p className="text-white/80 text-center xl:text-left bg-[#27272c] p-6 rounded-xl">
            Fullstack developer con más de 4 años de experiencia en el
            desarrollo backend y frontend, especializado en la creación de
            aplicaciones web robustas y escalables.
          </p>
          <div className="space-y-6">
            {experience.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                }}
                className={`flex items-center gap-6 ${
                  item.certificate ? "cursor-pointer" : ""
                }`}
                onClick={() => openCertificateModal(item)}
              >
                {/* Timeline Dot */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  {index < experience.items.length - 1 && (
                    <div className="w-0.5 h-full bg-white/20 my-2"></div>
                  )}
                </div>
                {/* Experience Card */}
                <div
                  className={`flex-grow bg-[#27272c] p-6 rounded-xl 
                  ${
                    item.certificate
                      ? "hover:bg-[#252525] transition-colors"
                      : ""
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-semibold text-white">
                      {item.position}
                    </h4>
                    <span className="text-green-500 text-sm">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-white/60 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {item.company}
                  </p>
                  {item.certificate && (
                    <div className="mt-2 text-sm text-green-400 flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      Ver certificado
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificate Modal with Framer Motion AnimatePresence */}
        <AnimatePresence>
          {selectedExperience && (
            <CertificateModal
              item={selectedExperience}
              onClose={closeCertificateModal}
            />
          )}
        </AnimatePresence>
      </div>
    </TabsContent>
  );
};

export default Experience;