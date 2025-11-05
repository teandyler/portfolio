"use client";

import Image from "next/image";

const caseStudies = [
  {
    title: "Resident Onboarding Experience",
    role: "Director of UX • 2024",
    summary: "Reduced time-to-complete by 38% through task-based flows.",
    href: "#",
  },
  {
    title: "Design Advocacy Program",
    role: "Org-wide initiative",
    summary: "Lifted design consistency across 6 product teams.",
    href: "#",
  },
  {
    title: "AI-Assisted Spec Catalyst",
    role: "Product vision & UX",
    summary: "Improved PM-to-design handoff and prototyping speed.",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top nav */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-emerald-400/90 text-slate-950 grid place-items-center text-sm font-semibold">
              TM
            </span>
            <span className="text-sm font-medium tracking-tight text-slate-100">
              Tyler Mundy
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            <a href="#work" className="hover:text-emerald-200 transition">
              Case Studies
            </a>
            <a href="#approach" className="hover:text-emerald-200 transition">
              Approach
            </a>
            <a href="#about" className="hover:text-emerald-200 transition">
              About
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-emerald-400 px-4 py-1.5 text-sm font-medium text-slate-950 hover:bg-emerald-300 transition"
          >
            Let’s talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Director of UX / Product Design Leader
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            I help teams ship experiences
            <span className="text-emerald-300"> users trust.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
            13+ years leading UX for complex, multi-tenant, B2B/B2C platforms.
            I build design systems, mature product teams, and deliver
            story-worthy outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-300 transition"
            >
              View case studies
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 hover:border-slate-500 transition"
            >
              Leadership & approach
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-xs text-slate-400">
            <div>
              <p className="text-2xl font-semibold text-slate-50">13+</p>
              <p>Years in UX</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-50">6</p>
              <p>Product orgs guided</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-50">40+</p>
              <p>Designers mentored</p>
            </div>
          </div>
        </div>

        {/* Side card / hero visual */}
        <div className="flex-1">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-emerald-400/5">
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-200">
              Featured Work
            </p>
            <h2 className="mt-3 text-lg font-semibold text-slate-50">
              Modernizing the property management experience
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Led a cross-functional initiative to unify resident, staff, and
              owner portals into a single, consistent system—driving adoption
              and reducing support.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 text-xs">
              <div className="rounded-lg bg-slate-950/40 p-3">
                <p className="text-slate-200">+38% task completion</p>
                <p className="text-slate-400">Form + flow optimization</p>
              </div>
              <div className="rounded-lg bg-slate-950/40 p-3">
                <p className="text-slate-200">Design system adoption</p>
                <p className="text-slate-400">Entrata UI foundation</p>
              </div>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-50/5 px-4 py-2 text-sm text-slate-50 hover:bg-slate-50/10 transition">
              View the case study
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section
        id="work"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">
              Selected case studies
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              A mix of product strategy, design systems, and team-level
              enablement work.
            </p>
          </div>
          <a
            href="#"
            className="text-sm text-emerald-200 hover:text-emerald-100"
          >
            Request full portfolio →
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/30 p-5 transition hover:border-emerald-300/80 hover:bg-slate-900"
            >
              <h3 className="text-base font-semibold text-slate-50">
                {study.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400">{study.role}</p>
              <p className="mt-3 text-sm text-slate-300">{study.summary}</p>
              <a
                href={study.href}
                className="mt-5 inline-flex items-center gap-1 text-sm text-emerald-200 group-hover:gap-1.5 transition-all"
              >
                View case study
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section
        id="approach"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">
              How I lead UX
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              My bias is toward shipping, but not at the expense of clarity. I
              partner closely with PMs and Engineering to reduce ambiguity,
              translate strategy into experiences, and build systems that scale
              beyond a single project.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4">
              <p className="text-sm font-semibold text-slate-50">
                Product-first UX
              </p>
              <p className="mt-2 text-xs text-slate-400">
                I ground design decisions in business constraints, jobs to be
                done, and measurable outcomes.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4">
              <p className="text-sm font-semibold text-slate-50">
                Design systems
              </p>
              <p className="mt-2 text-xs text-slate-400">
                I’ve built and rolled out component libraries, Figma kits, and
                guardrails to keep teams consistent.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4">
              <p className="text-sm font-semibold text-slate-50">
                Team enablement
              </p>
              <p className="mt-2 text-xs text-slate-400">
                I coach designers to present, defend, and iterate—raising the
                ceiling across the org.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4">
              <p className="text-sm font-semibold text-slate-50">
                AI & prototyping
              </p>
              <p className="mt-2 text-xs text-slate-400">
                I use tools like Figma Make, Storybook, and React prototypes to
                close the gap with engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / contact */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">About</h2>
            <p className="mt-3 text-sm text-slate-300">
              I’ve led UX in environments where reliability, integrations, and
              role-based access matter. I enjoy making complex admin tools feel
              humane, and helping product leadership see UX as a force
              multiplier—not a bottleneck.
            </p>
          </div>
          <div id="contact" className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
            <h3 className="text-sm font-semibold text-slate-50">
              Need the full stories?
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              I have deeper decks on program-building, design system rollout,
              and AI-powered design workflows.
            </p>
            <form className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-200"
                >
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-300"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-200"
                >
                  What are you working on?
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-300"
                  placeholder="Executive-ready UX case studies, design system health, team maturity..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-300 transition"
              >
                Request portfolio
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Tyler Mundy. Director of UX.
      </footer>
    </main>
  );
}
