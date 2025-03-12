
import { motion } from "framer-motion";
import { CheckCircle, Briefcase } from "lucide-react";
import data from "@/data.json";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Journey
          </h2>
          <div className="w-16 h-1 bg-primary/30 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            {data.personalInfo.about.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-6">
                {paragraph}
              </p>
            ))}
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">My Skills</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {data.skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-8">
                {data.education.map((education, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary/20 hover-lift">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full bg-gray-100">
                      {education.year}
                    </span>
                    <h4 className="text-xl font-semibold">{education.degree}</h4>
                    <p className="text-primary font-medium">{education.field}</p>
                    <p className="text-gray-600 mb-2">{education.institution}</p>
                    <p className="text-gray-700 text-sm">{education.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase size={20} className="mr-2" /> 
                Work Experience
              </h3>
              <div className="space-y-8">
                {data.workExperience.map((work, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary/20 hover-lift">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full bg-gray-100">
                      {work.period}
                    </span>
                    <h4 className="text-xl font-semibold">{work.position}</h4>
                    <p className="text-primary font-medium">{work.company}</p>
                    <p className="text-gray-700 my-2">{work.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {work.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
