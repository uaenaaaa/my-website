/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.scdn.co',
				port: '',
				pathname: '/image/**',
			},
			{
				protocol: 'https',
				hostname: 'github-readme-stats.vercel.app',
				port: '',
				pathname: '/api/**',
			},
			{
				protocol: 'https',
				hostname: 'roadmap.sh',
				port: '',
			},
		],
	},
};

module.exports = nextConfig;
