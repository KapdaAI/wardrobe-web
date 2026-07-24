import { Eyebrow, Check } from "./ui";
import { garment } from "./garment";

const points = [
  "Every guess shows its confidence — fix it with one tap",
  "Colors named by AI, then verified by pixel analysis",
  "Bulk import — drop 50 photos, walk away",
];

const tags = ["#cotton", "#casual", "#layering"];

export function SmartCapture() {
  return (
    <section id="ai" className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[70px]">
        {/* copy */}
        <div>
          <Eyebrow>Smart Capture</Eyebrow>
          <h2 className="mt-4 text-[clamp(24px,6vw,54px)] leading-[1.02] font-extrabold tracking-[-0.03em] uppercase">
            <span className="block">One photo.</span>
            <span className="block">Everything filled.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.65] text-muted text-pretty">
            Point your camera at a crumpled t-shirt on your bed. One AI pass
            removes the background, straightens it into a clean ghost-mannequin
            cutout, works out whether it&apos;s a top or a bottom, reads the real
            colors off the pixels, and suggests tags like{" "}
            <span className="text-ink">striped</span>,{" "}
            <span className="text-ink">cotton</span>,{" "}
            <span className="text-ink">summer</span>.
          </p>
          <div className="mt-7 flex flex-col gap-3">
            {points.map((p) => (
              <div key={p} className="flex items-center gap-3">
                <Check />
                <span className="text-[14px] font-medium text-ink">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* before / after */}
        <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">
          <div>
            <div className="relative h-[290px] overflow-hidden rounded-[22px] border border-line bg-[image:var(--grad-snapshot)]">
              <div
                aria-hidden
                className="absolute inset-0 scale-[1.04] -rotate-8 blur-[0.4px] brightness-[0.72] saturate-[0.8]"
                style={{ ...garment("knit.png"), backgroundSize: "78%" }}
              />
              <div className="absolute top-3 left-3 rounded-full bg-[var(--scrim)] px-[9px] py-[5px] text-[9px] font-bold tracking-[0.12em] text-muted">
                YOUR SNAPSHOT
              </div>
            </div>
          </div>

          <div className="mx-auto flex h-[38px] w-[38px] rotate-90 items-center justify-center rounded-full bg-accent text-[15px] font-extrabold text-on-accent sm:rotate-0">
            →
          </div>

          <div>
            <div className="relative h-[290px] overflow-hidden rounded-[22px] border border-line-strong bg-photo-deep shadow-[var(--glow-cutout)]">
              <div
                className="absolute inset-0"
                style={{ ...garment("knit.png"), backgroundSize: "72%" }}
              />
              <div className="absolute top-3 left-3 rounded-full bg-accent px-[9px] py-[5px] text-[9px] font-extrabold tracking-[0.1em] text-on-accent">
                CATALOG READY
              </div>
            </div>
            {/* result card */}
            <div className="mt-3.5 rounded-2xl border border-line-soft bg-surface px-4 py-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-dim">Type</span>
                <span className="text-[12px] font-bold">
                  Top · knit <span className="text-accent">98%</span>
                </span>
              </div>
              <div className="mt-2.5 flex items-center justify-between">
                <span className="text-[11px] text-muted-dim">Colors</span>
                <span className="flex items-center gap-[7px]">
                  <span className="h-[11px] w-[11px] rounded-full border border-white/20 bg-[var(--dot-charcoal)]" />
                  <span className="text-[12px] font-bold">charcoal</span>
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line-strong px-2.5 py-[5px] text-[10px] font-semibold text-muted"
                  >
                    {t}
                  </span>
                ))}
                <span className="rounded-full bg-accent px-2.5 py-[5px] text-[10px] font-semibold text-on-accent">
                  accept all
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
