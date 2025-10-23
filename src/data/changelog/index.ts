export interface Commit {
  hash: string;
  message: string;
}

export type DescriptionBlock =
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt?: string };

export interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  title: string;
  description?: string | DescriptionBlock[];
  improvements?: string[];
  fixes?: string[];
  commits?: Commit[];
}

// Automatically import all changelog files
const modules = import.meta.glob<{ [key: string]: ChangelogEntry }>('./*.tsx', { eager: true });

// Extract changelog entries and sort by version (newest first)
export const changelogEntries: ChangelogEntry[] = Object.values(modules)
  .map(module => Object.values(module)[0])
  .filter(entry => entry && typeof entry === 'object' && 'version' in entry)
  .sort((a, b) => {
    // Parse versions like "0.1.30" -> [0, 1, 30]
    const parseVersion = (v: string) => v.split('.').map(Number);
    const aParts = parseVersion(a.version);
    const bParts = parseVersion(b.version);

    // Compare each part (major, minor, patch)
    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const aPart = aParts[i] || 0;
      const bPart = bParts[i] || 0;
      if (aPart !== bPart) {
        return bPart - aPart; // Descending order (newest first)
      }
    }
    return 0;
  });
