import { motion } from "framer-motion";
import { Star, Quote, Linkedin, Calendar, Tag } from "lucide-react";
import Image from "next/image";

const RecommendationCard = ({ recommendation, index }) => {
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
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-[#232329] rounded-xl p-6 h-full flex flex-col border border-white/10 hover:border-accent/30 relative overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
        initial={false}
      />

      <div className="flex items-start gap-4 mb-4 relative z-10">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/20 overflow-hidden">
            {image ? (
              <Image
                src={image}
                alt={`${name} - ${position} at ${company}`}
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}

            <div
              className={`w-full h-full rounded-full bg-accent/10 flex items-center justify-center ${
                image ? "hidden" : "flex"
              }`}
              style={{ display: image ? "none" : "flex" }}
            >
              <span className="text-accent font-bold text-lg">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>

          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#232329]"></div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold text-white text-lg">{name}</h4>
              <p className="text-accent text-sm font-medium">{position}</p>
              <p className="text-white/60 text-sm">{company}</p>
            </div>

            {/* LinkedIn link */}
            {linkedin && (
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            )}
          </div>

          {/* Rating stars */}
          <div className="flex items-center gap-1 mt-2">
            {renderStars(rating)}
          </div>
        </div>
      </div>

      {/* Texto de recomendación */}
      <div className="flex-1 mb-4 relative z-10">
        <div className="relative">
          <Quote className="w-6 h-6 text-accent/40 absolute -top-2 -left-1" />
          <p className="text-white/80 leading-relaxed text-sm pl-6 italic">
            "{text}"
          </p>
        </div>
      </div>

      {/* Skills tags */}
      {skills && skills.length > 0 && (
        <div className="mb-4 relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="w-4 h-4 text-accent" />
            <span className="text-accent text-xs font-medium">
              Habilidades destacadas:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <motion.span
                key={skillIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: skillIndex * 0.1 }}
                className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs border border-accent/20 hover:bg-accent/20 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      {/* Footer con fecha */}
      <div className="flex items-center gap-2 text-white/50 text-xs relative z-10">
        <Calendar className="w-4 h-4" />
        <span>{date}</span>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0"></div>
    </motion.div>
  );
};

export default RecommendationCard;
