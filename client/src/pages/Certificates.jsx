import { motion } from 'framer-motion';
import { ExploreButton } from '../components/Buttons';
import certJavascript from '../assets/Certificates/javascript.png';
import certJava from '../assets/Certificates/java.png';
import certUiux from '../assets/Certificates/uiux.png';

const certificates = [
  {
    id: 1,
    title: 'Javascript',
    issuer: 'SCALER',
    date: 'AUG 2025',
    description: 'Deep-dived into the JavaScript ecosystem to unlock the power of dynamic web experiences, pairing high-level logic with efficient problem-solving across 9 specialized modules.',
    image: certJavascript
  },
  {
    id: 2,
    title: 'Google UX Designing',
    issuer: 'Google',
    date: 'AUG 2025',
    description: "Completed Google's Foundations of UX Design, bridging the gap between complex code and user-centric interfaces to ensure technical solutions are intuitive and accessible.",
    image: certUiux
  },
  {
    id: 3,
    title: 'JAVA (BASICS)',
    issuer: 'HACKERRANK',
    date: 'FEB 2026',
    description: 'Mastered foundational Java principles through HackerRank and advanced JavaScript logic via Scaler, establishing a high-performance baseline for both backend and frontend development.',
    image: certJava
  }
];

const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <div className="flex items-center justify-between w-full mb-12">
        <div>
          <h1 className="text-3xl font-medium">
            My <span className="text-[#3800c2] font-semibold">Certificates.</span>
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Professional credentials that validate my technical expertise and continuous learning journey.
          </p>
        </div>
        <ExploreButton to="/achievements" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300"
          >
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-xs text-gray-500 mb-6 flex-1">{cert.description}</p>

              <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 tracking-wider">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </div>
            {/* Adding subtle bottom accent */}
            <div className="h-1 w-full bg-gradient-to-r from-[#3800c2] to-[#8c52ff]"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
