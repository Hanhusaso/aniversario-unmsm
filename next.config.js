/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'biologia-unmsm.s3.us-east-2.amazonaws.com',
			'https://afroperuanos.s3.us-east-2.amazonaws.com',
			'https://www.youtube.com',
		],
	},
	experimental: { images: { layoutRaw: true } },
};

module.exports = nextConfig;
