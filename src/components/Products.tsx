import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import data from "@/data.json";

const Products = () => (
  <Section id="products" fig="03" title="Founded products">
    <div className="grid gap-6 md:grid-cols-2">
      {data.products.map((product) => (
        <article key={product.name} className="panel flex flex-col p-7 transition-shadow duration-300 hover:shadow-[0_1px_2px_rgba(20,32,27,0.05),0_16px_32px_-18px_rgba(20,32,27,0.35)]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="display text-2xl font-bold">{product.name}</h3>
            <span className="chip mt-1.5 border-primary/30 bg-primary/5 text-primary">{product.role}</span>
          </div>
          <p className="mt-1 font-medium text-primary">{product.tagline}</p>
          <p className="mt-3.5 text-[15px] leading-relaxed text-foreground/80">{product.description}</p>

          <ul className="mt-4 space-y-2.5">
            {product.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
                <span aria-hidden className="mt-[8px] h-1.5 w-1.5 shrink-0 bg-primary/50" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2 pt-1">
            {product.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground/75 transition-colors hover:text-primary"
            >
              {product.urlLabel}
              <ArrowUpRight size={14} />
            </a>
            <span className="fig-label inline-flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary" />
              Live
            </span>
          </div>
        </article>
      ))}
    </div>

    <p className="mt-9 text-sm leading-relaxed text-foreground/65">
      <span className="fig-label mr-3">Also built</span>
      {data.sideBuilds.map((build, i) => (
        <span key={build.name}>
          <a href={build.url} target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground/80">
            {build.name}
          </a>{" "}
          — {build.description}
          {i < data.sideBuilds.length - 1 && <span className="mx-2 text-border">/</span>}
        </span>
      ))}
    </p>
  </Section>
);

export default Products;
