"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import ProjectInfo from "./ProjectInfo";
import ImageCarousel from "./ImageCarousel";

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

const CAROUSEL_CONFIG = {
  AUTO_ROTATION_INTERVAL: 5000,
  TRANSITION_DELAY: 400,
  TRANSITION_CLEANUP_DELAY: 50,
};

const getSafeImageSrc = (project, imageIndex) => {
  const fallbackImage = "/assets/work/placeholder.png";

  if (!project?.images?.length) return fallbackImage;

  const targetImage = project.images[imageIndex];
  if (!targetImage?.trim()) return fallbackImage;

  return targetImage;
};

const initializeImageIndices = (projects) => {
  return projects.reduce((indices, _, index) => {
    indices[index] = 0;
    return indices;
  }, {});
};

const useImageCarousel = (projects) => {
  const [imageIndices, setImageIndices] = useState(() =>
    initializeImageIndices(projects)
  );
  const [isTransitioning, setIsTransitioning] = useState({});
  const [nextImageIndices, setNextImageIndices] = useState({});
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const changeImageWithFade = useCallback((projectIndex, newImageIndex) => {
    setNextImageIndices((prev) => ({
      ...prev,
      [projectIndex]: newImageIndex,
    }));

    setIsTransitioning((prev) => ({
      ...prev,
      [projectIndex]: true,
    }));

    setTimeout(() => {
      setImageIndices((prev) => ({
        ...prev,
        [projectIndex]: newImageIndex,
      }));

      setTimeout(() => {
        setIsTransitioning((prev) => ({
          ...prev,
          [projectIndex]: false,
        }));
      }, CAROUSEL_CONFIG.TRANSITION_CLEANUP_DELAY);
    }, CAROUSEL_CONFIG.TRANSITION_DELAY);
  }, []);

  const navigateImage = useCallback(
    (projectIndex, direction) => {
      const project = projects[projectIndex];
      if (!project?.images?.length || project.images.length <= 1) return;

      const currentIndex = imageIndices[projectIndex] || 0;
      const maxIndex = project.images.length - 1;

      let newIndex;
      switch (direction) {
        case "next":
          newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
          break;
        case "prev":
          newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
          break;
        default:
          newIndex = typeof direction === "number" ? direction : currentIndex;
      }

      changeImageWithFade(projectIndex, newIndex);
    },
    [projects, imageIndices, changeImageWithFade]
  );

  const pauseAutoRotation = useCallback(() => {
    setIsAutoRotating(false);
    setTimeout(
      () => setIsAutoRotating(true),
      CAROUSEL_CONFIG.AUTO_ROTATION_INTERVAL
    );
  }, []);

  const toggleAutoRotation = useCallback(() => {
    setIsAutoRotating((prev) => !prev);
  }, []);

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

const useAutoRotation = (
  isAutoRotating,
  currentProjectIndex,
  projects,
  navigateImage
) => {
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      const currentProject = projects[currentProjectIndex];
      if (currentProject?.images?.length > 1) {
        navigateImage(currentProjectIndex, "next");
      }
    }, CAROUSEL_CONFIG.AUTO_ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoRotating, currentProjectIndex, projects, navigateImage]);
};

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  const carouselState = useImageCarousel(projects);
  const {
    imageIndices,
    isTransitioning,
    nextImageIndices,
    isAutoRotating,
    navigateImage,
    pauseAutoRotation,
    toggleAutoRotation,
  } = carouselState;

  // Auto-rotación
  useAutoRotation(isAutoRotating, currentProjectIndex, projects, navigateImage);

  // Handlers
  const handleSlideChange = useCallback((swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
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
          {/* Información del Proyecto */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <ProjectInfo project={project} />
          </div>

          {/* Carrusel de Imágenes */}
          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-8"
              onSlideChange={handleSlideChange}
              onSwiper={setSwiperRef}
              modules={[Navigation]}
              navigation={false}
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
            </Swiper>

            {/* Controles de Navegación */}
            <WorkSliderBtns
              containerStyles="flex gap-2 justify-center xl:justify-end z-20"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[18px] w-[40px] h-[40px] flex justify-center items-center transition-all rounded-md shadow-lg"
              iconsStyles=""
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
