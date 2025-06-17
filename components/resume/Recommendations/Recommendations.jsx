import { recommendations } from "@/app/data/resume.data";
import RecommendationCard from "./RecommendationCard";
import AnimatedTabContent from "@/utils/AnimatedTabContent";

const Recommendations = () => {
  return (
    <AnimatedTabContent value="recommendations">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center xl:text-left">
          <h3 className="text-4xl font-bold">{recommendations.title}</h3>
          <p className="max-w-3xl text-white/60 mx-auto xl:mx-0">
            {recommendations.description}
          </p>
        </div>

        {/* Recommendations */}
        <div className="space-y-2">
          {recommendations.items.map((recommendation, index) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
              index={index}
            />
          ))}
        </div>
      </div>
    </AnimatedTabContent>
  );
};

export default Recommendations;
