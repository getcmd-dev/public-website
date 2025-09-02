import React, { useEffect, useMemo, useRef, useState } from 'react';

export type Direction = 'top' | 'bottom' | 'left' | 'right';

export interface Label {
  id: string;
  title: string;
  subtext: string;
  position: {
    x: number; // percentage (0-100)
    y: number; // percentage (0-100)
  };
  direction1: Direction;
  direction2?: Direction;
}

export interface ScreenshotLabelerProps {
  imageSrc: string;
  imageAlt?: string;
  labels: Label[];
  padding?: number; // pixels to extend the line beyond image edge
  lineWidth?: number; // pixels for line segments
  lineLength?: number; // pixels for second line segment
  margin?: number; // margin for text placement
  className?: string;
}

const ScreenshotLabeler: React.FC<ScreenshotLabelerProps> = ({
  imageSrc,
  imageAlt = "Screenshot",
  labels,
  padding = 20,
  lineWidth = 1.5,
  lineLength = 30,
  margin = 24,
  className = ""
}) => {
   const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Scale: scale the image to help ensure that the view stays in the view port;
  const [naturalHeight, setNaturalHeight] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  // Observe the unscaled inner content size
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const h = entry.contentRect.height; // unaffected by transforms
      setNaturalHeight(h);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [imageSrc]);

  // Recompute scale on resize or when natural size changes
  useEffect(() => {
    const compute = () => {
      if (!naturalHeight) return;
      const vh = typeof window !== 'undefined' ? window.innerHeight : 0;
      const maxH = 0.8 * vh; // 80vh
      if (maxH > 0) setScale(Math.min(1, maxH / naturalHeight));
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [naturalHeight]);

  const reservedHeight = useMemo(() => {
    return naturalHeight ? naturalHeight * scale : undefined;
  }, [naturalHeight, scale]);

  return (
    <div 
      ref={outerRef} 
      className={`w-full ${className}`}
      style={{ 
        margin: `${margin}px auto`,
        height: reservedHeight ? `${reservedHeight}px` : 'auto'
      }}
    >
      <div ref={innerRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center'
        }}>
      {/* Use CSS Grid to create proper layout with label space */}
      <div 
        className="grid grid-cols-[1fr_300px] grid-rows-[150px_auto_150px] w-full"
      >
        {/* Top row - space for top labels */}
        <div className="col-span-3"></div>
        
        {/* image, right space */}
        
        {/* Image container */}
        <div className="relative overflow-visible">
          <img
            ref={imageRef}
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto relative z-0 block"
          />
          
          {/* All labels positioned relative to the entire grid */}
          {labels.map((label, index) => {
            const pos = {
      point: label.position,
      direction1: label.direction1,
      direction2: label.direction2
    }

            const extraPadding = pos.direction2 ? 20 : 0;

            return (
              <React.Fragment key={label.id}>
                {/* Point marker on image */}
                {/* <div
                  className="absolute w-3 h-3 bg-black rounded-full z-30 border-2 border-black"
                  style={{
                    left: `${pos.point.x}%`,
                    top: `${pos.point.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                /> */}
                
                {/* First line - start from dot position */}
                {pos.direction1 === 'left' ? (
                  <div
                    className="absolute bg-black z-20"
                    style={{
                      left: `calc(-${padding + extraPadding}px)`,
                      top: `calc(${pos.point.y}% - ${lineWidth / 2}px)`,
                      width: `calc(${pos.point.x}% + ${padding + extraPadding}px)`,
                      height: `${lineWidth}px`,
                      backgroundColor: '#000'
                    }}
                  />
                ) : pos.direction1 === 'right' ? (
                  <div
                    className="absolute bg-black z-20"
                    style={{
                      left: `calc(${pos.point.x}%)`,
                      top: `calc(${pos.point.y}% - ${lineWidth / 2}px)`,
                      width: `calc((100% - ${pos.point.x}%) + ${padding + extraPadding}px)`,
                      height: `${lineWidth}px`,
                      backgroundColor: '#000'
                    }}
                  />
                ) : pos.direction1 === 'top' ? (
                  <div
                    className="absolute bg-black z-20"
                    style={{
                      left: `calc(${pos.point.x}% - ${lineWidth / 2}px)`,
                      top: `calc(-${padding + extraPadding}px)`,
                      width: `${lineWidth}px`,
                      height: `calc(${pos.point.y}% + ${padding + extraPadding}px)`,
                      backgroundColor: '#000'
                    }}
                  />
                ) : (
                  <div
                    className="absolute bg-black z-20"
                    style={{
                      left: `calc(${pos.point.x}% - ${lineWidth / 2}px)`,
                      top: `calc(${pos.point.y}%)`,
                      width: `${lineWidth}px`,
                      height: `calc((100% - ${pos.point.y}%) + ${padding + extraPadding}px)`,
                      backgroundColor: '#000'
                    }}
                  />
                )}
                
                {/* Second line if direction2 exists */}
                {pos.direction2 && (
                  pos.direction2 === 'left' ? (
                  <div
                    className="absolute bg-black z-20"
                    style={{
                      left: `calc(${pos.point.x}% - ${lineLength - lineWidth / 2}px)`,
                      top: (pos.direction1 === 'top' ? `calc(-${padding + extraPadding}px)` : pos.direction1 === 'bottom' ? `calc(100% + ${padding + extraPadding}px)` : `${pos.point.y}%`),
                      width: `${lineLength}px`,
                      height: `${lineWidth}px`,
                      backgroundColor: '#000'
                    }}
                  />
                ) : pos.direction2 === 'right' ? (
                  <div
                    className="absolute bg-black z-20"
                    style={{
                      left: `calc(${pos.point.x}% - ${lineWidth / 2}px)`,
                      top: (pos.direction1 === 'top' ? `calc(-${padding + extraPadding}px)` : pos.direction1 === 'bottom' ? `calc(100% + ${padding + extraPadding}px)` : `${pos.point.y}%`),
                      width: `${lineLength}px`,
                      height: `${lineWidth}px`,
                      backgroundColor: '#000'
                    }}
                  />
                ) : pos.direction2 === 'top' ? (
                  <div
                    className="absolute bg-black z-20"
                    style={{
                      left: (pos.direction1 === 'left' ? `calc(-${padding + extraPadding}px)` : pos.direction1 === 'right' ? `calc(100% + ${padding + extraPadding}px)` : `${pos.point.x}%`),
                      top: `calc(${pos.point.y}% - ${lineLength - lineWidth / 2}px)`,
                      width: `${lineWidth}px`,
                      height: `${lineLength}px`,
                      backgroundColor: '#000'
                    }}
                  />
                ) : (
                  <div
                    className="absolute bg-black z-20"
                    style={{
                      left: (pos.direction1 === 'left' ? `calc(-${padding + extraPadding}px)` : pos.direction1 === 'right' ? `calc(100% + ${padding + extraPadding}px)` : `${pos.point.x}%`),
                      top: `calc(${pos.point.y}% - ${lineWidth / 2}px)`,
                      width: `${lineWidth}px`,
                      height: `${lineLength}px`,
                      backgroundColor: '#000'
                    }}
                  />
                )
              )}
                
                {/* Text label */}
                <div
                  className="absolute z-40 pointer-events-none"
                  style={{
                    left: pos.direction2 ? (
                      pos.direction2 === 'left' ? `calc(${pos.point.x}% - ${lineLength - lineWidth + 10}px)` :
                      pos.direction2 === 'right' ? `calc(${pos.point.x}% + ${lineLength - lineWidth + 10}px)` :
                      // direction2 is top/bottom
                      (pos.direction1 === 'left' ? `calc(-${padding}px)` : pos.direction1 === 'right' ? `calc(100% + ${padding}px)` : `${pos.point.x}%`)
                    ) : (
                      // No second line: place near firstEnd
                      pos.direction1 === 'left' ? `calc(-${padding + 8}px)` :
                      pos.direction1 === 'right' ? `calc(100% + ${padding + 8}px)` :
                      `${pos.point.x}%`
                    ),
                    top: pos.direction2 ? (
                      pos.direction2 === 'top' ? `calc(${pos.point.y}% - ${lineLength - lineWidth + 10}px)` :
                      pos.direction2 === 'bottom' ? `calc(${pos.point.y}% + ${lineLength - lineWidth + 10}px)` :
                      // left/right second
                      (pos.direction1 === 'top' ? `calc(-${padding}px)` : `calc(100% + ${padding}px)`)
                    ) : (
                      pos.direction1 === 'top' ? `calc(-${padding + 10}px)` :
                      pos.direction1 === 'bottom' ? `calc(100% + ${padding + 10}px)` :
                      `${pos.point.y}%`
                    ),
                    transform: pos.direction2 ? (
                      pos.direction2 === 'top' ? (
                        pos.direction1 === 'right' ? `translate(0%, -100%) scale(${1/scale})` : `translate(-100%, -100%) scale(${1/scale})`
                      ) : pos.direction2 === 'bottom' ? (
                        pos.direction1 === 'right' ? `translate(0%, 0%) scale(${1/scale})` : `translate(-100%, 0%) scale(${1/scale})`
                      ) : pos.direction2 === 'right' ? (
                        pos.direction1 === 'top' ? `translate(0%, -100%) scale(${1/scale})` : `translate(0%, 0%) scale(${1/scale})`
                      ) : (
                        pos.direction1 === 'top' ? `translate(-100%, -100%) scale(${1/scale})` : `translate(-100%, 0%) scale(${1/scale})`
                      )
                    ) : (
                      pos.direction1 === 'top' ? `translate(-50%, -100%) scale(${1/scale})`
                       : pos.direction1 === 'bottom' ? `translate(-50%, 0%) scale(${1/scale})`
                       : pos.direction1 === 'left' ? `translate(-100%, -50%) scale(${1/scale})` : `translate(0%, -50%) scale(${1/scale})`
                    ),
                    transformOrigin: pos.direction2 ? (
                      pos.direction2 === 'top' ? (
                        pos.direction1 === 'right' ? `bottom left` : 'bottom right'
                      ) : pos.direction2 === 'bottom' ? (
                        pos.direction1 === 'right' ? `top left` : 'top right'
                      ) : pos.direction2 === 'right' ? (
                        pos.direction1 === 'top' ? 'bottom left' : 'top left'
                      ) : (
                        pos.direction1 === 'top' ? 'bottom right' : 'top right'
                      )
                    ) : (
                      pos.direction1 === 'top' ? 'bottom center'
                       : pos.direction1 === 'bottom' ? 'top center'
                       : pos.direction1 === 'left' ? 'right center'
                       : 'left center'
                    )
                  }}
                >
                  <div
                    className={`bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg p-3 shadow-lg`}
                    style={{
                      width: 'max-content',
                      maxWidth: '260px',
                      whiteSpace: 'normal',
                      textAlign: (pos.direction1 === 'left' || pos.direction2 === 'left') ? 'right' : (pos.direction1 === 'right' || pos.direction2 === 'right') ? 'left' : 'center'
                    }}
                  >
                    <div className={`font-semibold text-gray-900 text-sm ${((pos.direction2 ?? pos.direction1) === 'top' || (pos.direction2 ?? pos.direction1) === 'bottom') ? '' : 'mb-1'}`}>
                      {label.title}
                    </div>
                    <div className="text-gray-600 text-xs leading-relaxed" style={{whiteSpace: 'pre-line'}}>
                      {label.subtext}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        
        <div className="relative"></div> {/* Right space */}
        
        {/* Bottom row - space for bottom labels */}
        <div className="col-span-3"></div>
      </div>
    </div>
    </div>
  );
};

export default ScreenshotLabeler;
