import { ArrowRight, Download } from "lucide-react";
import aboutImage from "../../../assets/aboutImage.jpg";
import networkImage from "../../../assets/networkImage.jpg";
import {
  expertise,
  outcomes,
  profile,
  services,
  skillGroups,
  tools,
} from "@/data/portfolio";
import {
  CodeMotif,
  FlowMotif,
  NodesMotif,
  Reveal,
  SectionLabel,
  SkillGauge,
} from "./primitives";

function ServiceVisual({ number }: { number: string }) {
  return (
    <figure
      aria-hidden
      className="relative aspect-[16/5] overflow-hidden border-b border-border bg-graphite"
    >
      <div className="blueprint-grid absolute inset-0 opacity-30" />
      <svg viewBox="0 0 720 225" className="absolute inset-0 h-full w-full">
        {number === "01" && (
          <g>
            <rect
              x="120"
              y="28"
              width="480"
              height="170"
              rx="6"
              fill="var(--graphite-deep)"
              stroke="var(--amber)"
              strokeOpacity="0.65"
            />
            <path d="M120 58 H600" stroke="var(--amber)" strokeOpacity="0.35" />
            <circle cx="140" cy="43" r="4" fill="var(--amber)" />
            <circle cx="156" cy="43" r="4" fill="var(--ivory)" fillOpacity="0.35" />
            <circle cx="172" cy="43" r="4" fill="var(--ivory)" fillOpacity="0.2" />
            <rect x="150" y="78" width="175" height="96" rx="3" fill="var(--amber)" fillOpacity="0.14" />
            <rect x="350" y="80" width="190" height="10" rx="3" fill="var(--ivory)" fillOpacity="0.75" />
            <rect x="350" y="101" width="155" height="7" rx="3" fill="var(--ivory)" fillOpacity="0.25" />
            <rect x="350" y="117" width="175" height="7" rx="3" fill="var(--ivory)" fillOpacity="0.25" />
            <rect x="350" y="141" width="82" height="22" rx="3" fill="var(--amber)" fillOpacity="0.85" />
          </g>
        )}
        {number === "02" && (
          <g fill="var(--graphite-deep)" stroke="var(--amber)" strokeOpacity="0.8" strokeWidth="2">
            <path d="M360 65 V100 M190 100 H530 M190 100 V142 M360 100 V142 M530 100 V142" fill="none" />
            <rect x="318" y="30" width="84" height="38" rx="4" />
            <rect x="145" y="142" width="90" height="38" rx="4" />
            <rect x="315" y="142" width="90" height="38" rx="4" />
            <rect x="485" y="142" width="90" height="38" rx="4" />
            <circle cx="360" cy="49" r="5" fill="var(--amber)" stroke="none" />
            <circle cx="190" cy="160" r="5" fill="var(--amber)" stroke="none" />
            <circle cx="360" cy="160" r="5" fill="var(--amber)" stroke="none" />
            <circle cx="530" cy="160" r="5" fill="var(--amber)" stroke="none" />
          </g>
        )}
        {number === "03" && (
          <path
            d="M165 112 H270 V159 H360 V66 H450 V112 H555"
            fill="none"
            stroke="var(--amber)"
            strokeDasharray="8 8"
            strokeWidth="4"
          />
        )}
        {number === "04" && (
          <g>
          {[70, 110, 150, 190].map((y) => (
            <path
              key={y}
              d={`M125 ${y} H595`}
              stroke="var(--ivory)"
              strokeOpacity="0.12"
              strokeDasharray="4 8"
            />
          ))}
          {[180, 260, 340, 420, 500].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={177 - i * 20}
              width="30"
              height={i * 20 + 20}
              rx="3"
              fill="var(--amber)"
              fillOpacity={0.3 + i * 0.12}
            />
          ))}
          <path
            d="M180 145 L260 130 L340 138 L420 102 L500 76 L560 60"
            fill="none"
            stroke="var(--ivory)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path d="M545 60 H560 V75" fill="none" stroke="var(--ivory)" strokeWidth="3" />
          <circle cx="560" cy="60" r="6" fill="var(--amber-bright)" />
          </g>
        )}
      </svg>
    </figure>
  );
}

export function About() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionLabel index="01" title="About Me" />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="relative">
            <figure className="overflow-hidden border border-border bg-ivory-soft">
              <img
                src={aboutImage}
                alt="Laptop displaying code on a sunlit workspace"
                width={1280}
                height={853}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="label-mono border-t border-border px-4 py-3 text-steel-light">
                Building thoughtful digital systems
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={100} className="space-y-5">
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-[2.75rem]">
              Building Digital Systems That Drive Growth.
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-steel-light">
              <p>
                I bridge software engineering, network infrastructure, and digital marketing to
                design and build scalable, secure, and growth-oriented digital systems.
              </p>
              <p>
                I bring clear direction and thoughtful collaboration to each project, aligning
                people and technology around outcomes that matter.
              </p>
              <p>
                Based in Nairobi, Kenya, I collaborate with teams across East Africa and beyond to
                shape ideas into dependable systems with room to grow.
              </p>
            </div>
            <a
              href={profile.resume}
              className="label-mono inline-flex items-center gap-2 border-b border-amber pb-1 text-graphite transition-colors duration-300 hover:text-amber"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {outcomes.map((o, i) => (
            <Reveal as="li" key={o.n} delay={i * 90}>
              <div className="premium-card h-full p-8">
                <p className="label-mono text-amber">{o.n}</p>
                <h3 className="mt-5 font-display text-xl font-bold">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-light">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Motif({ kind }: { kind: "code" | "nodes" | "flow" }) {
  if (kind === "code") return <CodeMotif />;
  if (kind === "nodes") return <NodesMotif />;
  return <FlowMotif />;
}

export function Expertise() {
  return (
    <section id="expertise" className="bg-ivory-soft py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionLabel index="02" title="Expertise" />
        <h2 className="mt-8 max-w-3xl font-display text-3xl leading-tight font-bold sm:text-[2.75rem]">
          Software, Networks & Growth.
        </h2>

        <div className="mt-14 space-y-6">
          {expertise.map((e, i) => (
            <Reveal key={e.n} delay={i * 80}>
              <article
                className={`premium-card grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr_0.7fr] ${
                  e.tone === "dark"
                    ? "on-dark"
                    : e.tone === "steel"
                      ? "bg-steel/8"
                      : "bg-ivory"
                }`}
              >
                <div>
                  <p className="label-mono flex items-center gap-2 text-amber">
                    <span className="status-dot" /> {e.n}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{e.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-75">{e.description}</p>
                </div>
                <ul className="space-y-3 self-center">
                  {e.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3 border-b border-border pb-3 text-sm">
                      <span className="mt-2 h-px w-4 shrink-0 bg-amber" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col justify-between gap-6">
                  {e.motif === "nodes" ? (
                    <figure className="overflow-hidden border border-border">
                      <img
                        src={networkImage}
                        alt="Blue network cables connected to a server rack"
                        width={1280}
                        height={853}
                        className="aspect-[16/9] w-full object-cover"
                        loading="lazy"
                      />
                    </figure>
                  ) : (
                    <Motif kind={e.motif} />
                  )}
                  <a
                    href="#services"
                    className="label-mono group inline-flex items-center gap-2 text-amber"
                  >
                    Explore capability
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="on-dark py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionLabel index="03" title="Technical Toolkit" />
        <h2 className="mt-8 font-display text-3xl leading-tight font-bold sm:text-[2.75rem]">
          Tools That Bring Ideas to Life.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-16">
          {skillGroups.map((g, i) => (
            <Reveal key={g.group} delay={i * 90}>
              <h3 className="label-mono border-b border-border pb-4 text-amber">{g.group}</h3>
              <ul className="mt-7 space-y-6">
                {g.skills.map((s) => (
                  <SkillGauge key={s.name} name={s.name} value={s.value} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <p className="label-mono text-muted-foreground">Tools & Stack</p>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
            {tools.map((t) => (
              <li key={t} className="label-mono text-foreground/80">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionLabel index="04" title="Services" />
        <h2 className="mt-8 max-w-3xl font-display text-3xl leading-tight font-bold sm:text-[2.75rem]">
          Services That Move Ideas Forward.
        </h2>

        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80}>
              <article className="premium-card group flex h-full flex-col overflow-hidden">
                <ServiceVisual number={s.n} />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start gap-3">
                    <span className="label-mono pt-1 text-amber">{s.n}</span>
                    <h3 className="font-display text-xl leading-snug font-bold sm:text-2xl">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-steel-light">{s.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.capabilities.map((c) => (
                      <li
                        key={c}
                        className="border border-border px-2.5 py-1.5 text-xs leading-snug text-steel-light"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="label-mono mt-5 inline-flex items-center gap-2 self-start text-graphite transition-colors duration-300 hover:text-amber"
                  >
                    {s.cta}
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
