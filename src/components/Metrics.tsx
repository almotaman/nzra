import React from "react";

const DATA_POINTS = [
  {
    value: "83%",
    label: "Faster Pre-Leasing Rates",
    description: "Compared to standard 2D print rendering collateral.",
  },
  {
    value: "4.2x",
    label: "Increased Session Retention",
    description: "Prospects remain engaged longer over listing paths.",
  },
  {
    value: "$12.4M",
    label: "Pipeline Value Facilitated",
    description: "Transacted completely via remote spatial walkthroughs.",
  },
];

export default function Metrics() {
  return (
    <section className="border-b border-zinc-900 bg-zinc-900/10 px-6 py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DATA_POINTS.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between space-y-2 border-l border-zinc-800 pl-6"
            >
              <div>
                <div className="text-4xl font-light tracking-tight text-zinc-100 sm:text-5xl">
                  {metric.value}
                </div>
                <div className="mt-1 text-sm font-medium tracking-wide text-zinc-300">
                  {metric.label}
                </div>
              </div>
              <p className="text-xs font-light leading-relaxed text-zinc-500">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
