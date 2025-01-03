import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div
          className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B-Tech in Computer Science"
            subTitle="United College of Engineering & Research (2021 - 2025)"
            result="7.9/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />

          <ResumeCard
            title="Secondary School Education"
            subTitle="Bishop Johnson School & College (2020 - 2021)"
            result="7.4/10"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>

      <div></div>
    </motion.div>
  );
};

export default Education;
