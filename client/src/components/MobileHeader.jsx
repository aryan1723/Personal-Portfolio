import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Smile, Binoculars, GraduationCap, Award, Trophy, Github, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import pfp from '../assets/pfp.png';

const RATE_LIMIT_MS = 60 * 60 * 1000;

const NEXT_PAGE = {
  '/': '/projects',
  '/projects': '/education',
  '/education': '/certificates',
  '/certificates': '/achievements',
  '/achievements': '/',
};

const navItems = [
  { path: '/', label: 'ABOUT ME', icon: Smile },
  { path: '/projects', label: 'PROJECTS', icon: Binoculars },
  { path: '/education', label: 'EDUCATION', icon: GraduationCap },
  { path: '/certificates', label: 'CERTIFICATES', icon: Award },
  { path: '/achievements', label: 'ACHIEVEMENTS', icon: Trophy },
];

const MobileHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [rateLimited, setRateLimited] = useState(() => {
    const last = localStorage.getItem('contact_last_sent');
    return last && Date.now() - Number(last) < RATE_LIMIT_MS;
  });
  const [cooldownLeft, setCooldownLeft] = useState(0);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleContactOpen = () => { setIsMenuOpen(false); setIsContactOpen(true); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;
    const last = localStorage.getItem('contact_last_sent');
    if (last && Date.now() - Number(last) < RATE_LIMIT_MS) {
      setCooldownLeft(Math.ceil((RATE_LIMIT_MS - (Date.now() - Number(last))) / 60000));
      setRateLimited(true); return;
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
      setSendError(true); setTimeout(() => setSendError(false), 4000);
    } finally { setSending(false); }
  };

  const nextPath = NEXT_PAGE[location.pathname] ?? '/';

  return (
    <>
      {/* ── Fixed Mobile Header Bar ── */}
      <header className="fixed top-0 left-0 right-0 z-40 md:hidden flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <button onClick={() => setIsMenuOpen(true)} className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors" aria-label="Open menu">
          <Menu size={20} strokeWidth={2.5} className="text-[#3800c2]" />
        </button>
        <span className="font-bold text-[14px] tracking-widest text-gray-900">ARYAN SOLANKI</span>
        <button onClick={() => navigate(nextPath)} className="w-9 h-9 flex items-center justify-center rounded-xl border border-[#d8b4ff] hover:bg-[#f0e8ff] hover:border-[#3800c2] transition-all text-[#3800c2]" aria-label="Next page">
          <ChevronRight size={18} strokeWidth={2} />
        </button>
      </header>

      {/* ── Mobile Nav Drawer ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 bg-white flex flex-col md:hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img src={pfp} alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-[#c8a2fc]" />
                <span className="font-bold text-[#3800c2] tracking-wider text-sm">ARYAN SOLANKI</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100"><X size={22} strokeWidth={2.5} /></button>
            </div>
            <nav className="flex-1 px-6 pt-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `flex items-center gap-4 px-4 py-3 rounded-xl text-[14px] font-bold tracking-widest transition-colors ${isActive ? 'bg-[#f0e8ff] text-[#3800c2]' : 'text-gray-700 hover:bg-gray-50'}`}>
                  {({ isActive }) => (<><item.icon size={20} strokeWidth={isActive ? 3 : 2} />{item.label}</>)}
                </NavLink>
              ))}
            {/* Resume external link in nav */}
            <a href="https://drive.google.com/file/d/1jL5dLWJ_SPBfMSaZVfKvZ6s9lk6K8oe1/view?usp=sharing"
               target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}
               className="flex items-center gap-4 px-4 py-3 rounded-xl text-[14px] font-bold tracking-widest text-gray-700 hover:bg-[#f0e8ff] hover:text-[#3800c2] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
              RESUME
            </a>
            </nav>
            <div className="px-6 pb-8 flex flex-col gap-3">
              <div className="grid grid-cols-4 gap-2">
                <a href="https://www.linkedin.com/in/aryan-solanki1723/" target="_blank" rel="noopener noreferrer" className="h-11 flex items-center justify-center bg-[#caabff] text-white rounded-xl hover:bg-[#b078fa] transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/aryan1723" target="_blank" rel="noopener noreferrer" className="h-11 flex items-center justify-center bg-[#caabff] text-white rounded-xl hover:bg-[#b078fa] transition-colors shadow-sm">
                  <Github size={20} fill="currentColor" strokeWidth={0} />
                </a>
                <a href="tel:+917017580748" className="h-11 flex items-center justify-center bg-[#caabff] text-white rounded-xl hover:bg-[#b078fa] transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.58a1 1 0 01-.21 1.11l-2.36 2.1z"/></svg>
                </a>
                <a href="mailto:aryansolanki1723@gmail.com" className="h-11 flex items-center justify-center bg-[#caabff] text-white rounded-xl hover:bg-[#b078fa] transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
              </div>
              <button onClick={handleContactOpen} className="w-full py-3 bg-[#c8a2fc] hover:bg-[#b078fa] text-white rounded-xl font-bold tracking-widest text-[13px] transition-colors shadow-sm">
                CONTACT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Contact Modal (sheet from bottom) ── */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center md:hidden"
            onClick={(e) => e.target === e.currentTarget && setIsContactOpen(false)}>
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full bg-white rounded-t-3xl shadow-2xl overflow-hidden">
              <div className="w-full bg-[#c8a2fc] py-3 flex items-center justify-between px-6">
                <span className="text-white font-semibold text-xs tracking-widest">CONTACT</span>
                <button onClick={() => setIsContactOpen(false)} className="text-white hover:text-gray-200"><X size={16} strokeWidth={3} /></button>
              </div>
              <form onSubmit={handleSubmit} className="px-6 py-4 space-y-3 max-h-[75vh] overflow-y-auto pb-8">
                <div><label className="block text-[11px] font-bold text-gray-800 mb-1">Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} required type="text" className="w-full px-3 py-2 bg-[#f0f0f0] border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#c8a2fc]" /></div>
                <div><label className="block text-[11px] font-bold text-gray-800 mb-1">Email</label>
                  <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full px-3 py-2 bg-[#f0f0f0] border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#c8a2fc]" /></div>
                <div><label className="block text-[11px] font-bold text-gray-800 mb-1">Subject</label>
                  <input name="subject" value={formData.subject} onChange={handleChange} required type="text" className="w-full px-3 py-2 bg-[#f0f0f0] border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#c8a2fc]" /></div>
                <div><label className="block text-[11px] font-bold text-gray-800 mb-1">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="3" className="w-full px-3 py-2 bg-[#f0f0f0] border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#c8a2fc] resize-none"></textarea></div>
                <input type="text" name="_hp" value={honeypot} onChange={e => setHoneypot(e.target.value)} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                {sent && <div className="flex items-center gap-2 text-green-600 text-xs font-semibold"><CheckCircle size={14} /> Message sent successfully!</div>}
                {sendError && <div className="flex items-center gap-2 text-red-500 text-xs font-semibold"><AlertCircle size={14} /> Failed. Please try again.</div>}
                {rateLimited && <div className="flex items-center gap-2 text-amber-600 text-xs font-semibold"><AlertCircle size={14} /> Wait {cooldownLeft}m before sending again.</div>}
                <button type="submit" disabled={sending || rateLimited}
                  className="w-full py-2.5 bg-[#c8a2fc] hover:bg-[#b078fa] disabled:opacity-60 text-white rounded-md font-semibold text-xs tracking-widest flex items-center justify-center gap-2">
                  {sending ? <><Loader size={14} className="animate-spin" /> SENDING...</> : 'SEND'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
