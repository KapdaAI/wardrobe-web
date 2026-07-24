import type { ReactNode } from "react";

const swatches = ["var(--sw-olive)", "var(--sw-sand)", "var(--sw-blue)", "var(--sw-rust)"];

const features: { n: string; title: string; body: string; extra?: ReactNode }[] = [
  {
    n: "01",
    title: "Ghost-mannequin cutouts",
    body: "Background removed, shape cleaned up. Your closet looks like a catalog, not a camera roll.",
  },
  {
    n: "02",
    title: "Auto type detection",
    body: "Top, bottom, footwear or accessory — sorted onto the right shelf before you look up.",
  },
  {
    n: "03",
    title: "Pixel-accurate colors",
    body: 'AI names the shade, pixel analysis verifies it. "Olive", not "green-ish".',
    extra: (
      <div className="mt-3.5 flex gap-1.5">
        {swatches.map((c) => (
          <span
            key={c}
            className="h-5 w-5 rounded-md"
            style={{ background: c }}
          />
        ))}
      </div>
    ),
  },
  {
    n: "04",
    title: "Tag suggestions",
    body: "Striped, cotton, casual, summer — read off the image, yours to accept or ignore.",
  },
  {
    n: "05",
    title: "Bulk AI import",
    body: "Drop a pile of photos. Everything processes in the background while you get on with your day.",
    extra: (
      <>
        <div className="mt-3.5 h-1.5 overflow-hidden rounded-full bg-line-soft">
          <div className="h-full w-[68%] bg-accent" />
        </div>
        <div className="mt-[7px] text-[10px] font-medium tracking-[0.1em] text-muted-dim uppercase">
          34 of 50 processed
        </div>
      </>
    ),
  },
  {
    n: "06",
    title: "Laundry awareness",
    body: "Mark a piece dirty and it greys out everywhere — no outfit can use it until it's back.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="border-t border-line bg-bg-deep">
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end lg:gap-10">
          <h2 className="max-w-[520px] text-[clamp(26px,6.5vw,48px)] leading-[1.02] font-extrabold tracking-[-0.03em] uppercase">
            <span className="block">The boring part</span>
            <span className="block text-accent">is automated.</span>
          </h2>
          <p className="max-w-[380px] text-[15px] leading-[1.6] text-muted-dim">
            Cataloguing a closet by hand is why every other wardrobe app dies at
            twelve items. Fitted does the data entry for you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.n}
              className="rounded-[22px] border border-line-soft bg-surface p-[26px]"
            >
              <div className="font-serif text-[30px] text-accent italic">
                {f.n}
              </div>
              <div className="mt-3.5 text-[17px] font-extrabold">{f.title}</div>
              <div className="mt-2 text-[14px] leading-[1.6] text-muted">
                {f.body}
              </div>
              {f.extra}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
