const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // There is an unrelated package-lock.json in the home directory, so Next
  // guesses that as the workspace root and warns on every start. Pin it.
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: path.join(__dirname),
}

module.exports = nextConfig
