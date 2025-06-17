import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  Download,
  ChevronDown,
  Shield,
  Code,
  Cloud,
  Users,
} from "lucide-react";

import { certifications } from "@/app/data/resume.data";
import { TabsContent } from "@/components/ui/tabs";

const Certifications = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      "Cloud Computing": <Cloud className="w-5 h-5" />,
      Development: <Code className="w-5 h-5" />,
      "IT & Infrastructure": <Shield className="w-5 h-5" />,
      "Soft Skills": <Users className="w-5 h-5" />,
    };
    return iconMap[categoryName] || <Award className="w-5 h-5" />;
  };

  const getCategoryColor = (categoryName) => {
    const colorMap = {
      "Cloud Computing": "bg-blue-500/10 border-blue-500/30 text-blue-400",
      Development: "bg-green-500/10 border-green-500/30 text-green-400",
      "IT & Infrastructure":
        "bg-purple-500/10 border-purple-500/30 text-purple-400",
      "Soft Skills": "bg-orange-500/10 border-orange-500/30 text-orange-400",
    };
    return (
      colorMap[categoryName] ||
      "bg-gray-500/10 border-gray-500/30 text-gray-400"
    );
  };

  return (
    <TabsContent value="certifications" className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        className="w-full"
      >
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-bold text-white">
              {certifications.title}
            </h3>
          </div>

          <p className="text-white/70 text-lg leading-relaxed">
            {certifications.description}
          </p>

          {/* Categories */}
          <div className="space-y-6">
            {certifications.categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                className="bg-secondary rounded-xl border border-white/10"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors rounded-t-xl"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${getCategoryColor(
                        category.name
                      )}`}
                    >
                      {getCategoryIcon(category.name)}
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-semibold text-white">
                        {category.name}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {category.items.length} certificación
                        {category.items.length !== 1 ? "es" : ""}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={{
                      rotate: expandedCategories[category.name] ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  </motion.div>
                </button>

                {/* Category Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedCategories[category.name] ? "auto" : 0,
                    opacity: expandedCategories[category.name] ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 space-y-4">
                    {category.items.map((cert, certIndex) => (
                      <motion.div
                        key={certIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: certIndex * 0.1 }}
                        className="bg-primary/50 rounded-lg p-4 border border-white/5 hover:border-accent/30 transition-colors group"
                      >
                        <div className="flex flex-col sm:flex-row gap-4">
                          {/* Badge/Logo */}
                          {cert.badge && (
                            <div className="flex-shrink-0">
                              <img
                                src={cert.badge}
                                alt={`${cert.name} badge`}
                                className="w-16 h-16 object-contain rounded-lg bg-white/5 p-2"
                              />
                            </div>
                          )}

                          {/* Content */}
                          <div className="flex-1 space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                              <h5 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                                {cert.name}
                              </h5>
                              {cert.credentialId && (
                                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                                  ID: {cert.credentialId}
                                </span>
                              )}
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                              <div className="flex items-center gap-1">
                                <Award className="w-4 h-4" />
                                {cert.provider}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {cert.date}
                              </div>
                              {cert.duration && (
                                <div className="text-accent">
                                  {cert.duration}
                                </div>
                              )}
                            </div>

                            {/* Skills */}
                            {cert.skills && (
                              <div className="flex flex-wrap gap-2 mt-3">
                                {cert.skills.map((skill, skillIndex) => (
                                  <span
                                    key={skillIndex}
                                    className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Actions */}
                            <div className="flex gap-2 mt-3">
                              {cert.verificationUrl && (
                                <a
                                  href={cert.verificationUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-sm bg-accent/20 hover:bg-accent/30 text-accent px-3 py-1 rounded-lg transition-colors"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  Verificar
                                </a>
                              )}
                              {cert.certificateFile && (
                                <a
                                  href={cert.certificateFile}
                                  download
                                  className="flex items-center gap-1 text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-lg transition-colors"
                                >
                                  <Download className="w-3 h-3" />
                                  Descargar
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {certifications.categories.map((category) => (
                <div key={category.name} className="text-center">
                  <div className="text-2xl font-bold text-accent">
                    {category.items.length}
                  </div>
                  <div className="text-sm text-white/70">{category.name}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </TabsContent>
  );
};

export default Certifications;
