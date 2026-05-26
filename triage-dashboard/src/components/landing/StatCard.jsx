function StatCard({ value, label, trend, accent = "brand" }) {
  const accentClass =
    accent === "signal"
      ? "text-[color:var(--color-signal-stable)]"
      : "text-brand-600 dark:text-brand-300";

  return (
    <div className="group relative overflow-hidden border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-20px_rgba(10,25,47,0.16)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-slate-200"
        aria-hidden
      />
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-[28px] font-semibold tracking-tight text-[#0A192F]">
          {value}
        </span>
        {trend ? (
          <span className={`text-[12px] font-medium ${accentClass}`}>
            {trend}
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-[13px] font-medium text-slate-500">{label}</p>
    </div>
  );
}

export default StatCard;
