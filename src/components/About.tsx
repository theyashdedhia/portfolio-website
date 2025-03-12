
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript/TypeScript",
    "React",
    "Node.js",
    "MongoDB",
    "SQL Databases",
    "AWS/Cloud",
    "Next.js",
    "CI/CD"
  ];

  const educationTimeline = [
    {
      degree: "Master of Science",
      field: "Computer Science",
      institution: "University Name",
      year: "2022 - Present",
      description: "Currently pursuing advanced studies in Computer Science with a focus on Machine Learning and Distributed Systems."
    },
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "University Name",
      year: "2018 - 2022",
      description: "Graduated with honors, specializing in Software Engineering and Data Structures."
    }
  ];

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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate software developer with a strong foundation in computer science and a love for creating 
              efficient, user-friendly applications. Currently pursuing my Master's degree to deepen my knowledge 
              and expand my skill set.
            </p>
            <p className="text-gray-700 mb-6">
              My approach combines technical expertise with creative problem-solving. I believe in writing clean, 
              maintainable code and creating intuitive user experiences. When I'm not coding, you'll find me exploring 
              new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            <p className="text-gray-700">
              I'm constantly looking for new challenges and opportunities to grow as a developer. Let's connect and 
              build something amazing together!
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">My Skills</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-8">
              {educationTimeline.map((education, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default About;
