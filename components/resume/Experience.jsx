import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { TabsContent } from "@/components/ui/tabs";
import { experience } from "@/app/data/resume.data";

const Experience = () => {
  return (
    <TabsContent value="experience" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{experience.title} 💼</h3>
        <p className="text-white/60 mx-auto xl:mx-0 text-justify">
          {experience.description}
        </p>
        <ScrollArea className="h-[600px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {experience.items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                >
                  <span className="text-accent">{item.duration}</span>
                  <h3 className="text-0.5xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                    {item.position}
                  </h3>
                  <div className="flex items-center gap-3">
                    {/* dot */}
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60">{item.company}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </div>
    </TabsContent>
  );
};

export default Experience;
