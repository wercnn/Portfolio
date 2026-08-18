import { motion } from "motion/react";
import { Code2, Database, Layout, GitBranch, Palette, Globe, Server, Terminal, Braces, FileCode, Box, Network, Zap, Layers } from "lucide-react";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: Code2 },
      { name: "Python", icon: Terminal },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: FileCode },
      { name: "HTML/CSS", icon: Layout },
      { name: "PHP", icon: Code2 },
      { name: "SQL", icon: Database },
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      { name: "React", icon: Globe },
      { name: "Node.js", icon: Server },
      { name: "Vite", icon: Zap },
      { name: "React Router", icon: Network },
      { name: "Swing", icon: Code2 },
      { name: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git/GitHub", icon: GitBranch },
      { name: "MySQL", icon: Database },
      { name: "Docker", icon: Box },
      { name: "Figma", icon: Layers },
      { name: "REST APIs", icon: Globe },
      { name: "GitHub Actions", icon: GitBranch },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My technical toolkit for bringing ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                        <Icon className="text-white" size={24} />
                      </div>
                      <span className="text-gray-700 font-medium text-sm text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}