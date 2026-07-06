import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  fig: string;
  title: string;
  children: ReactNode;
  className?: string;
};

/** Section framed as a numbered figure in the notebook: FIG. NN — title, hairline, content. */
const Section = ({ id, fig, title, children, className }: SectionProps) => {
  const reduce = useReducedMotion();

  return (
    <section id={id} className={cn("scroll-mt-24 py-14 md:py-20", className)}>
      <div className="container">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mb-10 flex items-baseline gap-4">
            <span className="fig-label whitespace-nowrap">FIG. {fig}</span>
            <h2 className="display text-2xl font-bold md:text-3xl">{title}</h2>
            <div className="hairline flex-1 self-center" />
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
