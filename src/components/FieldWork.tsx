import { Mountain, PawPrint } from "lucide-react";
import Section from "./Section";
import data from "@/data.json";

const ICONS: Record<string, typeof Mountain> = {
  "Wildlife Rescuer": PawPrint,
  "Trek Leader": Mountain,
};

const FieldWork = () => (
  <Section fig="06" title="Field work">
    <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-foreground/70">
      Off duty, the systems thinking moves outdoors — animal rescue operations and
      high-altitude route planning.
    </p>
    <div className="grid gap-6 md:grid-cols-2">
      {data.fieldWork.map((entry) => {
        const Icon = ICONS[entry.role] ?? Mountain;
        return (
          <article key={entry.role} className="panel p-6">
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/25 bg-primary/5 text-primary">
                <Icon size={19} strokeWidth={1.9} />
              </span>
              <div>
                <h3 className="display text-lg font-bold leading-tight">{entry.role}</h3>
                <p className="fig-label mt-0.5">
                  {entry.organization} · {entry.location}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/75">{entry.description}</p>
          </article>
        );
      })}
    </div>
  </Section>
);

export default FieldWork;
