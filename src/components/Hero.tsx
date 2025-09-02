import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";
import { useState, useEffect } from "react";
import ScreenshotLabeler, { Label } from "./ScreenshotLabeler";

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const heroImage = isDark ? '/cmd-demo-dark.png' : '/cmd-demo-light.png';
  
  // One of each combination of direction1 x direction2
  const screenshotLabels: Label[] = [
    // direction1: top (varied positions near upper half)
    { id: 'top-right', title: 'Seamless side chat', subtext: 'Easily toggle the chat (⌘ + ESC / ⌘ + I). cmd is only here when you need it.', position: { x: 72.1, y: 2.2 }, direction1: 'top', direction2: 'left' },
    { id: 'top-right', title: 'Integrate with Xcode', subtext: 'cmd sees what is in Xcode, and can edit files', position: { x: 75, y: 5 }, direction1: 'top', direction2: 'right' },
    { id: 'right-top', title: 'Easily attach context', subtext: 'Use keyboard shortcuts or @ to add context', position: { x: 86, y: 12.8 }, direction1: 'right', direction2: 'top' },
    { id: 'only-right', title: 'Agentic AI', subtext: 'cmd autonomously understands your code and makes changes', position: { x: 97, y: 57 }, direction1: 'right', direction2: 'top' },
    { id: 'only-right', title: 'Checkpoint', subtext: 'Revert changes if needed', position: { x: 72, y: 73.3 }, direction1: 'right', direction2: 'top' },
    { id: 'right-bottom', title: 'File edits', subtext: 'See each changes made by cmd', position: { x: 99, y: 76 }, direction1: 'right', direction2: 'bottom' },
    { id: 'bottom-right', title: 'Use your preferred AI model', subtext: 'Choose any frontier model, or delegate entirely to Claude Code', position: { x: 80, y: 98.3 }, direction1: 'bottom', direction2: 'right' },
    { id: 'bottom-right', title: 'Agent to delegate / Chat to talk', subtext: 'Select the right mode for the task.\n"Agent" autonomously execute work.\n"Ask" identifies the right context and provide the best answer.', position: { x: 74, y: 98.3 }, direction1: 'bottom', direction2: 'left' },
  ];
  return (
    <section className="pt-32 pb-20 px-6 w-full">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            The best AI in Xcode, 
            <span className="text-primary"> open source</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Boost your productivity without compromise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={() => window.open("https://github.com/getcmd-dev/cmd/releases", "_blank")}>
              <Download className="w-5 h-5" />
              Install cmd
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open("https://github.com/getcmd-dev/cmd", "_blank")}
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
        
      {/* Full-width screenshot section with labels */}
      <div className="w-full mt-20">
        <ScreenshotLabeler
          imageSrc={heroImage}
          imageAlt="cmd AI in Xcode interface"
          labels={screenshotLabels}
          padding={25}
          lineLength={15}
          margin={20}
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
