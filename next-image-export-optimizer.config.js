module.exports = {
  imageFolderPath: "public",
  exportFolderPath: "out",
  quality: 75,
  responsiveWidths: [640, 768, 1024, 1280, 1536],
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  deviceSizes: [640, 768, 1024, 1280, 1536],
  imageSizes: [16, 32, 64, 128, 256],
};
