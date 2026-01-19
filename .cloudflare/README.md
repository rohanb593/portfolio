# Cloudflare Pages Configuration

## Required Build Settings

In your Cloudflare Pages dashboard, configure the following:

### Build Settings
- **Build command**: `pnpm run pages:build`
- **Build output directory**: `.vercel/output/static`
- **Deploy command**: (leave empty - Cloudflare Pages deploys automatically)

### Environment Variables
- `GITHUB_TOKEN`: Your GitHub Personal Access Token

## Why These Settings?

- `pnpm run pages:build` runs both Next.js build and the Cloudflare adapter
- `.vercel/output/static` is where the adapter outputs files for Cloudflare Pages
- No deploy command is needed - Cloudflare Pages automatically deploys from the build output
