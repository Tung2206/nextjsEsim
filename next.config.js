/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async rewrites() {
        return [
            {
                source: '/products/:id',
                destination: '/products/[id]/page',
            },
        ]
    },
    images: {
        domains: [
            'play-lh.googleusercontent.com',
            'upload.wikimedia.org',
            'tulieuvankien.dangcongsan.vn'
        ],
    },
}

module.exports = nextConfig
