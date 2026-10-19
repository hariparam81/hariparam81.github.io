// Central content for the portfolio. Edit this file to update the site.
// Honesty rule: only list metrics/tools you have actually used or measured.
// No employer names on the site by design; LinkedIn carries the career history.

export const profile = {
  name: "Harish Parameswaran",
  role: "Engineering leader · Data & AI platforms",
  tagline:
    "I build the data platform that onboards agentic workloads, from real-time streaming to semantic layers, running reliably at enterprise scale.",
  location: "Bay Area, CA",
  email: "harishparam@icloud.com",
  linkedin: "https://www.linkedin.com/in/hparameswaran",
  siteUrl: "https://harishparam.com",
};

export const hero = {
  before: "Make the data platform ready for",
  emphasis: "agents.",
};

export const atAGlance = [
  { label: "Role", value: "Engineering leadership" },
  { label: "Experience", value: "20+ years" },
  { label: "Location", value: "Bay Area, CA" },
  { label: "Focus", value: "Data & AI platforms · Agentic AI" },
];

export const explore = [
  { label: "Platform work", blurb: "Real-time data infrastructure and semantic layers for agents.", href: "#work" },
  { label: "Projects", blurb: "A measurement-led workbench for comparing models.", href: "#projects" },
  { label: "Volunteering", blurb: "Supporting families through a child’s medical crisis.", href: "#volunteering" },
  { label: "LinkedIn", blurb: "Career history, recommendations, and the full background.", href: profile.linkedin },
];

export const work = [
  {
    title: "Real-time Data Infrastructure",
    blurb:
      "A governed, self-service data-products platform that serves both people and AI consumers, with idempotent, checkpointed pipelines feeding production ML and AI workloads.",
    facts: [
      { value: "25M+", label: "streaming events a day" },
      { value: "28", label: "regions" },
      { value: "75 min → <3 min", label: "end-to-end data latency" },
      { value: "99.1% → 99.99%+", label: "data quality" },
    ],
    tags: ["Streaming", "Data products", "Reliability"],
  },
  {
    title: "Semantic Layers for Ontology-Driven Agents",
    blurb:
      "Automated semantic extraction over code, documentation, and database metadata into versioned semantic contracts and an ontology with provenance, confidence, and permission models.",
    facts: [
      { value: "~30% → 85%", label: "NL2SQL benchmark accuracy" },
      { value: "Versioned", label: "semantic contracts" },
      { value: "3", label: "trust models: provenance, confidence, permissions" },
    ],
    tags: ["NL2SQL", "Ontology", "Governance"],
  },
];

export interface Project {
  slug?: string; // when set, card links to /projects/<slug>/
  title: string;
  status: string;
  blurb: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "inference-economics-workbench",
    title: "Inference Economics Workbench",
    status: "In design",
    blurb:
      "A proposed measurement-led approach to comparing models across conversational analytics, enterprise RAG, and tool use. Benchmark results remain pending measured runs.",
    tags: ["Model evaluation", "Conversational analytics", "Enterprise RAG"],
  },
];

export const volunteering = {
  org: "There With Care",
  url: "https://therewithcare.org/volunteer-to-help-families-in-crisis/",
  body: "I volunteer with There With Care, a nonprofit that supports families facing a child’s medical crisis with care bags of groceries and essential supplies.",
};

export const focusAreas = [
  "Onboarding agentic workloads onto data platforms",
  "Conversational analytics and enterprise RAG, measured on outcomes",
  "Inference economics: accuracy per dollar as the way teams pick models",
];

export const workbench = {
  title: "Inference Economics Workbench",
  description:
    "A measurement-led workbench for comparing open-source models across practical enterprise workloads, with accuracy-per-dollar as the decision lens.",
  tracks: [
    {
      title: "Conversational analytics",
      body: "Frame the workload around natural-language questions that require SQL execution. The implementation should compare returned query outcomes rather than surface similarity between generated SQL statements.",
    },
    {
      title: "Enterprise retrieval-augmented generation",
      body: "The enterprise RAG motion uses a versioned semantic extraction engine with semantic contracts and an ontology. Provenance, confidence, and permission models are part of the platform design.",
    },
    {
      title: "Tool use",
      body: "A further evaluation track can cover model interactions with tools. Its tasks and success criteria should be defined and measured before reporting results.",
    },
  ],
  decisions: [
    {
      title: "Measure outcomes, do not predict them.",
      body: "Compare observed task quality and serving cost under stated conditions. Keep assumptions and run provenance visible so a recommendation can be reproduced and challenged.",
    },
    {
      title: "Keep task suites explicit.",
      body: "Treat each workload as its own evaluation suite. This makes it possible to add a use case without hiding its success criteria inside a general score.",
    },
    {
      title: "Make comparisons auditable.",
      body: "Record model, configuration, workload, and measurement context with each result. The measured-results section stays open until actual runs are available.",
    },
  ],
  stack: [
    { label: "Decision lens", value: "Measured task quality per serving cost" },
    { label: "Workloads", value: "Conversational analytics, enterprise RAG, and tool use" },
    { label: "Results", value: "Pending measured runs" },
  ],
};
