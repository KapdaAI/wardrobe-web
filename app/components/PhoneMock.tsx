import { garment } from "./garment";

/** The floating app "Today" screen from the hero, with two garment cards drifting behind. */
export function PhoneMock() {
  return (
    <div className="relative flex justify-center">
      {/* drifting garment cards */}
      <div
        className="drift-a absolute top-[70px] -left-1.5 h-[190px] w-[150px] rounded-[18px] border border-line-md bg-photo-deep"
        style={garment("overshirt.png")}
        aria-hidden
      />
      <div
        className="drift-b absolute -right-2.5 bottom-10 h-[180px] w-[140px] rounded-[18px] border border-line-md bg-photo-deep"
        style={garment("trousers.png")}
        aria-hidden
      />

      {/* phone */}
      <div className="relative flex h-[640px] w-[330px] flex-col overflow-hidden rounded-[34px] border border-line-strong bg-[image:var(--grad-hero)] shadow-[var(--shadow-phone)]">
        <div className="flex items-center justify-between px-5 pt-[34px]">
          <span className="text-[10px] font-bold tracking-[0.18em] text-muted-dim">
            FRI 24.07
          </span>
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[var(--av-1)] text-[11px] font-bold text-accent">
            A
          </span>
        </div>

        <div className="px-5 pt-3 text-[34px] leading-[0.98] font-extrabold tracking-[-0.02em] uppercase">
          Tonight&apos;s
          <br />
          <span className="text-accent">fit.</span>
        </div>

        {/* outfit card */}
        <div className="relative mx-5 mt-4">
          <div className="absolute inset-[8px_-8px_-10px_12px] rotate-3 rounded-[20px] border border-line-soft bg-surface" />
          <div className="relative overflow-hidden rounded-[20px] border border-line-md bg-panel">
            <div className="grid h-[196px] grid-cols-2">
              <div className="bg-photo" style={garment("henley.png")} />
              <div className="bg-photo" style={garment("jeans.png")} />
            </div>
            <div className="absolute top-2.5 left-2.5 -rotate-[4deg] rounded-full bg-accent px-[9px] py-[5px] text-[9px] font-extrabold tracking-[0.08em] text-on-accent">
              ON REPEAT ×3
            </div>
            <div className="flex items-center justify-between px-3.5 py-3">
              <span className="text-[13px] font-bold">beige + blue</span>
              <span className="rounded-full bg-accent px-3 py-[7px] text-[10px] font-bold text-on-accent">
                wear it ↗
              </span>
            </div>
          </div>
        </div>

        {/* action row */}
        <div className="mx-5 mt-[26px] flex gap-2">
          <div className="flex-1 rounded-full bg-accent py-[13px] text-center text-[11px] font-extrabold tracking-[0.04em] text-on-accent uppercase">
            plan the week
          </div>
          <div className="flex-1 rounded-full border border-line-md py-[13px] text-center text-[11px] font-bold tracking-[0.04em] uppercase">
            cook a fit
          </div>
        </div>

        {/* bottom nav + camera FAB */}
        <div className="relative mt-auto px-3.5 pb-3.5">
          <div className="flex items-center justify-around rounded-[28px] border border-line-md bg-panel px-3.5 py-[13px] shadow-[var(--shadow-nav)]">
            <span className="text-[9px] font-bold tracking-[0.08em] text-accent">
              TODAY
            </span>
            <span className="text-[9px] font-semibold tracking-[0.08em] text-muted-dim">
              WARDROBE
            </span>
            <span className="w-[42px]" />
            <span className="text-[9px] font-semibold tracking-[0.08em] text-muted-dim">
              OUTFITS
            </span>
            <span className="text-[9px] font-semibold tracking-[0.08em] text-muted-dim">
              PLAN
            </span>
          </div>
          <div className="absolute top-[-16px] left-1/2 flex h-[46px] w-[46px] -translate-x-1/2 items-center justify-center rounded-full bg-accent text-[15px] shadow-[var(--glow-fab)]">
            📷
          </div>
        </div>
      </div>
    </div>
  );
}
