import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Happy Tails",
    description: "Full-stack platform connecting pet owners with verified pet minders, built as a team for the Software Engineering module. Features two React front ends — a mobile web app and an admin dashboard — backed by a Node.js HTTP API and a normalised MySQL schema covering bookings, payments, reviews, disputes, and messaging.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?fit=max&fm=jpg&q=80&w=1080",
    tags: ["React 19", "Node.js", "MySQL", "REST API", "Vite"],
    liveUrl: "#",
    githubUrl: "https://github.com/wercnn/Happy_Tails",
  },
  {
    title: "CycleCast",
    description: "Cycling-focused weather web app for student bike commuters. Surfaces a Cycling Suitability Score, commute-hour rain probability, wind speed, road conditions, clothing recommendations, and real-time hazard alerts — built from a Figma design with OpenWeather API integration.",
    image: "https://github.com/user-attachments/assets/e4dae9f0-6e8e-4d66-b4eb-15ff5776e77b",
    tags: ["TypeScript", "React", "Vite", "OpenWeather API"],
    liveUrl: "#",
    githubUrl: "https://github.com/wercnn/Cyclecast",
  },
  {
    title: "Horse Racing Simulator",
    description: "Interactive GUI-based horse racing simulation game with animated race progress, betting system, and dynamic race outcomes built with Java Swing",
    image: "https://images.unsplash.com/photo-1580974582235-4996ef109bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHJhY2luZyUyMHNwb3J0fGVufDF8fHx8MTc3MTYwMDI2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Java", "Swing", "OOP"],
    liveUrl: "#",
    githubUrl: "https://github.com/wercnn/HorseRace_Sim",
  },
  {
    title: "Budget Tracker",
    description: "Desktop application to manage expenses and income, calculate balances and spending percentages, with secure account creation and CSV data storage",
    image: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjBmaW5hbmNlJTIwY2FsY3VsYXRvcnxlbnwxfHx8fDE3NzE1MDY1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "Tkinter", "CSV"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website with Blog",
    description: "Personal portfolio site showcasing skills, projects, and education history, featuring a dynamic blog system with PHP and MySQL backend",
    image: "https://images.unsplash.com/photo-1649451844859-fdd73bf10f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd2Vic2l0ZSUyMGNvZGluZ3xlbnwxfHx8fDE3NzE2MDAyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: "https://yigiterendogan.lovestoblog.com/",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 150px 0px" }}
          transition={{ duration: 0.35 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 150px 0px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden group">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-6">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}