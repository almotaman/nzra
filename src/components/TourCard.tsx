"use client";

import React, { useState } from "react";
import { Maximize2, Play } from "lucide-react";

interface TourCardProps {
  title: string;
  client: string;
  embedUrl: string;
  description: string;
  metrics: { label: string; value: string };
}

export default function TourCard({
  title,
  client,
  embedUrl,
  description,
  metrics,
}: TourCardProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="group flex flex-col justify-between rounded-sm border border-zinc-900 bg-zinc-950 p-5 transition-all hover:border-zinc-800">
      <div>
        <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-sm bg-zinc-900">
          {!isActive ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-zinc-950/90 p-4 text-center transition-opacity group-hover:bg-zinc-950/80">
              <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                {client}
              </div>
              <h4 className="mb-4 px-2 text-base font-medium text-zinc-200">{title}</h4>
              <button
                onClick={() => setIsActive(true)}
                className="inline-flex items-center gap-2 rounded-sm border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-400 transition-all hover:bg-zinc-800 hover:text-amber-300"
              >
                <Play className="h-3 w-3 fill-amber-400" /> Launch Tour
              </button>
            </div>
          ) : (
            <div className="relative h-full w-full">
              <iframe
                src={embedUrl}
                className="h-full w-full border-0"
                allowFullScreen
                allow="gyroscope; accelerometer; xr-spatial-tracking"
                loading="lazy"
              />
              <button
                onClick={() => window.open(embedUrl, "_blank")}
                className="absolute bottom-3 right-3 z-20 rounded-sm border border-zinc-800 bg-zinc-950/80 p-2 text-zinc-400 transition-colors hover:text-zinc-100"
                title="View Fullscreen"
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
            <span className="inline-block shrink-0 rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
              {metrics.value} {metrics.label}
            </span>
          </div>
          <p className="text-sm font-light leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
