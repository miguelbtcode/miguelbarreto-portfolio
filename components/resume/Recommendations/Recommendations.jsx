import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { recommendations } from "@/app/data/resume.data";
import RecommendationCard from "./RecommendationCard";

const Recommendations = () => {
  return (
    <TabsContent value="recommendations" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <div className="flex flex-col gap-[30px]">
          <h3 className="text-4xl font-bold">{recommendations.title}</h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white/80 text-center xl:text-left leading-relaxed bg-[#232329] p-6 rounded-xl"
          >
            {recommendations.description}
          </motion.p>
        </div>

        <ScrollArea className="h-[600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recommendations.items.map((recommendation, index) => (
              <motion.div
                key={recommendation.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <RecommendationCard
                  recommendation={recommendation}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </TabsContent>
  );
};

export default Recommendations;
