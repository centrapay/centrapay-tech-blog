'use strict';

const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const config = require('./src/config');
/* eslint-disable-next-line no-console */
console.log(`
Resolved Config:
${require('util').inspect(config.getProperties(), null, null)}
`);

module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  require('./src/_plugins')
    .forEach(plugin => eleventyConfig.addPlugin(plugin));

  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/img');
  return {
    templateFormats: [
      'md',
      'njk',
      'html',
    ],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: false,
    dir: {
      input: 'src',
      output: 'dist',
    }
  };
};
