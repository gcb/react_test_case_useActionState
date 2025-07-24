import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: 'standalone',
	experimental: {
		optimizePackageImports: ["@chakra-ui/react"],
		authInterrupts: true,
		serverActions: {
			bodySizeLimit: '51mb',
		},
	},
};
// authInterrupts: true, see https://nextjs.org/docs/app/api-reference/functions/forbidden

export default nextConfig;
