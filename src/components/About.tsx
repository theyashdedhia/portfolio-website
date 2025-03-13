
import { motion } from "framer-motion";
import { CheckCircle, Briefcase, GraduationCap, Calendar } from "lucide-react";
import data from "@/data.json";
import SkillsVisualization from "./SkillsVisualization";
import StartupJourney from "./StartupJourney";

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

        <div className="grid gap-16">
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
          </motion.div>
          
          <SkillsVisualization />
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-primary mr-3" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="relative border-l-2 border-primary/20 pl-8 ml-3 space-y-12">
                {data.education.map((education, index) => (
                  <motion.div 
                    key={index} 
                    className="relative -ml-12 hover-lift"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary"></div>
                    <div className="bg-white shadow-md rounded-lg p-6 ml-8">
                      <div className="flex items-center mb-2">
                        <Calendar size={16} className="text-primary mr-2" />
                        <span className="text-sm text-gray-600">{education.year}</span>
                      </div>
                      <h4 className="text-xl font-semibold">{education.degree}</h4>
                      {education.field && <p className="text-primary font-medium">{education.field}</p>}
                      <p className="text-gray-600 mb-2">{education.institution}</p>
                      <p className="text-gray-700 text-sm">{education.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center mb-6">
                <Briefcase size={24} className="text-primary mr-3" />
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              <div className="relative border-l-2 border-primary/20 pl-8 ml-3 space-y-12">
                {data.workExperience.map((work, index) => (
                  <motion.div 
                    key={index} 
                    className="relative -ml-12 hover-lift"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary"></div>
                    <div className="bg-white shadow-md rounded-lg p-6 ml-8">
                      <div className="flex items-center mb-2">
                        <Calendar size={16} className="text-primary mr-2" />
                        <span className="text-sm text-gray-600">{work.period}</span>
                      </div>
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <StartupJourney />
        </div>
      </div>
    </section>
  );
};

export default About;
