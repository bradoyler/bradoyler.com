// .eleventy.js — 11ty config (Handles collections, permalinks, drafts, metadata, etc.)
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  // todo: use metadata from _data/
  eleventyConfig.addGlobalData('site', {
    name: 'Brad Oyler',
    slogan: "Musings about tech, finance & data. Build, measure, learn...",
    version: '0.0.1',
    domain: 'bradoyler.com',
    url: 'https://www.bradoyler.com'
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    // Convert the date object to an ISO string and grab only the YYYY-MM-DD part.
    // This is the required format for the HTML datetime attribute.
    return dateObj.toISOString().split('T')[0];
  });

  eleventyConfig.addFilter("absoluteUrl", (url, base) => new URL(url, base).toString());

  eleventyConfig.addFilter("slice", (array, start, end) => {
    return array.slice(start, end);
  });

  // Add these to your existing config
  eleventyConfig.addFilter("capitalize", str => str.charAt(0).toUpperCase() + str.slice(1));
  eleventyConfig.addFilter("truncate", (str, len) => str.length > len ? str.slice(0, len) + "…" : str);

  eleventyConfig.addFilter("date", function (dateObj, formatStr) {
    let date;
    if (dateObj === "now" || !dateObj) {
      date = new Date();
    } else if (dateObj instanceof Date) {
      date = dateObj;
    } else {
      date = new Date(dateObj);
    }
    return format(date, formatStr);
  });


  eleventyConfig.addCollection('all_tagged_content', collection => {
    // This returns everything Eleventy processed that has a 'tags' property
    return collection.getAll().filter(item => item.data.tags);
  });


  eleventyConfig.addCollection('blog', collection => {
    return collection.getFilteredByTag('blog')
      .filter(item => !item.data.draft)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  eleventyConfig.addCollection('projects', collection => {
    return collection.getFilteredByTag('projects')
      .filter(item => !item.data.draft)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  // Copy over misc crap for visualization
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/widgets");
  eleventyConfig.addPassthroughCopy("src/scripts");
  
  // copy txt files
  eleventyConfig.addPassthroughCopy("src/*.txt");

  // needed for Github pages custom domain
  eleventyConfig.addPassthroughCopy("src/CNAME");
  
  // used for static sitemaps
  eleventyConfig.addPassthroughCopy("src/*.xml");

  return {
    dir: {
      input: 'src',     // Matches your source
      output: 'docs',   // Matches your dest
      layouts: '../layouts',  // Relative to input
    },
    templateFormats: ['md', 'njk', 'html'],  // Handlebars support
    markdownTemplateEngine: 'njk',  // Markdown + Handlebars
    htmlTemplateEngine: 'njk',
    pathPrefix: '/',
    passthroughFileCopy: true,  // Copy assets
    plugins: [syntaxHighlight]
  };
};