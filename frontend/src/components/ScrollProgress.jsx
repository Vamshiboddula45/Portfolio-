import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] bg-gradient-to-r from-[#00F5FF] via-[#4FD1C5] to-[#8A2BE2] origin-left"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
