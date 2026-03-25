import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial } from '@react-three/drei';

const FloatingIcons = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      {/* 3D Object 1 */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[-3, 1, -2]}>
        <mesh>
          <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
          <MeshDistortMaterial color="#00F5FF" distort={0.3} speed={2} />
        </mesh>
      </Float>

      {/* 3D Object 2 */}
      <Float speed={2.5} rotationIntensity={2} floatIntensity={3} position={[3, -1, -5]}>
        <mesh>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#8A2BE2" wireframe />
        </mesh>
      </Float>
      
      {/* 3D Code Snippet */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} position={[4, 2, -3]}>
         <Text color="#4FD1C5" fontSize={0.4} maxWidth={200} lineHeight={1} letterSpacing={0.02} textAlign="left" font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff">
            {`const dev = {\n  stack: 'MERN',\n  passion: 'Code'\n};`}
         </Text>
      </Float>
    </>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Elements specific to Hero */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <FloatingIcons />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between mt-20">
        <div className="md:w-1/2 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#4FD1C5] font-mono text-xl mb-4"
          >
            Hi, my name is
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-4 text-white"
          >
            Boddula Vamshi.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-400 h-20"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Engineer',
                2000,
                'C++ Programmer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] via-[#4FD1C5] to-[#8A2BE2]"
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 max-w-lg mb-8 text-lg"
          >
            I specialize in building scalable web applications using the MERN stack and enjoy solving complex technical problems using optimized algorithms and modern development practices.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4"
          >
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#8A2BE2] text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] transition-all transform hover:scale-105">
              View Work
            </a>
            <a href="/cv.pdf" download className="px-8 py-3 rounded-full border border-[#00F5FF] text-[#00F5FF] font-bold tracking-wide hover:bg-[#00F5FF]/10 transition-all transform hover:scale-105">
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
