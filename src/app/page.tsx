import React from "react";
import Metrics from "@/components/Metrics";
import TourCard from "@/components/TourCard";
import LeadForm from "@/components/LeadForm";
import { ArrowUpRight, Layers, Layout, ShieldCheck, Zap } from "lucide-react";

const SAMPLE_PROJECTS = [
  {
    id: "tour-1",
    title: "Tour 1",
    client: "NZRA",
    embedUrl: "https://kuula.co/share/collection/7Tfmh?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1",
    description:
      "Interactive 360° walkthrough designed for a clean branded viewing experience.",
    metrics: { label: "Tour", value: "01" },
  },
  {
    id: "tour-2",
    title: "Tour 2",
    client: "NZRA",
    embedUrl: "https://kuula.co/share/collection/7TpCH?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1",
    description:
      "A second curated tour for presenting property details in a seamless format.",
    metrics: { label: "Tour", value: "02" },
  },
  {
    id: "tour-3",
    title: "Tour 3",
    client: "NZRA",
    embedUrl: "https://kuula.co/share/collection/7TpM0?logo=-1&card=1&info=0&fs=1&vr=1&gyro=0&thumbs=-1&margin=3",
    description:
      "Optimized tour layout for a distraction-free experience and faster engagement.",
    metrics: { label: "Tour", value: "03" },
  },
  {
    id: "tour-4",
    title: "Tour 4",
    client: "NZRA",
    embedUrl: "https://kuula.co/share/collection/7Tpmx?logo=-1&card=1&info=0&fs=1&vr=1&gyro=0&thumbs=-1&margin=3",
    description:
      "Final tour entry with immersive viewing and a consistent NZRA presentation.",
    metrics: { label: "Tour", value: "04" },
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen pt-20">
      <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden border-b border-zinc-900 px-6 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950" />

        <div className="max-w-5xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-amber-400">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            NZRA Property Visualization
          </div>

          <h1 className="text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            We turn floor plans into{" "}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text font-normal text-transparent">
              immersive tours.
            </span>
          </h1>

          <p className="max-w-2xl text-lg font-light leading-relaxed text-zinc-400 sm:text-xl">
            NZRA delivers fast, interactive 3D walkthroughs and curated virtual
            tours for premium property presentations.
          </p>

          <div className="flex flex-col items-stretch gap-4 pt-4 sm:flex-row sm:items-center">
            <a
              href="#book-demo"
              className="inline-flex items-center justify-center rounded-sm bg-zinc-100 px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:bg-white active:scale-[0.98]"
            >
              Book a Strategy Demo
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-sm border border-zinc-800 bg-zinc-900/40 px-8 py-4 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-900"
            >
              View Tours <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Metrics />

      <section id="portfolio" className="border-b border-zinc-900 px-6 py-24 lg:px-16">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-500">
            Interactive Tours
          </p>
          <h2 className="text-3xl font-light tracking-tight text-zinc-100 sm:text-5xl">
            Explore the featured NZRA tours
          </h2>
          <p className="mt-4 font-light text-zinc-400">
            Click any tour below to launch the live 360° experience.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {SAMPLE_PROJECTS.map((project) => (
            <TourCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-zinc-950/40 px-6 py-24 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              The Workflow
            </p>
            <h3 className="text-3xl font-light tracking-tight sm:text-4xl">
              From raw layouts to web-ready presentations.
            </h3>
            <p className="font-light leading-relaxed text-zinc-400">
              We take your project assets and transform them into polished,
              branded tours.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            <div className="rounded-sm border border-zinc-900 bg-zinc-900/20 p-6">
              <Layout className="mb-4 h-6 w-6 text-amber-400" />
              <h4 className="mb-2 font-medium text-zinc-200">1. Asset Intake</h4>
              <p className="text-sm font-light text-zinc-400">
                Submit your property files or reference material.
              </p>
            </div>
            <div className="rounded-sm border border-zinc-900 bg-zinc-900/20 p-6">
              <Layers className="mb-4 h-6 w-6 text-amber-400" />
              <h4 className="mb-2 font-medium text-zinc-200">2. Tour Assembly</h4>
              <p className="text-sm font-light text-zinc-400">
                We prepare a clean, branded virtual tour experience.
              </p>
            </div>
            <div className="rounded-sm border border-zinc-900 bg-zinc-900/20 p-6">
              <Zap className="mb-4 h-6 w-6 text-amber-400" />
              <h4 className="mb-2 font-medium text-zinc-200">3. Optimization</h4>
              <p className="text-sm font-light text-zinc-400">
                Tours are tuned for fast loading and smooth interaction.
              </p>
            </div>
            <div className="rounded-sm border border-zinc-900 bg-zinc-900/20 p-6">
              <ShieldCheck className="mb-4 h-6 w-6 text-amber-400" />
              <h4 className="mb-2 font-medium text-zinc-200">4. Delivery</h4>
              <p className="text-sm font-light text-zinc-400">
                Deliver embedded or direct-link tour access for your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="book-demo" className="mx-auto max-w-7xl px-6 py-24 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <h2 className="text-3xl font-light tracking-tight sm:text-5xl">
              Contact NZRA on WhatsApp.
            </h2>
            <p className="font-light leading-relaxed text-zinc-400">
              Reach us directly for tour requests, project questions, and new
              branding updates.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-sm border border-zinc-900 bg-zinc-900/30 p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
