import { ImageLoaderProps } from "next/image";

const cloudflareLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
};

export default cloudflareLoader;
