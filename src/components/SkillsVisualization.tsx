
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cpu, Book, BrainCircuit } from 'lucide-react';
import data from '@/data.json';

// Group skills into categories
const skillCategories = [
  {
    name: 'Frontend',
    icon: <Code className="h-6 w-6" />,
    skills: ['TypeScript', 'JavaScript', 'Vue.js', 'React.js', 'Angular.js'],
    color: 'bg-blue-500',
  },
  {
    name: 'Backend',
    icon: <Server className="h-6 w-6" />,
    skills: ['Java', 'C#', '.NET Core', 'Python'],
    color: 'bg-green-500',
  },
  {
    name: 'Database',
    icon: <Database className="h-6 w-6" />,
    skills: ['Supabase', 'PostgreSQL', 'MySQL', 'MongoDB'],
    color: 'bg-yellow-500',
  },
  {
    name: 'Tools',
    icon: <Cpu className="h-6 w-6" />,
    skills: ['Git', 'GitHub'],
    color: 'bg-purple-500',
  },
  {
    name: 'Computer Science',
    icon: <Book className="h-6 w-6" />,
    skills: ['Data Structures', 'Algorithms'],
    color: 'bg-red-500',
  },
  {
    name: 'AI & ML',
    icon: <BrainCircuit className="h-6 w-6" />,
    skills: ['TensorFlow', 'Keras'],
    color: 'bg-indigo-500',
  },
];

const SkillsVisualization = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  const getSkillsForActiveCategory = () => {
    const category = skillCategories.find(cat => cat.name === activeCategory);
    return category ? category.skills : [];
  };

  const getSkillLevel = (skill: string) => {
    // Mock skill levels - in a real app, you might want to add these to your data.json
    const levels: Record<string, number> = {
      'TypeScript': 90,
      'JavaScript': 95,
      'Vue.js': 85,
      'React.js': 88,
      'Angular.js': 70,
      'Java': 80,
      'C#': 75,
      '.NET Core': 75,
      'Python': 85,
      'Supabase': 70,
      'PostgreSQL': 80,
      'MySQL': 75,
      'MongoDB': 85,
      'Git': 90,
      'GitHub': 90,
      'Data Structures': 85,
      'Algorithms': 80,
      'TensorFlow': 60,
      'Keras': 60,
    };
    
    return levels[skill] || 50; // Default to 50% if not specified
  };

  const activeSkills = getSkillsForActiveCategory();
  const getCategoryColor = (name: string) => {
    return skillCategories.find(cat => cat.name === name)?.color || 'bg-gray-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="my-12"
    >
      <h3 className="text-2xl font-bold mb-8">Skills</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-10">
        {skillCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
              activeCategory === category.name 
                ? `${getCategoryColor(category.name)} text-white shadow-lg scale-105` 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category.icon}
            <span className="mt-2 text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
      
      <div className="space-y-5">
        {activeSkills.map((skill, index) => {
          const level = getSkillLevel(skill);
          
          return (
            <motion.div 
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill}</span>
                <span className="text-sm text-gray-500">{level}%</span>
              </div>
              <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full ${getCategoryColor(activeCategory)} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SkillsVisualization;
