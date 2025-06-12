"use client";

import { delay, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="w-[350px] h-[350px] ml-5 mt-2 md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[490px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/hero/photo-portfolio.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          ></Image>
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[380px] h-[380px] md:w-[430px] md:h-[430px] xl:w-[530px] xl:h-[520px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="263"
            cy="263"
            r="260"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
