import Image from "next/image";
import { BsArrowLeft, BsArrowRight, BsPlay, BsPause } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Cloud,
  Sun,
  CloudRain,
  Eye,
  Monitor,
  Activity,
  Zap,
} from "lucide-react";

// Componente para los controles de navegación del carrusel de imágenes
const NavigationControls = ({
  onPrev,
  onNext,
  disabled,
  theme,
  className = "opacity-0 group-hover:opacity-100 transition-all duration-300",
}) => (
  <>
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onPrev();
      }}
      disabled={disabled}
      className={`absolute left-4 top-1/2 -translate-y-1/2 z-20
                 w-10 h-10 rounded-full backdrop-blur-sm
                 flex items-center justify-center text-white
                 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${className}
                 border border-[#00ff99]/30 hover:border-[#00ff99]/50`}
      style={{
        background: `linear-gradient(135deg, #1c1c22e6, #1c1c22aa)`,
      }}
      type="button"
      aria-label="Imagen anterior"
    >
      <BsArrowLeft className="text-lg" />
    </button>

    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onNext();
      }}
      disabled={disabled}
      className={`absolute right-4 top-1/2 -translate-y-1/2 z-20
                 w-10 h-10 rounded-full backdrop-blur-sm
                 flex items-center justify-center text-white
                 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${className}
                 border border-[#00ff99]/30 hover:border-[#00ff99]/50`}
      style={{
        background: `linear-gradient(135deg, #1c1c22e6, #1c1c22aa)`,
      }}
      type="button"
      aria-label="Imagen siguiente"
    >
      <BsArrowRight className="text-lg" />
    </button>
  </>
);

// Componente para los indicadores de imagen
const ImageIndicators = ({
  images,
  currentIndex,
  onGoToImage,
  disabled,
  theme,
  className = "opacity-0 group-hover:opacity-100 transition-all duration-300",
}) => (
  <div
    className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-20
                  flex gap-2 ${className}`}
  >
    {images.map((_, imgIndex) => (
      <button
        key={imgIndex}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onGoToImage(imgIndex);
        }}
        disabled={disabled}
        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 disabled:opacity-50 ${
          imgIndex === currentIndex ? "scale-125" : "hover:scale-110"
        }`}
        style={{
          backgroundColor: imgIndex === currentIndex ? "#00ff99" : "#00ff9960",
        }}
        type="button"
        aria-label={`Ir a imagen ${imgIndex + 1}`}
      />
    ))}
  </div>
);

// Componente para el control de auto-rotación
const AutoRotationControl = ({
  isAutoRotating,
  onToggle,
  theme,
  className = "opacity-0 group-hover:opacity-100 transition-all duration-300",
}) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onToggle();
    }}
    className={`absolute top-14 left-2 z-30
               w-8 h-8 rounded-full backdrop-blur-sm
               flex items-center justify-center text-white
               hover:scale-110 ${className}
               border border-[#00ff99]/30 hover:border-[#00ff99]/50`}
    style={{
      background: `linear-gradient(135deg, #1c1c22e6, #1c1c22aa)`,
    }}
    title={isAutoRotating ? "Pausar auto-rotación" : "Activar auto-rotación"}
    type="button"
  >
    {isAutoRotating ? (
      <Pause className="w-4 h-4" />
    ) : (
      <Play className="w-4 h-4" />
    )}
  </button>
);

// Función para determinar el tipo de imagen y tema
const getImageType = (imagePath) => {
  if (!imagePath) return "dashboard";

  const path = imagePath.toLowerCase();
  if (path.includes("swagger") || path.includes("api")) return "api";
  if (path.includes("health") || path.includes("monitoring"))
    return "monitoring";
  if (path.includes("main") || path.includes("dashboard")) return "dashboard";
  return "feature";
};

const ImageCarousel = ({
  project,
  projectIndex,
  currentImageIndex,
  nextImageIndex,
  isTransitioning,
  isAutoRotating,
  onNavigate,
  onToggleAutoRotation,
  getSafeImageSrc,
}) => {
  const currentImage = getSafeImageSrc(project, currentImageIndex);
  const imageType = getImageType(currentImage);

  // Temas dinámicos basados en el tipo de imagen
  const imageThemes = {
    dashboard: {
      icon: Monitor,
      gradientFrom: "from-blue-50",
      gradientTo: "to-cyan-50",
      borderColor: "#3b82f6",
      shadowColor: "#3b82f620",
      accentColor: "bg-blue-500",
      bgPattern:
        "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
    },
    api: {
      icon: Activity,
      gradientFrom: "from-green-50",
      gradientTo: "to-emerald-50",
      borderColor: "#10b981",
      shadowColor: "#10b98120",
      accentColor: "bg-green-500",
      bgPattern:
        "radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
    },
    monitoring: {
      icon: Zap,
      gradientFrom: "from-amber-50",
      gradientTo: "to-orange-50",
      borderColor: "#f59e0b",
      shadowColor: "#f59e0b20",
      accentColor: "bg-amber-500",
      bgPattern:
        "radial-gradient(circle at 60% 40%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
    },
    feature: {
      icon: Cloud,
      gradientFrom: "from-purple-50",
      gradientTo: "to-indigo-50",
      borderColor: "#8b5cf6",
      shadowColor: "#8b5cf620",
      accentColor: "bg-purple-500",
      bgPattern:
        "radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
    },
  };

  const theme = imageThemes[imageType];
  const IconComponent = theme.icon;

  return (
    <div className="relative h-full group z-10">
      {/* Marco exterior con tema weather */}
      <div
        className={`
          relative p-4 rounded-2xl bg-gradient-to-br from-[#1c1c22] to-[#1c1c22]/90
          border-2 transition-all duration-700 ease-out
          shadow-xl hover:shadow-2xl
          backdrop-blur-sm
          h-full flex flex-col
        `}
        style={{
          borderColor: theme.borderColor,
          boxShadow: `0 20px 40px -12px ${theme.shadowColor}, 0 0 0 1px ${theme.borderColor}15, inset 0 1px 0 rgba(0,255,153,0.1)`,
          background: `linear-gradient(135deg, #1c1c22, #1c1c22e6), ${theme.bgPattern}`,
        }}
      >
        {/* Header del marco con información contextual */}
        <div className="flex items-center justify-between mb-4 px-2 relative z-20">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${theme.accentColor} shadow-lg`}>
              <IconComponent className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white capitalize">
                {imageType === "dashboard"
                  ? "Main Dashboard"
                  : imageType === "api"
                  ? "API Documentation"
                  : imageType === "monitoring"
                  ? "Health Monitoring"
                  : "Feature View"}
              </h4>
              <p className="text-xs text-gray-300">
                {currentImageIndex + 1} of {project.images?.length || 0}
              </p>
            </div>
          </div>

          {/* Control de auto-rotación */}
          <AutoRotationControl
            isAutoRotating={isAutoRotating}
            onToggle={onToggleAutoRotation}
            theme={theme}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Contenedor principal de imagen */}
        <div
          className="relative flex-1 rounded-xl overflow-hidden shadow-inner"
          style={{
            background: `linear-gradient(135deg, #1c1c22, #1c1c2290)`,
            border: `1px solid ${theme.borderColor}30`,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={currentImage}
                alt={`${project.title} - Vista ${currentImageIndex + 1}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={currentImageIndex === 0}
                quality={90}
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay para transiciones */}
          {isTransitioning && (
            <div
              className="absolute inset-0 flex items-center justify-center backdrop-blur-sm z-15"
              style={{
                background: `#1c1c22aa`,
              }}
            >
              <div
                className={`w-8 h-8 rounded-full border-2 animate-spin`}
                style={{
                  borderTopColor: "transparent",
                  borderRightColor: "#00ff99",
                  borderBottomColor: "#00ff99",
                  borderLeftColor: "#00ff99",
                }}
              />
            </div>
          )}

          {/* Controles de navegación de imágenes */}
          {project.images && project.images.length > 1 && (
            <NavigationControls
              onPrev={() => onNavigate("prev", projectIndex)}
              onNext={() => onNavigate("next", projectIndex)}
              disabled={isTransitioning}
              theme={theme}
            />
          )}

          {/* Indicadores de puntos */}
          {project.images && project.images.length > 1 && (
            <ImageIndicators
              images={project.images}
              currentIndex={currentImageIndex}
              onGoToImage={(index) => onNavigate(index, projectIndex)}
              disabled={isTransitioning}
              theme={theme}
            />
          )}
        </div>

        {/* Footer con información adicional */}
        <div className="mt-4 px-2 relative z-20">
          <div className="flex items-center justify-between text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff99]" />
              <span>Weather Dashboard Project</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>Live Preview</span>
            </div>
          </div>
        </div>

        {/* Efectos de partículas decorativas */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-5">
          <div
            className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 animate-pulse"
            style={{ backgroundColor: "#00ff99" }}
          />
          <div
            className="absolute bottom-8 left-6 w-12 h-12 rounded-full opacity-5 animate-bounce"
            style={{
              backgroundColor: "#00ff99",
              animationDelay: "1s",
              animationDuration: "3s",
            }}
          />
        </div>
      </div>

      {/* Resplandor exterior en hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${theme.shadowColor}, transparent 40%)`,
          filter: "blur(20px)",
        }}
      />
    </div>
  );
};

export default ImageCarousel;
