import { motion } from 'framer-motion';
import { ExploreButton } from '../components/Buttons';

const achievements = [
  {
    id: 1,
    title: '🏆 Rank #84 — Top 100 in HackerRank Java Leaderboard (LPU)',
    description: 'Achieved Rank 84 in the HackerRank Java leaderboard within Lovely Professional University, placing in the top 100 out of all participants and demonstrating strong command of core Java programming and problem-solving skills.'
  },
  {
    id: 2,
    title: '🥉 3rd Place — Block Bash Hackathon',
    description: 'Led a team and secured 3rd position in the Block Bash Hackathon. Took charge of the full-stack architecture, coordinating across the team to deliver a functional and polished product under competitive time constraints.'
  },
  {
    id: 3,
    title: '🔥 30-Day LeetCode Streak',
    description: 'Maintained a consistent 30-day coding streak on LeetCode, solving problems daily across data structures and algorithms. Improved problem-solving speed and pattern recognition, leveling up from 50 to 30-day challenge completion.'
  }
];

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full max-w-4xl"
    >
      <div className="flex items-center justify-between w-full mb-12">
        <h1 className="text-3xl font-medium">
          My <span className="text-[#3800c2] font-semibold">Achievements.</span>
        </h1>
        <ExploreButton to="/" text="to first page" />
      </div>

      <div className="flex flex-col gap-3 mt-6 w-full pr-12 relative z-10">
        {achievements.map((ach) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: ach.id * 0.12, ease: 'easeOut' }}
            whileHover={{ scale: 1.01, x: 5 }}
            className="w-full bg-[#fcfaff] border border-[#d8b4ff] p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all cursor-pointer group"
          >
            <h3 className="text-[14px] font-bold text-[#3800c2] transition-colors mb-1 tracking-wide">{ach.title}</h3>
            <p className="text-gray-500 text-[11px] leading-relaxed font-light">{ach.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;
