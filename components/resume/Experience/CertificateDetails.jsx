import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  Info,
  Download,
  FileText,
  Calendar,
  Briefcase,
  Code,
  Server,
  Database,
  Globe,
  Award,
  ChevronDown,
  ChevronUp,
  MonitorSmartphone,
  Cpu,
  Cloud,
  Box,
  GitBranch,
  ArrowLeftRight,
  BarChart,
  FileJson,
  Boxes,
  Rocket,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CertificateDetails = ({
  item,
  showInfo,
  downloadPDF,
  toggleInfoPanel,
  isMobile,
  isLandscape,
}) => {
  // Control each section independently
  const [expandedSections, setExpandedSections] = useState({
    technologies: true,
    achievements: true,
  });
  const [animate, setAnimate] = useState(false);

  // Activate animations after component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Function to toggle section state
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Get appropriate tech icon based on technology name
  const getTechIcon = (tech) => {
    const techIcons = {
      // .NET and related languages
      "NET Core": <Cpu className="h-3 w-3 mr-1" />,
      NET: <Cpu className="h-3 w-3 mr-1" />,
      "C#": <Cpu className="h-3 w-3 mr-1" />,
      "ASP.NET": <Cpu className="h-3 w-3 mr-1" />,
      Blazor: <Cpu className="h-3 w-3 mr-1" />,

      // Frontend and JavaScript
      Angular: <MonitorSmartphone className="h-3 w-3 mr-1" />,
      React: <MonitorSmartphone className="h-3 w-3 mr-1" />,
      "React JS": <MonitorSmartphone className="h-3 w-3 mr-1" />,
      "Vue.js": <MonitorSmartphone className="h-3 w-3 mr-1" />,
      TypeScript: <FileJson className="h-3 w-3 mr-1" />,
      JavaScript: <FileJson className="h-3 w-3 mr-1" />,

      // Additional languages
      Python: <Code className="h-3 w-3 mr-1" />,

      // Databases
      "SQL Server": <Database className="h-3 w-3 mr-1" />,
      PostgreSQL: <Database className="h-3 w-3 mr-1" />,
      MongoDB: <Boxes className="h-3 w-3 mr-1" />,
      "Oracle PL/SQL": <Database className="h-3 w-3 mr-1" />,
      SQL: <Database className="h-3 w-3 mr-1" />,

      // Cloud and infrastructure
      Azure: <Cloud className="h-3 w-3 mr-1" />,
      "Google Cloud": <Cloud className="h-3 w-3 mr-1" />,
      "Cloud Functions": <Cloud className="h-3 w-3 mr-1" />,
      Docker: <Box className="h-3 w-3 mr-1" />,

      // DevOps and CI/CD
      "CI/CD": <GitBranch className="h-3 w-3 mr-1" />,
      "Azure DevOps": <Rocket className="h-3 w-3 mr-1" />,
      DevOps: <Rocket className="h-3 w-3 mr-1" />,

      // Architecture and frameworks
      Microservices: <Box className="h-3 w-3 mr-1" />,
      OCP: <Server className="h-3 w-3 mr-1" />,
      ETL: <ArrowLeftRight className="h-3 w-3 mr-1" />,
      JasperReports: <BarChart className="h-3 w-3 mr-1" />,
      "REST APIs": <ArrowLeftRight className="h-3 w-3 mr-1" />,
      Swagger: <FileJson className="h-3 w-3 mr-1" />,
      "Web Development": <Globe className="h-3 w-3 mr-1" />,
      "Financial Systems": <BarChart className="h-3 w-3 mr-1" />,
    };

    return techIcons[tech] || <Code className="h-3 w-3 mr-1" />;
  };

  // Get color for tech badge
  const getTechBadgeColor = (tech) => {
    const techCategories = {
      "NET Core": "bg-blue-600",
      NET: "bg-blue-600",
      "C#": "bg-blue-600",
      "ASP.NET": "bg-blue-600",
      Blazor: "bg-blue-600",
      Angular: "bg-red-600",
      React: "bg-cyan-600",
      "React JS": "bg-cyan-600",
      "Vue.js": "bg-green-600",
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-600",
      Python: "bg-indigo-600",
      "SQL Server": "bg-red-700",
      PostgreSQL: "bg-blue-800",
      MongoDB: "bg-green-800",
      "Oracle PL/SQL": "bg-red-800",
      SQL: "bg-blue-700",
      Azure: "bg-blue-700",
      "Google Cloud": "bg-green-700",
      "Cloud Functions": "bg-green-700",
      Docker: "bg-blue-900",
      "CI/CD": "bg-purple-600",
      "Azure DevOps": "bg-blue-700",
      Microservices: "bg-indigo-700",
      OCP: "bg-red-600",
      ETL: "bg-amber-700",
      JasperReports: "bg-red-500",
      "REST APIs": "bg-green-600",
      Swagger: "bg-green-700",
      DevOps: "bg-purple-700",
      "Web Development": "bg-blue-600",
      "Financial Systems": "bg-green-800",
    };

    return techCategories[tech] || "bg-gray-600";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const techBadgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <div
      className={`${
        showInfo || (isMobile && isLandscape) ? "block" : "hidden md:block"
      } ${
        isMobile && isLandscape ? "w-1/2" : "md:w-1/3"
      } flex flex-col bg-[#121212] border-t md:border-t-0 md:border-l border-gray-700 h-full overflow-hidden`}
      style={{
        maxHeight: isMobile
          ? isLandscape
            ? "calc(100vh - 60px)"
            : "calc(100vh - 60px)"
          : "600px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#121212] px-5 py-4 border-b border-gray-800"
      >
        <h2 className="text-xl font-bold text-white">{item.position}</h2>
        <div className="flex items-center mt-2">
          <div
            className={`w-2 h-2 bg-${item.color || "green"}-500 rounded-full`}
          ></div>
          <p className="text-white/80 ml-2">{item.company}</p>
        </div>
        <p className="text-green-500 font-medium mt-2 flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          {item.duration}
        </p>
      </motion.div>

      <div className="p-5 space-y-4 overflow-y-auto flex-grow">
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-800/50 shadow-sm"
          >
            <motion.h3
              variants={itemVariants}
              className="font-medium text-white text-lg mb-2 flex items-center"
            >
              <Briefcase className="h-5 w-5 mr-2 text-green-500" />
              Descripción del Puesto
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-white/70 leading-relaxed text-sm"
            >
              {item.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-800/50 shadow-sm"
        >
          <div
            className="font-medium text-white text-lg mb-2 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("technologies")}
          >
            <motion.div variants={itemVariants} className="flex items-center">
              <Code className="h-5 w-5 mr-2 text-green-500" />
              Tecnologías
            </motion.div>
            {expandedSections.technologies ? (
              <ChevronUp className="h-5 w-5 text-green-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-green-500" />
            )}
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedSections.technologies
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-wrap gap-2 mt-2">
              {item.technologies?.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={techBadgeVariants}
                  className={`${getTechBadgeColor(
                    tech
                  )} text-xs px-2 py-1 rounded-full inline-flex items-center shadow-sm`}
                >
                  {getTechIcon(tech)}
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {item.achievements?.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-800/50 shadow-sm"
          >
            <div
              className="font-medium text-white text-lg mb-2 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("achievements")}
            >
              <motion.div variants={itemVariants} className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-green-500" />
                Logros
              </motion.div>
              {expandedSections.achievements ? (
                <ChevronUp className="h-5 w-5 text-green-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-green-500" />
              )}
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedSections.achievements
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="mt-2 space-y-2">
                {item.achievements?.map((achievement, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="text-white/70 text-sm flex items-start"
                  >
                    <div className="text-green-500 mr-2 mt-1">•</div>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            className="bg-green-900/10 p-4 rounded-lg border border-green-800/20 shadow-sm"
          >
            <motion.h3
              variants={itemVariants}
              className="font-medium text-white text-base mb-2 flex items-center"
            >
              <FileText className="h-4 w-4 mr-2 text-green-500" />
              Certificado Laboral
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-white/70 leading-relaxed text-sm"
            >
              Este documento certifica la experiencia profesional en{" "}
              {item.company} durante el período {item.duration}.
              {showInfo && isMobile && !isLandscape ? (
                <span className="block mt-2 text-green-400 text-xs">
                  Toca el botón <ChevronLeft className="inline w-3 h-3" /> para
                  ver el certificado.
                </span>
              ) : isMobile && isLandscape ? (
                <span className="block mt-2 text-green-400 text-xs">
                  En modo horizontal puedes ver el certificado y los detalles
                  simultáneamente.
                </span>
              ) : (
                <span>
                  {" "}
                  Usa los controles para navegar, ajustar el zoom, compartir o
                  descargar el documento.
                  {isMobile && !isLandscape && (
                    <span className="block mt-2 text-green-400 text-xs">
                      Gira tu dispositivo horizontalmente para una mejor
                      visualización.
                    </span>
                  )}
                </span>
              )}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-5 pt-4 bg-[#121212] border-t border-gray-800/40 mt-auto"
      >
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={downloadPDF}
          className="w-full bg-green-600 hover:bg-green-500 text-white py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md"
        >
          <Download className="w-5 h-5 mr-2" />
          <span className="font-medium">Descargar Certificado</span>
        </motion.button>

        {isMobile && !isLandscape && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={toggleInfoPanel}
            className="w-full mt-3 bg-[#1A1A1A] hover:bg-[#252525] text-white/80 hover:text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center text-sm"
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
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default CertificateDetails;
