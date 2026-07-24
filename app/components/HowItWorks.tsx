import { garment } from "./garment";

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10 lg:py-28">
      <h2 className="mb-12 text-center text-[clamp(22px,5.6vw,48px)] leading-[1.02] font-extrabold tracking-[-0.03em] uppercase">
        <span className="block">Three nights of setup.</span>
        <span className="block text-accent">Every morning solved.</span>
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Step one */}
        <div className="rounded-[24px] border border-line-soft bg-surface-soft p-7">
          <div className="text-[10px] font-bold tracking-[0.16em] text-muted-dim">
            STEP ONE
          </div>
          <div className="mt-2.5 text-[24px] font-extrabold tracking-[-0.01em]">
            Snap it once
          </div>
          <div className="mt-2 text-[14px] leading-[1.6] text-muted">
            Photograph each piece flat on your bed. Ten seconds each, no
            lightbox, no styling.
          </div>
          <div className="mt-5 flex gap-2">
            {["henley.png", "knit.png", "jeans.png"].map((src) => (
              <div
                key={src}
                className="h-20 flex-1 rounded-[10px] bg-photo"
                style={garment(src)}
              />
            ))}
          </div>
        </div>

        {/* Step two */}
        <div className="rounded-[24px] border border-line-soft bg-surface-soft p-7">
          <div className="text-[10px] font-bold tracking-[0.16em] text-muted-dim">
            STEP TWO
          </div>
          <div className="mt-2.5 text-[24px] font-extrabold tracking-[-0.01em]">
            Cook some fits
          </div>
          <div className="mt-2 text-[14px] leading-[1.6] text-muted">
            Pair a top with a bottom, add shoes. Or let a friend do it for you.
          </div>
          <div className="relative mt-5 h-20">
            <div
              className="absolute top-0 left-5 h-20 w-16 -rotate-6 rounded-[10px] border border-line-soft bg-photo"
              style={garment("overshirt.png")}
            />
            <div
              className="absolute top-1 left-[70px] h-20 w-16 rotate-5 rounded-[10px] border border-line-soft bg-photo"
              style={garment("trousers.png")}
            />
          </div>
        </div>

        {/* Step three */}
        <div className="rounded-[24px] border border-line-soft bg-surface-soft p-7">
          <div className="text-[10px] font-bold tracking-[0.16em] text-muted-dim">
            STEP THREE
          </div>
          <div className="mt-2.5 text-[24px] font-extrabold tracking-[-0.01em]">
            Plan the week
          </div>
          <div className="mt-2 text-[14px] leading-[1.6] text-muted">
            Drop fits onto days. Mornings stop being a decision.
          </div>
          <div className="mt-5 flex flex-col gap-[7px]">
            <div className="flex items-center gap-2.5 rounded-xl border border-line-soft px-3 py-2.5">
              <span className="w-7 text-[9px] font-bold text-muted-dim">MON</span>
              <span
                className="h-[22px] w-[18px] rounded bg-photo"
                style={garment("henley.png")}
              />
              <span className="text-[11px] font-semibold">beige + blue</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-dashed border-line-md px-3 py-2.5">
              <span className="w-7 text-[9px] font-bold text-muted-dim">TUE</span>
              <span className="font-serif text-[13px] text-muted-dim italic">
                ?
              </span>
              <span className="ml-auto text-[11px] font-bold text-accent">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
