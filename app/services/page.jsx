"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import { Monitor, Server, Settings, Palette, Cloud } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Fullstack Developer",
    description:
      "Desarrollo web end-to-end con .NET Core, React y Angular. Creo soluciones escalables integrando frontend y backend con arquitecturas modernas.",
    href: "/contact?service=fullstack_developer",
    icon: "Monitor",
    techs: [".NET Core", "React", "Angular", "TypeScript"],
    serviceValue: "fullstack_developer",
  },
  {
    num: "02",
    title: "Cloud Solutions Architect",
    description:
      "Diseño arquitecturas cloud escalables con AWS y Azure. Lidero migraciones legacy implementando DDD y microservicios que optimizan rendimiento y reducen costos.",
    href: "/contact?service=cloud_solutions_arquitect",
    icon: "Cloud",
    techs: ["AWS", "Azure", "DDD", "Microservices"],
    serviceValue: "cloud_solutions_arquitect",
  },
  {
    num: "03",
    title: "Backend Developer",
    description:
      "Especialista en .NET Core y C#. Diseño microservicios, implemento APIs REST y optimizo bases de datos SQL Server y PostgreSQL.",
    href: "/contact?service=backend_developer",
    icon: "Server",
    techs: ["C#", "SQL Server", "PostgreSQL", "APIs REST"],
    serviceValue: "backend_developer",
  },
  {
    num: "04",
    title: "Frontend Developer",
    description:
      "Desarrollo interfaces dinámicas con React y Angular. Creo experiencias de usuario intuitivas, optimizando rendimiento de aplicaciones web.",
    href: "/contact?service=frontend_developer",
    icon: "Palette",
    techs: ["React", "Angular", "UX/UI", "Performance"],
    serviceValue: "frontend_developer",
  },
];

const getIcon = (iconName) => {
  const icons = {
    Monitor,
    Server,
    Settings,
    Palette,
    Cloud,
  };
  return icons[iconName];
};

// Componente para el badge de tecnologías
const TechBadge = ({ tech, delay }) => (
  <motion.span
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.3 }}
    className="px-3 py-1 text-xs bg-white/10 rounded-md text-white/80 
               border border-white/20 hover:border-accent/50 hover:bg-accent/10 
               transition-all duration-300"
  >
    {tech}
  </motion.span>
);

const Services = () => {
  const router = useRouter();

  const handleServiceClick = (serviceValue) => {
    router.push(`/contact?service=${serviceValue}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-stretch">
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);

            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 + index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="group relative cursor-pointer"
                onClick={() => handleServiceClick(service.serviceValue)}
              >
                {/* Card principal - consistente con el estilo del currículum */}
                <div
                  className="relative z-10 flex flex-col justify-between group 
                    bg-[#1c1c22] p-8 rounded-2xl border border-white/10 
                    hover:border-accent/50 transition-all duration-500 
                    hover:shadow-xl hover:shadow-accent/10 min-h-[380px]"
                >
                  {/* Header */}
                  <div>
                    <div className="w-full flex justify-between items-center mb-8">
                      <motion.div
                        className="text-6xl font-extrabold text-white/20 
                                   group-hover:text-accent/30 transition-all duration-500"
                      >
                        {service.num}
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => {
                          e.stopPropagation(); // Avoid parent propagation
                          handleServiceClick(service.serviceValue);
                        }}
                      >
                        <Link
                          href={service.href}
                          className="w-14 h-14 rounded-xl 
                                     bg-white/5 group-hover:bg-accent/20 
                                     transition-all duration-500 flex
                                     justify-center items-center 
                                     border border-white/10 group-hover:border-accent/40"
                        >
                          <BsArrowDownRight
                            className="text-white/60 text-xl group-hover:text-accent 
                                                       transition-all duration-300"
                          />
                        </Link>
                      </motion.div>
                    </div>

                    {/* Icon y título */}
                    <div className="mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="p-3 rounded-xl bg-white/5 border border-white/10
                                         group-hover:bg-accent/10 group-hover:border-accent/30
                                         transition-all duration-500"
                        >
                          <IconComponent
                            size={28}
                            className="text-white/80 group-hover:text-accent 
                                                              transition-colors duration-300"
                          />
                        </div>
                        <h2
                          className="text-2xl xl:text-3xl font-bold leading-none text-white
                                       group-hover:text-accent transition-all duration-500 min-h-[5rem] flex items-center"
                        >
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p
                      className="text-white/60 group-hover:text-white/80 transition-all 
                                   duration-500 text-justify leading-relaxed mb-6 text-sm"
                    >
                      {service.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.techs.map((tech, techIndex) => (
                        <TechBadge
                          key={tech}
                          tech={tech}
                          delay={0.3 + index * 0.05 + techIndex * 0.05}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Footer decorativo */}
                  <div className="relative">
                    <div
                      className="border-b border-white/20 w-full group-hover:border-accent/40 
                                     transition-all duration-500"
                    ></div>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-accent w-0 
                                  group-hover:w-full transition-all duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
