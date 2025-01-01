import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Lenient Tree
          </h1>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="absolute bottom-10 w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-20 text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-3"
        >
          <span className="text-2xl sm:text-3xl font-bold">75+</span>
          <span className="text-[#4BFFA5] text-xs sm:text-sm text-center sm:text-left">ACTIVE<br className="sm:hidden" /> MEMBERS</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-3"
        >
          <span className="text-2xl sm:text-3xl font-bold">7+</span>
          <span className="text-[#4BFFA5] text-xs sm:text-sm text-center sm:text-left">PROJECTS<br className="sm:hidden" /> COMPLETED</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-3"
        >
          <span className="text-2xl sm:text-3xl font-bold">10+</span>
          <span className="text-[#4BFFA5] text-xs sm:text-sm text-center sm:text-left">INVESTORS</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;