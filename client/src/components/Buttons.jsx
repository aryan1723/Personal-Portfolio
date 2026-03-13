import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExploreButton = ({ to, text = "to next page" }) => (
  <Link to={to} className="group flex flex-col justify-center bg-[#3800c2] text-white py-2.5 rounded-lg hover:bg-[#2c0099] transition-all w-[140px] shadow-[0_4px_14px_0_rgba(56,0,194,0.39)] overflow-hidden">
    <span className="font-semibold text-[14px] mb-1 leading-none text-left pl-4 w-full">Explore</span>
    <div className="flex items-center w-[80%] group-hover:w-[95%] transition-all duration-300 relative mt-1 mb-1">
      {/* Line starting from absolute left border connected to border */}
      <div className="h-[2px] bg-white flex-1 rounded-r-lg w-full"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 border-t-[2.5px] border-r-[2.5px] border-white rotate-45 transform origin-center"></div>
    </div>
    <span className="font-semibold text-[10px] mt-1 leading-none text-left pl-4 w-full text-white uppercase tracking-wider">{text}</span>
  </Link>
);

export const LearnMoreButton = ({ to = "/education", text = "Learn more" }) => (
  <Link to={to} className="flex items-center text-gray-700 cursor-pointer group">
    <span className="mr-3 font-semibold text-[13px] text-gray-600 transition-colors group-hover:text-[#3800c2]">{text}</span>
    <div className="w-5 h-[26px] bg-[#3800c2] rounded flex flex-col items-center justify-start shadow-[0_3px_10px_0_rgba(56,0,194,0.3)] transition-transform group-hover:translate-y-1 relative overflow-hidden">
      <div className="flex flex-col items-center h-[70%] group-hover:h-[85%] w-full transition-all duration-300 absolute top-0 mt-0">
        <div className="w-[1.5px] bg-white absolute top-0 bottom-[3px]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[6px] h-[6px] border-b-[1.5px] border-r-[1.5px] border-white rotate-45 transform origin-center"></div>
      </div>
    </div>
  </Link>
);

export const LoadMoreButton = ({ onClick, text = "Load more" }) => (
  <button onClick={onClick} className="flex items-center text-gray-700 cursor-pointer group">
    <span className="mr-3 font-semibold text-[13px] text-gray-600 transition-colors group-hover:text-[#3800c2]">{text}</span>
    <div className="w-5 h-[26px] bg-[#3800c2] rounded flex flex-col items-center justify-start shadow-[0_3px_10px_0_rgba(56,0,194,0.3)] transition-transform group-hover:translate-y-1 relative overflow-hidden">
      <div className="flex flex-col items-center h-[70%] group-hover:h-[85%] w-full transition-all duration-300 absolute top-0 mt-0">
        <div className="w-[1.5px] bg-white absolute top-0 bottom-[3px]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[6px] h-[6px] border-b-[1.5px] border-r-[1.5px] border-white rotate-45 transform origin-center"></div>
      </div>
    </div>
  </button>
);

export const ShowLessButton = ({ onClick, text = "Show less" }) => (
  <button onClick={onClick} className="flex items-center text-gray-700 cursor-pointer group">
    <span className="mr-3 font-semibold text-[13px] text-gray-600 transition-colors group-hover:text-[#3800c2]">{text}</span>
    <div className="w-5 h-[26px] bg-[#3800c2] rounded flex flex-col items-center justify-end shadow-[0_3px_10px_0_rgba(56,0,194,0.3)] transition-transform group-hover:-translate-y-1 relative overflow-hidden">
      <div className="flex flex-col items-center h-[70%] group-hover:h-[85%] w-full transition-all duration-300 absolute bottom-0 mb-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[6px] h-[6px] border-t-[1.5px] border-l-[1.5px] border-white rotate-45 transform origin-center"></div>
        <div className="w-[1.5px] bg-white absolute bottom-0 top-[3px]"></div>
      </div>
    </div>
  </button>
);
