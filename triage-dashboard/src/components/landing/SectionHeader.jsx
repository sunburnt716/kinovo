function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-clinical-teal,#104F55)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-[28px] leading-[1.12] tracking-[-0.03em] text-[#0A192F] sm:text-[38px]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[15px] leading-[1.7] text-slate-600 sm:text-[16px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
