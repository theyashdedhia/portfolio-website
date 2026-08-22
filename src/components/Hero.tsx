import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import PipelineSchematic from "./PipelineSchematic";
import data from "@/data.json";

const RESUME_HREF = `${import.meta.env.BASE_URL}resume.pdf`;
const PHOTO_HREF = `${import.meta.env.BASE_URL}yash-professional.png`;

const Hero = () => {
  const reduce = useReducedMotion();
  const { personalInfo } = data;
  const github = data.socialLinks.find((s) => s.name === "GitHub")?.url;
  const linkedin = data.socialLinks.find((s) => s.name === "LinkedIn")?.url;

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
        {/* Statement */}
        <div>
          <motion.div {...fadeUp(0)} className="mb-7 flex items-center gap-4">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-md border border-border bg-secondary">
              <img
                src={PHOTO_HREF}
                alt="Portrait of Yash Dedhia"
                className="h-full w-full object-cover object-[50%_22%]"
              />
            </div>
            <div>
              <p className="display text-base font-semibold leading-tight">{personalInfo.name}</p>
              <p className="fig-label mt-1">
                {personalInfo.title}
              </p>
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="display max-w-2xl text-[2.7rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-[3.6rem] xl:text-[4rem]"
          >
            Ambiguous requirements, turned into{" "}
            <span className="text-primary">production AI systems.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-lg text-[17px] leading-relaxed text-foreground/75"
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              See the work
              <ArrowDown size={14} strokeWidth={2.2} />
            </a>
            <a
              href={RESUME_HREF}
              download="Yash-Dedhia-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
            >
              Résumé (PDF)
              <Download size={14} strokeWidth={2.2} />
            </a>
            <div className="ml-1 flex items-center gap-4 text-foreground/60">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="transition-colors hover:text-primary">
                  <Github size={19} />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="transition-colors hover:text-primary">
                  <Linkedin size={19} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.p {...fadeUp(0.4)} className="fig-label mt-10">
            {personalInfo.focus.join("  ·  ")}
          </motion.p>
        </div>

        {/* Signature schematic */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          <PipelineSchematic />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
