import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';

const educationData = [
  {
    title: "Bachelor of Technology – Computer Science",
    subtitle: "Lovely Professional University, Punjab, India",
    date: "2023 - Present",
    desc: "CGPA: 6.50. Focus on deep learning, algorithms, and full-stack development.",
    icon: <FaGraduationCap />,
    color: "#00F5FF"
  },
  {
    title: "Intermediate",
    subtitle: "Telangana State Model School, Armoor",
    date: "2021 - 2023",
    desc: "Completed with 82.6%.",
    icon: <FaGraduationCap />,
    color: "#8A2BE2"
  },
  {
    title: "SSC",
    subtitle: "Telangana State Model School, Armoor",
    date: "2021",
    desc: "Completed with 95%.",
    icon: <FaGraduationCap />,
    color: "#4FD1C5"
  }
];

const certData = [
  {
    title: "Advanced C++ Programming",
    issuer: "Centre for Professional Enhancement, LPU",
    date: "2025",
    focus: ["Object Oriented Programming", "Dynamic Programming", "STL", "Modular Code"],
    image: "/cert1.png",
    link: "/cert1.png"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL / SWAYAM",
    date: "Certified",
    focus: ["Cloud Architecture", "Distributed Systems"],
    image: "/cert2.png",
    link: "/cert2.png"
  },
  {
    title: "Mastering in C: Basic to Beyond",
    issuer: "CSE Pathshala",
    date: "Certified",
    focus: ["C Programming", "Data Structures"],
    image: "/cert3.png",
    link: "/cert3.png"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Certified",
    focus: ["HTML5", "CSS3", "Responsive Layouts"],
    image: "/cert4.png",
    link: "/cert4.png"
  }
];

const achievementsData = [
  {
    title: "100+ LeetCode Solved",
    desc: "Successfully solved 100+ Data Structures and Algorithms problems on LeetCode.",
    icon: <FaTrophy size={24} />,
    color: "#EAB308"
  },
  {
    title: "Hackathons & Competitions",
    desc: "Actively participated in various Coding Competitions and Hackathons.",
    icon: <FaTrophy size={24} />,
    color: "#8A2BE2"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="w-full py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-sans mb-4"
          >
            Education & <span className="text-gradient">Training</span>
          </motion.h2>
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent"></div>
        </div>

        <div className="mb-20">
          <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
            {educationData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: '16px' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.1)' }}
                date={item.date}
                dateClassName="text-[#00F5FF] font-bold tracking-widest"
                iconStyle={{ background: '#050A0F', color: item.color, border: `2px solid ${item.color}`, boxShadow: `0 0 10px ${item.color}` }}
                icon={item.icon}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold text-white">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle text-gray-400 text-sm mt-1">{item.subtitle}</h4>
                <p className="text-gray-300 font-sans">{item.desc}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div id="certifications" className="flex flex-col items-center mb-12 mt-12 scroll-mt-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-sans mb-4 text-white"
          >
            Certifications
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certData.map((cert, index) => (
            <motion.a
              href={cert.link || cert.image}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(0,245,255,0.3)' }}
              className="glass-card p-6 flex flex-col border border-white/10 hover:border-[#00F5FF]/50 transition-all rounded-xl cursor-none group block"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-[#00F5FF] drop-shadow-[0_0_8px_rgba(0,245,255,0.5)]">
                  <FaCertificate size={32} />
                </div>
                <FaExternalLinkAlt className="text-gray-500 group-hover:text-[#00F5FF] transition-colors" />
              </div>
              
              {/* Certificate Image */}
              <div className="w-full h-32 mb-4 rounded-lg overflow-hidden border border-white/5 shadow-inner">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200.png?text=Certificate' }}
                />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
              <p className="text-[#8A2BE2] text-sm font-semibold mb-4">{cert.issuer}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {cert.focus.map((f, i) => (
                    <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300 border border-white/5">
                      {f}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-4 uppercase tracking-wider">{cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Achievements Section */}
        <div id="achievements" className="flex flex-col items-center mb-12 mt-20 scroll-mt-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-sans mb-4 text-white"
          >
            Achievements
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 flex items-start space-x-6 border border-white/10 hover:border-white/30 transition-all rounded-2xl cursor-none group"
            >
              <div 
                className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                style={{ color: item.color, borderColor: `${item.color}50`, boxShadow: `0 0 20px ${item.color}20` }}
              >
                {item.icon}
              </div>
              <div className="flex-1 cursor-none">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#00F5FF] transition-colors">{item.title}</h4>
                <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
