import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C++", level: 90, color: "#00599C" },
      { name: "JavaScript (ES6+)", level: 85, color: "#F7DF1E" },
      { name: "HTML5", level: 95, color: "#E34F26" },
      { name: "CSS3", level: 90, color: "#1572B6" }
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React.js", level: 88, color: "#61DAFB" },
      { name: "Node.js", level: 82, color: "#339933" },
      { name: "Express.js", level: 80, color: "#FFFFFF" },
      { name: "Tailwind CSS", level: 92, color: "#06B6D4" }
    ]
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MongoDB", level: 85, color: "#47A248" },
      { name: "MySQL", level: 75, color: "#4479A1" },
      { name: "Git", level: 88, color: "#F05032" },
      { name: "REST APIs", level: 90, color: "#FF6C37" }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Teamwork", level: 95, color: "#00F5FF" },
      { name: "Critical Thinking", level: 90, color: "#8A2BE2" },
      { name: "Adaptability", level: 95, color: "#4FD1C5" }
    ]
  }
];

const SkillBar = ({ name, level, color, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-2.5 rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
        ></motion.div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-sans mb-4"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="glass-card p-6 h-full border-t border-l border-white/20 hover:border-[#00F5FF]/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2">
                {category.category}
              </h3>
              <div>
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
