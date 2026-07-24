const stats = [
  { value: "10s", label: "to add a piece" },
  { value: "0", label: "fields to type" },
  { value: "4×", label: "more of your closet worn" },
  { value: "7 min", label: "to plan a whole week" },
];

export function StatStrip() {
  return (
    <section className="border-y border-line bg-bg-deep">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-6 py-9 sm:px-10 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-[30px] font-extrabold tracking-[-0.02em]">
              {s.value}
            </div>
            <div className="mt-1.5 text-[11px] font-medium tracking-[0.1em] text-muted-dim uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
