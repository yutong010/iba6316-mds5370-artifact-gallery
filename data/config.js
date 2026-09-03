/* ═══════════════════════════════════════════════════════════════════════
   COURSE IDENTITY — the only file that differs between the two course sites.
   index.html, assets/site.css and assets/render.js are byte-identical across
   both; to stand up a new course gallery, copy the repo and edit this file.
   ═══════════════════════════════════════════════════════════════════════ */

window.SITE_CONFIG = {
  course: "IBA6316 / MDS5370",
  level: "PG",
  term: "2026F",

  // Shown in the small monospace line above the title
  kicker: "IBA6316 · MDS5370 · CUHK-Shenzhen · SME",

  courseName: {
    en: "Generative AI for Business",
    zh: "生成式人工智能商业应用",
  },

  // Cyan, against MIS3011's lime — the two sites are told apart at a glance.
  accent: "#4dd6ff",
  accentDim: "#3aaed4",

  // Cross-links (spec section 2: the sites do not merge, but they reference each other)
  links: {
    pastProjects: "https://yutong010.github.io/sme-ai-project-gallery/",
    // The other course's artifact gallery. Left null until that site is live —
    // render.js hides the link rather than shipping a dead one.
    siblingGallery: null,
    siblingLabel: { en: "MIS3011 gallery", zh: "MIS3011 作品站" },
  },
};
