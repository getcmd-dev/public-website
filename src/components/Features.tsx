import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Link } from "lucide-react";
import { features } from "@/data/features";

const Features = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="relative">
          {/* Continuous connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300" style={{ transform: 'translateX(-50%)' }}></div>
          
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} id={feature.id} className="relative flex gap-16" style={{ scrollMarginTop: '120px' }}>
                {/* White padding around dot to create gap in line */}
                <div className="absolute left-6 w-5 h-5 bg-white rounded-full mt-5" style={{ transform: 'translate(-50%, -50%)' }}></div>
                
                {/* Circle outline on top of white padding */}
                <div className="absolute left-6 w-3 h-3 border-2 border-black bg-white rounded-full mt-5" style={{ transform: 'translate(-50%, -50%)' }}></div>
                
                {/* Left side - Title only */}
                <div className="flex-none w-80 pl-20">
                  <h3 className="text-2xl font-bold group flex items-center gap-2 hover:cursor-pointer">
                    <a
                      href={`#${feature.id}`}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-600"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(feature.id)?.scrollIntoView();
                        // Update URL without page jump
                        window.history.replaceState(null, '', `#${feature.id}`);
                      }}
                      aria-label={`Link to ${feature.title} section`}
                    >
                      <Link className="w-4 h-4" />
                    </a>
                    {feature.title}
                  </h3>
                </div>
                
                {/* Right side - Video/Image and description */}
                <div className="flex-1">
                  <div className="mb-6">
                    <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
                      <CardContent className="p-0">
                        {feature.video ? (
                          <video className="rounded-[10px] " loop controls disablePictureInPicture playsInline autoPlay muted poster={feature.image} width="100%" height="100%" preload="auto">
                            <source src={feature.video} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                          </video>
                          // <video
                          //   src={feature.video}
                          //   controls
                          //   className="w-full h-auto"
                          // />
                        ) : (
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-auto"
                          />
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;