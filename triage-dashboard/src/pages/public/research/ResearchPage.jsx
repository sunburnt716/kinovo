import { Link } from "react-router-dom";
import PublicSiteShell from "../../../components/landing/PublicSiteShell";
import SectionHeader from "../../../components/landing/SectionHeader";
import { APP_ROUTES } from "../../../constants/routes";
import {
  PUBLIC_SITE_NOTICE,
  RESEARCH_METHODS,
  RESEARCH_REFERENCES,
  RESEARCH_STATS,
  RESEARCH_STUDIES,
} from "../../../constants/publicSiteContent";

function ResearchPage() {
  return (
    <PublicSiteShell>
      <main>
        <section className="border-b border-slate-200 bg-[#F8F9FA]">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 lg:px-10 lg:py-20">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
                  Clinical Research &amp; Development Repository
                </div>
                <h1 className="max-w-4xl font-serif text-[44px] leading-[1.02] tracking-[-0.04em] text-[#0A192F] sm:text-[58px] lg:text-[68px]">
                  Institutional evidence for waiting-room surveillance.
                </h1>
                <p className="max-w-3xl text-[16px] leading-[1.8] text-slate-600 sm:text-[17px]">
                  Kinova’s public research story centers on validation, methods,
                  and reproducibility. The emphasis is on what is being
                  measured, how it is tested, and what remains in progress.
                </p>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-[4px] border border-[color:var(--color-clinical-teal,#104F55)] bg-white px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-clinical-teal,#104F55)]">
                {PUBLIC_SITE_NOTICE}
              </span>
            </div>

            <div className="grid gap-px border-y border-slate-200 bg-slate-200 md:grid-cols-3">
              {RESEARCH_STATS.map((stat) => (
                <article key={stat.label} className="bg-white p-6 lg:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-3 font-serif text-[30px] tracking-[-0.03em] text-[#0A192F]">
                    {stat.value}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 lg:px-10">
            <SectionHeader
              eyebrow="Active studies"
              title="Validation cycles that stay close to the workflow."
              description="Each study is framed around a specific reliability question: signal fidelity, degraded connectivity, or human factors. That keeps the research tied to clinical use rather than abstract benchmarks."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {RESEARCH_STUDIES.map((study) => (
                <article
                  key={study.code}
                  className="flex h-full flex-col border border-slate-200 bg-[#F8F9FA] p-6"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Study ID: {study.code}
                  </p>
                  <h2 className="mt-4 font-serif text-[24px] tracking-[-0.03em] text-[#0A192F]">
                    {study.title}
                  </h2>
                  <p className="mt-4 flex-grow text-[14px] leading-7 text-slate-600">
                    {study.body}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="rounded-[4px] bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      {study.phase}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-clinical-teal,#104F55)]">
                      In progress
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#F8F9FA]">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 lg:px-10">
            <SectionHeader
              eyebrow="Reference library"
              title="Methods and literature that shape the design."
              description="The public site can show the kinds of papers and technical references that inform Kinova, without overstating them as clinical proof.
              "
            />

            <div className="overflow-hidden border border-slate-200 bg-white">
              <div className="grid grid-cols-1 border-b border-slate-200 bg-[#F8F9FA] px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-slate-500 md:grid-cols-[1.4fr_0.9fr_1fr]">
                <div>Reference</div>
                <div>Source</div>
                <div>Kinova relevance</div>
              </div>
              <div className="divide-y divide-slate-200">
                {RESEARCH_REFERENCES.map((row) => (
                  <div
                    key={row.title}
                    className="grid gap-3 px-5 py-4 text-[14px] text-slate-700 md:grid-cols-[1.4fr_0.9fr_1fr] md:items-center"
                  >
                    <div className="font-semibold text-[#0A192F]">
                      {row.title}
                    </div>
                    <div>{row.source}</div>
                    <div className="text-slate-600">{row.relevance}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:px-10">
            <div>
              <SectionHeader
                eyebrow="Methodology"
                title="The validation process is designed to be inspectable."
                description="The public research story should make it easy to see how data integrity, privacy, and workflow burden are handled before the platform ever scales.
                "
              />

              <ul className="mt-8 grid gap-4">
                {RESEARCH_METHODS.map((method) => (
                  <li
                    key={method.title}
                    className="flex items-start gap-4 border border-slate-200 bg-[#F8F9FA] p-4"
                  >
                    <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[color:var(--color-clinical-teal,#104F55)]" />
                    <div>
                      <p className="font-serif text-[18px] tracking-[-0.02em] text-[#0A192F]">
                        {method.title}
                      </p>
                      <p className="mt-2 text-[14px] leading-7 text-slate-600">
                        {method.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden border border-slate-200 bg-[#F8F9FA] p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-[color:var(--color-clinical-teal,#104F55)]" />
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                Validation lab
              </p>
              <h3 className="mt-3 font-serif text-[28px] tracking-[-0.03em] text-[#0A192F]">
                Methods first, claims second.
              </h3>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                The public research page should read like an institutional
                record: what is measured, what is still being studied, and which
                controls are in place to keep the data trustworthy.
              </p>

              <div className="mt-6 grid gap-4 border border-slate-200 bg-white p-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Lab focus
                  </p>
                  <p className="mt-2 text-[14px] text-[#0A192F]">
                    Signal fidelity, reliability, and usability
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Evidence posture
                  </p>
                  <p className="mt-2 text-[14px] text-[#0A192F]">
                    Research-first preview; validation in progress
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Privacy posture
                  </p>
                  <p className="mt-2 text-[14px] text-[#0A192F]">
                    Edge-secured, minimized-data workflow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FA]">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-16 lg:px-10">
            <SectionHeader
              eyebrow="Next"
              title="Research supports the solution; the solution supports the workflow."
              description="The repository can grow into a fuller publication archive over time, but the public version should remain clear, cautious, and clinically credible."
            />

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={APP_ROUTES.PUBLIC_SOLUTIONS}
                className="inline-flex items-center rounded-[4px] bg-[color:var(--color-clinical-teal,#104F55)] px-4 py-2.5 text-[13px] font-medium text-white"
              >
                Review solutions
              </Link>
              <Link
                to={APP_ROUTES.ROOT}
                className="inline-flex items-center rounded-[4px] border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-700"
              >
                Back to landing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PublicSiteShell>
  );
}

export default ResearchPage;
