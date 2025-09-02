import React from 'react';
import ScreenshotLabeler, { Label } from './ScreenshotLabeler';

const ScreenshotExample: React.FC = () => {
  const labels: Label[] = [
    {
      id: 'advanced-filters',
      title: 'Advanced Filters',
      subtext: 'Instantly filter your URL with built-in Filters. Combine filters with various complex criteria.',
      position: { x: 25, y: 15 },
      direction1: 'top',
      direction2: 'left'
    },
    {
      id: 'customize-layout',
      title: 'Customize Layout',
      subtext: 'Customize the Toolbar, Panel, Columns, Tabs to fit your workspace, like a real macOS app.',
      position: { x: 75, y: 15 },
      direction1: 'top',
      direction2: 'right'
    },
    {
      id: 'working-session',
      title: 'Working Session',
      subtext: 'Work faster by Pinning your working domains, and ignore unnecessary traffic.',
      position: { x: 15, y: 60 },
      direction1: 'left'
    },
    {
      id: 'powerful-debug',
      title: 'Powerful Debug Tool',
      subtext: 'Redefine how you debug requests.',
      position: { x: 85, y: 75 },
      direction1: 'bottom',
      direction2: 'right'
    }
  ];

  return (
    <div className="w-full">
      <ScreenshotLabeler
        imageSrc="/cmd-demo-light.png"
        imageAlt="cmd application screenshot showing advanced filters and customization options"
        labels={labels}
        padding={25}
        lineLength={30}
        margin={40}
        className="mx-auto max-w-7xl"
      />
    </div>
  );
};

export default ScreenshotExample;
