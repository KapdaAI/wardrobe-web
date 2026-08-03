import type { Metadata } from "next";

import { AccentButton } from "../../components/ui";

// Share views must never be indexed or cached — the link is private and its
// presigned photo URLs are short-lived (see wardrobe-backend share_service).
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "A shared wardrobe · Fitted",
};
export const dynamic = "force-dynamic";

// wardrobe-web's first-ever API call (MVP: it was static-only). Server-side only.
const API_BASE =
  process.env.WARDROBE_API_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:8000/api/v1";

type SharedItem = {
  id: string;
  type: string | null;
  colors: string[];
  name: string | null;
  photo_url: string | null;
};

type SharedWardrobe = {
  wardrobe_name: string;
  owner_label: string | null;
  item_count: number;
  items: SharedItem[];
};

async function fetchShared(token: string): Promise<SharedWardrobe | null> {
  try {
    const res = await fetch(
      `${API_BASE}/shared/${encodeURIComponent(token)}`,
      { cache: "no-store" },
    );
    if (!res.ok) return null;
    const body = (await res.json()) as { status: string; data: SharedWardrobe };
    if (body.status !== "ok" || !body.data) return null;
    return body.data;
  } catch {
    return null;
  }
}

function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Shown for any missing / expired / revoked link — identical for all (no oracle). */
function NotAvailable() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[image:var(--grad-hero)] px-6 text-center">
      <div className="font-serif text-[20px] text-accent italic">hmm —</div>
      <h1 className="mt-3 text-[clamp(28px,7vw,44px)] leading-[1.02] font-extrabold tracking-[-0.03em] uppercase">
        This link isn&apos;t available
      </h1>
      <p className="mt-4 max-w-[380px] text-[15px] text-muted">
        It may have expired or been turned off by its owner.
      </p>
      <div className="mt-9">
        <AccentButton href="/" glow>
          Build your own wardrobe
        </AccentButton>
      </div>
      <p className="mt-5 text-[13px] text-muted-dim">made with Fitted</p>
    </main>
  );
}

function ItemCard({ item }: { item: SharedItem }) {
  const caption = [item.name, ...(item.colors ?? [])]
    .filter(Boolean)
    .join(" · ");
  return (
    <div className="overflow-hidden rounded-[18px] border border-line bg-surface">
      <div className="flex aspect-square items-center justify-center bg-photo">
        {item.photo_url ? (
          // Presigned S3/MinIO hosts are arbitrary — plain img avoids next/image
          // remotePattern config, and these render once server-side.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.photo_url}
            alt={item.name ?? item.type ?? "wardrobe item"}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="text-[11px] font-bold tracking-[0.12em] text-muted-dim uppercase">
            {item.type ?? "item"}
          </span>
        )}
      </div>
      {caption ? (
        <div className="px-3.5 py-3">
          <div className="truncate text-[13px] text-ink">
            {item.name ?? titleCase(item.type ?? "")}
          </div>
          {item.colors?.length ? (
            <div className="mt-0.5 truncate text-[11.5px] text-muted-dim">
              {item.colors.join(" · ")}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default async function SharedWardrobePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const data = await fetchShared(token);
  if (!data) return <NotAvailable />;

  return (
    <div className="min-h-screen bg-[image:var(--grad-hero)] pb-40">
      <header className="mx-auto max-w-[760px] px-6 pt-14 pb-8 sm:px-10">
        <div className="text-[10.5px] font-bold tracking-[0.16em] text-accent uppercase">
          {data.owner_label ? `${data.owner_label}’s wardrobe` : "A shared wardrobe"}
        </div>
        <h1 className="mt-3 text-[clamp(30px,7vw,52px)] leading-[0.98] font-extrabold tracking-[-0.035em] uppercase">
          {data.wardrobe_name}
        </h1>
        <p className="mt-3 text-[14px] text-muted-dim">
          {data.item_count} {data.item_count === 1 ? "piece" : "pieces"} · view only
        </p>
      </header>

      <main className="mx-auto max-w-[760px] px-6 sm:px-10">
        {data.items.length === 0 ? (
          <div className="rounded-[18px] border border-line bg-surface px-6 py-16 text-center">
            <div className="font-serif text-[19px] text-accent italic">
              nothing here yet
            </div>
            <p className="mt-2 text-[14px] text-muted-dim">
              This wardrobe doesn’t have any pieces to show.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4">
            {data.items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>

      {/* Sticky conversion bar — the growth moment for a non-user viewer. */}
      <div className="fixed inset-x-0 bottom-0 border-t border-line bg-[var(--nav-bg)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-3 px-6 py-5 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <div className="text-[15px] font-bold text-ink">
              Build your own wardrobe
            </div>
            <div className="text-[12.5px] text-muted-dim">
              Free in beta · iOS &amp; Android · your closet stays yours
            </div>
          </div>
          <AccentButton href="/" glow={false} className="px-7 py-3.5">
            Get Fitted
          </AccentButton>
        </div>
      </div>
    </div>
  );
}
