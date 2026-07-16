import Link from "next/link";

const loop = [
  {
    title: "Add clothes",
    detail: "Photograph an item. Background gone, type and color filled in — seconds, not minutes.",
  },
  {
    title: "Build outfits",
    detail: "Swipe tops and bottoms into flat-lay combinations from clothes you actually own.",
  },
  {
    title: "Plan the week",
    detail: "Give each outfit a day. Decide once, skip the every-morning debate.",
  },
  {
    title: "Learn your wardrobe",
    detail: "Wear counts surface the overworked shirt and the forgotten one.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
        <p className="font-display text-clay-deep text-xl">Wardrobe</p>
        <h1 className="font-display text-ink mt-6 text-4xl leading-[1.15] sm:text-5xl">
          Wear the good shirt more often
        </h1>
        <p className="text-ink-soft mt-6 max-w-xl text-[15px] leading-relaxed">
          Your closet, digitized. Build outfits from clothes you already own,
          plan them on a calendar, and stop defaulting to the same three
          combinations.
        </p>

        <a
          href="mailto:harshkeshari100@gmail.com?subject=Wardrobe%20beta"
          className="bg-clay text-on-clay hover:bg-clay-deep mt-10 inline-flex h-[52px] items-center rounded-full px-8 text-sm font-semibold transition-colors"
        >
          Join the beta
        </a>

        <div className="mt-20 grid gap-4 sm:grid-cols-2">
          {loop.map((step, i) => (
            <div
              key={step.title}
              className="bg-surface border-line rounded-[14px] border p-4"
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
      </div>

      <footer className="border-line border-t">
        <div className="text-ink-mute mx-auto flex max-w-3xl items-center justify-between px-5 py-8 text-xs">
          <p>Private by default. Your clothes, your eyes only.</p>
          <Link href="/privacy" className="text-clay-deep hover:underline">
            Privacy
          </Link>
        </div>
      </footer>
    </main>
  );
}
