import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Smart Capture", href: "#ai" },
      { label: "Friends", href: "#friends" },
      { label: "Waitlist", href: "#waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Journal", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "#" },
      { label: "Your data", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-12 sm:px-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="text-[17px] font-extrabold tracking-[0.14em] text-accent">
            FITTED
          </div>
          <div className="mt-3 max-w-[250px] text-[13px] leading-[1.6] text-muted-dim">
            The wardrobe app that makes you wear what you already own.
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-2.5">
            <div className="text-[10px] font-bold tracking-[0.14em] text-ink uppercase">
              {col.title}
            </div>
            {col.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13px] text-muted-dim transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 border-t border-line px-6 py-[22px] sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span className="text-[12px] text-muted-faint">
          © 2026 Fitted. Made for people with too many clothes.
        </span>
        <span className="text-[12px] text-muted-faint">
          Instagram · Twitter · TikTok
        </span>
      </div>
    </footer>
  );
}
