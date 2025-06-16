"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import ProjectInfo from "./ProjectInfo";
import ImageCarousel from "./ImageCarousel";

// Datos de proyectos
const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Weather Dashboard",
    description:
      "Aplicación de clima en tiempo real con pronósticos de 7 días, alertas meteorológicas inteligentes y geolocalización automática. Construcción serverless con Azure Functions, caché Redis para rendimiento óptimo, y interfaz moderna con temas adaptativos al clima.",
    stack: [
      { name: ".NET 8" },
      { name: "Azure Functions" },
      { name: "Redis Cache" },
      { name: "OpenWeatherMap API" },
      { name: "React 18" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Docker" },
    ],
    images: [
      "/assets/work/weather-dashboard/main.png",
      "/assets/work/weather-dashboard/second.png",
      "/assets/work/weather-dashboard/third.png",
      "/assets/work/weather-dashboard/swagger-health.png",
      "/assets/work/weather-dashboard/swagger-weather-city.png",
    ],
    live: "",
    github: "https://github.com/miguelbtcode/weather-dashboard",
  },
];

// Hook personalizado para manejar el estado del carrusel
const useImageCarousel = (projects) => {
  const [imageIndices, setImageIndices] = useState(() => {
    const indices = {};
    projects.forEach((_, index) => {
      indices[index] = 0;
    });
    return indices;
  });

  const [isTransitioning, setIsTransitioning] = useState({});
  const [nextImageIndices, setNextImageIndices] = useState({});
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const changeImageWithFade = useCallback((projectIndex, newImageIndex) => {
    setNextImageIndices((prev) => ({
      ...prev,
      [projectIndex]: newImageIndex,
    }));

    setIsTransitioning((prev) => ({ ...prev, [projectIndex]: true }));

    setTimeout(() => {
      setImageIndices((prev) => ({
        ...prev,
        [projectIndex]: newImageIndex,
      }));

      setTimeout(() => {
        setIsTransitioning((prev) => ({ ...prev, [projectIndex]: false }));
      }, 50);
    }, 400);
  }, []);

  const navigateImage = useCallback(
    (projectIndex, direction) => {
      const proj = projects[projectIndex];
      if (!proj?.images || proj.images.length <= 1) return;

      const currentIndex = imageIndices[projectIndex] || 0;
      let newIndex;

      switch (direction) {
        case "next":
          newIndex =
            currentIndex === proj.images.length - 1 ? 0 : currentIndex + 1;
          break;
        case "prev":
          newIndex =
            currentIndex === 0 ? proj.images.length - 1 : currentIndex - 1;
          break;
        default:
          newIndex = direction;
      }

      changeImageWithFade(projectIndex, newIndex);
    },
    [projects, imageIndices, changeImageWithFade]
  );

  const pauseAutoRotation = useCallback(() => {
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 5000);
  }, []);

  const toggleAutoRotation = useCallback(() => {
    setIsAutoRotating(!isAutoRotating);
  }, [isAutoRotating]);

  return {
    imageIndices,
    isTransitioning,
    nextImageIndices,
    isAutoRotating,
    navigateImage,
    pauseAutoRotation,
    toggleAutoRotation,
  };
};

// Hook para auto-rotación
const useAutoRotation = (
  isAutoRotating,
  currentProjectIndex,
  projects,
  navigateImage
) => {
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      const currentProj = projects[currentProjectIndex];
      if (currentProj?.images && currentProj.images.length > 1) {
        navigateImage(currentProjectIndex, "next");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoRotating, currentProjectIndex, projects, navigateImage]);
};

// Utilidad para obtener imagen de forma segura
const getSafeImageSrc = (proj, imageIndex) => {
  if (!proj.images || proj.images.length === 0) {
    return "/assets/work/placeholder.png";
  }

  if (imageIndex >= 0 && imageIndex < proj.images.length) {
    const imageSrc = proj.images[imageIndex];
    return imageSrc && imageSrc.trim() !== ""
      ? imageSrc
      : "/assets/work/placeholder.png";
  }

  const firstImage = proj.images[0];
  return firstImage && firstImage.trim() !== ""
    ? firstImage
    : "/assets/work/placeholder.png";
};

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const {
    imageIndices,
    isTransitioning,
    nextImageIndices,
    isAutoRotating,
    navigateImage,
    pauseAutoRotation,
    toggleAutoRotation,
  } = useImageCarousel(projects);

  // Hook de auto-rotación
  useAutoRotation(isAutoRotating, currentProjectIndex, projects, navigateImage);

  const handleSlideChange = useCallback((swiper) => {
    const currentIndex = swiper.activeIndex;
    const newProject = projects[currentIndex];
    setProject(newProject);
    setCurrentProjectIndex(currentIndex);
  }, []);

  const handleImageNavigation = useCallback(
    (direction, projectIndex) => {
      navigateImage(projectIndex, direction);
      pauseAutoRotation();
    },
    [navigateImage, pauseAutoRotation]
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project Information */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <ProjectInfo project={project} />
          </div>

          {/* Image Carousel */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, projectIndex) => {
                const currentImageIndex = imageIndices[projectIndex] || 0;
                const isProjectTransitioning =
                  isTransitioning[projectIndex] || false;

                return (
                  <SwiperSlide key={projectIndex} className="w-full">
                    <ImageCarousel
                      project={proj}
                      projectIndex={projectIndex}
                      currentImageIndex={currentImageIndex}
                      nextImageIndex={nextImageIndices[projectIndex]}
                      isTransitioning={isProjectTransitioning}
                      isAutoRotating={isAutoRotating}
                      onNavigate={handleImageNavigation}
                      onToggleAutoRotation={toggleAutoRotation}
                      getSafeImageSrc={getSafeImageSrc}
                    />
                  </SwiperSlide>
                );
              })}

              {/* Slider Navigation */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-lg"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
