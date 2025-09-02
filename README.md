# cmd Public Website

The official marketing website for **cmd** - the best AI assistant for Xcode, open source.

## About cmd

cmd is an open source AI assistant that brings powerful autonomous agents directly into Xcode. It offers seamless integration with native chat, support for frontier AI models, and the ability to delegate entire tasks to autonomous agents while maintaining full control.

### Key Features

- **Agentic AI**: Delegate entire tasks to autonomous agents with fine-grained permissions
- **Native Chat Integration**: Switch between Agent and Chat modes for different workflows  
- **Claude Code Support**: Direct integration with Claude Code's advanced capabilities
- **Xcode 26 Integration**: Works with Xcode's new Code Assist interface
- **Multi-Model Support**: Choose from various frontier AI models
- **Open Source**: Transparent, community-driven development

## Website Features

This website showcases:

- Interactive hero section with labeled screenshots
- Feature overview with detailed descriptions
- Responsive design with dark/light mode support
- Direct links to GitHub repository and releases

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Getting Started

```bash
# Clone the repository
git clone https://github.com/getcmd-dev/cmd-public-website.git
cd cmd-public-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Deployment

The website is automatically deployed to GitHub Pages at: https://getcmd-dev.github.io/public-website/

To deploy manually:
```bash
npm run deploy
```

## Contributing

This website supports the [cmd project](https://github.com/getcmd-dev/cmd). Contributions are welcome! Please see the main cmd repository for contribution guidelines.

## License

This project follows the same license as the main cmd project. See the [cmd repository](https://github.com/getcmd-dev/cmd) for license details.
