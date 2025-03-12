import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import DownloadButton from "./DownloadButton";

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as a percentage of the viewport
      const xPos = (clientX / innerWidth) - 0.5;
      const yPos = (clientY / innerHeight) - 0.5;
      
      // Apply subtle movement to the image based on mouse position
      // Movement range is limited to keep it subtle
      imageRef.current.style.transform = `translate(${xPos * 10}px, ${yPos * 10}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/4 right-1/5 w-64 h-64 rounded-full bg-blue-100/30 animate-pulse-light" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 left-1/5 w-72 h-72 rounded-full bg-blue-100/20 animate-pulse-light" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-blue-100/40 animate-pulse-light" style={{ animationDelay: '1.3s' }} />
      </div>

      <div className="container px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <span className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Software Developer
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              I craft elegant solutions through code. Currently pursuing my Master's degree
              and building digital experiences that make a difference.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <DownloadButton text="Download CV" filePath="/resume.pdf" />
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide transition duration-200 rounded-full border-2 border-primary/80 text-primary hover:bg-primary/5"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-blue-300/30 animate-spin-slow -z-10" />
            <img
              ref={imageRef}
              src="/avatar.png"
              alt="Profile"
              className="w-full h-full object-contain transition-transform duration-75"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
