"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsX,
  BsGithub,
  BsArrowUpRight,
  BsLightbulb,
  BsTrophy,
  BsCode,
  BsBarChart,
  BsTools,
  BsCheckCircle,
} from "react-icons/bs";
import { FiTarget, FiZap } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  const tabs = [
    { id: "overview", label: "Resumen", icon: <BsLightbulb /> },
    { id: "tech", label: "Tecnologías", icon: <BsCode /> },
    { id: "challenges", label: "Desafíos", icon: <BsTools /> },
    { id: "results", label: "Resultados", icon: <BsBarChart /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute inset-4 md:inset-8 bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#111] border-b border-white/10 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-accent">
                  {project.num}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-3 mt-1">
                    <Badge variant="default">{project.category}</Badge>
                    <Badge
                      variant={
                        project.status === "Completado"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <BsX className="text-2xl text-white" />
              </button>
            </div>

            <div className="flex h-[calc(100%-80px)]">
              {/* Image Gallery */}
              <div className="w-1/2 bg-[#0a0a0a] p-6">
                <div className="h-full flex flex-col">
                  {/* Main Image */}
                  <div className="flex-1 relative rounded-xl overflow-hidden mb-4">
                    {project.images && project.images.length > 0 ? (
                      <Image
                        src={project.images[activeImageIndex]}
                        alt={`${project.title} - Vista ${activeImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <BsCode className="text-6xl text-accent/50" />
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {project.images && project.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {project.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                            index === activeImageIndex
                              ? "border-accent"
                              : "border-white/20 hover:border-white/40"
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg transition-all"
                    >
                      <BsGithub />
                      Ver Código
                    </Link>
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-primary py-3 rounded-lg transition-all"
                      >
                        <BsArrowUpRight />
                        Ver Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-1/2 flex flex-col">
                {/* Tabs */}
                <div className="border-b border-white/10 px-6">
                  <div className="flex gap-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all ${
                          activeTab === tab.id
                            ? "border-accent text-accent"
                            : "border-transparent text-white/70 hover:text-white"
                        }`}
                      >
                        {tab.icon}
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {activeTab === "overview" && (
                        <>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-3">
                              Descripción
                            </h3>
                            <p className="text-white/70 leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          {project.features && (
                            <div>
                              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FiTarget className="text-accent" />
                                Características Principales
                              </h3>
                              <div className="grid gap-3">
                                {project.features.map((feature, index) => (
                                  <div
                                    key={index}
                                    className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                                  >
                                    <BsCheckCircle className="text-accent mt-1 flex-shrink-0" />
                                    <span className="text-white/80">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {project.highlights && (
                            <div>
                              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FiZap className="text-accent" />
                                Aspectos Destacados
                              </h3>
                              <div className="grid gap-3">
                                {project.highlights.map((highlight, index) => (
                                  <div
                                    key={index}
                                    className="p-4 bg-accent/10 border border-accent/20 rounded-lg"
                                  >
                                    <p className="text-white/90">{highlight}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {activeTab === "tech" && project.technologies && (
                        <>
                          {Object.entries(project.technologies).map(
                            ([category, techs]) => (
                              <div key={category}>
                                <h3 className="text-lg font-semibold text-white mb-3 capitalize">
                                  {category === "frontend"
                                    ? "Frontend"
                                    : category === "backend"
                                    ? "Backend"
                                    : category === "database"
                                    ? "Base de Datos"
                                    : category === "tools"
                                    ? "Herramientas"
                                    : category}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {techs.map((tech, index) => (
                                    <span
                                      key={index}
                                      className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white/80 text-sm"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )
                          )}

                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              Stack Principal
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                              {project.stack.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-3 p-3 bg-[#232329] border border-white/10 rounded-lg"
                                >
                                  <span className="text-accent text-xl">
                                    {item.icon}
                                  </span>
                                  <span className="text-white font-medium">
                                    {item.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      {activeTab === "challenges" && project.challenges && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-white mb-4">
                            Desafíos Técnicos
                          </h3>
                          {project.challenges.map((challenge, index) => (
                            <div
                              key={index}
                              className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg"
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                  <span className="text-orange-400 text-sm font-bold">
                                    {index + 1}
                                  </span>
                                </div>
                                <p className="text-white/90">{challenge}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {activeTab === "results" && project.results && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-white mb-4">
                            Resultados Obtenidos
                          </h3>
                          {project.results.map((result, index) => (
                            <div
                              key={index}
                              className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                            >
                              <div className="flex items-start gap-3">
                                <BsTrophy className="text-green-400 mt-1 flex-shrink-0" />
                                <p className="text-white/90">{result}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
