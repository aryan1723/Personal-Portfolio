import { motion } from 'framer-motion';
import { ExploreButton, LearnMoreButton } from '../components/Buttons';
import heroImage from '../assets/hero.png';
import graddImage from '../assets/grad.png';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col max-w-4xl relative"
    >
      {/* Top right Next Button */}
      <div className="flex justify-end pt-4 pr-4">
        <ExploreButton to="/projects" />
      </div>

      <div className="mt-4 ml-0 md:mt-16 md:ml-12 flex flex-col items-start">
        {/* Image Box matching design */}
        <img src={graddImage} alt="Decoration" className="w-12 h-12 mb-6 object-contain" />

        <img src={heroImage} alt="Hero Greeting Text" className="w-[700px] max-w-full h-auto pointer-events-none mb-6 mt-2 object-contain object-left" />

        <p className="mt-2 text-gray-600 text-4sm max-w-2xl font-light leading-relaxed">
          Crafting high-performance web applications with a specialized focus on backend architecture and data integrity.
        </p>

        <div className="mt-8 md:mt-30 w-full flex justify-center pb-4 md:ml-[-30px]">
          <LearnMoreButton />
        </div>
      </div>
    </motion.div>
  );
};

export default About;