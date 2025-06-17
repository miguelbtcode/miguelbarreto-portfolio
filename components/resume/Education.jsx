import { ScrollArea } from "@/components/ui/scroll-area";
import { education } from "@/app/data/resume.data";
import AnimatedTabContent, { AnimatedItem } from "@/utils/AnimatedTabContent";

const Education = () => {
  return (
    <AnimatedTabContent
      value="education"
      animationType="slide"
      staggerDelay={0.1}
    >
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <AnimatedItem animationType="slideUp">
          <h3 className="text-4xl font-bold">{education.title}</h3>
        </AnimatedItem>
        <AnimatedItem
          animationType="scale"
          delay={0.2}
          className="text-white/80 text-center xl:text-justify leading-relaxed bg-[#232329] p-6 rounded-xl"
        >
          {education.description}
        </AnimatedItem>
        <AnimatedItem delay={0.4}>
          <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {education.items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                  >
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-0.25xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.institution}</p>
                    </div>
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

export default Education;
