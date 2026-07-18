import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — Wardrobe",
  description:
    "How Wardrobe collects, processes, and deletes your data under India's DPDP Act 2023.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-5 py-16">
      <Link href="/" className="text-clay-deep text-sm hover:underline">
        ← Wardrobe
      </Link>
      <h1 className="font-display text-ink mt-6 text-4xl">Privacy</h1>
      <p className="text-ink-mute mt-3 text-sm">
        Last updated: 19 July 2026 · Applies to the Wardrobe beta app and this
        site.
      </p>
      <p className="text-ink-soft mt-6 text-[15px] leading-relaxed">
        Wardrobe is built for India. We follow the Digital Personal Data
        Protection Act, 2023 (DPDP): clear purpose, informed consent, and a real
        right to erasure. This page is the full policy — not a teaser.
      </p>

      <div className="text-ink-soft mt-10 space-y-10 text-[15px] leading-relaxed">
        <section>
          <h2 className="font-display text-ink text-xl">Who we are</h2>
          <p className="mt-2">
            Wardrobe is a digital wardrobe and outfit planner operated by the
            Wardrobe team. For privacy questions or DPDP requests, email{" "}
            <a
              href="mailto:harshkeshari100@gmail.com"
              className="text-clay-deep hover:underline"
            >
              harshkeshari100@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">What we collect</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <span className="text-ink">Account identity</span> — email, name,
              and avatar from Google Sign-In (we do not store passwords).
            </li>
            <li>
              <span className="text-ink">Clothing photos</span> — originals you
              upload, plus a processed version when background removal or
              ghost-mannequin processing succeeds.
            </li>
            <li>
              <span className="text-ink">Wardrobe data</span> — items, tags,
              outfits, and calendar plans you create.
            </li>
            <li>
              <span className="text-ink">Product metrics</span> — onboarding and
              capture timing events so we can measure whether the product is
              fast enough (no advertising profiles).
            </li>
          </ul>
          <p className="mt-3">
            We do not collect location, contacts, body measurements, or payment
            card data in the MVP.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">Why we collect it</h2>
          <p className="mt-2">
            Purpose is limited to running Wardrobe for you: digitizing clothes
            you already own, building and planning outfits, and improving
            capture speed. We do not sell personal data. We do not use your
            photos to train public AI models.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">Consent</h2>
          <p className="mt-2">
            Signing in with Google creates your account. Camera and photo-library
            access are requested only when you add clothes, with a plain-language
            explanation first. You can refuse permissions and still use the app
            with existing items; capture features need the permission you grant.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">Your photos</h2>
          <p className="mt-2">
            Clothing photos may incidentally show faces, rooms, or other people.
            We treat every user photo as sensitive personal data. Photos are
            stored under user-scoped keys, encrypted in transit, and served only
            through short-lived authenticated URLs. There are no public photo
            links and no sharing features in the MVP — everything is private by
            default.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">
            Third-party processing
          </h2>
          <p className="mt-2">
            When you upload a photo you choose a process mode:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <span className="text-ink">Cutout</span> — background removal runs
              on our servers (self-hosted rembg). Your image stays inside our
              processing boundary for this path.
            </li>
            <li>
              <span className="text-ink">Gemini</span> — optional ghost-mannequin
              processing via Google Vertex AI. We only enable this path for real
              users after Zero Data Retention (ZDR) is confirmed in writing. Until
              then the feature stays off. If it is ever enabled without ZDR, we
              will update this policy with the vendor&apos;s abuse-log retention
              window before turning it on.
            </li>
          </ul>
          <p className="mt-3">
            Processors we use must not retain your images for their own training.
            Sign-in uses Google Identity to verify your account.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">How long we keep data</h2>
          <p className="mt-2">
            We keep your account and wardrobe data while your account is active.
            Soft-deleted items remain inaccessible in the product and are purged
            with account erasure. Server logs used for security and reliability
            are retained only as long as needed for those purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">Your rights (DPDP)</h2>
          <p className="mt-2">You can:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>Access the profile and wardrobe data in the app</li>
            <li>Correct item details you entered</li>
            <li>
              Delete individual items, outfits, calendar entries, or your entire
              account from inside the app
            </li>
            <li>
              Withdraw consent by deleting your account and uninstalling the app
            </li>
          </ul>
          <p className="mt-3">
            For requests we cannot complete in-app, email the contact above. We
            will respond within a reasonable period consistent with DPDP.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">Account deletion</h2>
          <p className="mt-2">
            Deleting your account from the app soft-deletes your profile, items,
            outfits, calendar entries, and related records, and starts wiping
            photo objects under your storage prefix.{" "}
            <span className="text-ink">
              Photos and derived wardrobe data are removed from our systems
              within 24 hours
            </span>{" "}
            of a confirmed account deletion request (our published erasure SLA).
            You will see confirmation in the app when deletion is accepted.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">Security</h2>
          <p className="mt-2">
            Access to the API requires our session token after Google Sign-In.
            Storage buckets are private. We do not put clothing photos on public
            CDNs. No security practice is perfect — if we become aware of a
            personal-data breach, we will notify affected users and, where
            required, the authorities as DPDP expects.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">Children</h2>
          <p className="mt-2">
            Wardrobe is not directed at children under 18. If you believe a
            minor has created an account, contact us and we will delete it.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">Changes</h2>
          <p className="mt-2">
            If we change how we process personal data in a material way, we will
            update this page and the &quot;Last updated&quot; date. For
            significant changes affecting the beta, we will also note it in the
            app.
          </p>
        </section>

        <section>
          <h2 className="font-display text-ink text-xl">Contact</h2>
          <p className="mt-2">
            Privacy and erasure:{" "}
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
