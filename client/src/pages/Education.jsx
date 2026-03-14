import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ExploreButton } from '../components/Buttons';
import { useState } from 'react';

const educationData = [
  {
    year: '2023 - 2027',
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    score: 'CGPA: 7.81',
    location: '(Phagwara,Punjab)'
  },
  {
    year: '2020 - 2022',
    institution: 'B.P.S Public School',
    degree: 'Intermediate',
    score: 'Percentage: 85.75%',
    location: '(Etah,Uttarpradesh)'
  },
  {
    year: '2019 - 2020',
    institution: 'B.P.S Public School',
    degree: 'Matriculation',
    score: 'Percentage: 87.4%',
    location: '(Etah,Uttarpradesh)'
  }
];

const skills = [
  { name: 'JAVA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', percentage: 90, category: 'Core Languages' },
  { name: 'JAVASCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', percentage: 85, category: 'Frontend' },
  { name: 'PYTHON', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', percentage: 80, category: 'Core Languages' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', percentage: 75, category: 'Core Languages' },
  { name: 'REACT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', percentage: 85, category: 'Frontend' },
  { name: 'SPRING BOOT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', percentage: 70, category: 'Backend' },
  { name: 'POSTGRESQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', percentage: 75, category: 'Database' },
  { name: 'MYSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', percentage: 85, category: 'Database' },
  { name: 'TAILWIND CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', percentage: 90, category: 'Frontend' },
  { name: 'GIT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', percentage: 85, category: 'Tools' },
  { name: 'GITHUB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', percentage: 90, category: 'Tools' },
  { name: 'VERCEL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', percentage: 80, category: 'Tools' },
  { name: 'VITE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', percentage: 85, category: 'Tools' },
  { name: 'DOCKER', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', percentage: 65, category: 'Tools' }
];

const Education = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Core Languages', 'Frontend', 'Backend', 'Database', 'Tools'];
  const filteredSkills = skills.filter(skill => activeTab === 'All' || skill.category === activeTab);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full pb-20"
    >
      <div className="flex items-center justify-between w-full mb-6">
        <h1 className="text-3xl font-medium">
          My Education & <span className="text-[#3800c2] font-semibold">Expertise.</span>
        </h1>
        <ExploreButton to="/certificates" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-8">

        {/* Left Col: Education Timeline */}
        <div className="relative border-l-[2px] border-[#e5d5ff] ml-[80px] md:ml-[56px] pl-[10px] mt-4 space-y-8 w-full pr-4 md:pr-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-4 md:pl-6"
            >
              <div className="absolute -left-[17px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-[3px] border-[#3800c2]"></div>
              <div className="absolute -left-[80px] top-[4px] w-max whitespace-nowrap text-right text-[10px] sm:text-[11px] font-bold text-[#3800c2] tracking-tighter">
                {edu.year}
              </div>

              <div className="bg-[#fcfaff] p-3.5 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e5d5ff] hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 text-[13px] md:text-[14px] leading-tight mb-1">{edu.institution}</h3>
                <p className="text-[11px] md:text-[12px] text-gray-700 font-medium leading-tight">{edu.degree}: <span className="font-bold">{edu.score}</span></p>
                <p className="text-[9px] md:text-[10px] text-gray-500 mt-1 uppercase tracking-wider">{edu.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Col: About Text & Images */}
        <div className="hidden lg:flex flex-col ml-0 md:ml-6">
          <h3 className="text-xl font-bold mb-1 tracking-wider">ABOUT ME</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 font-light">
            Hi, I'm Aryan. I'm a Computer Science student and Full Stack Web Developer. I enjoy building practical, secure, and user-centric applications from the ground up. Whether I'm working with React and Node.js or developing backend systems with Java and Django, I love tackling complex problems and bringing ideas to life through code.
          </p>

          <div className="hidden md:grid grid-cols-2 gap-4 mt-auto h-[13.5rem]">
            <div className="flex flex-col gap-4 h-full">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300" alt="Code" className="w-full h-[calc(50%-0.5rem)] object-cover rounded-lg shadow-md hover:scale-105 transition-transform" />
              <img src="https://inferne.com/images/web-app/web-app2.png" alt="Campus" className="w-full h-[calc(50%-0.5rem)] object-cover rounded-lg shadow-md hover:scale-105 transition-transform" />
            </div>
            <div className="h-full">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400" alt="Desk" className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>

      </div>

      {/* Skills Section */}
      <div className="mt-6 md:mt-16 w-full flex justify-center items-center flex-col mb-16 relative z-10">
        <h2 className="text-2xl font-bold mb-2">My Skill Sets</h2>
        <p className="text-gray-500 text-sm mb-6 text-center px-4">A showcase of technologies I've mastered on my journey as a developer.</p>

        <div className="w-full max-w-xl pb-2 mb-6 md:mb-8">
          <div className="flex flex-wrap justify-center items-center gap-2 px-2">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-4 py-1.5 text-[11px] md:text-xs rounded-md transition-colors whitespace-nowrap ${activeTab === tab ? 'bg-[#3800c2] text-white shadow-sm' : 'bg-[#4B5563] text-white hover:bg-gray-800'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-[260px] sm:w-[350px] md:w-full max-w-2xl mx-auto mb-[80px]">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="w-[76px] h-[76px] bg-white border border-gray-100 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group"
            >
              <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain mb-1.5 transition-all duration-300 group-hover:opacity-10" />
              <div className="text-[7.5px] font-semibold text-gray-500 tracking-wider transition-all duration-300 group-hover:opacity-10">{skill.name}</div>

              {/* Progress Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/40 backdrop-blur-[2px]">
                <span className="text-[#3800c2] font-black text-lg shadow-sm leading-none">{skill.percentage}%</span>
                <span className="text-[6px] text-[#3800c2] font-semibold uppercase tracking-widest mt-1">Learned</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default Education;
