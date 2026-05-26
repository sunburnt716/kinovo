import SectionHeader from "./SectionHeader";
import { PROBLEM_POINTS } from "../../constants/publicSiteContent";

function ProblemSection() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:px-10">
        <SectionHeader
          eyebrow="The problem"
          title="Waiting-room triage can't rely on snapshots."
          description="Kinova reduces unseen deterioration by continuously monitoring physiology in busy, low-resource clinical settings, surfacing patients who need attention now."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {PROBLEM_POINTS.map((item) => (
            <article
              key={item.title}
              className="border border-slate-200 bg-[#F8F9FA] p-5"
            >
              <p className="font-serif text-[18px] tracking-[-0.02em] text-[#0A192F]">
                {item.title}
              </p>
              <p className="mt-3 text-[14px] leading-7 text-slate-600">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
