import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { changelogEntries } from "@/data/changelog";
import { useFragmentScroll } from "@/utils/fragmentScroll";

const Changelog = () => {
  const initializeFragmentScroll = useFragmentScroll();

  useEffect(() => {
    return initializeFragmentScroll();
  }, [initializeFragmentScroll]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Changelog</h1>
        <p className="text-muted-foreground mb-12">
          Latest updates and improvements to cmd
        </p>

        <div className="space-y-16">
          {changelogEntries.map((entry) => (
            <section
              key={entry.id}
              id={entry.id}
              className="scroll-mt-24"
            >
              <h2 className="text-3xl font-bold mb-2">
                <a
                  href={`#${entry.id}`}
                  className="hover:underline"
                >
                  {entry.title}
                </a>
              </h2>

              <div className="text-primary font-mono mb-1">
                <a
                  href={`https://github.com/getcmd-dev/cmd/releases/tag/v${entry.version}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {entry.version}
                </a>
              </div>
              <time className="text-sm text-muted-foreground mb-4 block">
                {entry.date}
              </time>

              {entry.description && (
                <div className="mb-6 space-y-4">
                  {Array.isArray(entry.description) ? (
                    entry.description.map((block, idx) => {
                      if (block.type === 'text') {
                        return (
                          <p key={idx} className="text-foreground">
                            {block.content}
                          </p>
                        );
                      } else if (block.type === 'image') {
                        return (
                          <div key={idx} className="rounded-lg border border-border overflow-hidden">
                            <img
                              src={block.src}
                              alt={block.alt || entry.title}
                              className="w-full"
                            />
                          </div>
                        );
                      } else if (block.type === 'video') {
                        return (
                          <div key={idx} className="rounded-lg border border-border overflow-hidden">
                            <video
                              controls
                              className="w-full"
                              poster={block.poster}
                            >
                              <source src={block.src} type="video/mp4" />
                            </video>
                          </div>
                        );
                      }
                      return null;
                    })
                  ) : (
                    <p className="text-muted-foreground">{entry.description}</p>
                  )}
                </div>
              )}

              {entry.improvements && entry.improvements.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Improvements</h3>
                  <ul className="space-y-2">
                    {entry.improvements.map((improvement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {entry.fixes && entry.fixes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Fixes</h3>
                  <ul className="space-y-2">
                    {entry.fixes.map((fix, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>{fix}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {entry.commits && entry.commits.length > 0 && (
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Commits</h3>
                  <ul className="space-y-1.5">
                    {entry.commits.map((commit) => (
                      <li key={commit.hash} className="text-sm">
                        <a
                          href={`https://github.com/getcmd-dev/cmd/commit/${commit.hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors font-mono"
                        >
                          {commit.hash.substring(0, 7)}
                        </a>
                        <span className="text-muted-foreground mx-2">-</span>
                        <span className="text-foreground">{commit.message}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Changelog;
