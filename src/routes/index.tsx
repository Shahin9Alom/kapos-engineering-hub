import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Compass,
  HardHat,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import logo from "@/assets/kapos-logo.png";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kapos Engineering Group | Engineering Works in Lilongwe, Malawi" },
      {
        name: "description",
        content:
          "Kapos Engineering Group delivers civil, structural, mechanical and electrical engineering works across Malawi. Based in Area 3 Market, Lilongwe.",
      },
      { property: "og:title", content: "Kapos Engineering Group | Engineering Works, Malawi" },
      {
        property: "og:description",
        content:
          "Civil, structural, fabrication and electrical engineering works delivered on time across Lilongwe and Malawi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Building2,
    no: "01",
    title: "Civil & Structural Works",
    text: "Foundations, reinforced concrete frames, slabs and structural surveys engineered to withstand Malawi's ground and climate conditions.",
  },
  {
    icon: Wrench,
    no: "02",
    title: "Steel Fabrication",
    text: "In-house welding, trusses, gates, tanks and custom metal work fabricated to drawing and finished to spec.",
  },
  {
    icon: Zap,
    no: "03",
    title: "Electrical Installations",
    text: "Distribution boards, industrial wiring, backup systems and solar installations — tested, certified and safe.",
  },
  {
    icon: Ruler,
    no: "04",
    title: "Design & Drafting",
    text: "Site layouts, structural detailing and BOQs prepared before a single bag of cement is opened.",
  },
  {
    icon: HardHat,
    no: "05",
    title: "Project Supervision",
    text: "Full-time site supervision, materials control and contractor coordination from groundbreaking to handover.",
  },
  {
    icon: Compass,
    no: "06",
    title: "Maintenance & Retrofit",
    text: "Plant servicing, structural repairs and building upgrades that extend asset life instead of replacing it.",
  },
];

const STATS = [
  { value: "681+", label: "Community followers" },
  { value: "120+", label: "Projects delivered" },
  { value: "25", label: "Skilled engineers" },
  { value: "100%", label: "Handover rate" },
];

const PROJECTS = [
  {
    img: project1,
    tag: "Commercial",
    title: "Glass Tower Office Complex",
    place: "Lilongwe City Centre",
    cls: "lg:col-span-7 lg:aspect-[16/10]",
  },
  {
    img: project2,
    tag: "Fabrication",
    title: "Heavy Steel Workshop Line",
    place: "Area 3 Yard",
    cls: "lg:col-span-5 lg:mt-20 lg:aspect-[4/5] lg:rotate-[1.2deg]",
  },
  {
    img: project3,
    tag: "Infrastructure",
    title: "M1 Corridor Bridge Works",
    place: "Central Region",
    cls: "lg:col-span-5 lg:-mt-10 lg:aspect-[4/5] lg:-rotate-[1.2deg]",
  },
  {
    img: project4,
    tag: "Energy",
    title: "Rooftop Solar Deployment",
    place: "Blantyre",
    cls: "lg:col-span-7 lg:mt-6 lg:aspect-[16/10]",
  },
];

const PROCESS = [
  { no: "01", title: "Site Survey", text: "We measure, test the ground and photograph every constraint before quoting." },
  { no: "02", title: "Design & BOQ", text: "Drawings, load calculations and a transparent bill of quantities you can audit." },
  { no: "03", title: "Build", text: "Certified crews, scheduled materials and weekly progress reports from site." },
  { no: "04", title: "Handover", text: "Testing, commissioning, as-built drawings and a maintenance window." },
];

const WHY = [
  "Licensed engineers on every site",
  "Fixed-scope quotations, no hidden extras",
  "Own fabrication yard and plant",
  "Safety-first crews with full PPE",
];

function Stamp() {
  return (
    <div className="spin-slow absolute -left-8 -top-8 z-20 grid size-28 place-items-center rounded-full bg-primary text-primary-foreground sm:size-32">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
        <defs>
          <path id="stampCircle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current text-[10.5px] font-bold uppercase" style={{ letterSpacing: "0.18em" }}>
          <textPath href="#stampCircle">Kapos Engineering · Lilongwe · Est. Malawi ·</textPath>
        </text>
      </svg>
      <HardHat className="size-8" />
    </div>
  );
}

function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background">
      {/* Hazard strip */}
      <div className="hazard-stripes h-2.5 w-full" aria-hidden />

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 border-b-2 border-ink transition-colors ${
          scrolled ? "bg-background/95 backdrop-blur-md" : "bg-background"
        }`}
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-5 py-3 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid size-12 place-items-center border-2 border-ink bg-card hard-shadow-sm">
              <img src={logo} alt="Kapos Engineering Group logo" width={40} height={40} className="size-9 object-contain" />
            </span>
            <span className="hidden font-display text-2xl uppercase leading-[0.85] tracking-wide sm:block">
              Kapos
              <span className="block font-sans text-[0.58rem] font-bold tracking-[0.34em] text-primary">
                Engineering Group
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n, i) => (
              <a
                key={n.label}
                href={n.href}
                className="group flex items-baseline gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-primary"
              >
                <span className="font-display text-[0.65rem] text-primary">0{i + 1}</span>
                <span className="underline-offset-4 group-hover:underline">{n.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+265995534547"
              className="hidden items-center gap-2 border-2 border-ink bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-ink-foreground transition-all hover:-translate-y-0.5 hover:bg-primary hover:border-primary sm:inline-flex"
            >
              <Phone className="size-3.5" /> +265 995 53 45 47
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center border-2 border-ink bg-card lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t-2 border-ink bg-background px-6 py-4 lg:hidden">
            {NAV.map((n, i) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-border py-3.5 font-display text-2xl uppercase tracking-wide last:border-0"
              >
                <span className="font-sans text-[0.6rem] font-bold tracking-[0.3em] text-primary">0{i + 1}</span>
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        <span
          aria-hidden
          className="outline-text pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[26vw] leading-none opacity-[0.07]"
        >
          KAPOS KAPOS
        </span>

        <div className="relative mx-auto grid max-w-[90rem] gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-20">
          <div className="rise-in">
            <div className="flex flex-wrap items-center gap-3">
              <span className="spec-label border-2 border-ink bg-primary px-3 py-1.5 text-primary-foreground">
                Engineering works
              </span>
              <span className="spec-label border-2 border-ink bg-card px-3 py-1.5">Lilongwe · Malawi</span>
            </div>

            <h1 className="mt-8 font-display text-[clamp(4rem,11vw,10.5rem)] uppercase leading-[0.82] tracking-wide">
              Built
              <br />
              <span className="text-primary">to outlast</span>
              <br />
              the blueprint<span className="text-primary">.</span>
            </h1>

            <p className="mt-8 max-w-xl border-l-4 border-primary pl-5 text-lg leading-relaxed text-muted-foreground">
              Kapos Engineering Group delivers civil, structural, fabrication and electrical works with drawings you can
              trust, crews you can see, and handovers that happen on the date we promised.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border-2 border-ink bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground hard-shadow-sm transition-all hover:-translate-y-1 hover:hard-shadow"
              >
                Start your project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-bold uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
              >
                See the work <ArrowDownRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <Stamp />
            <figure className="relative rotate-[1.5deg] border-2 border-ink bg-card p-3 hard-shadow transition-transform duration-500 hover:rotate-0">
              <img
                src={heroImg}
                alt="Kapos engineers reviewing structural drawings on site in Lilongwe"
                width={1200}
                height={1408}
                className="aspect-[4/5] w-full border-2 border-ink object-cover"
              />
              <figcaption className="flex items-center justify-between px-1 pt-3 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                <span>Fig. 01 — Site review, Lilongwe</span>
                <span className="text-primary">KEG/2026</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b-2 border-ink bg-ink py-4 text-ink-foreground">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-2xl uppercase tracking-[0.12em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-12">
              {["Civil Works", "Steel Fabrication", "Electrical", "Solar", "Supervision", "Maintenance", "Surveys"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-12">
                    {t} <span className="text-primary">✦</span>
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="relative overflow-hidden py-24 lg:py-32">
        <span
          aria-hidden
          className="outline-text pointer-events-none absolute right-0 top-10 hidden select-none font-display text-[11rem] leading-none opacity-10 xl:block"
        >
          01
        </span>
        <div className="mx-auto grid max-w-[90rem] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative order-2 lg:order-1">
            <figure className="relative -rotate-[1.5deg] border-2 border-ink bg-card p-3 hard-shadow transition-transform duration-500 hover:rotate-0">
              <img
                src={aboutImg}
                alt="Kapos site engineer inspecting a steel structure"
                width={1008}
                height={1200}
                loading="lazy"
                className="aspect-[4/5] w-full border-2 border-ink object-cover"
              />
              <figcaption className="flex items-center justify-between px-1 pt-3 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                <span>Fig. 02 — Steel inspection</span>
                <span className="text-primary">Area 3 Yard</span>
              </figcaption>
            </figure>
            <div className="absolute -bottom-8 -right-2 z-10 w-60 rotate-[1deg] border-2 border-ink bg-primary p-5 text-primary-foreground hard-shadow-sm sm:-right-6">
              <p className="font-display text-3xl uppercase leading-none">Registered & on the ground</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] opacity-90">
                Area 3 Market · Box 96 · Lilongwe
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="spec-label text-primary">
              <span className="h-0.5 w-10 bg-primary" /> Fig. 01 — Who we are
            </span>
            <h2 className="mt-6 font-display text-6xl uppercase leading-[0.88] sm:text-7xl lg:text-8xl">
              Precision<span className="text-primary">,</span>
              <br />
              not promises<span className="text-primary">.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Kapos Engineering Group is a Malawian engineering works company operating out of Lilongwe. We take on the
              work most contractors sub-contract away — structural detailing, fabrication, installation and
              commissioning — and keep it under one roof so accountability never gets lost.
            </p>
            <ul className="mt-9 grid max-w-xl gap-px border-2 border-ink bg-ink sm:grid-cols-2">
              {WHY.map((w) => (
                <li key={w} className="flex items-start gap-3 bg-card p-4 text-sm font-semibold">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  {w}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#services"
                className="group inline-flex items-center gap-3 border-2 border-ink bg-ink px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ink-foreground hard-shadow-sm transition-all hover:-translate-y-1 hover:bg-primary hover:border-primary"
              >
                Explore services <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="text-sm">
                <p className="font-display text-2xl uppercase tracking-wide">Pearson Kaponda</p>
                <p className="text-muted-foreground">Founder & Lead Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — editorial index */}
      <section id="services" className="border-y-2 border-ink bg-paper-deep py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="spec-label text-primary">
                <span className="h-0.5 w-10 bg-primary" /> Fig. 02 — What we do
              </span>
              <h2 className="mt-6 font-display text-6xl uppercase leading-[0.88] sm:text-7xl lg:text-8xl">
                The index of <span className="outline-text">works</span>
              </h2>
            </div>
            <p className="max-w-sm border-l-4 border-primary pl-5 text-muted-foreground">
              From the first survey peg to the final commissioning certificate — one team, one line of responsibility.
            </p>
          </div>

          <div className="mt-14 border-t-2 border-ink">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group relative grid cursor-pointer items-center gap-4 border-b-2 border-ink py-7 transition-colors hover:bg-ink sm:grid-cols-[5rem_1fr_auto] lg:grid-cols-[7rem_1.1fr_1fr_3rem] lg:gap-10"
              >
                <span className="font-display text-5xl leading-none text-primary/60 transition-colors group-hover:text-primary lg:text-6xl">
                  {s.no}
                </span>
                <h3 className="flex items-center gap-4 font-display text-3xl uppercase leading-none tracking-wide transition-colors group-hover:text-ink-foreground sm:text-4xl">
                  <s.icon className="size-7 shrink-0 text-primary" />
                  {s.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-ink-foreground/70 sm:col-start-2 lg:col-start-3">
                  {s.text}
                </p>
                <ArrowUpRight className="hidden size-7 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 lg:block" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — oversized */}
      <section className="relative overflow-hidden py-20">
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-[90rem] grid-cols-2 gap-y-12 px-5 sm:px-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className={`${i > 0 ? "lg:border-l-2 lg:border-ink lg:pl-10" : ""}`}>
              <p className="font-display text-7xl leading-none sm:text-8xl lg:text-9xl">
                {s.value.replace("+", "").replace("%", "")}
                <span className="text-primary">{s.value.includes("+") ? "+" : s.value.includes("%") ? "%" : ""}</span>
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects — broken grid */}
      <section id="projects" className="border-t-2 border-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="spec-label text-primary">
                <span className="h-0.5 w-10 bg-primary" /> Fig. 03 — Selected works
              </span>
              <h2 className="mt-6 font-display text-6xl uppercase leading-[0.88] sm:text-7xl lg:text-8xl">
                On the ground<span className="text-primary">.</span>
              </h2>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border-2 border-ink bg-card px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] hard-shadow-sm transition-all hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              Request portfolio <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {PROJECTS.map((p, i) => (
              <article key={p.title} className={`group ${p.cls}`}>
                <figure className="border-2 border-ink bg-card p-2.5 hard-shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:hard-shadow">
                  <div className="relative overflow-hidden border-2 border-ink">
                    <img
                      src={p.img}
                      alt={p.title}
                      width={900}
                      height={1100}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 border-2 border-ink bg-primary px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-primary-foreground">
                      {p.tag}
                    </span>
                  </div>
                  <figcaption className="flex items-start justify-between gap-4 px-1 pb-1 pt-4">
                    <div>
                      <h3 className="font-display text-2xl uppercase leading-none tracking-wide sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                        {p.place}
                      </p>
                    </div>
                    <span className="font-display text-xl text-primary">0{i + 1}</span>
                  </figcaption>
                </figure>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-y-2 border-ink bg-paper-deep py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
          <span className="spec-label text-primary">
            <span className="h-0.5 w-10 bg-primary" /> Fig. 04 — How we work
          </span>
          <h2 className="mt-6 font-display text-6xl uppercase leading-[0.88] sm:text-7xl lg:text-8xl">
            Four steps<span className="text-primary">,</span> zero surprises<span className="text-primary">.</span>
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <div
                key={p.no}
                className={`group relative border-2 border-ink bg-card p-7 hard-shadow-sm transition-all hover:-translate-y-2 hover:hard-shadow ${
                  i % 2 === 1 ? "lg:mt-10" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="outline-text font-display text-7xl leading-none">{p.no}</span>
                  <span className="mt-1 grid size-9 place-items-center border-2 border-ink bg-primary text-primary-foreground">
                    <ArrowDownRight className="size-4" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase leading-none tracking-wide">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <span className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-ink py-24 text-ink-foreground lg:py-32">
        <div className="blueprint-grid-ink absolute inset-0" aria-hidden />
        <span
          aria-hidden
          className="outline-text-paper pointer-events-none absolute -bottom-8 right-0 hidden select-none font-display text-[13rem] leading-none xl:block"
        >
          KEG
        </span>
        <div className="relative mx-auto grid max-w-[90rem] gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="spec-label text-primary">
              <span className="h-0.5 w-10 bg-primary" /> Fig. 05 — Get in touch
            </span>
            <h2 className="mt-6 font-display text-6xl uppercase leading-[0.88] sm:text-7xl lg:text-8xl">
              Let's build what <span className="text-primary">lasts.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-foreground/65">
              Send us the scope, the site or just the idea. We'll come back with a survey date and a straight answer.
            </p>

            <div className="mt-12 space-y-0 border-2 border-ink-foreground/20">
              {[
                { icon: MapPin, label: "Office", value: "Area 3 Market, Box 96, Lilongwe, Malawi" },
                { icon: Phone, label: "Phone", value: "+265 995 53 45 47", href: "tel:+265995534547" },
                { icon: Mail, label: "Email", value: "pearsonkaponda.pk@gmail.com", href: "mailto:pearsonkaponda.pk@gmail.com" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="group flex items-center gap-5 border-b-2 border-ink-foreground/20 p-5 transition-colors last:border-0 hover:bg-ink-soft"
                >
                  <span className="grid size-12 shrink-0 place-items-center border-2 border-ink-foreground/25 bg-primary text-primary-foreground">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-ink-foreground/50">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block break-all font-semibold hover:text-primary">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-semibold">{c.value}</p>
                    )}
                  </div>
                  <ArrowUpRight className="ml-auto size-5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          <form
            className="border-2 border-ink-foreground/20 bg-background p-7 text-foreground hard-shadow sm:p-10"
            style={{ boxShadow: "14px 14px 0 0 oklch(0.55 0.17 45)" }}
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget;
              const data = new FormData(f);
              const body = `Name: ${data.get("name")}%0AEmail: ${data.get("email")}%0APhone: ${data.get(
                "phone",
              )}%0A%0A${data.get("message")}`;
              window.location.href = `mailto:pearsonkaponda.pk@gmail.com?subject=Project enquiry&body=${body}`;
            }}
          >
            <h3 className="font-display text-4xl uppercase leading-none tracking-wide">Request a quote</h3>
            <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
              Response within one working day
            </p>
            <div className="mt-8 grid gap-4">
              <input
                name="name"
                required
                placeholder="Full name"
                className="w-full border-2 border-ink bg-card px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full border-2 border-ink bg-card px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                />
                <input
                  name="phone"
                  placeholder="Phone number"
                  className="w-full border-2 border-ink bg-card px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about the project, site and timeline"
                className="w-full resize-none border-2 border-ink bg-card px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 border-2 border-ink bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all hover:-translate-y-1"
              >
                Send enquiry <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-ink bg-background">
        <div className="mx-auto max-w-[90rem] px-5 pt-16 sm:px-8">
          <div className="grid gap-12 pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="grid size-14 place-items-center border-2 border-ink bg-card hard-shadow-sm">
                  <img src={logo} alt="Kapos Engineering Group" width={48} height={48} loading="lazy" className="size-11 object-contain" />
                </span>
                <p className="font-display text-3xl uppercase leading-[0.85] tracking-wide">
                  Kapos
                  <span className="block font-sans text-[0.6rem] font-bold tracking-[0.34em] text-primary">
                    Engineering Group
                  </span>
                </p>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Engineering works company delivering civil, structural, fabrication and electrical projects across
                Malawi from our base in Lilongwe.
              </p>
            </div>
            <div>
              <h4 className="spec-label text-primary">Index</h4>
              <ul className="mt-5 space-y-3 text-sm font-semibold">
                {[{ label: "Home", href: "#top" }, ...NAV].map((n) => (
                  <li key={n.label}>
                    <a href={n.href} className="transition-colors hover:text-primary">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="spec-label text-primary">Contact</h4>
              <ul className="mt-5 space-y-3 text-sm font-semibold text-muted-foreground">
                <li>Area 3 Market, Box 96, Lilongwe, Malawi</li>
                <li>
                  <a href="tel:+265995534547" className="hover:text-primary">
                    +265 995 53 45 47
                  </a>
                </li>
                <li>
                  <a href="mailto:pearsonkaponda.pk@gmail.com" className="break-all hover:text-primary">
                    pearsonkaponda.pk@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div aria-hidden className="overflow-hidden border-t-2 border-ink px-2">
          <p className="outline-text select-none whitespace-nowrap text-center font-display text-[16vw] leading-[0.85] opacity-15">
            KAPOS ENGINEERING
          </p>
        </div>

        <div className="border-t-2 border-ink">
          <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-4 px-5 py-5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted-foreground sm:px-8">
            <p>© {new Date().getFullYear()} Kapos Engineering Group</p>
            <p>681 followers · Engineering Works · Malawi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
