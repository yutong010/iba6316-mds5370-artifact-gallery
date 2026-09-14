/* ═══════════════════════════════════════════════════════════════════════
   ARTIFACT RECORDS — this is the only file you edit to add or change entries.
   Never edit index.html to add an artifact.
   条目维护只改这个文件，不要去改 index.html。

   ── ADDING ONE ───────────────────────────────────────────────────────────
   Copy the template at the bottom of this comment, paste it at the TOP of the
   ARTIFACTS array (newest first), fill it in, save, commit.

   ── THE FOUR RULES THAT MATTER ───────────────────────────────────────────
   1. consent MUST be "granted" or the entry does not render. No exceptions,
      no override. An entry with consent "pending" / "declined" / missing is
      skipped silently — it stays in this file so you can see it is pending.
      同意状态不是 "granted" 就不渲染。这是硬约束。
   2. NO names, student IDs, emails, or company names anywhere in this file.
      The `credit` field carries whatever string the student chose for
      themselves (real name, given name only, or "Anonymous") — that string is
      their decision, recorded when consent was asked. Nothing else identifying.
      合作企业名一律不写，只写行业标签。
   3. one_liner is capped at 18 words / 40 字, and must say WHO it helps and
      WHAT problem it solves — not the tech stack. render.js warns in the
      console if you go over.
   4. If you are not sure about a field, set confidence: "low" rather than
      guessing. Do not invent values.

   ── FIELDS ───────────────────────────────────────────────────────────────
   id           "2026F-PG-lab1-01"   term-level-source-sequence
   week         teaching week number. Entries are grouped under "Week N".
   source       "lab 1" | "AS1" | "AS2" | "project"  — shown as a tag
   title        the artifact's own name (not translated)
   one_liner    { en, zh }  <= 18 words / 40 字
   type         website | agent | workflow | chatbot | skill | others
   +            controlled list. Add a value only with a written reason (spec 3.3).
   platform     WorkBuddy | Dify | Colab | GitHub Pages | Streamlit | ...
   ai_stack     array of model / tool names
   url          the public address. This is the point of the whole site.
   consent      "granted" | "pending" | "declined"
   credit       the string the student chose, or "Anonymous"
   role         "student" (default) | "instructor"  — instructor demos are
                labelled as such and never presented as student work
   status       "live" | "dead"      dead entries stay, greyed out
   last_checked "2026-09-03"
   screenshot   path under assets/, or null
   confidence   "low" when a field is uncertain, else null

   ── TEMPLATE ─────────────────────────────────────────────────────────────
   {
     id: "2026F-PG-lab1-01",
     week: 1,
     week: 1,
    source: "lab 1",
     title: "",
     one_liner: { en: "", zh: "" },
     type: "website",
     platform: "",
     ai_stack: [],
     url: "",
     consent: "pending",
     credit: "Anonymous",
     role: "student",
     status: "live",
     last_checked: "2026-09-08",
     screenshot: null,
     confidence: null,
   },
   ═══════════════════════════════════════════════════════════════════════ */

window.ARTIFACTS = [

  /* ── Week 2: work students volunteered to show, not a graded submission.
     source "class share" is an addition to the controlled list (spec 3.3):
     these came from an in-class presentation and a student's own offer, and
     none of lab N / AS1 / AS2 / project describes that honestly.
     ────────────────────────────────────────────────────────────────────── */

  {
    id: "2026F-PG-share-01",
    week: 2,
    source: "class share",
    title: "CUHKSZ Mate",
    one_liner: {
      en: "Helps CUHK-Shenzhen students find a compatible activity partner through anonymous, agent-simulated matching.",
      zh: "帮港中深同学在匿名的前提下，为一场活动找到聊得来的搭子。",
    },
    type: "website",
    platform: "Web app",
    ai_stack: ["Codex", "Cursor", "Kimi K3"],
    url: "https://cuhkmate.cn",
    consent: "granted",
    credit: "Linhan",
    role: "student",
    status: "live",
    last_checked: "2026-09-14",
    screenshot: null,
    confidence: null,
  },
  {
    id: "2026F-PG-share-02",
    week: 2,
    source: "class share",
    title: "VoiceLoop",
    one_liner: {
      en: "Lets anyone who records meetings on an iPhone get transcripts, structured minutes and weekly reports automatically.",
      zh: "让用 iPhone 录会议的人自动拿到转录、结构化纪要和周报。",
    },
    type: "workflow",
    platform: "GitHub",
    ai_stack: ["Qwen3-ASR", "Kimi", "Codex"],
    url: "https://github.com/Lucas-learner/voiceloop",
    consent: "granted",
    credit: "ZHANG Xuyang",
    role: "student",
    status: "live",
    last_checked: "2026-09-14",
    screenshot: null,
    confidence: null,
  },
  {
    id: "2026F-PG-share-03",
    week: 2,
    source: "class share",
    title: "AI Daily",
    one_liner: {
      en: "Gives readers one deduplicated, source-checked AI industry briefing every morning, built and published automatically.",
      zh: "每天早上自动给读者一份去重、核对过信源的 AI 行业日报。",
    },
    type: "website",
    platform: "GitHub Pages",
    ai_stack: ["Kimi Code"],
    // The live site, not the repo: the site is the thing you open (spec 5).
    // Source: https://github.com/Lucas-learner/ai-daily
    url: "https://lucas-learner.github.io/ai-daily/",
    consent: "granted",
    credit: "ZHANG Xuyang",
    role: "student",
    status: "live",
    last_checked: "2026-09-14",
    screenshot: null,
    confidence: null,
  },

];
