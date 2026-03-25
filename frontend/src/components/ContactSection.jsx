import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaSpinner, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Pointing to local backend, in production this should be absolute URL
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen py-20 px-4 flex flex-col items-center justify-center relative">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-sans mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold font-sans text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out to me!
              </p>
            </div>
            
            <div className="flex flex-col space-y-6">
              <a href="mailto:vamshiboddula95@gmail.com" className="flex items-center space-x-4 group cursor-none">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#8A2BE2]/50 group-hover:bg-[#8A2BE2]/10 transition-all shadow-[0_0_15px_rgba(138,43,226,0)] group-hover:shadow-[0_0_15px_rgba(138,43,226,0.3)]">
                  <FaEnvelope className="text-gray-400 group-hover:text-[#8A2BE2] transition-colors text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium font-sans mb-1 uppercase tracking-wider">Email</p>
                  <p className="text-white font-sans font-semibold group-hover:text-[#8A2BE2] transition-colors text-lg">vamshiboddula95@gmail.com</p>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/vamshi-boddula" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group cursor-none">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#4FD1C5]/50 group-hover:bg-[#4FD1C5]/10 transition-all shadow-[0_0_15px_rgba(79,209,197,0)] group-hover:shadow-[0_0_15px_rgba(79,209,197,0.3)]">
                  <FaLinkedin className="text-gray-400 group-hover:text-[#4FD1C5] transition-colors text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium font-sans mb-1 uppercase tracking-wider">LinkedIn</p>
                  <p className="text-white font-sans font-semibold group-hover:text-[#4FD1C5] transition-colors text-lg">vamshi-boddula</p>
                </div>
              </a>

              <a href="https://github.com/Vamshiboddula45" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group cursor-none">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00F5FF]/50 group-hover:bg-[#00F5FF]/10 transition-all shadow-[0_0_15px_rgba(0,245,255,0)] group-hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                  <FaGithub className="text-gray-400 group-hover:text-[#00F5FF] transition-colors text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium font-sans mb-1 uppercase tracking-wider">GitHub</p>
                  <p className="text-white font-sans font-semibold group-hover:text-[#00F5FF] transition-colors text-lg">Vamshiboddula45</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 relative overflow-hidden h-full rounded-2xl border border-white/10"
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#00F5FF] rounded-full mix-blend-screen filter blur-[80px] opacity-10 pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5 relative z-10 h-full justify-between">
              <div className="space-y-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F5FF] focus:bg-black/60 transition-colors cursor-none placeholder-gray-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F5FF] focus:bg-black/60 transition-colors cursor-none placeholder-gray-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                
                <div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8A2BE2] focus:bg-black/60 transition-colors resize-none cursor-none placeholder-gray-500"
                    placeholder="Your Message..."
                  ></textarea>
                </div>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00F5FF]/10 to-[#8A2BE2]/10 border border-white/10 text-white px-8 py-3 rounded-xl hover:from-[#00F5FF]/30 hover:to-[#8A2BE2]/30 hover:border-white/30 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-none group"
                >
                  <span className="font-semibold tracking-wide uppercase text-sm">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </span>
                  {status === 'loading' ? (
                    <FaSpinner className="animate-spin text-white" />
                  ) : (
                    <FaPaperPlane className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                </button>
                
                {status === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#4FD1C5] mt-4 text-center text-sm font-medium">
                    Message sent successfully!
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 mt-4 text-center text-sm font-medium">
                    Failed to send. Please ensure the backend is running.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
