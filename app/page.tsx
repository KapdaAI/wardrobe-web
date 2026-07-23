import Link from "next/link";
import { WaitlistForm } from "./components/WaitlistForm";

const loop = [
  {
    title: "Add clothes",
    detail:
      "Photograph an item. Background gone, type and color filled in — seconds, not minutes.",
  },
  {
    title: "Build outfits",
    detail:
      "Swipe tops and bottoms into flat-lay combinations from clothes you actually own.",
  },
  {
    title: "Plan the week",
    detail:
      "Give each outfit a day. Decide once, skip the every-morning debate.",
  },
  {
    title: "Learn your wardrobe",
    detail:
      "Wear counts surface the overworked shirt and the forgotten one.",
  },
];

const trusts = [
  "Photos never leave your account.",
  "No sharing, no social — private by default.",
  "Delete everything at any time, from the app.",
];

export default function Home() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
        {/* Wordmark */}
        <p className="font-display text-clay-deep text-xl">Wardrobe</p>

        {/* Hero */}
        <h1 className="font-display text-ink mt-6 text-4xl leading-[1.15] sm:text-5xl">
          Wear the good shirt more often
        </h1>
        <p className="text-ink-soft mt-6 max-w-xl text-[15px] leading-relaxed">
          Your closet, digitized. Build outfits from clothes you already own,
          plan them on a calendar, and stop defaulting to the same three
          combinations.
        </p>

        {/* Waitlist form */}
        <WaitlistForm />

        {/* The loop */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2">
          {loop.map((step, i) => (
            <div
              key={step.title}
              className="bg-surface border-line rounded-[14px] border p-5"
            >
              <p className="text-ink-mute text-xs">{`0${i + 1}`}</p>
              <h2 className="font-display text-ink mt-2 text-xl">
                {step.title}
              </h2>
              <p className="text-ink-soft mt-2 text-[15px] leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Trust */}
        <div className="bg-sage-wash border-line mt-12 rounded-[14px] border p-6">
          <p className="font-display text-ink text-lg">Built for trust</p>
          <ul className="mt-4 space-y-2">
            {trusts.map((t) => (
              <li key={t} className="text-ink-soft flex items-start gap-2 text-[15px]">
                <span className="text-sage mt-px shrink-0">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="border-line border-t">
        <div className="text-ink-mute mx-auto flex max-w-3xl items-center justify-between px-5 py-8 text-xs">
          <p>India-first. Private by default.</p>
          <Link href="/privacy" className="text-clay-deep hover:underline">
            Privacy
          </Link>
        </div>
      </footer>
    </main>
  );
}
