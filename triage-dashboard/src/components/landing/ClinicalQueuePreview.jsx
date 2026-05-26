import { motion } from "framer-motion";

const QUEUE = [
  {
    name: "A. Rivera",
    id: "KIN-0142",
    spo2: 89,
    bpm: 128,
    stress: 84,
    status: "Critical",
  },
  {
    name: "M. Okafor",
    id: "KIN-0156",
    spo2: 94,
    bpm: 96,
    stress: 52,
    status: "Watch",
  },
  {
    name: "J. Patel",
    id: "KIN-0161",
    spo2: 98,
    bpm: 72,
    stress: 29,
    status: "Stable",
  },
];

function StatusChip({ status }) {
  const tone =
    status === "Critical"
      ? "border-rose-200 bg-rose-50 text-rose-700"
      : status === "Watch"
        ? "border-amber-200 bg-amber-50 text-amber-800"
        : "border-emerald-200 bg-emerald-50 text-emerald-700";

  return (
    <span
      className={`rounded-[4px] border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${tone}`}
    >
      {status}
    </span>
  );
}

function ClinicalQueuePreview() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden border border-slate-300 bg-white shadow-[0_28px_60px_-34px_rgba(10,25,47,0.45)]"
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
            Clinical Priority Dashboard
          </p>
          <p className="mt-1 text-[13px] text-slate-700">
            Live queue re-ranking by severity
          </p>
        </div>
        <span className="rounded-[4px] border border-slate-200 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
          Live
        </span>
      </div>

      <div className="grid gap-3 px-4 py-4">
        {QUEUE.map((patient, index) => (
          <div
            key={patient.id}
            className={`grid grid-cols-[1.3fr_repeat(3,minmax(0,0.7fr))_auto] items-center gap-3 border-l-2 px-3 py-3 ${
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
                {patient.spo2}%
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                BPM
              </p>
              <p className="font-mono text-[14px] text-[#0A192F]">
                {patient.bpm}
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
            <StatusChip status={patient.status} />
          </div>
        ))}
      </div>
    </motion.aside>
  );
}

export default ClinicalQueuePreview;
