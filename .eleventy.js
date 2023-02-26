module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  // オブジェクトで設定してた値は`return`に指定する（オプション）
  return {
    dir: {
      input: "src",
    },
  };
};
