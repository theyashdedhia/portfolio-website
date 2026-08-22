import Section from "./Section";
import data from "@/data.json";

const Education = () => (
  <Section fig="05" title="Education">
    <div className="grid gap-8 md:grid-cols-2">
      {data.education.map((entry) => (
        <div key={entry.degree} className="border-l-2 border-primary/30 pl-5">
          <h3 className="display text-lg font-bold leading-snug">{entry.degree}</h3>
          <p className="mt-1 text-[15px] text-foreground/70">{entry.institution}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Education;
