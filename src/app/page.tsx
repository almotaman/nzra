import React from "react";
import Metrics from "@/components/Metrics";
import TourCard from "@/components/TourCard";
import LeadForm from "@/components/LeadForm";
import { ArrowUpRight, Layers, Layout, ShieldCheck, Zap } from "lucide-react";

const SAMPLE_PROJECTS = [
  {
    id: "lumina-penthouses",
    title: "The Lumina Grand Penthouses",
    client: "Acreage Development Group",
    embedUrl: "https://kuula.co/share/collection/7K9Xy",
    description:
      "Converted raw CAD layouts into an immersive digital walkthrough. Allowed the client to secure 65% pre-sales prior to groundbreaking.",
    metrics: { label: "Pre-Sales Secured", value: "65%" },
  },
  {
    id: "marina-heights",
    title: "Marina Heights Commercial Suite",
    client: "Nexus Brokerage",
    embedUrl: "https://kuula.co/share/collection/7K9Xy",
    description:
      "Full-scale 360° spatial mapping of commercial retail floors. Enabled remote overseas buyers to finalize lease agreements completely online.",
    metrics: { label: "Remote Closings", value: "14 Units" },
  },
  {
    id: "zaria-villas",
    title: "Zaria Luxury Eco-Villas",
    client: "Zaria Living",
    embedUrl: "https://kuula.co/share/collection/7K9Xy",
    description:
      "High-fidelity interior visualization optimized for rapid mobile loading. Reduced total real estate sales cycle duration significantly.",
    metrics: { label: "Sales Cycle Speed", value: "-40% Days" },
  },
];

const WHATSAPP_CONTACT_URL =
  "https://wa.me/01130615489?text=Hello%20NZRA%2C%20I%27d%20like%20to%20book%20a%20strategy%20demo.";

export default function HomePage() {
  return (
    <main className="relative min-h-screen pt-20">
      <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden border-b border-zinc-900 px-6 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950" />

        <div className="max-w-5xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-amber-400">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            High-Performance Spatial Web Visualization
          </div>

          <h1 className="text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            We turn floor plans into{" "}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text font-normal text-transparent">
              immersive sales engines.
            </span>
          </h1>

          <p className="max-w-2xl text-lg font-light leading-relaxed text-zinc-400 sm:text-xl">
            Stop losing premium prospects to static 2D galleries. We build
            lightning-fast, interactive 3D walkthroughs proven to accelerate
            pre-sales sequences and establish immediate buyer trust.
          </p>

          <div className="flex flex-col items-stretch gap-4 pt-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-zinc-100 px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:bg-white active:scale-[0.98]"
            >
              Book a Strategy Demo
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-sm border border-zinc-800 bg-zinc-900/40 px-8 py-4 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-900"
            >
              View Premium Projects <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Metrics />

      <section id="portfolio" className="border-b border-zinc-900 px-6 py-24 lg:px-16">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-500">
            Interactive Case Studies
          </p>
          <h2 className="text-3xl font-light tracking-tight text-zinc-100 sm:text-5xl">
            Engineered for Visual Dominance
          </h2>
          <p className="mt-4 font-light text-zinc-400">
            Click any deployment case below to launch the live, optimized 360°
            environment. Experience identical performance and frame rates as
            delivered directly to our enterprise clients.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_PROJECTS.map((project) => (
            <TourCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-zinc-950/40 px-6 py-24 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              The Deployment Workflow
            </p>
            <h3 className="text-3xl font-light tracking-tight sm:text-4xl">
              From raw blueprints to web-ready revenue assets.
            </h3>
            <p className="font-light leading-relaxed text-zinc-400">
              We eliminate traditional rendering friction. You provide spatial
              blueprints; we return an optimized, branded interactive suite
              completely integrated with client tracking features.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            <div className="rounded-sm border border-zinc-900 bg-zinc-900/20 p-6">
              <Layout className="mb-4 h-6 w-6 text-amber-400" />
              <h4 className="mb-2 font-medium text-zinc-200">1. Blueprint Intake</h4>
              <p className="text-sm font-light text-zinc-400">
                Submit your raw CAD files, BIM data, or 2D architectural sheets.
                We standardize architectural models instantly.
              </p>
            </div>
            <div className="rounded-sm border border-zinc-900 bg-zinc-900/20 p-6">
              <Layers className="mb-4 h-6 w-6 text-amber-400" />
              <h4 className="mb-2 font-medium text-zinc-200">2. Premium Conversion</h4>
              <p className="text-sm font-light text-zinc-400">
                Our engine generates accurate custom lighting environments,
                pristine PBR textures, and real-scale depth maps.
              </p>
            </div>
            <div className="rounded-sm border border-zinc-900 bg-zinc-900/20 p-6">
              <Zap className="mb-4 h-6 w-6 text-amber-400" />
              <h4 className="mb-2 font-medium text-zinc-200">3. Speed Optimization</h4>
              <p className="text-sm font-light text-zinc-400">
                Environments are optimized to bypass data bloat, loading globally
                under 2.5 seconds over standard mobile networks.
              </p>
            </div>
            <div className="rounded-sm border border-zinc-900 bg-zinc-900/20 p-6">
              <ShieldCheck className="mb-4 h-6 w-6 text-amber-400" />
              <h4 className="mb-2 font-medium text-zinc-200">4. Pipeline Integration</h4>
              <p className="text-sm font-light text-zinc-400">
                Get custom, white-labeled scripts ready to integrate into
                property sites, listing boards, or sales iPads.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="book-demo" className="mx-auto max-w-7xl px-6 py-24 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <h2 className="text-3xl font-light tracking-tight sm:text-5xl">
              Accelerate Your Property Sales Pipeline.
            </h2>
            <p className="font-light leading-relaxed text-zinc-400">
              Schedule an exclusive layout walkthrough. Learn how our custom
              interactive asset suites can directly reduce time-on-market metrics
              for your active developments.
            </p>
            <div className="space-y-4 pt-4 text-sm text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Complete deployment workflows within 7 business days
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Seamless custom iframe hosting or direct raw code export
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Native interface support across all iOS and Android systems
              </div>
            </div>
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
