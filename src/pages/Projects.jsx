// src/pages/Projects.jsx
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    tech: ["Python", "Django", "PostgreSQL"]
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="h-64 bg-gradient-to-r from-blue-100 to-indigo-100 animate-pulse"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
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