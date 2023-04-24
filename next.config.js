/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MOVIES_URL: 'http://localhost:3001',
    PARSER_URL: 'http://localhost:3002',
    INFO_URL: 'http://localhost:3003',
    COMMENT_URL: 'http://localhost:3004'
  }
}

module.exports = nextConfig
