module.exports = {
  context: "src",
  entry: {
    index: "./index.js"
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js"
  }
};
