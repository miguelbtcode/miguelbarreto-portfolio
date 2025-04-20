"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Fullstack Development",
    description:
      "Desarrollo integral de aplicaciones web utilizando tecnologías .NET Core, React y Angular. Creo soluciones escalables y eficientes, integrando frontend y backend con arquitecturas modernas y patrones de diseño SOLID.",
    href: "",
    icon: "💻",
  },
  {
    num: "02",
    title: "Backend Developer",
    description:
      "Especialista en desarrollo backend con .NET Core y C#, optimizando rendimiento y escalabilidad. Experto en diseño de microservicios, implementación de APIs REST y optimización de consultas en SQL Server y PostgreSQL.",
    href: "",
    icon: "🔧",
  },
  {
    num: "03",
    title: "DevOps Engineer",
    description:
      "Implemento estrategias de integración continua y despliegue automatizado utilizando Azure DevOps, Docker y Google Cloud. Reduzco tiempos de entrega, mejoro la eficiencia operativa y garantizo la calidad del software.",
    href: "",
    icon: "🚀",
  },
  {
    num: "04",
    title: "Frontend Developer",
    description:
      "Desarrollo interfaces de usuario dinámicas y responsivas con React y Angular. Enfocado en crear experiencias de usuario intuitivas, optimizando el rendimiento y la accesibilidad de aplicaciones web modernas.",
    href: "",
    icon: "🎨",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              staggerChildren: 0.2,
            },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] relative"
        >
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="relative z-10 flex flex-col justify-between group 
                bg-[#1E1E1E] p-8 rounded-2xl border border-white/10 
                hover:border-accent/30 transition-all duration-500 
                hover:shadow-2xl hover:shadow-accent/20 min-h-[400px]"
              >
                {/* top */}
                <div>
                  <div className="w-full flex justify-between items-center mb-6">
                    <div
                      className="text-6xl font-extrabold text-transparent 
                    bg-clip-text bg-gradient-to-r from-white/30 to-white/70 
                    group-hover:from-accent/50 group-hover:to-accent/80 
                    transition-all duration-500"
                    >
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full 
                    bg-white/10 group-hover:bg-accent/20 
                    transition-all duration-500 flex
                    justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-white/70 text-3xl group-hover:text-accent" />
                    </Link>
                  </div>
                  {/* Service title with icon */}
                  <div className="h-[110px] flex flex-col justify-center">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{service.icon}</span>
                      <h2
                        className="text-[42px] font-bold leading-none text-white
                      group-hover:text-accent transition-all duration-500 
                      break-words"
                      >
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-white/60 group-hover:text-white/80 transition-all duration-500 text-justify mt-6">
                    {service.description}
                  </p>
                </div>
                {/* Decorative border */}
                <div className="border-b border-white/20 w-full mt-6"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;