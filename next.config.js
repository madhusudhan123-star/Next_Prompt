/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_ID:'1033819761057-0mog557qird85ov6cq7811a7cp57cvsk.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET:'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',
    MONGO_URI : 'mongodb+srv://dmadhusudhan98:NDnVSev8FBeRXgeC@cluster0.z70qzwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    NEXTAUTH_URL : 'https://next-prompt-ashen.vercel.app',
    NEXTAUTH_URL_INTERNAL  : 'https://next-prompt-ashen.vercel.app',
    NEXTAUTH_SECRET: 'B1stnWvavIUPPwoxMAM9ksw//2Pe6HGRh70kOfOtMV4=',
  },
    experimental: {
        appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig
