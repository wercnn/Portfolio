import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "R&D / AI Engineer Intern",
    organization: "NETAS Telecommunications",
    location: "Istanbul, Turkey (On-site)",
    period: "Jun 2026 — Aug 2026",
    highlights: [
      "Engineered a GEO evaluation pipeline (Python, Playwright, Azure OpenAI) comparing ChatGPT Web, raw API, and grounded API across 100 prompt samples, measuring AI Share of Voice, brand ranking, and citation coverage",
      "Fine-tuned and deployed a GLiNER-based Turkish PII detection system for GDPR/KVKK data protection, combining transformer NER with spaCy and regex to redact 10+ entity types across long documents",
      "Built and deployed on Azure a RAG-based company intelligence system (Python, SerpAPI) that retrieves news into a searchable knowledge base with automated relevance filtering and scheduled email alerts",
    ],
    tags: ["Python", "Azure OpenAI", "RAG", "GLiNER", "spaCy", "Playwright", "SerpAPI"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-white via-blue-50/40 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 150px 0px" }}
          transition={{ duration: 0.35 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.organization}-${experience.role}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 150px 0px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Briefcase className="text-white" size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {experience.role}
                  </h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-medium mb-3">
                    {experience.organization}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={15} className="text-blue-500" />
                      {experience.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={15} className="text-cyan-500" />
                      {experience.location}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-gray-600 leading-relaxed"
                  >
                    <span className="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-blue-700 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
