
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com"
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects, and deadlines with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides real-time forecasts, historical data, and interactive maps for locations worldwide.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
      tags: ["JavaScript", "Weather API", "Chart.js"],
      github: "https://github.com/yourusername/project3"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in software development.
          </p>
          <div className="w-16 h-1 bg-primary/30 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-start space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-primary transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary transition-colors border-2 border-primary/50 rounded-full hover:bg-primary/5"
          >
            View More Projects
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
