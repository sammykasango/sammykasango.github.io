import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { filters, projects } from "@/data/portfolio";
import { ProjectVisual, Reveal, SectionLabel } from "./primitives";

export function Projects() {
  const [active, setActive] = useState<string>("all");
  const visible = projects.filter((p) => active === "all" || p.category === active);

  return (
    <section id="projects" className="bg-ivory-soft py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionLabel index="05" title="Projects" />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-[2.75rem]">
              Work That Solves Real Problems.
            </h2>
            <p className="mt-3 text-base text-steel-light">
              Projects shaped around real people, practical challenges, and meaningful outcomes.
            </p>
          </div>

          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={active === f.id}
                onClick={() => setActive(f.id)}
                className={`label-mono border px-4 py-2 transition-colors duration-300 ${
                  active === f.id
                    ? "border-amber bg-amber text-graphite"
                    : "border-border text-steel-light hover:border-amber hover:text-amber"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 70}>
              <article className="premium-card group flex h-full flex-col overflow-hidden">
                <div className="relative grid h-36 place-items-center overflow-hidden border-b border-border bg-graphite-deep px-8 py-5 sm:h-40">
                  <div aria-hidden className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />
                  <div className="relative w-full max-w-sm text-ivory transition-transform duration-500 group-hover:scale-[1.03]">
                    <ProjectVisual kind={p.visual} />
                  </div>
                  <p className="label-mono absolute bottom-3 left-4 text-ivory/70">
                    <span className="text-amber">{p.categoryLabel}</span> / {p.year}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-xl leading-snug font-bold sm:text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-light">{p.impact}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.technologies.slice(0, 4).map((technology) => (
                      <li
                        key={technology}
                        className="label-mono border border-border px-2.5 py-1.5 text-steel-light"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {p.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`label-mono inline-flex items-center gap-2 px-4 py-2.5 transition-colors duration-300 ${
                          link.primary
                            ? "bg-graphite text-ivory hover:bg-amber hover:text-graphite"
                            : "border border-border hover:border-amber hover:text-amber"
                        }`}
                      >
                        {link.label}
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  );
}
