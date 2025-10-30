import codex from "@/assets/changelog/0.1.31-codex.png";
import context from "@/assets/changelog/0.1.31-context.png";

export const changelog_0_1_31 = {
  id: "0.1.31",
  version: "0.1.31",
  date: "Oct 23th, 2025",
  title: "Codex",
  description: [
    { type: 'text', content: 'Add OpenAI\'s Codex as a new external agent.' },
    { type: 'image', src: codex },
    { type: 'text', content: 'Show how much of the context window is currently used, and make it possible to trigger context compaction manually.' },
    { type: 'image', src: context },
  ],
  improvements: [
    "Improve how the responses from Claude Code's tools are handled, and make the response parsing more reliable",
  ],
  fixes: [
  ],
};
