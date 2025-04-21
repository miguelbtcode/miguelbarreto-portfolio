import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import {
  UserIcon,
  MapPinIcon,
  BriefcaseIcon,
  MailIcon,
  PhoneIcon,
  GlobeIcon,
  LinkedinIcon,
} from "lucide-react";

import { about } from "@/app/data/resume.data";

const About = () => {
  const linkedinProfile =
    "https://www.linkedin.com/in/miguel-barreto-torres-2b6b8a1b6/";

  return (
    <TabsContent value="about" className="w-full text-center xl:text-left">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Description Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 justify-center xl:justify-start">
              <h3 className="text-4xl font-bold">{about.title}</h3>
            </div>

            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white/80 text-center xl:text-left leading-relaxed bg-[#232329] p-6 rounded-xl"
            >
              {about.description}
            </motion.p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {about.info.map((item, index) => {
                // Special handling for LinkedIn
                if (item.fieldName === "LinkedIn") {
                  return (
                    <a
                      key={index}
                      href={linkedinProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-4 bg-[#232329] p-4 rounded-lg hover:bg-[#2f2f38] transition-all group"
                    >
                      <LinkedinIcon
                        className="text-green-500 group-hover:text-green-400 transition-colors hidden md:block"
                        size={32}
                      />
                      <div>
                        <p className="text-white/60 text-sm">LinkedIn</p>
                        <p className="font-semibold text-white group-hover:text-green-400 transition-colors">
                          Perfil Profesional
                        </p>
                      </div>
                    </a>
                  );
                }

                // Special handling for Email to improve responsiveness
                if (item.fieldName === "Correo") {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-4 bg-[#232329] p-4 rounded-lg"
                    >
                      <MailIcon
                        className="text-green-500 flex-shrink-0 hidden md:block"
                        size={32}
                      />
                      <div className="min-w-0">
                        <p className="text-white/60 text-sm text-center">
                          Correo
                        </p>
                        <p className="font-semibold text-white break-words">
                          {item.fieldValue}
                        </p>
                      </div>
                    </div>
                  );
                }

                // Default rendering for other items
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-4 bg-[#232329] p-4 rounded-lg"
                  >
                    {/* Dynamic Icons */}
                    {item.fieldName === "Nombre" && (
                      <UserIcon
                        className="text-green-500 hidden md:block"
                        size={32}
                      />
                    )}
                    {item.fieldName === "Teléfono" && (
                      <PhoneIcon
                        className="text-green-500 hidden md:block"
                        size={32}
                      />
                    )}
                    {item.fieldName === "Experiencia" && (
                      <BriefcaseIcon
                        className="text-green-500 hidden md:block"
                        size={32}
                      />
                    )}
                    {item.fieldName === "Nacionalidad" && (
                      <MapPinIcon
                        className="text-green-500 hidden md:block"
                        size={32}
                      />
                    )}
                    {item.fieldName === "Idiomas" && (
                      <GlobeIcon
                        className="text-green-500 hidden md:block"
                        size={32}
                      />
                    )}

                    <div>
                      <p className="text-white/60 text-sm">{item.fieldName}</p>
                      <p className="font-semibold text-white">
                        {item.fieldValue}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </TabsContent>
  );
};

export default About;
