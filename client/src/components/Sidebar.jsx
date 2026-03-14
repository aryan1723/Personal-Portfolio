import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Github, Smile, Binoculars, GraduationCap, Award, Trophy, X, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import pfp from '../assets/pfp.png';

const RATE_LIMIT_MS = 60 * 60 * 1000;

// Shared social links toolbox block
const Toolbox = () => (
  <div className="flex flex-col items-center">
    <div className="grid grid-cols-2 gap-[8px] p-2 relative">
      <div className="absolute inset-2 bg-[#caabff] blur-[25px] opacity-70 rounded-full z-0 pointer-events-none"></div>
      <a href="https://www.linkedin.com/in/aryan-solanki1723/" target="_blank" rel="noopener noreferrer" className="w-[60px] h-[52px] flex items-center justify-center bg-[#caabff] text-white rounded-tl-[16px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[3px] hover:bg-[#b078fa] transition-colors duration-300 z-10 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
      <a href="https://github.com/aryan1723" target="_blank" rel="noopener noreferrer" className="w-[60px] h-[52px] flex items-center justify-center bg-[#caabff] text-white rounded-tr-[16px] rounded-tl-[3px] rounded-bl-[3px] rounded-br-[3px] hover:bg-[#b078fa] transition-colors duration-300 z-10 shadow-sm">
        <Github size={24} fill="currentColor" strokeWidth={0} />
      </a>
      <a href="tel:+917017580748" className="w-[60px] h-[52px] flex items-center justify-center bg-[#caabff] text-white rounded-bl-[16px] rounded-tl-[3px] rounded-tr-[3px] rounded-br-[3px] hover:bg-[#b078fa] transition-colors duration-300 z-10 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.58a1 1 0 01-.21 1.11l-2.36 2.1z" /></svg>
      </a>
      <a href="mailto:aryansolanki1723@gmail.com" className="w-[60px] h-[52px] flex items-center justify-center bg-[#caabff] text-white rounded-br-[16px] rounded-tl-[3px] rounded-tr-[3px] rounded-bl-[3px] hover:bg-[#b078fa] transition-colors duration-300 z-10 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </a>
    </div>
  </div>
);

const navItems = [
  { path: '/', label: 'ABOUT ME', icon: Smile },
  { path: '/projects', label: 'PROJECTS', icon: Binoculars },
  { path: '/education', label: 'EDUCATION', icon: GraduationCap },
  { path: '/certificates', label: 'CERTIFICATES', icon: Award },
  { path: '/achievements', label: 'ACHIEVEMENTS', icon: Trophy }
];

// ── Mobile Hamburger Drawer ──────────────────────────────
const MobileMenu = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-white flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img src={pfp} alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-[#c8a2fc]" />
          <span className="font-bold text-[#3800c2] tracking-wider text-sm">ARYAN SOLANKI</span>
        </div>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <X size={22} strokeWidth={2.5} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-6 pt-6 flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl text-[14px] font-bold tracking-widest transition-colors ${isActive ? 'bg-[#f0e8ff] text-[#3800c2]' : 'text-gray-700 hover:bg-gray-50'}`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon size={20} strokeWidth={isActive ? 3 : 2} />
                {item.label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Toolbox */}
      <div className="px-6 pb-4 flex justify-center">
        <Toolbox />
      </div>
    </motion.div>
  );
};

// ── Desktop Sidebar ──────────────────────────────────────
const Sidebar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [rateLimited, setRateLimited] = useState(() => {
    const last = localStorage.getItem('contact_last_sent');
    return last && Date.now() - Number(last) < RATE_LIMIT_MS;
  });
  const [cooldownLeft, setCooldownLeft] = useState(() => {
    const last = localStorage.getItem('contact_last_sent');
    if (!last) return 0;
    const remaining = RATE_LIMIT_MS - (Date.now() - Number(last));
    return remaining > 0 ? Math.ceil(remaining / 60000) : 0;
  });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;
    const last = localStorage.getItem('contact_last_sent');
    if (last && Date.now() - Number(last) < RATE_LIMIT_MS) {
      const mins = Math.ceil((RATE_LIMIT_MS - (Date.now() - Number(last))) / 60000);
      setCooldownLeft(mins);
      setRateLimited(true);
      return;
    }
    setSending(true); setSent(false); setSendError(false);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, subject: formData.subject, message: formData.message, to_email: 'aryansolanki1723@gmail.com' },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      localStorage.setItem('contact_last_sent', String(Date.now()));
      setSent(true); setRateLimited(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setSendError(true);
      setTimeout(() => setSendError(false), 4000);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ── Desktop Sidebar (hidden on mobile) ── */}
      <aside className="hidden md:flex w-80 h-full border-r border-gray-200 flex-col justify-between shrink-0 bg-white z-20 overflow-hidden relative">
        <div className="flex-1 w-full flex flex-col items-center justify-evenly py-6">
          {/* Profile Section — with Resume Download on hover */}
          <div className="flex flex-col items-center">
            <a
              href="https://drive.google.com/file/d/1jL5dLWJ_SPBfMSaZVfKvZ6s9lk6K8oe1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-38 h-38 rounded-full overflow-hidden border-4 border-[#F3F4F6] shadow-[0_0_30px_rgba(140,82,255,0.4)] relative group transition-shadow duration-500 block cursor-pointer"
              title="Download Resume"
            >
              <img src={pfp} alt="Profile" className="w-full h-full object-cover transition-all duration-400 group-hover:scale-105 group-hover:blur-[3px] group-hover:brightness-75 relative z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-full bg-[#3800c2]/30 backdrop-blur-[1px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                <span className="text-white text-[9px] font-bold tracking-wider uppercase text-center leading-tight px-1">Download<br/>Resume</span>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="w-full flex justify-center">
            <div className="flex flex-col gap-1 items-start w-[160px]">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center text-[14px] font-inter font-semibold tracking-widest transition-colors duration-300 relative group h-8 ${isActive ? 'text-[#3800c2]' : 'text-gray-900 hover:text-[#3800c2]'}`
                  }
                >
                  {({ isActive }) => (
                    <div className="flex flex-row items-center w-full relative">
                      <item.icon size={21} strokeWidth={isActive ? 3 : 2.5} className="z-10 transition-colors duration-300" />
                      <div className={`absolute left-[40px] w-[2.5px] h-[22px] rounded-full bg-[#3800c2] transition-all duration-300 ease-out origin-center ${isActive ? 'opacity-50 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
                      <span className={`ml-6 transition-transform duration-300 font-bold ease-in-out ${isActive ? 'translate-x-3 text-[16px]' : 'translate-x-0 text-[15px]'}`}>{item.label}</span>
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Toolbox */}
          <Toolbox />
        </div>

        {/* Contact Form / Button */}
        <AnimatePresence>
          {isContactOpen ? (
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-x-0 bottom-0 z-30 bg-white rounded-t-[30px] border border-gray-300 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col pt-0 pb-6 px-0 overflow-hidden"
              style={{ height: '520px' }}
            >
              <div className="absolute -top-[500px] left-0 right-0 h-[500px] bg-white/40 backdrop-blur-md z-[-1] pointer-events-none" />
              <div className="w-full bg-[#c8a2fc] py-3 flex items-center justify-between px-6 mb-4">
                <span className="text-white font-semibold text-xs tracking-widest text-center w-full">CONTACT</span>
                <button onClick={() => setIsContactOpen(false)} className="absolute right-4 text-white hover:text-gray-200">
                  <X size={16} strokeWidth={3} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="px-6 space-y-3 flex-1 overflow-y-auto">
                <div><label className="block text-[11px] font-bold text-gray-800 mb-1">Name</label><input name="name" value={formData.name} onChange={handleChange} required type="text" className="w-full px-3 py-2 bg-[#f0f0f0] border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#c8a2fc] transition-colors" /></div>
                <div><label className="block text-[11px] font-bold text-gray-800 mb-1">Email</label><input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full px-3 py-2 bg-[#f0f0f0] border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#c8a2fc] transition-colors" /></div>
                <div><label className="block text-[11px] font-bold text-gray-800 mb-1">Subject</label><input name="subject" value={formData.subject} onChange={handleChange} required type="text" className="w-full px-3 py-2 bg-[#f0f0f0] border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#c8a2fc] transition-colors" /></div>
                <div><label className="block text-[11px] font-bold text-gray-800 mb-1">Message</label><textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full px-3 py-2 bg-[#f0f0f0] border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#c8a2fc] transition-colors resize-none"></textarea></div>
                <div className="pt-2 pb-2">
                  <input type="text" name="_hp_field" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  {sent && <div className="flex items-center gap-2 text-green-600 text-xs font-semibold mb-2"><CheckCircle size={14} /> Message sent successfully!</div>}
                  {sendError && <div className="flex items-center gap-2 text-red-500 text-xs font-semibold mb-2"><AlertCircle size={14} /> Failed to send. Please try again.</div>}
                  {rateLimited && <div className="flex items-center gap-2 text-amber-600 text-xs font-semibold mb-2"><AlertCircle size={14} /> Please wait {cooldownLeft}m before sending again.</div>}
                  <button type="submit" disabled={sending || rateLimited} className="w-full py-2.5 bg-[#c8a2fc] hover:bg-[#b078fa] disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-md font-semibold text-xs tracking-widest transition-colors shadow-sm flex items-center justify-center gap-2">
                    {sending ? <><Loader size={14} className="animate-spin" /> SENDING...</> : 'SEND'}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <div className="w-full mt-auto sticky bottom-0 z-10 bg-white">
              <button
                onClick={() => setIsContactOpen(true)}
                className="w-full py-2 bg-[#c8a2fc] hover:bg-[#b078fa] border-t border-l border-r border-black text-white font-semibold tracking-widest text-[13px] transition-all duration-300 rounded-t-[30px] rounded-b-none border-b-0 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]"
              >
                CONTACT
              </button>
            </div>
          )}
        </AnimatePresence>

        {/* Full-sidebar blur overlay when contact is open */}
        <AnimatePresence>
          {isContactOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/50 backdrop-blur-[8px] z-20 pointer-events-none"
            />
          )}
        </AnimatePresence>
      </aside>
    </>
  );
};

export default Sidebar;
