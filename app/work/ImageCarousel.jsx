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

// Componente para los controles de navegación
const NavigationControls = ({
  onPrev,
  onNext,
  disabled,
  className = "opacity-0 group-hover:opacity-100 transition-all duration-300",
}) => (
  <>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onPrev();
      }}
      disabled={disabled}
      className={`absolute left-4 top-1/2 -translate-y-1/2 z-30
                 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80
                 flex items-center justify-center text-white
                 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <BsArrowLeft className="text-lg" />
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        onNext();
      }}
      disabled={disabled}
      className={`absolute right-4 top-1/2 -translate-y-1/2 z-30
                 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80
                 flex items-center justify-center text-white
                 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
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
  className = "opacity-0 group-hover:opacity-100 transition-all duration-300",
}) => (
  <div
    className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-30
                  flex gap-2 ${className}`}
  >
    {images.map((_, imgIndex) => (
      <button
        key={imgIndex}
        onClick={(e) => {
          e.stopPropagation();
          onGoToImage(imgIndex);
        }}
        disabled={disabled}
        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 disabled:opacity-50 ${
          imgIndex === currentIndex
            ? "bg-accent scale-125"
            : "bg-white/60 hover:bg-white/80 hover:scale-110"
        }`}
      />
    ))}
  </div>
);

// Componente para el control de auto-rotación
const AutoRotationControl = ({
  isAutoRotating,
  onToggle,
  className = "opacity-0 group-hover:opacity-100 transition-all duration-300",
}) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      onToggle();
    }}
    className={`absolute top-4 left-4 z-30
               w-8 h-8 rounded-full bg-black/60 hover:bg-black/80
               flex items-center justify-center text-white
               hover:scale-110 ${className}`}
    title={isAutoRotating ? "Pausar auto-rotación" : "Activar auto-rotación"}
  >
    {isAutoRotating ? (
      <BsPause className="text-sm" />
    ) : (
      <BsPlay className="text-sm" />
    )}
  </button>
);

// Componente para el contador de imágenes
const ImageCounter = ({
  current,
  total,
  className = "opacity-0 group-hover:opacity-100 transition-all duration-300",
}) => (
  <div
    className={`absolute top-4 right-4 z-30
                  bg-black/60 text-white text-sm px-3 py-1 rounded-full ${className}`}
  >
    {current + 1} / {total}
  </div>
);

// Componente principal del carrusel
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
  // Detectar el tipo de imagen basado en el nombre del archivo
  const getImageType = (imageSrc) => {
    if (imageSrc.includes("main")) return "dashboard";
    if (imageSrc.includes("swagger")) return "api";
    if (imageSrc.includes("health")) return "monitoring";
    return "feature";
  };

  const currentImageSrc = getSafeImageSrc(project, currentImageIndex);
  const imageType = getImageType(currentImageSrc);

  // Temas dinámicos según el tipo de imagen
  const imageThemes = {
    dashboard: {
      borderColor: "rgb(59, 130, 246)", // blue-500
      shadowColor: "rgba(59, 130, 246, 0.25)",
      gradientFrom: "from-blue-50/80",
      gradientTo: "to-cyan-50/80",
      accentColor: "bg-blue-500",
      icon: Sun,
      bgPattern:
        "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
    },
    api: {
      borderColor: "rgb(34, 197, 94)", // green-500
      shadowColor: "rgba(34, 197, 94, 0.25)",
      gradientFrom: "from-green-50/80",
      gradientTo: "to-emerald-50/80",
      accentColor: "bg-green-500",
      icon: Zap,
      bgPattern:
        "radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
    },
    monitoring: {
      borderColor: "rgb(168, 85, 247)", // purple-500
      shadowColor: "rgba(168, 85, 247, 0.25)",
      gradientFrom: "from-purple-50/80",
      gradientTo: "to-violet-50/80",
      accentColor: "bg-purple-500",
      icon: Activity,
      bgPattern:
        "radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
    },
    feature: {
      borderColor: "rgb(249, 115, 22)", // orange-500
      shadowColor: "rgba(249, 115, 22, 0.25)",
      gradientFrom: "from-orange-50/80",
      gradientTo: "to-amber-50/80",
      accentColor: "bg-orange-500",
      icon: Monitor,
      bgPattern:
        "radial-gradient(circle at 70% 70%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)",
    },
  };

  const theme = imageThemes[imageType];
  const IconComponent = theme.icon;

  return (
    <div className="relative h-full group">
      {/* Marco exterior con tema weather */}
      <div
        className={`
          relative p-4 rounded-2xl bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo}
          border-2 transition-all duration-700 ease-out
          shadow-xl hover:shadow-2xl
          backdrop-blur-sm
          h-full flex flex-col
        `}
        style={{
          borderColor: theme.borderColor,
          boxShadow: `0 20px 40px -12px ${theme.shadowColor}, 0 0 0 1px ${theme.borderColor}15`,
          background: `${theme.bgPattern}, linear-gradient(135deg, rgb(248 250 252 / 0.8), rgb(241 245 249 / 0.8))`,
        }}
      >
        {/* Header del marco con información contextual */}
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${theme.accentColor} shadow-lg`}>
              <IconComponent className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 capitalize">
                {imageType === "dashboard"
                  ? "Main Dashboard"
                  : imageType === "api"
                  ? "API Documentation"
                  : imageType === "monitoring"
                  ? "Health Monitoring"
                  : "Feature View"}
              </h4>
              <p className="text-xs text-gray-500">
                {currentImageIndex + 1} of {project.images?.length || 0}
              </p>
            </div>
          </div>

          {/* Controles de reproducción */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleAutoRotation()}
              className={`
                p-2 rounded-lg border-2 transition-all duration-300
                hover:scale-105 active:scale-95
                ${
                  isAutoRotating
                    ? `${theme.accentColor} border-transparent text-white shadow-lg`
                    : `bg-white/70 border-gray-200 text-gray-600 hover:bg-white`
                }
              `}
              title={isAutoRotating ? "Pause slideshow" : "Start slideshow"}
            >
              {isAutoRotating ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Contenedor de imagen principal */}
        <div className="relative flex-1 min-h-0">
          <div className="relative h-full overflow-hidden rounded-xl bg-white/50 shadow-inner border border-white/60">
            {/* Imagen actual */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`${projectIndex}-${currentImageIndex}`}
                src={currentImageSrc}
                alt={`${project.title} - View ${currentImageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-top"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                loading="lazy"
              />
            </AnimatePresence>

            {/* Overlay con gradiente sutil */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: `linear-gradient(135deg, ${theme.borderColor}10 0%, transparent 50%, ${theme.borderColor}05 100%)`,
              }}
            />

            {/* Indicador de carga para transiciones */}
            {isTransitioning && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm">
                <div
                  className={`w-8 h-8 rounded-full border-2 border-t-transparent animate-spin`}
                  style={{
                    borderColor: theme.borderColor,
                    borderTopColor: "transparent",
                  }}
                />
              </div>
            )}

            {/* Controles de navegación */}
            {project.images && project.images.length > 1 && (
              <>
                <button
                  onClick={() => onNavigate("prev", projectIndex)}
                  className={`
                    absolute left-2 top-1/2 -translate-y-1/2 z-10
                    p-2 rounded-full bg-white/90 border border-gray-200
                    shadow-lg backdrop-blur-sm
                    opacity-0 group-hover:opacity-100 transition-all duration-300
                    hover:bg-white hover:scale-110 active:scale-95
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                  `}
                  style={{ focusRingColor: theme.borderColor }}
                  title="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>

                <button
                  onClick={() => onNavigate("next", projectIndex)}
                  className={`
                    absolute right-2 top-1/2 -translate-y-1/2 z-10
                    p-2 rounded-full bg-white/90 border border-gray-200
                    shadow-lg backdrop-blur-sm
                    opacity-0 group-hover:opacity-100 transition-all duration-300
                    hover:bg-white hover:scale-110 active:scale-95
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                  `}
                  style={{ focusRingColor: theme.borderColor }}
                  title="Next image"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
              </>
            )}
          </div>

          {/* Indicadores de puntos */}
          {project.images && project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(index, projectIndex)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    hover:scale-125 focus:outline-none focus:ring-2 focus:ring-offset-2
                    ${
                      index === currentImageIndex
                        ? "shadow-lg scale-125"
                        : "bg-white/60 hover:bg-white/80"
                    }
                  `}
                  style={{
                    backgroundColor:
                      index === currentImageIndex
                        ? theme.borderColor
                        : undefined,
                    focusRingColor: theme.borderColor,
                  }}
                  title={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer con información adicional */}
        <div className="mt-4 px-2">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${theme.accentColor}`} />
              <span>Weather Dashboard Project</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>Live Preview</span>
            </div>
          </div>
        </div>

        {/* Efectos de partículas decorativas */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div
            className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 animate-pulse"
            style={{ backgroundColor: theme.borderColor }}
          />
          <div
            className="absolute bottom-8 left-6 w-12 h-12 rounded-full opacity-5 animate-bounce"
            style={{
              backgroundColor: theme.borderColor,
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
