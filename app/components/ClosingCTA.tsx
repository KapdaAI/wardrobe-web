import { AccentButton, GhostButton } from "./ui";

export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-[image:var(--grad-closing)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[260px] left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[image:var(--glow-radial-strong)]"
      />
      <div className="relative mx-auto max-w-[900px] px-6 py-24 text-center sm:px-10 lg:py-28">
        <div className="font-serif text-[20px] text-accent italic">
          decide once —
        </div>
        <h2 className="mt-3 text-[clamp(32px,8.5vw,66px)] leading-[0.98] font-extrabold tracking-[-0.035em] uppercase">
          <span className="block">enjoy every</span>
          <span className="block">morning.</span>
        </h2>
        <div className="mt-9 flex flex-wrap justify-center gap-[14px]">
          <AccentButton className="shadow-[var(--glow-cta-strong)]">
            Join the waitlist
          </AccentButton>
          <GhostButton href="#top">See the app</GhostButton>
        </div>
        <div className="mt-5 text-[13px] text-muted-dim">
          Free in beta · iOS &amp; Android · your closet stays yours
        </div>
      </div>
    </section>
  );
}
