// Experience.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { experience } from "@/app/data/resume.data";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceItem from "./ExperienceItem";
import CertificateModal from "./CertificateModal";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

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
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <ExperienceHeader />
          
          <div className="space-y-6">
            {experience.items.map((item, index) => (
              <ExperienceItem 
                key={index}
                item={item}
                index={index}
                totalItems={experience.items.length}
                openCertificateModal={openCertificateModal}
              />
            ))}
          </div>
        </motion.div>

        {/* Certificate Modal with Framer Motion AnimatePresence */}
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