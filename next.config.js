// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


module.exports = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'https://s32k2.sse.codesandbox.io/api' // development api
            : 'https://s32k2.sse.codesandbox.io/api' // production api
    }
}
