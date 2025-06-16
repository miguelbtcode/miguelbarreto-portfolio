import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Cloud, Eye, Monitor, Activity, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const ResponsiveImage = ({
  src,
  alt,
  className,
  priority = false,
  quality = 90,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setImageError(false);
    setImageLoaded(false);
    setKey((prev) => prev + 1);
  }, [src]);

  const handleError = () => {
    setImageError(true);
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    return (
      <div className="w-full h-full bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-400 p-4">
          <div className="text-2xl mb-2">🖼️</div>
          <p className="text-xs">Imagen no disponible</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Placeholder mientras carga */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
          <div className="text-gray-600 text-center">
            <div className="w-8 h-8 border-2 border-gray-600 border-t-accent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-xs">Cargando...</p>
          </div>
        </div>
      )}

      {/* Imagen principal */}
      <Image
        key={key}
        src={src}
        alt={alt}
        fill
        className={`${className} ${
          !imageLoaded ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 40vw"
        priority={priority}
        quality={quality}
        onLoad={handleLoad}
        onError={handleError}
        unoptimized={false}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
};

const NavigationControls = ({
  onPrev,
  onNext,
  disabled,
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
                 border border-accent/30 hover:border-accent/50`}
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
                 border border-accent/30 hover:border-accent/50`}
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

const ImageIndicators = ({
  images,
  currentIndex,
  onGoToImage,
  disabled,
  className = "opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300",
}) => (
  <div
    className={`absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20
                  flex gap-1.5 md:gap-2 ${className}`}
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
        className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 disabled:opacity-50 ${
          imgIndex === currentIndex ? "scale-125" : "hover:scale-110"
        } ${imgIndex === currentIndex ? "bg-accent" : "bg-accent/40"}`}
        type="button"
        aria-label={`Ir a imagen ${imgIndex + 1}`}
      />
    ))}
  </div>
);

const AutoRotationControl = ({
  isAutoRotating,
  onToggle,
  className = "opacity-60 md:opacity-70 md:hover:opacity-100 transition-opacity",
}) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onToggle();
    }}
    className={`w-6 h-6 md:w-8 md:h-8 rounded-full backdrop-blur-sm
               flex items-center justify-center text-white
               hover:scale-110 ${className}
               border border-accent/30 hover:border-accent/50`}
    style={{
      background: `linear-gradient(135deg, #1c1c22e6, #1c1c22aa)`,
    }}
    title={isAutoRotating ? "Pausar auto-rotación" : "Activar auto-rotación"}
    type="button"
  >
    {isAutoRotating ? (
      <Pause className="w-3 h-3 md:w-4 md:h-4" />
    ) : (
      <Play className="w-3 h-3 md:w-4 md:h-4" />
    )}
  </button>
);

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
  isTransitioning,
  isAutoRotating,
  onNavigate,
  onToggleAutoRotation,
  getSafeImageSrc,
}) => {
  const currentImage = getSafeImageSrc(project, currentImageIndex);
  const imageType = getImageType(currentImage);

  const imageThemes = {
    dashboard: {
      icon: Monitor,
      borderColor: "border-accent",
      shadowColor: "shadow-accent/20",
      accentColor: "bg-accent",
      bgPattern: "bg-gradient-to-br from-accent/5 to-accent/10",
    },
    api: {
      icon: Activity,
      borderColor: "border-accent",
      shadowColor: "shadow-accent/20",
      accentColor: "bg-accent",
      bgPattern: "bg-gradient-to-br from-accent/5 to-accent/10",
    },
    monitoring: {
      icon: Zap,
      borderColor: "border-accent",
      shadowColor: "shadow-accent/20",
      accentColor: "bg-accent",
      bgPattern: "bg-gradient-to-br from-accent/5 to-accent/10",
    },
    feature: {
      icon: Cloud,
      borderColor: "border-accent",
      shadowColor: "shadow-accent/20",
      accentColor: "bg-accent",
      bgPattern: "bg-gradient-to-br from-accent/5 to-accent/10",
    },
  };

  const theme = imageThemes[imageType];
  const IconComponent = theme.icon;

  return (
    <div className="relative h-full group z-10">
      <div
        className={`
          relative p-2 md:p-4 rounded-lg md:rounded-2xl bg-gradient-to-br from-[#1c1c22] to-[#1c1c22]/90
          border-2 border-accent/20 hover:border-accent/40 transition-all duration-700 ease-out
          shadow-xl hover:shadow-accent/10 hover:shadow-2xl
          backdrop-blur-sm
          h-full flex flex-col
          min-h-[250px] md:min-h-[400px]
        `}
      >
        <div className="flex items-center justify-between mb-2 md:mb-4 px-2 md:px-4 relative z-20">
          <div className="flex items-center gap-2 md:gap-3">
            <div
              className={`p-1.5 md:p-2 rounded-md md:rounded-lg ${theme.accentColor} shadow-lg`}
            >
              <IconComponent className="w-3 h-3 md:w-4 md:h-4 text-[#1c1c22]" />
            </div>
            <div>
              <h4 className="text-xs md:text-sm font-semibold text-white capitalize">
                {imageType === "dashboard"
                  ? "Dashboard"
                  : imageType === "api"
                  ? "API Docs"
                  : imageType === "monitoring"
                  ? "Monitoring"
                  : "Feature"}
              </h4>
              <p className="text-xs text-gray-300">
                {currentImageIndex + 1} of {project.images?.length || 0}
              </p>
            </div>
          </div>

          <AutoRotationControl
            isAutoRotating={isAutoRotating}
            onToggle={onToggleAutoRotation}
          />
        </div>

        <div
          className="relative flex-1 rounded-lg md:rounded-xl overflow-hidden shadow-inner border border-accent/10"
          style={{
            background: `linear-gradient(135deg, #1c1c22, #1c1c2290)`,
            minHeight: "200px",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentImageIndex}-${currentImage}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <ResponsiveImage
                src={currentImage}
                alt={`${project.title} - Vista ${currentImageIndex + 1}`}
                className="rounded-md md:rounded-lg"
                priority={currentImageIndex === 0}
                quality={90}
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay */}
          {isTransitioning && (
            <div
              className="absolute inset-0 flex items-center justify-center backdrop-blur-sm z-15"
              style={{
                background: `#1c1c22aa`,
              }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
            </div>
          )}

          {project.images && project.images.length > 1 && (
            <div className="hidden md:block">
              <NavigationControls
                onPrev={() => onNavigate("prev", projectIndex)}
                onNext={() => onNavigate("next", projectIndex)}
                disabled={isTransitioning}
              />
            </div>
          )}

          {/* Indicadores de puntos */}
          {project.images && project.images.length > 1 && (
            <ImageIndicators
              images={project.images}
              currentIndex={currentImageIndex}
              onGoToImage={(index) => onNavigate(index, projectIndex)}
              disabled={isTransitioning}
            />
          )}
        </div>

        {/* Footer con información adicional */}
        <div className="mt-2 md:mt-4 px-1 md:px-2 relative z-20">
          <div className="flex items-center justify-between text-xs text-gray-300">
            <div className="flex items-center gap-1 md:gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent" />
              <span className="text-xs hidden sm:block">
                Weather Dashboard Project
              </span>
              <span className="text-xs sm:hidden">Project</span>
            </div>

            <div className="flex items-center gap-1">
              <Eye className="w-2.5 h-2.5 md:w-3 md:h-3" />
              <span className="text-xs">Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Resplandor exterior en hover con color accent */}
      <div
        className="absolute inset-0 rounded-lg md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 255, 153, 0.1), transparent 40%)`,
          filter: "blur(20px)",
        }}
      />
    </div>
  );
};

export default ImageCarousel;
