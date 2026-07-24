import { Badge } from "./ui";
import { WaitlistForm } from "./WaitlistForm";

const avatars = [
  { initial: "A", bg: "var(--av-1)" },
  { initial: "R", bg: "var(--av-2)" },
  { initial: "S", bg: "var(--av-3)" },
];

const perks = [
  {
    n: "01",
    title: "Free for everyone in beta",
    body: "Every AI feature unlocked while we're testing. No card, no trial timer.",
  },
  {
    n: "02",
    title: "Skip ahead with friends",
    body: "Every friend who joins on your invite moves you up the queue.",
  },
  {
    n: "03",
    title: "Shape what we build",
    body: "Early closets get a direct line to us — tell us what's missing.",
  },
];

export function Waitlist() {
  return (
    <section id="waitlist" className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-[760px] text-center">
        <Badge>Private beta · invites weekly</Badge>
        <h2 className="mt-[22px] text-[clamp(30px,7.5vw,52px)] leading-[1.02] font-extrabold tracking-[-0.03em] uppercase">
          <span className="block">Join the</span>
          <span className="block text-accent">waitlist.</span>
        </h2>
        <p className="mt-[18px] text-[16px] leading-[1.6] text-muted">
          We&apos;re letting people in a few hundred at a time so Smart Capture
          stays fast. Drop your email — you&apos;ll get an invite and a spot for
          three friends.
        </p>
      </div>

      {/* form card */}
      <div className="mx-auto mt-9 max-w-[620px] rounded-[26px] border border-accent bg-[image:var(--grad-waitlist)] p-7 shadow-[var(--glow-cutout)]">
        <WaitlistForm />
        <div className="mt-[18px] flex flex-wrap items-center gap-4">
          <div className="flex">
            {avatars.map((a, i) => (
              <span
                key={a.initial}
                className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-bg text-[10px] font-bold text-accent ${
                  i > 0 ? "-ml-2" : ""
                }`}
                style={{ background: a.bg }}
              >
                {a.initial}
              </span>
            ))}
          </div>
          <span className="text-[12.5px] text-muted-dim">
            Join a growing waitlist · no spam, one email when it&apos;s your turn
          </span>
        </div>
      </div>

      {/* supporting cards */}
      <div className="mx-auto mt-9 grid max-w-[900px] grid-cols-1 gap-5 sm:grid-cols-3">
        {perks.map((p) => (
          <div
            key={p.n}
            className="rounded-[20px] border border-line-soft bg-surface-soft p-[22px]"
          >
            <div className="font-serif text-[26px] text-accent italic">{p.n}</div>
            <div className="mt-2.5 text-[15px] font-bold">{p.title}</div>
            <div className="mt-1.5 text-[13px] leading-[1.6] text-muted">
              {p.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
