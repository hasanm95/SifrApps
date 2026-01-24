import { ImageLoaderProps } from "next/image";

/**
 * Custom loader for Cloudflare Image Resizing
 * documentation: https://developers.cloudflare.com/images/image-resizing/url-format/
 */
export default function cloudflareLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  // Pass through external URLs or SVGs without resizing
  if (src.startsWith("http") || src.endsWith(".svg")) {
    return src;
  }

  // Cloudflare image resizing parameters
  const params = [
    `width=${width}`,
    `quality=${quality || 75}`,
    "format=auto",
    "fit=cover",
  ].join(",");

  // The format is /cdn-cgi/image/<params>/<path>
  // We use a relative path for the source
  return `/cdn-cgi/image/${params}${src}`;
}
