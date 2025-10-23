export const changelog_0_1_22 = {
  id: "0.1.22",
  version: "0.1.22",
  date: "Oct 6th, 2025",
  title: "MCP",
  description: [
    { type: 'text', content: 'Add support for MCP, which can be configured in the app\'s settings.' },
    { type: 'text', content: 'Dynamicallty fetch models available from the provider, and pull its metadata from OpenRouter. New models (e.g. Claude Sonnet 4.5) are available as soon as they are released without needing to update the app' },
  ],
  improvements: [
    "Upgrade to Claude Sonnet 4.5",
    "Enhanced logging when connecting to local server fails",
    "Improve performance related to Accessibility API usage. This should prevent large Xcode project from becoming unresponsive",
  ],
  fixes: [
    "Don't timeout long-running requests",
    "Fix code selection when using split tab layout",
    "Fix crash in the networking layer when the request timed out",
  ],
};
