import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: "VALMONEY – Algorithm-Driven Debt Payoff Planner",
    description: "A full-stack financial planning platform that uses algorithmic optimization to help users efficiently plan debt repayment strategies.",
    achievements: [
      "Increased repayment efficiency by 30%",
      "Reduced payoff duration by 10 months",
      "Improved website load speed by 40%",
      "Achieved 99.9% data reliability"
    ],
    tech: ["HTML", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Vamshiboddula45",
    demo: "https://valmoney.vercel.app/",
    image: "/hii.png"
  },
  {
    title: "Deep Learning Based Audio Language Model (ALM)",
    description: "An AI-driven system capable of understanding speech and environmental sounds using deep learning models.",
    achievements: [
      "Achieved 85% contextual audio understanding",
      "Reduced inference latency by 35%",
      "Handles 1000+ audio interactions"
    ],
    tech: ["React.js", "Node.js", "Express.js", "Python", "Deep Learning"],
    github: "https://github.com/Vamshiboddula45",
    demo: "#",
    image: "/vamsi.png"
  }
];

const TiltCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full glass-card p-8 rounded-2xl flex flex-col h-full border border-white/10 group cursor-none"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ transform: "translateZ(50px)" }} className="flex-1 cursor-none flex flex-col">
        {/* Project Image */}
        <div className="w-full h-48 mb-6 rounded-xl overflow-hidden border border-white/10 group-hover:border-[#00F5FF]/50 transition-colors shadow-lg shadow-black/50">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400.png?text=Project+Image' }}
          />
        </div>

        <h3 className="text-2xl font-bold font-sans text-white mb-4 group-hover:text-[#00F5FF] transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 font-sans text-sm leading-relaxed">
          {project.description}
        </p>
        <ul className="list-disc pl-5 mb-6 text-gray-400 text-sm space-y-1">
          {project.achievements.map((acc, i) => (
            <li key={i}>{acc}</li>
          ))}
        </ul>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="mt-auto cursor-none">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/10 text-white border border-white/5">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#00F5FF] transition-colors cursor-none glow-hover">
            <FaGithub size={24} />
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#8A2BE2] transition-colors cursor-none glow-hover">
            <FaExternalLinkAlt size={22} />
          </a>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#00F5FF]/0 via-[#8A2BE2]/0 to-[#00F5FF]/0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500"></div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-sans mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 perspective-[1000px] mb-20">
          {projectsData.map((project, index) => (
            <TiltCard key={index} project={project} />
          ))}
        </div>


      </div>
    </section>
  );
};

export default ProjectsSection;
