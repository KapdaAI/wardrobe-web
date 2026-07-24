const quotes = [
  {
    quote:
      "I found four shirts I'd forgotten I owned. Haven't bought anything in two months.",
    who: "Aman · Bengaluru",
  },
  {
    quote:
      "My friends style me now. I just open the app and wear what Riya picked.",
    who: "Sana · Delhi",
  },
  {
    quote:
      "Photographed 60 pieces in one evening. The AI tagged all of them correctly.",
    who: "Dev · Mumbai",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-line bg-bg-deep">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-6 py-20 sm:px-10 md:grid-cols-3">
        {quotes.map((q) => (
          <figure key={q.who} className="border-l border-line-md pl-[22px]">
            <blockquote className="font-serif text-[19px] leading-[1.5] text-ink italic">
              &ldquo;{q.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-[11px] font-semibold tracking-[0.1em] text-muted-dim uppercase">
              {q.who}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
