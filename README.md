# Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my projects, experience, education, and technical skills. The site dynamically fetches and displays GitHub repositories, automatically organizing them by completion status.

## Features

- **Dynamic Project Display**: Automatically fetches and displays public GitHub repositories
- **Project Organization**: Categorizes projects into "Completed" and "Ongoing" based on README status indicators
- **Responsive Design**: Fully responsive with mobile-friendly navigation and dropdown menu
- **Tech Stack Showcase**: Interactive tech stack page with experience levels
- **Experience Timeline**: Visual timeline of work experience and internships
- **Education Section**: Academic background and achievements
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **GitHub Integration**: Real-time repository data with languages, README excerpts, and statistics

## Tech Stack

- **Framework**: Next.js 16.0.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with shadcn/ui patterns
- **API**: GitHub REST API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- GitHub Personal Access Token (optional, for higher API rate limits)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rohanb593/portfolio_web.git
cd portfolio_web
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory (optional):
```env
GITHUB_TOKEN=your_github_token_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio_web/
├── app/
│   ├── api/
│   │   └── github/
│   │       └── repos/          # GitHub API integration
│   ├── education/              # Education page
│   ├── experience/             # Experience page
│   ├── projects/              # Projects page with GitHub integration
│   ├── tech/                   # Tech stack page
│   └── page.tsx                # Home page
├── components/
│   ├── header.tsx              # Navigation header with mobile menu
│   └── ui/                     # Reusable UI components
└── public/                     # Static assets
```

## Configuration

### GitHub Integration

The portfolio automatically fetches your public GitHub repositories. To use a GitHub token for higher rate limits:

1. Create a GitHub Personal Access Token at [GitHub Settings](https://github.com/settings/tokens)
2. Add it to `.env.local` as `GITHUB_TOKEN`
3. The token only needs public repository read access

### Project Status Organization

Projects are automatically organized based on status indicators in their README files:

- **Completed Projects**: Repositories with `**Status:** ✅ Completed` in the README
- **Ongoing Projects**: All other repositories

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add `GITHUB_TOKEN` as an environment variable in Vercel settings
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Any Node.js hosting service

**Important**: Remember to add `GITHUB_TOKEN` as an environment variable in your hosting platform's settings.

## Features in Detail

### Dynamic GitHub Integration

- Fetches all public repositories from your GitHub account
- Extracts languages, README content, and repository statistics
- Organizes projects by completion status
- Displays first 30 lines of README files
- Shows creation and last updated dates

### Responsive Navigation

- Desktop: Full navigation bar with scroll-based floating header
- Mobile: Hamburger menu with smooth slide-in dropdown
- Smooth animations and transitions throughout

### Tech Stack Page

- Interactive progress bars showing years of experience
- Categorization by Languages, Frameworks, and Software Tools
- Clickable tech badges that link from project pages

## Customization

### Updating Your Information

- **Personal Info**: Edit `app/page.tsx` for home page content
- **Experience**: Update `app/experience/page.tsx`
- **Education**: Update `app/education/page.tsx`
- **Tech Stack**: Modify the `techStack` object in `app/tech/page.tsx`

### Styling

- Global styles: `app/globals.css`
- Color scheme: CSS variables in `globals.css`
- Component styles: Tailwind CSS classes

## Status

**Status:** ✅ Completed

## License

This project is open source and available for personal use.

## Contact

- **Email**: rohan.bhagat1@outlook.com
- **LinkedIn**: [rohan-bhagat-a64785341](https://www.linkedin.com/in/rohan-bhagat-a64785341)
- **GitHub**: [rohanb593](https://github.com/rohanb593)
