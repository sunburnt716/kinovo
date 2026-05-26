import { Link } from "react-router-dom";
import PublicSiteShell from "../../../components/landing/PublicSiteShell";
import SectionHeader from "../../../components/landing/SectionHeader";
import { APP_ROUTES } from "../../../constants/routes";
import {
  PUBLIC_SITE_NOTICE,
  SOLUTIONS_FEATURES,
  SOLUTIONS_METRICS,
  SOLUTIONS_ROADMAP,
  SOLUTIONS_WORKFLOW,
} from "../../../constants/publicSiteContent";

function SolutionsPage() {
  return (
    <PublicSiteShell>
      <main>
        <section className="border-b border-slate-200 bg-[#F8F9FA]">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 lg:px-10 lg:py-20">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
                  Clinical Deployment &amp; Solutions Roadmap
                </div>
                <h1 className="max-w-4xl font-serif text-[44px] leading-[1.02] tracking-[-0.04em] text-[#0A192F] sm:text-[58px] lg:text-[68px]">
                  Phase 01: Waiting Room Surveillance.
                </h1>
                <p className="max-w-3xl text-[16px] leading-[1.8] text-slate-600 sm:text-[17px]">
                  Kinova keeps the waiting-room workflow visible in real time —
                  from intake and wearable pairing to live queue
                  reprioritization and auditable record keeping when the network
                  is unreliable.
                </p>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-[4px] border border-[color:var(--color-clinical-teal,#104F55)] bg-white px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-clinical-teal,#104F55)]">
                {PUBLIC_SITE_NOTICE}
              </span>
            </div>

            <div className="grid gap-px border-y border-slate-200 bg-slate-200 md:grid-cols-3">
              {SOLUTIONS_METRICS.map((metric) => (
                <article key={metric.label} className="bg-white p-6 lg:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    {metric.label}
                  </p>
                  <p className="mt-3 font-serif text-[30px] tracking-[-0.03em] text-[#0A192F]">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-[14px] leading-7 text-slate-600">
                    {metric.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-10">
            <SectionHeader
              eyebrow="Workflow"
              title="The deployment path is intentionally short."
              description="The mockup’s clinical flow becomes a waiting-room workflow: intake, pairing, telemetry, and visibility. That keeps the design grounded in bedside operations rather than abstract product narration."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {SOLUTIONS_WORKFLOW.map((step, index) => (
                <article
                  key={step.title}
                  className="border border-slate-200 bg-[#F8F9FA] p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] bg-[color:var(--color-clinical-teal,#104F55)] text-[12px] font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      Step {index + 1}
                    </span>
                  </div>
                  <p className="mt-4 font-serif text-[20px] tracking-[-0.03em] text-[#0A192F]">
                    {step.title}
                  </p>
                  <p className="mt-3 text-[14px] leading-7 text-slate-600">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#F8F9FA]">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:px-10">
            <div className="border border-slate-200 bg-white p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-clinical-teal,#104F55)]">
                Zero-friction deployment
              </p>
              <h2 className="mt-3 font-serif text-[30px] tracking-[-0.03em] text-[#0A192F]">
                Built so intake can stay fast.
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                The wearable, patient record, and priority queue move together.
                That keeps the bedside workflow compact while preserving an
                audit-ready record of what happened and when.
              </p>

              <div className="mt-6 grid gap-3">
                {SOLUTIONS_FEATURES.map((item) => (
                  <div
                    key={item.title}
                    className="border border-slate-200 bg-[#F8F9FA] p-4"
                  >
                    <p className="font-serif text-[18px] tracking-[-0.02em] text-[#0A192F]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-[13px] leading-6 text-slate-600">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                    Clinical Priority Dashboard
                  </p>
                  <p className="mt-1 text-[13px] text-slate-700">
                    Live queue re-ranking by severity
                  </p>
                </div>
                <span className="rounded-[4px] border border-slate-200 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  Active
                </span>
              </div>

              <div className="grid gap-3 px-5 py-4">
                {[
                  {
                    name: "A. Rivera",
                    id: "KIN-0142",
                    spo2: "89%",
                    pulse: "128 BPM",
                    stress: "84",
                    status: "Critical",
                  },
                  {
                    name: "M. Okafor",
                    id: "KIN-0156",
                    spo2: "94%",
                    pulse: "96 BPM",
                    stress: "52",
                    status: "Watch",
                  },
                  {
                    name: "J. Patel",
                    id: "KIN-0161",
                    spo2: "98%",
                    pulse: "72 BPM",
                    stress: "29",
                    status: "Stable",
                  },
                ].map((patient, index) => (
                  <div
                    key={patient.id}
                    className={`grid grid-cols-[1.15fr_repeat(3,minmax(0,0.62fr))_auto] items-center gap-3 border-l-2 px-3 py-3 ${
                      index === 0
                        ? "border-l-[color:var(--color-clinical-teal,#104F55)] bg-slate-50"
                        : "border-l-slate-200 bg-white"
                    }`}
                  >
                    <div>
                      <p className="text-[13px] font-semibold text-[#0A192F]">
                        {patient.name}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        {patient.id}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                        SpO₂
                      </p>
                      <p className="font-mono text-[14px] text-[#0A192F]">
                        {patient.spo2}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                        Pulse
                      </p>
                      <p className="font-mono text-[14px] text-[#0A192F]">
                        {patient.pulse}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                        Stress
                      </p>
                      <p className="font-mono text-[14px] text-[#0A192F]">
                        {patient.stress}
                      </p>
                    </div>
                    <span
                      className={`rounded-[4px] border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${
                        patient.status === "Critical"
                          ? "border-rose-200 bg-rose-50 text-rose-700"
                          : patient.status === "Watch"
                            ? "border-amber-200 bg-amber-50 text-amber-800"
                            : "border-emerald-200 bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {patient.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 lg:px-10">
            <SectionHeader
              eyebrow="Roadmap"
              title="A phased rollout, not a feature dump."
              description="The mockup’s roadmap structure translates well to Kinova’s clinical story: phase 01 is the waiting room, phase 02 is operational reliability, and phase 03 is the evidence rollout once the system is stable."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {SOLUTIONS_ROADMAP.map((item) => (
                <article
                  key={item.title}
                  className="border border-slate-200 bg-[#F8F9FA] p-5"
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
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-clinical-teal,#104F55)]">
                    {item.status}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={APP_ROUTES.PUBLIC_RESEARCH}
                className="inline-flex items-center rounded-[4px] bg-[color:var(--color-clinical-teal,#104F55)] px-4 py-2.5 text-[13px] font-medium text-white"
              >
                Read the research
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

export default SolutionsPage;
