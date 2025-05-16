import React from "react";
import { motion } from "framer-motion";
import { X, Info, FileText, ChevronLeft } from "lucide-react";

const CertificateModalHeader = ({ 
  onClose, 
  toggleInfoPanel, 
  showInfo, 
  isMobile, 
  isLandscape,
  position, 
  company,
  showFullscreenInfo
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#121212] border-b border-gray-800 h-[60px] flex items-center justify-between px-4 sticky top-0 z-30"
    >
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
          <FileText className="h-4 w-4 text-white" />
        </div>
        <div className="hidden sm:block">
          <h3 className="text-white font-medium text-sm">{position}</h3>
          <p className="text-gray-400 text-xs">{company}</p>
        </div>
        <h3 className="text-white font-medium sm:hidden">
          {showFullscreenInfo ? "Detalles" : "Certificado"}
        </h3>
      </div>

      <div className="flex items-center space-x-2">
        {isMobile && !isLandscape && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-full ${
              showFullscreenInfo ? "bg-green-600" : "bg-gray-800"
            }`}
            onClick={toggleInfoPanel}
            aria-label={showFullscreenInfo ? "Ver Certificado" : "Ver Detalles"}
          >
            {showFullscreenInfo ? (
              <ChevronLeft className="h-5 w-5 text-white" />
            ) : (
              <Info className="h-5 w-5 text-white" />
            )}
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full bg-gray-800"
          onClick={onClose}
          aria-label="Cerrar Modal"
        >
          <X className="h-5 w-5 text-white" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CertificateModalHeader;