import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes";
import {
  SOLUTIONS_FEATURES,
  SOLUTIONS_ROADMAP,
} from "../../constants/publicSiteContent";
import SectionHeader from "./SectionHeader";

function SolutionsSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F8F9FA]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:px-10">
        <SectionHeader
          eyebrow="The solution"
          title="A clinical intelligence layer for waiting-room surveillance."
          description="Kinova combines the wearable, the telemetry path, and the priority dashboard into a workflow built for low-resource, high-throughput care environments."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {SOLUTIONS_FEATURES.map((item) => (
            <article
              key={item.title}
              className="border border-slate-200 bg-white p-5"
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

        <div className="grid gap-4 md:grid-cols-3">
          {SOLUTIONS_ROADMAP.map((item) => (
            <article
              key={item.title}
              className="border border-slate-200 bg-white p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                {item.phase}
              </p>
              <p className="mt-2 font-serif text-[18px] tracking-[-0.02em] text-[#0A192F]">
                {item.title}
              </p>
              <p className="mt-3 text-[13px] leading-7 text-slate-600">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to={APP_ROUTES.PUBLIC_SOLUTIONS}
            className="inline-flex items-center rounded-[4px] bg-[color:var(--color-clinical-teal,#104F55)] px-4 py-2.5 text-[13px] font-medium text-white"
          >
            Explore Solutions
          </Link>
          <Link
            to={APP_ROUTES.PUBLIC_RESEARCH}
            className="inline-flex items-center rounded-[4px] border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-700"
          >
            Review Research
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
