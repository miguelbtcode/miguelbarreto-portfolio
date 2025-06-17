"use client";

import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";

const standardEntranceVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const AnimatedTabContent = ({ value, children, className = "w-full" }) => {
  return (
    <TabsContent value={value} className={className}>
      <motion.div
        initial={standardEntranceVariants.initial}
        animate={standardEntranceVariants.animate}
        transition={standardEntranceVariants.transition}
        className="h-full"
      >
        {children}
      </motion.div>
    </TabsContent>
  );
};

export default AnimatedTabContent;
