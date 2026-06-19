import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-950 bg-zinc-950 px-6 py-12 text-xs text-zinc-600 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          © {new Date().getFullYear()} SPATIALENGINE Global Visualization
          Solutions. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#portfolio" className="transition-colors hover:text-zinc-400">
            Case Studies
          </a>
          <a href="#book-demo" className="transition-colors hover:text-zinc-400">
            Enterprise Pipeline
          </a>
          <a href="#book-demo" className="transition-colors hover:text-zinc-400">
            Terms of Deployment
          </a>
        </div>
      </div>
    </footer>
  );
}
