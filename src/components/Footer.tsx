import { Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/cmd-logo.png" 
              alt="cmd logo" 
              className="w-8 h-8"
            />
            <span className="font-bold text-xl">cmd</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/getcmd-dev/cmd?tab=readme-ov-file#cmd-agentic-ai-in-xcode" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Documentation
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://github.com/getcmd-dev/cmd" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2024 cmd. Open source AI for Xcode developers.
        </div>
      </div>
    </footer>
  );
};

export default Footer;