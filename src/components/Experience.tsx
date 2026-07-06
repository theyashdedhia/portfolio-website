import Section from "./Section";
import data from "@/data.json";

const Experience = () => (
  <Section id="work" fig="02" title="Experience">
    <div className="divide-y divide-border">
      {data.experience.map((job) => (
        <article key={`${job.company}-${job.period}`} className="grid gap-4 py-9 first:pt-0 last:pb-0 md:grid-cols-[190px_1fr] md:gap-8">
          <div>
            <p className="font-mono text-xs tracking-[0.08em] text-foreground/80">{job.period}</p>
            <p className="fig-label mt-1.5">{job.location}</p>
          </div>

          <div>
            <h3 className="display text-xl font-bold leading-snug">
              {job.role}
              <span className="font-semibold text-primary"> — {job.company}</span>
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-foreground/70">{job.summary}</p>

            <ul className="mt-4 max-w-2xl space-y-2.5">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-primary/50" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export default Experience;
