import { motion } from "motion/react";
import { Code, Palette, Rocket, Users } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Development",
    description: "Building responsive and performant web applications with modern technologies",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating beautiful, intuitive interfaces with attention to detail",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Always exploring new technologies and pushing creative boundaries",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams to deliver exceptional results",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 150px 0px" }}
          transition={{ duration: 0.35 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a developer who loves turning ideas into reality through code and design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 150px 0px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 150px 0px" }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-[2px] rounded-2xl">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                My Journey
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm currently pursuing a Bachelor of Science in Computer Science at Queen Mary University of London, 
                where I'm maintaining a First Class Honours classification. My academic journey has given me 
                a strong foundation in programming, algorithms, and software development.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Through hands-on projects and coursework, I've developed expertise in building scalable applications 
                using Java, Python, and web technologies. I'm particularly passionate about creating user-friendly 
                software solutions that solve real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beyond coding, I enjoy directing stage productions, playing guitar, and exploring new technologies. 
                I'm always eager to learn and take on new challenges in the world of software development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}