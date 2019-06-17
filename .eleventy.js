const processStyles = require("./postcss");
const debug = require("debug")("app");

module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform("styles", async (output, outputPath) => {
    debug(outputPath);
    if (outputPath.endsWith("stylesheet.css")) {
      return await processStyles(output);
    }
    return output;
  });

  return {
    dir: {
      input: "src",
      output: "dest"
    }
  };
};
