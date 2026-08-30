import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
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
  ShieldCheck,
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
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Building2,
    title: "Civil & Structural Works",
    text: "Foundations, reinforced concrete frames, slabs and structural surveys engineered to withstand Malawi's ground and climate conditions.",
  },
  {
    icon: Wrench,
    title: "Steel Fabrication",
    text: "In-house welding, trusses, gates, tanks and custom metal work fabricated to drawing and finished to spec.",
  },
  {
    icon: Zap,
    title: "Electrical Installations",
    text: "Distribution boards, industrial wiring, backup systems and solar installations — tested, certified and safe.",
  },
  {
    icon: Ruler,
    title: "Design & Drafting",
    text: "Site layouts, structural detailing and BOQs prepared before a single bag of cement is opened.",
  },
  {
    icon: HardHat,
    title: "Project Supervision",
    text: "Full-time site supervision, materials control and contractor coordination from groundbreaking to handover.",
  },
  {
    icon: Compass,
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
  { img: project1, tag: "Commercial", title: "Glass Tower Office Complex", place: "Lilongwe City Centre" },
  { img: project2, tag: "Fabrication", title: "Heavy Steel Workshop Line", place: "Area 3 Yard" },
  { img: project3, tag: "Infrastructure", title: "M1 Corridor Bridge Works", place: "Central Region" },
  { img: project4, tag: "Energy", title: "Rooftop Solar Deployment", place: "Blantyre" },
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
      {/* Top strip */}
      <div className="hidden bg-ink text-ink-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-xs tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="size-3.5 text-primary" /> Area 3 Market, Box 96, Lilongwe, Malawi
            </span>
            <span className="flex items-center gap-2">
              <Mail className="size-3.5 text-primary" /> pearsonkaponda.pk@gmail.com
            </span>
          </div>
          <span className="flex items-center gap-2 font-semibold">
            <Phone className="size-3.5 text-primary" /> +265 995 53 45 47
          </span>
        </div>
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 border-b transition-all ${
          scrolled ? "border-border bg-background/90 backdrop-blur-xl" : "border-transparent bg-background"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Kapos Engineering Group logo" width={56} height={56} className="h-11 w-auto" />
            <span className="hidden font-display text-lg font-black uppercase leading-none tracking-tight sm:block">
              Kapos
              <span className="block text-[0.6rem] font-semibold tracking-[0.3em] text-muted-foreground">
                Engineering Group
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="font-display text-xs font-bold uppercase tracking-[0.16em] text-foreground/70 transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 bg-primary px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Get a quote <ArrowUpRight className="size-4" />
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center bg-ink text-ink-foreground lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 font-display text-sm font-bold uppercase tracking-[0.16em] last:border-0"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
        <div className="absolute -right-24 top-0 hidden h-full w-1/2 skew-x-[-8deg] bg-primary/10 lg:block" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="rise-in">
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" /> Engineering works · Lilongwe, Malawi
            </span>
            <h1 className="mt-6 font-display text-5xl font-black uppercase leading-[0.92] sm:text-6xl lg:text-7xl">
              We Engineer
              <br />
              What Malawi
              <br />
              <span className="ember-text">Builds On.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-foreground/70">
              Kapos Engineering Group delivers civil, structural, fabrication and electrical works with drawings you can
              trust, crews you can see, and handovers that happen on the date we promised.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-1"
              >
                Start your project <ArrowUpRight className="size-4" />
              </a>
              <a
                href="tel:+265995534547"
                className="inline-flex items-center gap-3 border border-ink-foreground/25 px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="size-4" /> +265 995 53 45 47
              </a>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-foreground/15 pt-8">
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-black text-primary">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-foreground/55">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 hidden size-32 border-4 border-primary lg:block" aria-hidden />
            <img
              src={heroImg}
              alt="Kapos engineers reviewing structural drawings on site in Lilongwe"
              width={1200}
              height={1408}
              className="relative z-10 aspect-4/5 w-full object-cover"
            />
            <div className="relative z-20 -mt-14 ml-auto w-64 bg-primary p-6 text-primary-foreground sm:-mt-16">
              <p className="font-display text-4xl font-black leading-none">25</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em]">
                Engineers, welders & site crew ready to mobilise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-primary py-4 text-primary-foreground">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.3em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              {["Civil Works", "Steel Fabrication", "Electrical", "Solar", "Supervision", "Maintenance", "Surveys"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-10">
                    {t} <span className="opacity-50">/</span>
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Kapos site engineer inspecting a steel structure"
              width={1008}
              height={1200}
              loading="lazy"
              className="aspect-4/5 w-full object-cover soft-shadow"
            />
            <div className="absolute bottom-6 right-0 w-56 translate-x-4 bg-ink p-6 text-ink-foreground sm:w-64">
              <ShieldCheck className="size-7 text-primary" />
              <p className="mt-3 font-display text-sm font-bold uppercase leading-snug tracking-wide">
                Registered engineering works, based in Area 3 Market, Lilongwe
              </p>
            </div>
          </div>

          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" /> Who we are
            </span>
            <h2 className="mt-5 text-4xl uppercase leading-[1.02] sm:text-5xl">
              A Malawian engineering house built on precision, not promises.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Kapos Engineering Group is an engineering works company operating out of Lilongwe, serving clients across
              Malawi. We take on the work most contractors sub-contract away — structural detailing, fabrication,
              installation and commissioning — and keep it under one roof so accountability never gets lost.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {WHY.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  {w}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-ink px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.16em] text-ink-foreground transition-transform hover:-translate-y-1"
              >
                Explore services <ArrowUpRight className="size-4" />
              </a>
              <div className="text-sm">
                <p className="font-display font-bold uppercase tracking-wide">Pearson Kaponda</p>
                <p className="text-muted-foreground">Founder & Lead Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">
                <span className="h-px w-8 bg-primary" /> What we do
              </span>
              <h2 className="mt-5 text-4xl uppercase leading-[1.02] sm:text-5xl">
                Solutions for every stage of the build.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              From the first survey peg to the final commissioning certificate — one team, one line of responsibility.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="group relative bg-background p-9 transition-colors hover:bg-ink">
                <s.icon className="size-9 text-primary" />
                <h3 className="mt-6 text-xl uppercase transition-colors group-hover:text-ink-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-ink-foreground/70">
                  {s.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Learn more <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-primary pl-5">
              <p className="font-display text-4xl font-black sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-foreground/55">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" /> Selected works
            </span>
            <h2 className="mt-5 text-4xl uppercase leading-[1.02] sm:text-5xl">Project clarity, on the ground.</h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-ink px-7 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:bg-ink hover:text-ink-foreground"
          >
            Request portfolio <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group relative overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                width={900}
                height={1100}
                loading="lazy"
                className="aspect-3/4 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/25 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ink-foreground">
                <span className="bg-primary px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary-foreground">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-lg uppercase leading-tight">{p.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-foreground/60">{p.place}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" /> How we work
            </span>
            <h2 className="mt-5 text-4xl uppercase leading-[1.02] sm:text-5xl">Four steps, zero surprises.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.no} className="relative border-t-4 border-ink bg-background p-8 transition-colors hover:border-primary">
                <span className="font-display text-5xl font-black text-primary/25">{p.no}</span>
                <h3 className="mt-4 text-xl uppercase">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section id="contact" className="relative overflow-hidden bg-ink py-24 text-ink-foreground">
        <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" /> Get in touch
            </span>
            <h2 className="mt-5 text-4xl uppercase leading-[1.02] sm:text-5xl">
              Let's build what <span className="ember-text">lasts.</span>
            </h2>
            <p className="mt-5 max-w-md text-ink-foreground/70">
              Send us the scope, the site or just the idea. We'll come back with a survey date and a straight answer.
            </p>

            <div className="mt-10 grid gap-px bg-ink-foreground/10 sm:grid-cols-2">
              <div className="bg-ink-soft p-6">
                <MapPin className="size-6 text-primary" />
                <p className="mt-3 font-display text-xs font-bold uppercase tracking-[0.16em]">Office</p>
                <p className="mt-2 text-sm text-ink-foreground/70">Area 3 Market, Box 96, Lilongwe, Malawi</p>
              </div>
              <div className="bg-ink-soft p-6">
                <Phone className="size-6 text-primary" />
                <p className="mt-3 font-display text-xs font-bold uppercase tracking-[0.16em]">Phone</p>
                <a href="tel:+265995534547" className="mt-2 block text-sm text-ink-foreground/70 hover:text-primary">
                  +265 995 53 45 47
                </a>
              </div>
              <div className="bg-ink-soft p-6 sm:col-span-2">
                <Mail className="size-6 text-primary" />
                <p className="mt-3 font-display text-xs font-bold uppercase tracking-[0.16em]">Email</p>
                <a
                  href="mailto:pearsonkaponda.pk@gmail.com"
                  className="mt-2 block break-all text-sm text-ink-foreground/70 hover:text-primary"
                >
                  pearsonkaponda.pk@gmail.com
                </a>
              </div>
            </div>
          </div>

          <form
            className="bg-ink-soft p-8 sm:p-10"
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
            <h3 className="text-2xl uppercase">Request a quote</h3>
            <div className="mt-7 grid gap-4">
              <input
                name="name"
                required
                placeholder="Full name"
                className="w-full border border-ink-foreground/15 bg-ink px-4 py-3.5 text-sm outline-none placeholder:text-ink-foreground/40 focus:border-primary"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full border border-ink-foreground/15 bg-ink px-4 py-3.5 text-sm outline-none placeholder:text-ink-foreground/40 focus:border-primary"
                />
                <input
                  name="phone"
                  placeholder="Phone number"
                  className="w-full border border-ink-foreground/15 bg-ink px-4 py-3.5 text-sm outline-none placeholder:text-ink-foreground/40 focus:border-primary"
                />
              </div>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about the project, site and timeline"
                className="w-full resize-none border border-ink-foreground/15 bg-ink px-4 py-3.5 text-sm outline-none placeholder:text-ink-foreground/40 focus:border-primary"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-1"
              >
                Send enquiry <ArrowUpRight className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <img src={logo} alt="Kapos Engineering Group" width={120} height={120} loading="lazy" className="h-16 w-auto" />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Engineering works company delivering civil, structural, fabrication and electrical projects across
                Malawi from our base in Lilongwe.
              </p>
            </div>
            <div>
              <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em]">Quick links</h4>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {NAV.map((n) => (
                  <li key={n.label}>
                    <a href={n.href} className="transition-colors hover:text-primary">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em]">Contact</h4>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
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
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <p>© {new Date().getFullYear()} Kapos Engineering Group. All rights reserved.</p>
            <p>681 followers · Engineering Works · Malawi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
