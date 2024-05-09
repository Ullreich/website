module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("global.css");
  eleventyConfig.addPassthroughCopy("css_files");
};
