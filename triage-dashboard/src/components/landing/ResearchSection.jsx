import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes";
import {
  RESEARCH_METHODS,
  RESEARCH_STATS,
} from "../../constants/publicSiteContent";
import SectionHeader from "./SectionHeader";

function ResearchSection() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:px-10">
        <SectionHeader
          eyebrow="Research"
          title="Product choices grounded in measurable evidence."
          description="The public site should make clear that Kinova is a research-driven platform, not a hype-driven dashboard. The Research page shows what is being measured, how it is validated, and what remains under study."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {RESEARCH_METHODS.map((item) => (
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

        <div className="grid gap-4 border border-slate-200 bg-[#F8F9FA] p-5 md:grid-cols-3">
          {RESEARCH_STATS.map((item) => (
            <div
              key={item.label}
              className="border-b border-slate-200 pb-3 md:border-b-0 md:pb-0"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-2 text-[14px] text-[#0A192F]">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to={APP_ROUTES.PUBLIC_RESEARCH}
            className="inline-flex items-center rounded-[4px] bg-[color:var(--color-clinical-teal,#104F55)] px-4 py-2.5 text-[13px] font-medium text-white"
          >
            Open Research
          </Link>
          <Link
            to={APP_ROUTES.PUBLIC_SOLUTIONS}
            className="inline-flex items-center rounded-[4px] border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-700"
          >
            See Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ResearchSection;
