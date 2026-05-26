import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes";
import {
  LANDING_STATS,
  PUBLIC_SITE_NOTICE,
} from "../../constants/publicSiteContent";
import ClinicalQueuePreview from "./ClinicalQueuePreview";
import StatCard from "./StatCard";

function Hero() {
  return (
    <section className="border-b border-slate-200 bg-[#F8F9FA]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:px-10 lg:py-20">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
            Phase 01 · Waiting Room Surveillance
          </div>

          <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-clinical-teal,#104F55)]">
            {PUBLIC_SITE_NOTICE}
          </div>

          <h1 className="max-w-3xl font-serif text-[44px] leading-[1.02] tracking-[-0.04em] text-[#0A192F] sm:text-[58px] lg:text-[68px]">
            Prevent invisible deterioration — before the wait becomes harm.
          </h1>

          <p className="max-w-2xl text-[16px] leading-[1.8] text-slate-600 sm:text-[17px]">
            Kinova is a research-driven clinical intelligence layer for
            high-throughput, low-resource care. It continuously captures
            physiological signals, re-ranks the patient queue by live severity,
            and preserves an auditable record when networks degrade.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to={APP_ROUTES.PUBLIC_SOLUTIONS}
              className="inline-flex items-center rounded-[4px] bg-[color:var(--color-clinical-teal,#104F55)] px-5 py-3 text-[14px] font-medium text-white"
            >
              Explore the solution
            </Link>
            <Link
              to={APP_ROUTES.PUBLIC_RESEARCH}
              className="inline-flex items-center rounded-[4px] border border-slate-300 bg-white px-5 py-3 text-[14px] font-medium text-slate-700"
            >
              Review the research
            </Link>
            <Link
              to={APP_ROUTES.LOGIN}
              className="inline-flex items-center rounded-[4px] border border-transparent px-2 py-3 font-mono text-[12px] uppercase tracking-[0.2em] text-slate-500"
            >
              Hospital login
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-slate-200 bg-white p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Target
              </p>
              <p className="mt-2 text-[14px] text-[#0A192F]">
                Waiting room surveillance
              </p>
            </div>
            <div className="border border-slate-200 bg-white p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Stage
              </p>
              <p className="mt-2 text-[14px] text-[#0A192F]">
                Pre-product R&amp;D
              </p>
            </div>
            <div className="border border-slate-200 bg-white p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Promise
              </p>
              <p className="mt-2 text-[14px] text-[#0A192F]">
                Continuous priority awareness
              </p>
            </div>
          </div>
        </div>

        <ClinicalQueuePreview />
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto grid max-w-[1200px] gap-3 px-6 py-6 lg:px-10 sm:grid-cols-2 lg:grid-cols-4">
          {LANDING_STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
