const path = require("path");

module.exports = {
  entry: {
    gallery: [
      "./src/01-gallery.js",
      "./node_modules/simplelightbox/dist/simple-lightbox.css",
    ],
    video: ["./src/02-video.js"],
    feedback: ["./src/03-feedback.js"],
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
