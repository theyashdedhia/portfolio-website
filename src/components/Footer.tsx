import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import data from "@/data.json";

const RESUME_HREF = `${import.meta.env.BASE_URL}resume.pdf`;

const Footer = () => {
  const reduce = useReducedMotion();
  const { personalInfo } = data;
  const github = data.socialLinks.find((s) => s.name === "GitHub")?.url;
  const linkedin = data.socialLinks.find((s) => s.name === "LinkedIn")?.url;

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border bg-card/60">
      <div className="container py-16 md:py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16"
        >
          <div>
            <p className="fig-label mb-5">FIG. 07 — Contact</p>
            <h2 className="display max-w-md text-3xl font-extrabold leading-[1.05] md:text-5xl">
              Let's build something that ships.
            </h2>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-7 inline-block text-lg font-medium text-primary underline decoration-primary/40 underline-offset-8 transition-colors hover:decoration-primary md:text-2xl"
            >
              {personalInfo.email}
            </a>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-primary">
                  GitHub <ArrowUpRight size={13} />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-primary">
                  LinkedIn <ArrowUpRight size={13} />
                </a>
              )}
              <a href={RESUME_HREF} download="Yash-Dedhia-Resume.pdf" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-primary">
                Résumé <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* drawing title block */}
          <div className="panel h-fit self-end p-0 md:justify-self-end md:min-w-[280px]">
            <dl className="divide-y divide-border font-mono text-xs">
              <div className="flex items-center justify-between gap-8 px-4 py-3">
                <dt className="fig-label">Status</dt>
                <dd className="inline-flex items-center gap-2 text-foreground/80">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Open to interesting problems
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="fig-label">REV 2026.07</span>
            <a
              href="https://github.com/theyashdedhia/portfolio-website"
              target="_blank"
              rel="noopener noreferrer"
              className="fig-label transition-colors hover:text-primary"
            >
              Source ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
