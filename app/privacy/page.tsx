import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — Wardrobe",
  description: "How Wardrobe handles your data and photos.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-5 py-16">
      <Link href="/" className="text-clay-deep text-sm hover:underline">
        ← Wardrobe
      </Link>
      <h1 className="font-display text-ink mt-6 text-4xl">Privacy</h1>
      <p className="bg-amber-wash text-amber mt-6 inline-block rounded-full px-4 py-1 text-xs font-semibold">
        Draft — the full policy ships before the beta opens
      </p>

      <div className="text-ink-soft mt-10 space-y-8 text-[15px] leading-relaxed">
        <section>
          <h2 className="font-display text-ink text-xl">What we collect</h2>
          <p className="mt-2">
            Your email address, photos of your clothing, and the outfits and
            calendar plans you create. Nothing else — no location, no contacts,
            no body measurements.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">Your photos</h2>
          <p className="mt-2">
            We treat every photo you take as sensitive personal data. Photos
            are encrypted in transit and at rest, accessible only from your
            authenticated session, and never exposed through public links.
            Everything is private by default — there is no sharing feature.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">
            Third-party processing
          </h2>
          <p className="mt-2">
            Background removal and tagging may use an external processor. Before
            the beta opens we will name the processor here, and we will only
            select one that does not retain your images or train on them.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">Deleting your data</h2>
          <p className="mt-2">
            You can delete any item, outfit, calendar entry, or your entire
            account from inside the app. Account deletion removes your photos
            and all derived data. This is your right under India&apos;s DPDP
            Act, and we honor it without friction.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">Contact</h2>
          <p className="mt-2">
            Questions about your data:{" "}
            <a
              href="mailto:harshkeshari100@gmail.com"
              className="text-clay-deep hover:underline"
            >
              harshkeshari100@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
