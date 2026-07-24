"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    // Open mailto with the email pre-filled so the signup lands in our inbox.
    const subject = encodeURIComponent("Fitted — waitlist");
    const body = encodeURIComponent(
      `Hi,\n\nI'd like an invite to Fitted.\n\nEmail: ${trimmed}\n`,
    );
    window.location.href = `mailto:harshkeshari100@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="text-[14px] text-muted">
        Your mail app should open now — send that email and you&apos;re on the
        list. We&apos;ll be in touch when it&apos;s your turn.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:flex-row">
      <input
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-full border border-line-md bg-[var(--field-bg)] px-[22px] py-[17px] text-[14px] text-ink outline-none transition-colors placeholder:text-muted-dim focus:border-accent"
      />
      <button
        type="submit"
        className="rounded-full bg-accent px-7 py-[17px] text-[12px] font-extrabold tracking-[0.04em] whitespace-nowrap text-on-accent uppercase transition-transform duration-200 hover:scale-[0.985]"
      >
        Get my invite
      </button>
    </form>
  );
}
