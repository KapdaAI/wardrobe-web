"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I have to photograph everything?",
    a: "No. Start with the fifteen pieces you actually wear — that's enough to plan a week. Add the rest whenever you're bored.",
  },
  {
    q: "Can my friends see my whole closet?",
    a: "Only what you share. Hand over a whole wardrobe, a single shelf, or just one tag — and revoke the link any time. Nothing is public by default.",
  },
  {
    q: "What happens to my photos?",
    a: "They're yours. Stored privately under your account, never on a public link, and never used to train public AI models. Delete a piece — or your whole account — and the photos go with it.",
  },
  {
    q: "Does it work with multiple wardrobes?",
    a: "Yes. Keep work, weekend, gym, and travel as separate wardrobes, each with its own shelves — and share any one of them on its own.",
  },
  {
    q: "When do invites go out?",
    a: "Every week, a few hundred at a time, so Smart Capture stays fast. Bring friends on your invite and you'll move up the queue.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="border-t border-line bg-bg-deep">
      <div className="mx-auto max-w-[900px] px-6 py-24 sm:px-10">
        <h2 className="mb-8 text-[clamp(28px,6vw,40px)] leading-none font-extrabold tracking-[-0.03em] uppercase">
          Questions
        </h2>
        <div className="flex flex-col">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-t border-line-soft last:border-b">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-[22px] text-left"
                >
                  <span className="text-[17px] font-bold">{f.q}</span>
                  <span
                    className={`text-[16px] font-bold ${
                      isOpen ? "text-accent" : "text-muted-dim"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="max-w-[660px] pb-[22px] text-[14.5px] leading-[1.65] text-muted">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
