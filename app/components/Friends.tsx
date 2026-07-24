import { Eyebrow, Check, AccentButton } from "./ui";
import { garment } from "./garment";

const benefits = [
  {
    title: "Share a link, pick what's visible",
    body: 'Whole wardrobe, one shelf, or just the "going out" tag.',
  },
  {
    title: "Friends build fits for you",
    body: "They drag from your real pieces — no shopping suggestions, no ads.",
  },
  {
    title: "Vote on the ones you're torn between",
    body: "Post two fits, let the group settle it before you leave the house.",
  },
];

export function Friends() {
  return (
    <section
      id="friends"
      className="border-t border-line bg-[image:var(--grad-friends)]"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[70px]">
          {/* copy */}
          <div>
            <Eyebrow>Friends</Eyebrow>
            <h2 className="mt-4 text-[clamp(24px,6vw,54px)] leading-[1.02] font-extrabold tracking-[-0.03em] uppercase">
              <span className="block">Send your closet</span>
              <span className="block">to the group chat.</span>
            </h2>
            <p className="mt-5 max-w-[500px] text-[17px] leading-[1.65] text-muted text-pretty">
              Share a wardrobe — or one shelf — with the friends whose taste you
              actually trust. They browse what you own, build a fit from it, and
              send it back. You wake up to three options and zero decisions.
            </p>
            <div className="mt-7 flex flex-col gap-3.5">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-3.5">
                  <Check className="mt-[3px]" />
                  <div>
                    <div className="text-[15px] font-bold">{b.title}</div>
                    <div className="text-[13.5px] leading-[1.55] text-muted">
                      {b.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-[34px] flex flex-wrap items-center gap-3">
              <AccentButton glow={false} className="px-[30px] py-[17px] text-[12px]">
                Share my wardrobe
              </AccentButton>
              <span className="text-[13px] text-muted-dim">
                Private by default. Nothing is public.
              </span>
            </div>
          </div>

          {/* friend suggestion mock */}
          <div className="flex flex-col gap-4">
            <div className="rounded-[24px] border border-line-md bg-panel p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-[11px]">
                <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[var(--av-2)] text-[12px] font-bold text-accent">
                  R
                </span>
                <div>
                  <div className="text-[14px] font-bold">Riya suggested a fit</div>
                  <div className="text-[11px] text-muted-dim">
                    from your Casual wardrobe · 2h ago
                  </div>
                </div>
                <span className="ml-auto rounded-full bg-accent px-2.5 py-[5px] text-[9px] font-extrabold tracking-[0.1em] text-on-accent">
                  NEW
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <div
                  className="h-[150px] rounded-[14px] bg-photo"
                  style={garment("overshirt.png")}
                />
                <div
                  className="h-[150px] rounded-[14px] bg-photo"
                  style={garment("trousers.png")}
                />
              </div>
              <div className="mt-3.5 font-serif text-[14px] text-muted italic">
                &ldquo;the brown with the white trousers. trust me.&rdquo;
              </div>
              <div className="mt-4 flex gap-2.5">
                <div className="flex-1 rounded-full bg-accent py-3 text-center text-[11px] font-extrabold tracking-[0.04em] text-on-accent uppercase">
                  save to outfits
                </div>
                <div className="flex-1 rounded-full border border-line-md py-3 text-center text-[11px] font-bold tracking-[0.04em] uppercase">
                  wear tonight
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-[20px] border border-line-soft bg-surface px-5 py-4">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[var(--av-3)] text-[11px] font-bold text-accent">
                S
              </span>
              <div className="text-[13px] font-medium text-ink">
                Sana voted for <span className="text-accent">fit 2</span> · 4 of
                6 friends agree
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
