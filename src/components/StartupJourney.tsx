
import { motion } from 'framer-motion';
import { Rocket, Flag, LightbulbIcon, TrendingUp, Users } from 'lucide-react';
import data from '@/data.json';

const StartupJourney = () => {
  // Filter out extracurricular activities related to startups
  const startupJourney = data.extraCurricular.filter(item => 
    item.organization === "Comed Learning" || 
    item.description?.toLowerCase().includes("ed-tech") || 
    item.description?.toLowerCase().includes("startup")
  );
  
  // Define milestones - you can customize these based on your own journey
  const milestones = [
    {
      title: "Idea Phase",
      icon: <LightbulbIcon size={24} className="text-yellow-500" />,
      description: "Identified the gap in educational resources for young students, especially in underprivileged areas.",
      date: "Early 2024",
      color: "bg-yellow-500"
    },
    {
      title: "Founded Comed Learning",
      icon: <Flag size={24} className="text-green-500" />,
      description: "Officially launched the ed-tech startup with a mission to provide quality education resources to all.",
      date: "March 2024",
      color: "bg-green-500"
    },
    {
      title: "Initial Growth",
      icon: <TrendingUp size={24} className="text-blue-500" />,
      description: "Expanded services to reach over 300 students across various demographics and regions.",
      date: "March 2024 - Present",
      color: "bg-blue-500"
    },
    {
      title: "Future Vision",
      icon: <Rocket size={24} className="text-purple-500" />,
      description: "Working towards scaling our platform to reach 10,000 students by end of 2025, with plans to expand internationally.",
      date: "2025 and beyond",
      color: "bg-purple-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="my-16"
    >
      <div className="flex items-center mb-8">
        <Rocket size={24} className="text-primary mr-3" />
        <h3 className="text-2xl font-bold">My Startup Journey</h3>
      </div>
      
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-green-500 to-purple-500 rounded-full"></div>
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex"
            >
              <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${milestone.color} shadow-lg`}>
                {milestone.icon}
              </div>
              
              <div className="ml-6 bg-white rounded-lg shadow-md p-6 flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold">{milestone.title}</h4>
                  <span className="text-sm text-gray-500">{milestone.date}</span>
                </div>
                <p className="text-gray-700">{milestone.description}</p>
                
                {index === 2 && startupJourney.length > 0 && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Users size={16} className="text-primary mr-2" />
                      <h5 className="font-medium">Current Achievement</h5>
                    </div>
                    <p className="text-gray-700 text-sm">
                      {startupJourney[0].description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StartupJourney;
