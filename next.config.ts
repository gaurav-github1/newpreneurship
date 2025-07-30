import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental:{
        ppr: 'incremental',
    },
    devIndicators:{
        appIsrStatus: true,
        buildActivityPosition: 'bottom-right',
        buildActivity: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            },
        ],
    },
};

export default nextConfig;
