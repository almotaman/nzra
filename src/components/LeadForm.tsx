"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";

const WHATSAPP_CONTACT_URL =
  "https://wa.me/01130615489?text=Hello%20NZRA%2C%20I%27m%20interested%20in%20a%203D%20tour%20quote%20for%20our%20development.";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "residential-dev",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Pipeline Simulated: Design brief received for ${formData.company}`);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-amber-500/50 focus:outline-none"
              placeholder="e.g. Michael Vance"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
              Company / Agency
            </label>
            <input
              type="text"
              required
              className="w-full rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-amber-500/50 focus:outline-none"
              placeholder="e.g. Apex Developments"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            Corporate Email Address
          </label>
          <input
            type="email"
            required
            className="w-full rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-amber-500/50 focus:outline-none"
            placeholder="m.vance@apexdev.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            Primary Target Layout Portfolio
          </label>
          <select
            className="w-full rounded-sm border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 transition-colors focus:border-amber-500/50 focus:outline-none"
            value={formData.projectType}
            onChange={(e) =>
              setFormData({ ...formData, projectType: e.target.value })
            }
          >
            <option value="residential-dev">
              Residential High-Rises & Communities
            </option>
            <option value="commercial-leasing">
              Commercial Real Estate / Retail Complexes
            </option>
            <option value="brokerage-assets">
              High-Value Individual Brokerage Listings
            </option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            Project Scope / Details (Optional)
          </label>
          <textarea
            rows={3}
            className="w-full resize-none rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-amber-500/50 focus:outline-none"
            placeholder="Describe timelines, total asset volume or specific layout milestones..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-sm bg-zinc-100 py-3.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 transition-colors hover:bg-white"
        >
          Request Asset Assessment Deck
        </button>
      </form>

      <div className="relative flex items-center justify-center py-2">
        <div className="absolute inset-x-0 h-[1px] bg-zinc-800" />
        <span className="relative bg-zinc-900 px-3 text-[10px] uppercase tracking-widest text-zinc-500">
          Or Access Instant Dispatch
        </span>
      </div>

      <a
        href={WHATSAPP_CONTACT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2.5 rounded-sm border border-emerald-800/60 bg-emerald-950/20 py-3.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-colors hover:bg-emerald-950/40"
      >
        <MessageSquare className="h-4 w-4" /> Secure Live Quote via WhatsApp
      </a>
    </div>
  );
}
