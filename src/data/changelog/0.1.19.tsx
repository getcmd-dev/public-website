export const changelog_0_1_19 = {
  id: "0.1.19",
  version: "0.1.19",
  date: "Sep 19th, 2025",
  title: "File Persistence & Xcode Fixes",
  description: [{ type: 'text', content: 'Improved file editing reliability and Xcode 26 compatibility.' }],
  fixes: [
    "Fix issue where a file edit would not be displayed correctly after the app relaunched",
    "Fix checkpoint button not being tappable",
    "Fix checkpoint appearing after tool use instead of before",
    "Fix LLM providers API key not being written to the keychain for all providers",
  ],
};
