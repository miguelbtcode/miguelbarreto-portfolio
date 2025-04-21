// 5. ExperienceHeader.jsx
import React from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon } from "lucide-react";

const ExperienceHeader = () => {
  return (
    <>
      <div className="flex items-center gap-4 justify-center xl:justify-start">
        <h3 className="text-4xl font-bold">Mi Experiencia</h3>
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <BriefcaseIcon className="w-10 h-10 text-green-500" />
        </motion.div>
      </div>
      <p className="text-white/80 text-center xl:text-left bg-[#232329] p-6 rounded-xl">
        Fullstack developer con más de 4 años de experiencia en el desarrollo
        backend y frontend, especializado en la creación de aplicaciones web
        robustas y escalables.
      </p>
    </>
  );
};

export default ExperienceHeader;
