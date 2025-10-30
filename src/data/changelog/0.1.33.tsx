import webfetch from "@/assets/changelog/0.1.33-webfetch.png";
import folder from "@/assets/changelog/0.1.33-folder-attachment.png";

export const changelog_0_1_33 = {
  id: "0.1.33",
  version: "0.1.33",
  date: "Oct 30th, 2025",
  title: "WebFetch tool & Folder attachment",
  description: [
    { type: 'text', content: 'Add WebFetch tool which allows LLMs to fetch data from the web.' },
    { type: 'image', src: webfetch },
    { type: 'text', content: 'Add support for folder attachments (@folder from the chat input)' },
    { type: 'image', src: folder },
  ],
  improvements: [
    'Support macOS back to 15.0',
  ],
  fixes: [
  ],
};
