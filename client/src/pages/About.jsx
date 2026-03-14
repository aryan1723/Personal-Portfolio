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

      <div className="mt-16 ml-4 md:ml-12 flex flex-col items-start ">
        {/* Image Box matching design */}
        <img src={graddImage} alt="Decoration" className="w-12 h-12 mb-6 object-contain" />

        <img src={heroImage} alt="Hero Greeting Text" className="w-[700px] max-w-full h-auto pointer-events-none mb-6 mt-2 object-contain object-left" />

        <p className="mt-2 text-gray-600 text-sm md:text-4sm max-w-2xl font-light leading-relaxed">
          Crafting high-performance web applications with a specialized focus on backend architecture and data integrity.
        </p>

        <div className="mt-30 w-full flex justify-center pb-4 ml-[-30px] ">
          <LearnMoreButton />
        </div>
      </div>

      {/* ── Mobile-only: animated scrolling tech strip ── */}
      <div className="md:hidden mt-auto overflow-hidden w-full pt-4 pb-6 select-none">
        <p className="text-[9px] text-gray-300 uppercase tracking-[0.25em] font-semibold text-center mb-3">Tech Stack</p>
        {/* Duplicate items for seamless infinite loop */}
        <div className="flex gap-2 marquee-track w-max">
          {['Java', 'React', 'Python', 'Node.js', 'PostgreSQL', 'Spring Boot', 'JavaScript', 'MySQL', 'Git', 'Docker', 'Tailwind', 'Vite', 'C++', 'MongoDB',
            'Java', 'React', 'Python', 'Node.js', 'PostgreSQL', 'Spring Boot', 'JavaScript', 'MySQL', 'Git', 'Docker', 'Tailwind', 'Vite', 'C++', 'MongoDB'
          ].map((skill, i) => (
            <span key={i} className="px-3 py-1.5 bg-[#f5f0ff] text-[#8c52ff] rounded-full text-[11px] font-semibold border border-[#e5d5ff] shrink-0 whitespace-nowrap">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;