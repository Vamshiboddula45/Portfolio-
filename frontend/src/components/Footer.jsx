import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20 border-t border-white/10 glass-card rounded-none bg-black/40">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Boddula Vamshi. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Vamshiboddula45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00F5FF] transition-colors duration-300 cursor-none glow-hover drop-shadow-[0_0_8px_rgba(0,245,255,0.5)]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/vamshi-boddula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#4FD1C5] transition-colors duration-300 cursor-none glow-hover drop-shadow-[0_0_8px_rgba(79,209,197,0.5)]"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:vamshiboddula95@gmail.com"
            className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-300 cursor-none glow-hover drop-shadow-[0_0_8px_rgba(138,43,226,0.5)]"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
