import Section from "./Section";
import data from "@/data.json";

/** Toolchain set like a bill of materials: grouped, indexed rows instead of skill bars. */
const Toolchain = () => (
  <Section id="toolchain" fig="04" title="Toolchain">
    <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {data.toolchain.map((group) => (
        <div key={group.group}>
          <p className="fig-label border-b border-border pb-2.5">{group.group}</p>
          <ul>
            {group.items.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-3 border-b border-border/60 py-2.5 text-[15px] text-foreground/85 last:border-0"
              >
                <span className="font-mono text-[10px] text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default Toolchain;
