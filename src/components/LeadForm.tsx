"use client";

import React, { useState } from "react";
import { Mail, MessageSquare } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "residential-dev",
    message: "",
  });

  const whatsappHref =
    "https://wa.me/201130615489?text=I'm%20interested%20in%20NZRA%20tours%20and%20would%20like%20to%20get%20in%20touch";

  return (
    <div>
      <form className="space-y-4">
        <div>
          <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            Name
          </label>
          <input
            type="text"
            className="w-full rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-amber-500/50 focus:outline-none"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-amber-500/50 focus:outline-none"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            Primary Interest
          </label>
          <select
            className="w-full rounded-sm border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 transition-colors focus:border-amber-500/50 focus:outline-none"
            value={formData.projectType}
            onChange={(e) =>
              setFormData({ ...formData, projectType: e.target.value })
            }
          >
            <option value="tour-1">Tour 1</option>
            <option value="tour-2">Tour 2</option>
            <option value="tour-3">Tour 3</option>
            <option value="tour-4">Tour 4</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            Project Details (Optional)
          </label>
          <textarea
            rows={3}
            className="w-full resize-none rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-amber-500/50 focus:outline-none"
            placeholder="Tell us what you need..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-sm bg-zinc-100 py-3.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 transition-colors hover:bg-white"
        >
          Request Contact
        </button>
      </form>

      <div className="relative flex items-center justify-center py-2">
        <div className="absolute inset-x-0 h-[1px] bg-zinc-800" />
        <span className="relative bg-zinc-900 px-3 text-[10px] uppercase tracking-widest text-zinc-500">
          Or contact us on WhatsApp
        </span>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2.5 rounded-sm border border-emerald-800/60 bg-emerald-950/20 py-3.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-colors hover:bg-emerald-950/40"
      >
        <MessageSquare className="h-4 w-4" /> WhatsApp 01130615489
      </a>
    </div>
  );
}
