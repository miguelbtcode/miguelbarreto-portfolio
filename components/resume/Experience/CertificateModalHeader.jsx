import React from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, Info } from "lucide-react";

const CertificateModalHeader = ({
  onClose,
  toggleInfoPanel,
  showInfo,
  isMobile,
  position,
  company,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0A0A0A] border-b border-gray-800 flex items-center justify-between p-3 sticky top-0 z-10"
    >
      {/* Left side of header */}
      <div className="flex items-center">
        {isMobile && showInfo ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleInfoPanel}
            className="mr-3 text-white/70 hover:text-white transition-colors"
            aria-label="Ver PDF"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
        ) : isMobile && !showInfo ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleInfoPanel}
            className="mr-3 text-white/70 hover:text-white transition-colors"
            aria-label="Ver detalles"
          >
            <Info className="w-5 h-5" />
          </motion.button>
        ) : null}

        <div className="flex items-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-white text-base font-medium"
          >
            {isMobile ? "Certificado" : "Certificado de Trabajo"}
          </motion.h2>
        </div>
      </div>

      {/* Close button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="text-white/70 hover:text-white transition-colors p-1"
        aria-label="Cerrar modal"
      >
        <X className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
};

export default CertificateModalHeader;
