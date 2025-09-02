import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { features } from "@/data/features";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="/cmd-logo.png" 
              alt="cmd logo" 
              className="w-8 h-8"
            />
            <span className="font-bold text-xl">cmd</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {features.map((feature) => (
              <a 
                key={feature.id}
                href={`#${feature.id}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(feature.id)?.scrollIntoView();
                }}
              >
                {feature.navLabel || feature.title}
              </a>
            ))}
            <a 
              href="https://github.com/getcmd-dev/cmd?tab=readme-ov-file#cmd-agentic-ai-in-xcode" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Docs
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>
        </div>
        
        <Button 
          variant="github" 
          size="sm"
          className="flex items-center gap-2"
          onClick={() => window.open("https://github.com/getcmd-dev/cmd", "_blank")}
        >
          <Github className="w-4 h-4" />
          GitHub
        </Button>
      </div>
    </header>
  );
};

export default Header;