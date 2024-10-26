import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from 'react-parallax-tilt';

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className="shrink-0"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const NameCard = ({ name }) => (
  <motion.div
    variants={fadeIn("right", "spring", 0.2, 0.75)}
    className="w-[250px] mb-4"
  >
    <div className="bg-tertiary rounded-lg p-2 text-center shadow-md">
      <h3 className="text-white text-lg font-bold">{name}</h3>
    </div>
  </motion.div>
);

const ServiceCard = ({ index, title, icon, personImage, name, linkedIn, description }) => (
  <div className="flex flex-col items-center">
    <NameCard name={name} />
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[380px] flex justify-evenly items-center flex-col"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white/20">
            <img
              src={personImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-white text-[20px] font-bold text-center mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-secondary text-center text-sm mb-4">
              {description}
            </p>
          )}
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors bg-tertiary/50 px-4 py-2 rounded-lg"
          >
            <LinkedInIcon />
            <span className="text-sm">Connect</span>
          </a>
        </div>
      </motion.div>
    </Tilt>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum 
        aliquam asperiores itaque explicabo minima ex numquam laboriosam modi at 
        eius nesciunt fuga accusamus earum deserunt sed blanditiis, dolorum commodi!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");