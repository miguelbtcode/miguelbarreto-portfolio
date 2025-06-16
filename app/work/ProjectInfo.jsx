import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Componente para badges de tecnologías
const TechBadge = ({ tech, index }) => (
  <motion.li
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      delay: 0.3 + index * 0.1,
      duration: 0.3,
      type: "spring",
      stiffness: 200,
    }}
    className="group"
  >
    <span
      className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium
                   bg-white/10 text-white/90 border border-white/20 
                   hover:bg-accent/20 hover:border-accent/50 hover:text-accent
                   transition-all duration-300 cursor-default
                   shadow-sm hover:shadow-accent/20"
    >
      {tech.name}
    </span>
  </motion.li>
);

// Componente para botones de acción
const ActionButton = ({ href, icon: Icon, tooltip, disabled = false }) => {
  const buttonContent = (
    <div
      className={`w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center 
                    ${
                      disabled
                        ? "border border-white/10 opacity-50 cursor-not-allowed"
                        : "group border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                    }`}
    >
      <Icon
        className={`text-3xl transition-all ${
          disabled ? "text-white/40" : "text-white group-hover:text-accent"
        }`}
      />
    </div>
  );

  if (disabled || !href || href.trim() === "") {
    return buttonContent;
  }

  return (
    <Link href={href} target="_blank">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

const ProjectInfo = ({ project }) => {
  return (
    <div className="flex flex-col gap-[30px] h-[50%]">
      {/* Project Number */}
      <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
        {project.num}
      </div>

      {/* Project Category */}
      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
        {project.category} project
      </h2>

      {/* Project Title */}
      <motion.h3
        key={project.title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-2xl font-semibold text-accent -mt-4"
      >
        {project.title}
      </motion.h3>

      {/* Project Description */}
      <motion.p
        key={project.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-white/60 leading-relaxed text-base"
      >
        {project.description}
      </motion.p>

      {/* Technology Stack */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="space-y-3"
      >
        <h4 className="text-white font-medium text-lg">Tecnologías:</h4>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((item, index) => (
            <TechBadge key={index} tech={item} index={index} />
          ))}
        </ul>
      </motion.div>

      {/* Divider */}
      <div className="border border-white/20"></div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <ActionButton
          href={project.live}
          icon={BsArrowUpRight}
          tooltip="Ver proyecto en vivo"
          disabled={!project.live || project.live.trim() === ""}
        />

        <ActionButton
          href={project.github}
          icon={BsGithub}
          tooltip="Ver repositorio en GitHub"
          disabled={!project.github || project.github.trim() === ""}
        />
      </div>
    </div>
  );
};

export default ProjectInfo;
