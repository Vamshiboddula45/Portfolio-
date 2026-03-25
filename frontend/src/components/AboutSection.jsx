import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="w-full min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto w-full glass-card p-10 relative overflow-hidden group">
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#8A2BE2] rounded-full mix-blend-screen filter blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#00F5FF] rounded-full mix-blend-screen filter blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold font-sans">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="h-[2px] w-32 bg-gradient-to-r from-[#00F5FF] to-transparent"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Profile Photo */}
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00F5FF] to-[#8A2BE2] animate-pulse blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              <img 
                src="/profile.jpeg" 
                alt="Boddula Vamshi" 
                className="w-full h-full object-cover object-top rounded-full relative z-10 border-4 border-white/20 group-hover:border-[#00F5FF] transition-all duration-500"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300.png?text=Profile+Photo' }}
              />
            </div>

            {/* About Text */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-sans">
              <p>
                I am a passionate Computer Science Engineering student with strong experience in full-stack web development and algorithmic programming.
              </p>
              <p>
                I specialize in building scalable web applications using the MERN stack and enjoy solving complex technical problems using optimized algorithms and modern development practices.
              </p>
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00F5FF]/30 transition-colors">
              <h3 className="text-3xl font-bold text-[#00F5FF] mb-2">3+</h3>
              <p className="text-sm text-gray-400">Years Programming</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#8A2BE2]/30 transition-colors">
              <h3 className="text-3xl font-bold text-[#8A2BE2] mb-2">10+</h3>
              <p className="text-sm text-gray-400">Projects Built</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#4FD1C5]/30 transition-colors">
              <h3 className="text-3xl font-bold text-[#4FD1C5] mb-2">100+</h3>
              <p className="text-sm text-gray-400">DSA Problems</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00F5FF]/30 transition-colors">
              <h3 className="text-3xl font-bold text-[#00F5FF] mb-2">24/7</h3>
              <p className="text-sm text-gray-400">Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
