// 4. ExperienceItem.jsx
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const ExperienceItem = ({ item, index, totalItems, openCertificateModal }) => {
  // Función para formatear la duración en formato de dos líneas para móvil
  const formatMobileDuration = (durationString) => {
    // Suponiendo que el formato es "Mar. 2021 - Ago. 2021"
    const parts = durationString.split(" - ");
    if (parts.length === 2) {
      return (
        <div className="flex flex-col items-end">
          <span>{parts[0]}-</span>
          <span>{parts[1]}&nbsp;</span>
        </div>
      );
    }
    return durationString;
  };

  return (
    <motion.div
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
        {index < totalItems - 1 && (
          <div className="w-0.5 h-full bg-white/20 my-2"></div>
        )}
      </div>
      {/* Experience Card */}
      <div
        className={`flex-grow bg-[#232329] p-6 rounded-xl 
        ${item.certificate ? "hover:bg-[#2f2f38] transition-colors" : ""}`}
      >
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-xl font-semibold text-white">{item.position}</h4>
          {/* Versión para escritorio (oculta en móvil) */}
          <span className="text-green-500 text-sm hidden md:block">
            {item.duration}
          </span>
          {/* Versión para móvil (oculta en escritorio) */}
          <span className="text-green-500 text-sm md:hidden text-right min-w-[110px]">
            {formatMobileDuration(item.duration)}
          </span>
        </div>

        {/* Versión de escritorio (sin cambios) */}
        <div className="hidden md:block items-center">
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

        {/* Company y Certificate en versión móvil - ajustado al ancho de la imagen */}
        <div className="flex md:hidden items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
            <p className="text-white/60 leading-tight">
              {/* Usa un span adicional para permitir quiebre de línea */}
              <span className="block">
                {item.company
                  .split(" ")
                  .slice(0, Math.ceil(item.company.split(" ").length / 2))
                  .join(" ")}
              </span>
              <span className="block">
                {item.company
                  .split(" ")
                  .slice(Math.ceil(item.company.split(" ").length / 2))
                  .join(" ")}
              </span>
            </p>
          </div>
          {item.certificate && (
            <div className="text-sm text-green-400 flex items-center flex-shrink-0">
              <Download className="w-4 h-4 mr-1" />
              Ver
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
