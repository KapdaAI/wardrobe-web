"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Features", href: "#features" },
  { label: "Smart Capture", href: "#ai" },
  { label: "Friends", href: "#friends" },
  { label: "Waitlist", href: "#waitlist" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[var(--nav-bg)] backdrop-blur-[18px]">
      <nav className="mx-auto flex max-w-[1200px] items-center gap-4 px-4 py-5 sm:px-10 lg:gap-10">
        <Link
          href="#top"
          className="text-[19px] font-extrabold tracking-[0.14em] text-accent"
        >
          FITTED
        </Link>

        <div className="hidden items-center gap-[30px] lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-semibold text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2.5 sm:gap-[14px]">
          <a
            href="#waitlist"
            className="hidden text-[13px] font-semibold text-muted transition-colors hover:text-ink sm:inline"
          >
            Sign in
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-accent px-4 py-2.5 text-[11px] font-extrabold tracking-[0.04em] whitespace-nowrap text-on-accent uppercase sm:px-[22px] sm:py-3 sm:text-[12px]"
          >
            <span className="sm:hidden">Join</span>
            <span className="hidden sm:inline">Join the waitlist</span>
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line-md text-ink lg:hidden"
          >
            <span className="text-[16px] leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-6 py-4 lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-[15px] font-semibold text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
