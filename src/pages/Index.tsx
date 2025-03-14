
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsVisualization from "@/components/SkillsVisualization";
import Projects from "@/components/Projects";
import Freelancing from "@/components/Freelancing";
import Footer from "@/components/Footer";

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Load animations for elements with the reveal-animation class when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-animation').forEach((element) => {
      observer.observe(element);
    });

    // Start page animation sequence
    controls.start({
      opacity: 1,
      transition: { duration: 0.5 }
    });

    return () => {
      document.querySelectorAll('.reveal-animation').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="bg-white"
    >
      <Header />
      <Hero />
      <About />
      <SkillsVisualization />
      <Projects />
      <Freelancing />
      <Footer />
    </motion.div>
  );
};

export default Index;
