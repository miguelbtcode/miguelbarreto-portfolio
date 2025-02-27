import { TabsContent } from "@/components/ui/tabs";

import { about } from "@/app/data/resume.data";

const About = () => {
  return (
    <TabsContent value="about" className="w-full text-center xl:text-left">
      <div className="flex flex-col gap-[30px]">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="text-white/60 mx-auto xl:mx-0 text-center xl:text-justify">
          {about.description}
        </p>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
          {about.info.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-center justify-center xl:justify-start gap-4"
              >
                <span className="text-white/60">{item.fieldName}:</span>
                <span className="text-0.5xl">{item.fieldValue}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </TabsContent>
  );
};

export default About;
