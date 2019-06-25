const postcss = require("postcss");
const atImport = require("postcss-import");

module.exports = async raw => {
  return await postcss([
    atImport({
      path: ["src/_includes/css"]
    })
  ])
    .process(raw, {
      from: "./src/stylesheet.njk",
      to: "./dist/stylesheet.css"
    })
    .then(result => result.css);
};
