"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    // Open mailto with the email address pre-filled so the signup lands in our inbox.
    const subject = encodeURIComponent("Wardrobe beta — early access");
    const body = encodeURIComponent(
      `Hi,\n\nI'd like early access to Wardrobe.\n\nEmail: ${trimmed}\n`,
    );
    window.location.href = `mailto:harshkeshari100@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="text-ink-soft mt-10 text-[15px]">
        Your mail app should open now — send that email and we'll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex max-w-md gap-3">
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-line-strong text-ink placeholder-ink-mute focus:border-clay flex-1 rounded-full border bg-white px-5 py-3 text-sm outline-none transition-colors"
      />
      <button
        type="submit"
        className="bg-clay text-on-clay hover:bg-clay-deep inline-flex h-[46px] shrink-0 items-center rounded-full px-6 text-sm font-semibold transition-colors"
      >
        Join the beta
      </button>
    </form>
  );
}
