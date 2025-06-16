"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRight, BsEye, BsCode } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProjectCard = ({
  project,
  index = 0,
  onViewDetails,
  className = "",
  variant = "default", // default, compact, featured
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const cardVariants = {
    default: "h-[400px]",
    compact: "h-[300px]",
    featured: "h-[500px]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`group relative bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden ${cardVariants[variant]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {!imageError && project.mainImage ? (
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-accent/20 via-accent/10 to-transparent flex items-center justify-center">
            <BsCode className="text-6xl text-accent/30" />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-500" />
      </div>

      {/* Project Number Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="w-12 h-12 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center">
          <span className="text-primary font-bold text-lg">{project.num}</span>
        </div>
      </div>

      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge
          variant={project.status === "Completado" ? "default" : "secondary"}
          className="backdrop-blur-sm bg-black/50"
        >
          {project.status}
        </Badge>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        {/* Category */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          className="mb-2"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            {project.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -5 : 0 }}
          className="text-white text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300"
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{
            height: variant === "compact" ? "40px" : "60px",
            opacity: 0.8,
          }}
          animate={{
            height: isHovered
              ? "auto"
              : variant === "compact"
              ? "40px"
              : "60px",
            opacity: isHovered ? 1 : 0.8,
          }}
          className="text-white/70 text-sm leading-relaxed mb-4 overflow-hidden"
        >
          {project.description}
        </motion.p>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {project.stack.slice(0, 4).map((tech, idx) => (
            <TooltipProvider key={idx}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-accent text-sm">{tech.icon}</span>
                    <span className="text-white/90 text-xs">{tech.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
          {project.stack.length > 4 && (
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
              <span className="text-white/70 text-xs">
                +{project.stack.length - 4}
              </span>
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          className="flex gap-3"
        >
          {/* View Details Button */}
          {onViewDetails && (
            <button
              onClick={() => onViewDetails(project)}
              className="flex items-center gap-2 bg-accent hover:bg-accent/80 text-primary px-4 py-2 rounded-lg transition-all font-medium text-sm"
            >
              <BsEye />
              Ver Detalles
            </button>
          )}

          {/* GitHub Button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all backdrop-blur-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <BsGithub className="text-lg" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Ver código en GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Live Demo Button */}
          {project.live && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all backdrop-blur-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <BsArrowUpRight className="text-lg" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ver demo en vivo</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </motion.div>

        {/* Quick Stats (for featured variant) */}
        {variant === "featured" && project.highlights && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="mt-4 grid grid-cols-2 gap-2"
          >
            {project.highlights.slice(0, 2).map((highlight, idx) => (
              <div
                key={idx}
                className="bg-accent/10 border border-accent/20 rounded-lg p-2"
              >
                <p className="text-white/80 text-xs">{highlight}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-xl transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
