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
  kicker: "IBA6316 · MDS5370 · CUHK-Shenzhen · SFI",

  // Named in the footer line: "本站由郭羽童维护，只收录…作品集。"
  collection: "IBA6316·MDS5370·Fall2026",

  // Shown in the footer as a mailto link
  contactEmail: "guoyutong@cuhk.edu.cn",

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
    // The other course's artifact gallery, live since 2026-09-03.
    siblingGallery: "https://yutong010.github.io/mis3011-artifact-gallery/",
    siblingLabel: { en: "MIS3011 gallery", zh: "MIS3011 作品站" },
  },
};
