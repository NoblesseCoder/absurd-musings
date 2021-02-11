module.exports = function(eleventyConfig){
	// Add a readable date formatter filter to Nunjucks
  	// eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"))

  	// Add a HTML timestamp formatter filter to Nunjucks
  	// eleventyConfig.addFilter("htmlDateDisplay", require("./filters/timestamp.js"))
  	// eleventyConfig.addLayoutAlias('default', 'layouts/base.njk')

  	// Include our static assets
  	// eleventyConfig.addPassthroughCopy({'src/assets/fonts': 'assets/fonts'});
  	eleventyConfig.addPassthroughCopy({'src/assets/img': 'assets/img'});
  	// eleventyConfig.addPassthroughCopy({'src/assets/js': 'assets/js'});
  	// eleventyConfig.addPassthroughCopy('src/favicons');
  	// eleventyConfig.addPassthroughCopy('src/robots.txt');

  	//changes to file in this dir should cause recompile of 11ty
  	eleventyConfig.addWatchTarget('./src/sass');
  	//Once sass is compiled 11ty should take contes of css and pass it to public dir
  	eleventyConfig.addPassthroughCopy('./src/css');
  	

	return {
    	// templateFormats: ['md', 'njk'],
    	// markdownTemplateEngine: 'njk',
    	// htmlTemplateEngine: 'njk',
	    // passtroughFileCopy: true,

    	dir: {
      		input: 'src',
     		output: 'public',
      		includes: '_includes',
      		layouts: '_includes/layouts'
    	}
    }
};
