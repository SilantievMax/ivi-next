/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MOVIES_URL: 'http://localhost:3001',
    PARSER_URL: 'http://localhost:3002',
    INFO_URL: 'http://localhost:3003',
    COMMENT_URL: 'http://localhost:3004',
    AUTH_URL: 'http://localhost:3006'
  },
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'en',
    localeDetection: false
  },
  async redirects() {
    return [
      {
        source: '/movies/:slug(\\^[a-zA-Z]+$)',
        destination: '/movies/',
        permanent: true
      }
    ]
  }
}


module.exports = nextConfig
