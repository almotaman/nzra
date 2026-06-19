import React from "react";

export default function Navbar() {
  const whatsappHref = "https://wa.me/201130615489";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-16">
        <a href="#" className="text-sm font-semibold uppercase tracking-widest text-zinc-100">
          NZRA<span className="text-amber-500">.</span>
        </a>

        <div className="hidden items-center gap-8 text-xs uppercase tracking-wider text-zinc-400 md:flex">
          <a href="#portfolio" className="transition-colors hover:text-zinc-100">
            Projects
          </a>
          <a href="#book-demo" className="transition-colors hover:text-zinc-100">
            The Workflow
          </a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-100">
            Contact via WhatsApp
          </a>
        </div>

        <div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-zinc-100 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 transition-colors hover:bg-white"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  );
}
