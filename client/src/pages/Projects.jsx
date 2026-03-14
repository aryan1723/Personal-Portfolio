import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ExploreButton, LoadMoreButton, ShowLessButton } from '../components/Buttons';

import vantaImg from '../assets/Projects/vantablack.png';
import healthImg from '../assets/Projects/healthstat.png';
import fileImg from '../assets/Projects/fileorganizer.png';
import travelImg from '../assets/Projects/travelbuddy.png';
import wordImg from '../assets/Projects/Wordsuggestor.png';
import nomadImg from '../assets/Projects/nomaded.png';

const projectsData = [
  {
    id: 1,
    title: 'VantaBlack',
    category: 'Backend',
    description: 'VantaBlack is an industrial-grade file encryption tool designed for high-privacy data management. It replaces traditional passwords with a Physical Token system.',
    tech: 'Java, SHA-512, AES-256, Java Swing',
    link: 'https://github.com/aryan1723/VantaBlack',
    image: vantaImg
  },
  {
    id: 2,
    title: 'HealthStat',
    category: 'Frontend',
    description: "It's a web app that gives you a personalized breakdown of your health stats everything from your BMI, BMR, body fat %, water intake, to your daily calorie and nutrient needs.",
    tech: 'HTML, CSS, JavaScript, Tailwind CSS, Chart.js, and Gemini API',
    link: 'https://health-stat.onrender.com/',
    image: healthImg
  },
  {
    id: 3,
    title: 'FileOrganizer',
    category: 'Backend',
    description: 'Smart File Organizer using Java that instantly declutters any directory. It doesn\'t just move files; it\'s smart enough to handle duplicates, create categories dynamically, and process thousands of files in seconds',
    tech: 'Java, Java Swing',
    link: 'https://github.com/aryan1723/FIleOrganizer',
    image: fileImg
  },
  {
    id: 4,
    title: 'TravelBuddy',
    category: 'Fullstack',
    description: 'TravelBuddy is a web-based solution designed to dismantle linguistic barriers the platform enables users to translate text from images and speech instantly, ensuring they can navigate foreign environments like menus and street signs with ease.',
    tech: 'HTML, CSS, Google Translate API, PHP, MySQL, RESTful APIs',
    link: 'https://travelbuddyjourneysimplifier.infinityfreeapp.com/',
    image: travelImg
  },
  {
    id: 5,
    title: 'WordSuggestor',
    category: 'Backend',
    description: "An incredibly fast, algorithmically-driven predictive text and autocorrect engine. Implements custom Trie Data Structures to analyze prefixes and suggest highly probable word completions instantly during keystrokes.",
    tech: 'Java, Data Structures, Trie Trees',
    link: 'https://github.com/aryan1723/WordSuggestor',
    image: wordImg
  },
  {
    id: 6,
    title: 'Nomad Academy',
    category: 'Fullstack',
    description: "Nomad Academy is a full-stack educational solution engineered to bridge the digital divide by delivering modern classroom experiences to students in high-altitude or remote regions with intermittent internet access.",
    tech: 'React, Node.js, Express, MongoDB',
    link: 'https://github.com/aryan1723/Nomaded',
    image: nomadImg
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [filterMode, setFilterMode] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX + 20, y: e.clientY - 150 });
  };

  const filteredProjects = projectsData.filter(p => filterMode === 'All' || p.category === filterMode);
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-full flex flex-col relative"
      onMouseMove={handleMouseMove}
    >
      <div className="flex justify-between items-start w-full mb-6 mt-0">
        <h1 className="text-3xl font-medium ">
          Here are some of my <span className="text-[#3800c2] font-semibold">Projects</span>.
        </h1>
        <ExploreButton to="/education" />
      </div>

      <div className="flex flex-col w-full relative">
        <div className="absolute top-[8px] right-0 z-20">
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center text-[11px] font-semibold tracking-wider bg-[#b291d6] text-white px-4 py-1.5 rounded-md shadow-sm hover:bg-[#a27acb] transition-colors"
            >
              {filterMode} <ChevronDown size={14} className="ml-1" />
            </button>
            {isFilterOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-xl border border-gray-100 py-2 min-w-[120px]">
                {categories.map(cat => (
                  <div
                    key={cat}
                    onClick={() => { setFilterMode(cat); setIsFilterOpen(false); setVisibleCount(4); }}
                    className="px-4 py-2 hover:bg-gray-50 text-[11px] cursor-pointer text-gray-700 font-medium"
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {filteredProjects.slice(0, visibleCount).map((project, index) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`py-[20px] group cursor-pointer transition-all duration-300 relative block ${index !== Math.min(filteredProjects.length, visibleCount) - 1 ? 'border-b border-gray-200' : ''}`}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="flex justify-between items-start w-full pr-4 md:pr-[140px]">
              <div className="flex flex-col w-full">
                <h3 className="text-lg font-bold mb-1 text-gray-900 group-hover:text-[#3800c2] transition-colors">{project.title}</h3>
                <p className="text-gray-600 text-[12px] leading-relaxed mb-1.5 opacity-90 group-hover:opacity-100 transition-opacity whitespace-pre-wrap">
                  {project.description}
                </p>
                <p className="text-gray-800 font-medium text-[11px]">Tech Stack: {project.tech}</p>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out flex items-center justify-center">
                <ArrowRight size={24} className="text-[#3800c2]" />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-auto flex justify-center w-full pt-12 pb-8 gap-12 z-30 relative overflow-visible">
        {visibleCount < filteredProjects.length && (
          <LoadMoreButton onClick={() => setVisibleCount(prev => prev + 2)} text="View more" />
        )}
        {visibleCount > 4 && (
          <ShowLessButton onClick={() => setVisibleCount(4)} text="Show less" />
        )}
      </div>

      {/* Floating Image Preview on Hover */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed pointer-events-none z-50 w-72 h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-white"
            style={{
              left: mousePos.x,
              top: mousePos.y,
            }}
          >
            <img
              src={hoveredProject.image}
              alt={hoveredProject.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3800c2]/40 to-transparent"></div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default Projects;
