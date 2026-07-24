import Link from "next/link";
import type { ReactNode } from "react";

/** Accent-filled pill CTA. Defaults to scrolling to the waitlist. */
export function AccentButton({
  href = "#waitlist",
  children,
  className = "",
  glow = true,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-accent px-[34px] py-[19px] text-[13px] font-extrabold tracking-[0.04em] text-on-accent uppercase transition-transform duration-200 hover:scale-[0.985] ${
        glow ? "shadow-[var(--glow-cta)]" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}

/** Outlined pill CTA. */
export function GhostButton({
  href = "#waitlist",
  children,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-line-strong px-[30px] py-[19px] text-[13px] font-bold tracking-[0.04em] text-ink uppercase transition-colors duration-200 hover:border-accent ${className}`}
    >
      {children}
    </Link>
  );
}

/** Small mint dot + uppercase micro-label pill. */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-[9px] rounded-full border border-line-strong px-4 py-2">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      <span className="text-[10.5px] font-bold tracking-[0.14em] text-accent uppercase">
        {children}
      </span>
    </div>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <span className={`text-[12px] font-extrabold text-accent ${className}`}>
      ✓
    </span>
  );
}

/** Uppercase eyebrow label above a section heading. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[10.5px] font-bold tracking-[0.16em] text-accent uppercase">
      {children}
    </div>
  );
}
