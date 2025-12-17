import codeCompletionPoster from "@/assets/changelog/0.2.0-code-completion.jpg";
import codeCompletionVideo from "@/assets/changelog/0.2.0-code-completion.mp4";

export const changelog_0_2_0 = {
  id: "0.2.0",
  version: "0.2.0",
  date: "Dec 16th, 2025",
  title: "Code Completion",
  description: [
    { type: 'text', content: 'Introducing code completion: get intelligent, context-aware code suggestions as you type in Xcode. AI-powered autocomplete helps you write Swift code faster and with fewer errors.' },
    { type: 'video', src: codeCompletionVideo, poster: codeCompletionPoster },
    { type: 'text', content: 'Choose from multiple providers including GitHub Copilot, Mistral AI (Codestral), and Mercury Coder. Configure automatic suggestions as you type, or trigger them on-demand with a keyboard shortcut.' },
  ],
  improvements: [
  ],
  fixes: [
  ],
};
