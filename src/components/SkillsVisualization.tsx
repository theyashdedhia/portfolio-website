
import { useState } from 'react';
import { motion } from 'framer-motion';
import data from '@/data.json';

// Predefined color palette to use in rotation
const colorPalette = [
  'bg-blue-500',    // Blue
  'bg-green-500',   // Green
  'bg-yellow-500',  // Yellow
  'bg-purple-500',  // Purple
  'bg-red-500',     // Red
];

const SkillsVisualization = () => {
  const skillCategories = data.skills.categories;
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  const getSkillsForActiveCategory = () => {
    const category = skillCategories.find(cat => cat.name === activeCategory);
    return category ? category.skills : [];
  };

  const activeSkills = getSkillsForActiveCategory();
  
  // Get color for category using the colorPalette in a loop
  const getCategoryColor = (name: string) => {
    const categoryIndex = skillCategories.findIndex(cat => cat.name === name);
    if (categoryIndex === -1) return 'bg-gray-500'; // Default color if category not found
    
    // Use modulo to loop through colors
    const colorIndex = categoryIndex % colorPalette.length;
    return colorPalette[colorIndex];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="my-12"
      id="skills"
    >
      <h3 className="text-2xl font-bold mb-8">Skills</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-10">
        {skillCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`p-4 rounded-lg transition-all text-center ${
              activeCategory === category.name 
                ? `${getCategoryColor(category.name)} text-white shadow-lg scale-105` 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
      
      <div className="space-y-5">
        {activeSkills.map((skill, index) => {
          return (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full ${getCategoryColor(activeCategory)} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
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
