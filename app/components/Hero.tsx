import { AccentButton, GhostButton, Badge } from "./ui";
import { PhoneMock } from "./PhoneMock";

const avatars = [
  { initial: "A", bg: "var(--av-1)" },
  { initial: "R", bg: "var(--av-2)" },
  { initial: "S", bg: "var(--av-3)" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[image:var(--grad-hero)]"
    >
      {/* radial mint glow, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[180px] -right-[120px] h-[640px] w-[640px] rounded-full bg-[image:var(--glow-radial)]"
      />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[60px] px-6 pt-20 pb-24 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24 lg:pb-28">
        <div>
          <Badge>Smart Capture is live</Badge>
          <h1 className="mt-[26px] text-[clamp(26px,6.8vw,82px)] leading-[0.94] font-extrabold tracking-[-0.035em] uppercase">
            <span className="block">You own</span>
            <span className="block">enough clothes.</span>
            <span className="block text-accent">Wear them.</span>
          </h1>
          <p className="mt-6 max-w-[480px] text-[17px] leading-[1.6] text-muted text-pretty sm:text-[18px]">
            Snap your closet once — our AI cuts out every piece, names its
            colors, and tags it. Then plan your week, and let your friends tell
            you what to wear.
          </p>
          <div className="mt-9 flex flex-wrap gap-[14px]">
            <AccentButton>Join the waitlist</AccentButton>
            <GhostButton>Watch it work</GhostButton>
          </div>
          <div className="mt-[30px] flex items-center gap-[22px]">
            <div className="flex">
              {avatars.map((a, i) => (
                <span
                  key={a.initial}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg text-[11px] font-bold text-accent ${
                    i > 0 ? "-ml-2.5" : ""
                  }`}
                  style={{ background: a.bg }}
                >
                  {a.initial}
                </span>
              ))}
              <span className="-ml-2.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg bg-accent text-[13px] font-bold text-on-accent">
                +
              </span>
            </div>
            <span className="text-[13px] text-muted-dim">
              Early closets are joining · invites go out every week
            </span>
          </div>
        </div>

        <PhoneMock />
      </div>
    </section>
  );
}
