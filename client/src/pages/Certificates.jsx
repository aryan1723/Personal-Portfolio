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
    image: certJavascript,
    link: 'https://moonshot.scaler.com/s/sl/kdBPE6nhFv'
  },
  {
    id: 2,
    title: 'Google UX Designing',
    issuer: 'Google',
    date: 'AUG 2025',
    description: "Completed Google's Foundations of UX Design, bridging the gap between complex code and user-centric interfaces to ensure technical solutions are intuitive and accessible.",
    image: certUiux,
    link: 'https://www.coursera.org/account/accomplishments/records/DRZJ85HP8Y8Z'
  },
  {
    id: 3,
    title: 'JAVA (BASICS)',
    issuer: 'HACKERRANK',
    date: 'FEB 2026',
    description: 'Mastered foundational Java principles through HackerRank and advanced JavaScript logic via Scaler, establishing a high-performance baseline for both backend and frontend development.',
    image: certJava,
    link: 'https://www.hackerrank.com/certificates/87f3c134a88b'
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
      <div className="flex items-center justify-between w-full mb-6">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-12">
        {certificates.map((cert) => (
          <motion.a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="h-48 overflow-hidden bg-gray-100 relative">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity"
              />
              {/* External link indicator */}
              <div className="absolute top-2 right-2 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3800c2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#3800c2] transition-colors">{cert.title}</h3>
              <p className="text-xs text-gray-500 mb-6 flex-1">{cert.description}</p>
              <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 tracking-wider">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </div>
            {/* Bottom accent */}
            <div className="h-1 w-full bg-gradient-to-r from-[#3800c2] to-[#8c52ff]"></div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
