"use client";

import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";

// Variantes de animación reutilizables
const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const AnimatedTabContent = ({
  value,
  children,
  className = "w-full",
  animationType = "default",
  staggerDelay = 0.1,
}) => {
  // Diferentes tipos de animación según el contenido
  const getAnimationVariants = () => {
    switch (animationType) {
      case "slide":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
              staggerChildren: staggerDelay,
            },
          },
        };
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.4,
              ease: "easeOut",
              staggerChildren: staggerDelay,
            },
          },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              ease: "easeOut",
              staggerChildren: staggerDelay,
            },
          },
        };
      default:
        return containerVariants;
    }
  };

  return (
    <TabsContent value={value} className={className}>
      <motion.div
        variants={getAnimationVariants()}
        initial="hidden"
        animate="visible"
        className="h-full"
      >
        {children}
      </motion.div>
    </TabsContent>
  );
};

// Componente para elementos individuales dentro del contenido
export const AnimatedItem = ({
  children,
  className = "",
  delay = 0,
  animationType = "default",
}) => {
  const getItemVariants = () => {
    switch (animationType) {
      case "slideUp":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut", delay },
          },
        };
      case "slideLeft":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: "easeOut", delay },
          },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut", delay },
          },
        };
      default:
        return itemVariants;
    }
  };

  return (
    <motion.div variants={getItemVariants()} className={className}>
      {children}
    </motion.div>
  );
};

export default AnimatedTabContent;
