import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { features } from "@/data/features";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/cmd-logo.png"
              alt="cmd logo"
              className="w-8 h-8"
            />
            <span className="font-bold text-xl">cmd</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            {features.map((feature) => (
              <a
                key={feature.id}
                href={`/#${feature.id}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  const onHomePage = window.location.pathname === '/';
                  if (onHomePage) {
                    e.preventDefault();
                    document.getElementById(feature.id)?.scrollIntoView();
                  }
                }}
              >
                {feature.navLabel || feature.title}
              </a>
            ))}
            <Link
              to="/changelog"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Changelog
            </Link>
            <a
              href="https://docs.getcmd.dev/"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Docs
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="github"
            size="sm"
            className="flex items-center gap-2"
            asChild
          >
            <a
              href="https://github.com/getcmd-dev/cmd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;