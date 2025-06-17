import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { skills } from "@/app/data/resume.data";
import AnimatedTabContent, { AnimatedItem } from "@/utils/AnimatedTabContent";

const Skills = () => {
  return (
    <AnimatedTabContent value="skills" animationType="fade" staggerDelay={0.15}>
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <AnimatedItem animationType="slideUp">
            <h3 className="text-4xl font-bold">{skills.title}</h3>
          </AnimatedItem>

          <AnimatedItem
            animationType="scale"
            delay={0.2}
            className="text-white/80 text-center xl:text-left leading-relaxed bg-[#232329] p-6 rounded-xl"
          >
            {skills.description}
          </AnimatedItem>
        </div>
        <AnimatedItem delay={0.4}>
          <ScrollArea className="h-[690px]">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {skills.skillList.map((skill, index) => {
                return (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                );
              })}
            </ul>
          </ScrollArea>
        </AnimatedItem>
      </div>
    </AnimatedTabContent>
  );
};

export default Skills;
