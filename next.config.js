/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['pdf2json'],
        },
    output: "export",
}

module.exports = nextConfig
