import React from "react";

export default function Footer() {
  const whatsappHref = "https://wa.me/201130615489";

  return (
    <footer className="border-t border-zinc-950 bg-zinc-950 px-6 py-12 text-xs text-zinc-600 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          © {new Date().getFullYear()} NZRA. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#portfolio" className="transition-colors hover:text-zinc-400">
            Case Studies
          </a>
          <a href="#book-demo" className="transition-colors hover:text-zinc-400">
            Request a Demo
          </a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-400">
            WhatsApp Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
