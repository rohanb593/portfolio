#!/usr/bin/env node
// Build script that prevents recursion when called by @cloudflare/next-on-pages

const { execSync } = require('child_process');

// Run next build
console.log('Running next build...');
execSync('next build', { stdio: 'inherit' });

// Check if we're being called by vercel build (which the adapter uses)
// The adapter runs 'vercel build' which calls this script
// We detect this by checking if VERCEL env var is set, or if parent process is vercel
const isVercelBuild = process.env.VERCEL === '1' || 
                      process.env.VERCEL_BUILD === '1' ||
                      process.env.npm_lifecycle_event === 'build' && process.env.VERCEL;

if (!isVercelBuild) {
  console.log('Running Cloudflare adapter...');
  execSync('npx @cloudflare/next-on-pages@1', { stdio: 'inherit' });
} else {
  console.log('Skipping adapter (detected vercel build context)');
}
