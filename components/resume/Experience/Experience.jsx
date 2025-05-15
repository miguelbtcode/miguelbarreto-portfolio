import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { experience } from "@/app/data/resume.data";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceItem from "./ExperienceItem";
import CertificateModal from "./CertificateModal";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const openCertificateModal = (item) => {
    if (item.certificate) {
      setSelectedExperience(item);
    }
  };

  const closeCertificateModal = () => {
    setSelectedExperience(null);
  };

  return (
    <TabsContent value="experience" className="w-full">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <ExperienceHeader />

          <div className="relative pt-4 ml-2">
            <div className="absolute left-2 top-8 bottom-0 w-0.5 z-0 timeline-line">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full rounded-full"
                style={{
                  boxShadow: "0 0 8px rgba(16, 185, 129, 0.3)",
                  background:
                    "linear-gradient(to bottom, #10b981, rgba(16, 185, 129, 0.7), rgba(16, 185, 129, 0.2))",
                }}
              />
            </div>

            {experience.items.map((item, index) => (
              <ExperienceItem
                key={index}
                item={item}
                index={index}
                totalItems={experience.items.length}
                openCertificateModal={openCertificateModal}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedExperience && (
            <CertificateModal
              item={selectedExperience}
              onClose={closeCertificateModal}
            />
          )}
        </AnimatePresence>
      </div>
    </TabsContent>
  );
};

export default Experience;
