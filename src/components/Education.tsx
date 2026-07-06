import Section from "./Section";
import data from "@/data.json";

const Education = () => (
  <Section fig="05" title="Education">
    <div className="grid gap-8 md:grid-cols-2">
      {data.education.map((entry) => (
        <div key={entry.degree} className="border-l-2 border-primary/30 pl-5">
          <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground">{entry.period}</p>
          <h3 className="display mt-1.5 text-lg font-bold leading-snug">{entry.degree}</h3>
          <p className="mt-1 text-[15px] text-foreground/70">
            {entry.institution} · {entry.location}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

export default Education;
