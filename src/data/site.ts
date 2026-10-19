// Central content for the portfolio. Edit this file to update the site.
// Honesty rule: only list metrics/tools you have actually used or measured.

export const profile = {
  name: "Harish Parameswaran",
  role: "Engineering Leader · Data & AI Platforms",
  tagline:
    "I build the platform that onboards agentic workloads — conversational analytics and enterprise RAG, running reliably at enterprise scale.",
  location: "Bay Area, CA",
  email: "harishparam@icloud.com",
  linkedin: "https://www.linkedin.com/in/hparameswaran",
  github: "https://github.com/hariparam81",
  githubHandle: "hariparam81",
  siteUrl: "https://harishparam.com",
  resumePath: "/resume.pdf",
};

export const atAGlance = [
  { label: "Role", value: "Engineering leadership · Data & AI platform" },
  { label: "Experience", value: "20+ years" },
  { label: "Location", value: "Bay Area, CA" },
  { label: "Focus", value: "Data & AI Platforms · Agentic AI" },
];

export interface Project {
  slug?: string; // when set, card links to /projects/<slug>/
  title: string;
  org: string; // Project context, such as personal work or current work
  status: string; // "Flagship" | "Live" | "In progress" | "Planned"
  blurb: string;
  tags: string[];
  repo?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    slug: "inference-economics-workbench",
    title: "Inference Economics Workbench",
    org: "Design concept",
    status: "In progress",
    blurb:
      "A proposed measurement-led approach to comparing models across conversational analytics, enterprise RAG, and tool use. Benchmark results remain pending measured runs.",
    tags: ["Conversational analytics", "Enterprise RAG", "Model evaluation"],
  },
  {
    title: "Conversational Analytics",
    org: "Current work",
    status: "In progress",
    blurb:
      "Onboarding NL2SQL workloads onto the data platform, with execution accuracy improving from 30% to 85%.",
    tags: ["Agentic workloads", "NL2SQL", "Data platform"],
  },
  {
    title: "Enterprise RAG",
    org: "Current work",
    status: "In progress",
    blurb:
      "A versioned semantic extraction engine for enterprise retrieval-augmented generation, built around semantic contracts and an ontology with provenance, confidence, and permission models.",
    tags: ["Agentic workloads", "Semantic contracts", "Governance"],
  },
];

export const stack: { group: string; items: string[] }[] = [
  {
    group: "Platform leadership",
    items: ["Enterprise cloud platforms", "Data platforms", "Platform onboarding", "Reliability"],
  },
  {
    group: "Agentic workloads",
    items: ["Conversational analytics", "NL2SQL", "Enterprise RAG", "Semantic contracts", "Ontologies"],
  },
  {
    group: "Governance & trust",
    items: ["Provenance", "Confidence", "Permission models", "Responsible platform adoption"],
  },
];

export const currentWork = {
  title: "Unified data and AI platform",
  body: "I manage global teams building a unified data and AI platform that processes 25M+ streaming events a day across 28 regions. The current focus is onboarding agentic workloads: conversational analytics (NL2SQL execution accuracy improved from 30% to 85%) and enterprise RAG through a versioned semantic extraction engine with semantic contracts, ontology, provenance, confidence, and permission models.",
};

export const focusAreas = [
  "Onboarding agentic workloads onto data platforms — the promotion path from provider capability to platform feature",
  "Conversational analytics (NL2SQL) and enterprise RAG as the two strong agentic motions",
  "Inference economics — measured accuracy-per-dollar as the way teams should pick models",
    "Director / VP Data & AI Platform roles",
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
