import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

const ExperienceItem = ({
  item,
  index,
  totalItems,
  openCertificateModal,
  hoveredIndex,
  setHoveredIndex,
}) => {
  const isHovered = hoveredIndex === index;
  const dotControls = useAnimation();
  const innerDotControls = useAnimation();

  React.useEffect(() => {
    if (isHovered) {
      dotControls.start({
        x: 5,
        scale: 1.15,
        backgroundColor: "#10b981",
        borderColor: "rgba(16, 185, 129, 0.5)",
        boxShadow: "0 0 12px rgba(16, 185, 129, 0.5)",
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 15,
        },
      });
      innerDotControls.start({
        scale: 1.3,
        backgroundColor: "#ffffff",
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 15,
        },
      });
    } else {
      dotControls.start({
        x: 0,
        scale: 1,
        backgroundColor: "#10b981",
        borderColor: "rgba(16, 185, 129, 0.3)",
        boxShadow: "0 0 0px rgba(16, 185, 129, 0)",
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 25,
        },
      });
      innerDotControls.start({
        scale: 1,
        backgroundColor: "#ffffff",
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 25,
        },
      });
    }
  }, [isHovered, dotControls, innerDotControls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
      }}
      className={`flex items-start ${
        item.certificate ? "cursor-pointer" : ""
      } mb-6 md:mb-8 py-2 group relative`}
    >
      <div className="flex flex-col items-center z-20 mr-4 relative">
        <motion.div
          animate={dotControls}
          className="w-4 h-4 rounded-full border-2 border-emerald-500/30 bg-emerald-500 flex items-center justify-center shadow-md relative overflow-visible mt-10"
          style={{ borderWidth: "2px" }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            animate={innerDotControls}
            className="w-1.5 h-1.5 bg-white rounded-full absolute"
          />

          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-full bg-emerald-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4, scale: 1.4 }}
              transition={{ duration: 0.3 }}
              style={{ filter: "blur(4px)" }}
            />
          )}

          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-emerald-400"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      </div>

      {/* Experience Card */}
      <div
        className={`flex-grow bg-[#1e1e24] rounded-xl p-5 shadow-lg border ${
          isHovered ? "border-gray-700" : "border-gray-800"
        }`}
        style={{
          boxShadow: isHovered
            ? "0 8px 16px rgba(0, 0, 0, 0.3)"
            : "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => item.certificate && openCertificateModal(item)}
      >
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between md:items-center">
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            className="text-white text-xl font-bold"
          >
            {item.position}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            className="text-emerald-400 text-sm font-mono bg-[#1a1a20] px-3 py-1 rounded-md self-start md:self-auto"
          >
            {item.duration}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
          className="flex items-center mt-3"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
          <span className="text-gray-400">{item.company}</span>
        </motion.div>

        {item.certificate && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
            className="mt-3 text-emerald-400 text-sm flex items-center cursor-pointer border-t border-gray-800 pt-3"
          >
            <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-all duration-300" />
            <span className="mr-1">Ver certificado</span>
            <motion.div
              animate={isHovered ? { x: 3, opacity: 1 } : { x: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-3 h-3" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
