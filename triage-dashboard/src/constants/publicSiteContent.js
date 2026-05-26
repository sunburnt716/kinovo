export const PUBLIC_SITE_NOTICE =
  "Research and product preview. Waiting-room monitoring only.";

export const LANDING_STATS = [
  { value: "Phase 01", label: "Waiting room surveillance" },
  { value: "< 3 taps", label: "Intake pairing target" },
  { value: "72 h", label: "Battery design target" },
  { value: "$r$", label: "Signal validation focus" },
];

export const PROBLEM_POINTS = [
  {
    title: "Snapshot triage",
    body: "Single, periodic checks miss gradual deterioration — in busy clinics a harmful change can go unnoticed for many minutes.",
  },
  {
    title: "Manual workload",
    body: "Repeated bedside checks increase staff burden and create gaps where silent hypoxia or respiratory decline are missed.",
  },
  {
    title: "Observation gap",
    body: "Patients often worsen before formal assessment; the period between intake and treatment is where early signs are lost.",
  },
];

export const SOLUTIONS_FEATURES = [
  {
    title: "Rapid-fit wearable",
    body: "A low-friction biometric sensor that fits in under 30 seconds and continuously reports SpO₂, pulse, and respiratory trends.",
  },
  {
    title: "Resilient telemetry",
    body: "BLE and opportunistic Wi‑Fi pathways keep essential data flowing in low-bandwidth settings while prioritizing clinically relevant signals.",
  },
  {
    title: "Priority dashboard",
    body: "Live re-ranking surfaces the patients most likely to deteriorate next so staff can intervene earlier and more efficiently.",
  },
];

export const SOLUTIONS_METRICS = [
  {
    label: "Intake workflow",
    value: "Under 3 taps",
    detail: "Keep pairing fast enough to stay usable at the bedside.",
  },
  {
    label: "Visibility window",
    value: "15+ min",
    detail: "Design for the gap between manual checks, not after it.",
  },
  {
    label: "Reliability target",
    value: "72 hours",
    detail: "Battery budget tuned for a long clinical shift profile.",
  },
];

export const SOLUTIONS_WORKFLOW = [
  {
    title: "Intake",
    body: "Patient is registered into the waiting-room surveillance workflow.",
  },
  {
    title: "Pairing",
    body: "Wearable is attached and linked to the patient record in a short bedside step.",
  },
  {
    title: "Telemetry",
    body: "Vitals stream continuously while the queue updates behind the scenes.",
  },
  {
    title: "Visibility",
    body: "Staff see the highest-risk patient first, instead of chasing the longest wait.",
  },
];

export const SOLUTIONS_ROADMAP = [
  {
    phase: "Phase 01",
    title: "Waiting room surveillance",
    body: "Current focus: continuous intake monitoring, live reprioritization, and audit-ready record keeping.",
    status: "Active pilot preview",
  },
  {
    phase: "Phase 02",
    title: "Device health and fleet visibility",
    body: "Next: battery health, connection quality, and operational reporting across deployed devices.",
    status: "Planned",
  },
  {
    phase: "Phase 03",
    title: "Evidence rollout",
    body: "Later: validation publications, site comparisons, and broader workflow evidence once the core loop is stable.",
    status: "Research track",
  },
];

export const RESEARCH_STATS = [
  { value: "42+", label: "Validation protocols" },
  { value: "< 2 s", label: "Telemetry sync target" },
  { value: "ISO", label: "Quality pathway" },
];

export const RESEARCH_STUDIES = [
  {
    code: "KNV-001",
    title: "Pulse oximetry correlation in motion",
    body: "Assessing signal fidelity when the sensor is affected by movement and low perfusion.",
    phase: "Validation",
  },
  {
    code: "KNV-009",
    title: "Low-bandwidth multi-patient telemetry",
    body: "Testing buffering and synchronization behavior when the network is intermittent or degraded.",
    phase: "Pilot",
  },
  {
    code: "KNV-014",
    title: "Triage automation and cognitive load",
    body: "Measuring whether queue automation reduces burden without obscuring clinical judgment.",
    phase: "Review",
  },
];

export const RESEARCH_REFERENCES = [
  {
    title: "Adaptive filtering for motion artifact suppression",
    source: "Signal processing methods",
    relevance: "Supports cleaner vitals under movement",
  },
  {
    title: "Low-bandwidth telemetry recovery patterns",
    source: "Store-and-forward design studies",
    relevance: "Guides backfill and retry logic",
  },
  {
    title: "Workload reduction in intake workflows",
    source: "Human factors literature",
    relevance: "Anchors the usability target",
  },
  {
    title: "Edge privacy and device security controls",
    source: "Secure medical systems guidance",
    relevance: "Frames the edge-encryption posture",
  },
];

export const RESEARCH_METHODS = [
  {
    title: "Data integrity checks",
    body: "Verify every record with checksums before it is accepted into the clinical stream.",
  },
  {
    title: "Privacy and standards",
    body: "Use privacy-first handling and clearly label work that is still under validation.",
  },
  {
    title: "Workflow validation",
    body: "Measure whether the system reduces cognitive load instead of adding friction to intake.",
  },
];
