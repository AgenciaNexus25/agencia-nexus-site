/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Necessário para `next export` se estiver usando next/image sem um loader customizado
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignorar erros do ESLint durante o build
  },
};

export default nextConfig;

