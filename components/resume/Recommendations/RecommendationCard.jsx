import { useState } from "react";
import {
  Star,
  Quote,
  Linkedin,
  Calendar,
  Tag,
  ChevronDown,
  ChevronUp,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

const RecommendationCard = ({ recommendation, index }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const {
    name,
    position,
    company,
    image,
    text,
    linkedin,
    date,
    rating,
    skills,
  } = recommendation;

  // Crear estrellas basadas en el rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-white/20"
        }`}
      />
    ));
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#232329] rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300">
      {/* Header */}
      <div
        className="p-4 cursor-pointer hover:bg-white/5 transition-colors duration-200"
        onClick={toggleExpanded}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden">
                {image ? (
                  <Image
                    src={image}
                    alt={`${name} - ${position} at ${company}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                ) : null}

                <div
                  className={`w-full h-full rounded-lg bg-white/5 flex items-center justify-center ${
                    image ? "hidden" : "flex"
                  }`}
                  style={{ display: image ? "none" : "flex" }}
                >
                  <span className="text-white font-medium text-sm">
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#232329]"></div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-white text-base truncate">
                  {name}
                </h4>

                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 p-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <Briefcase className="w-4 h-4 flex-shrink-0" />
                  <span className="break-words">
                    {position} en {company}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-white/50">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{date}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-2">
                {renderStars(rating)}
              </div>
            </div>
          </div>

          {/* Button Collapse */}
          <div className="flex-shrink-0 ml-4">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-white/60" />
            ) : (
              <ChevronDown className="w-5 h-5 text-white/60" />
            )}
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 border-t border-white/10">
          <div className="mb-4">
            <div className="relative bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10">
              <Quote className="w-5 h-5 text-white/30 absolute top-2 left-2" />
              <p className="text-white/90 leading-relaxed text-sm pl-6 italic break-words">
                "{text}"
              </p>
            </div>
          </div>

          {skills && skills.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-white/60 flex-shrink-0" />
                <span className="text-white/70 text-sm font-medium">
                  Habilidades destacadas:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white/5 text-white/80 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs border border-white/10 break-words"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="h-px bg-white/10"></div>
    </div>
  );
};

export default RecommendationCard;
