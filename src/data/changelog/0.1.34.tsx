import tabs from "@/assets/changelog/0.1.34-tabs.png";
import queuedMessages from "@/assets/changelog/0.1.34-queued-messages.png";

export const changelog_0_1_34 = {
  id: "0.1.34",
  version: "0.1.34",
  date: "Nov 9th, 2025",
  title: "Tabs & queued messages",
  description: [
    { type: 'text', content: 'Use tabs to work on different tasks at once. The intuitive UI makes it easily to track their status.' },
    { type: 'image', src: tabs },
    { type: 'text', content: 'Sending a new message while the previous one is still being processed will queue the new one (instead of cancelling the previous one). You can send immediately the queued message, or disable message queuing in the settings.' },
    { type: 'image', src: queuedMessages },
  ],
  improvements: [
  ],
  fixes: [
    'Fix issue losing the connection to Claude Code when it compacts the context',
  ],
};
