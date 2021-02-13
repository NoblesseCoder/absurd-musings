module.exports = function(eleventyConfig){
	// Include our static assets
	eleventyConfig.addPassthroughCopy({'src/assets/img': 'assets/img'});
	//changes to file in this dir should cause recompile of 11ty
    eleventyConfig.addWatchTarget('./src/sass');
    //Once sass is compiled 11ty should take contents of css and pass it to dist dir
    eleventyConfig.addPassthroughCopy('./src/css');
  	
	return {
		templateFormats: ['md', 'njk'],
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		passtroughFileCopy: true,

		dir: {
			input: 'src',
			output: 'dist',
			includes: '_includes',
			layouts: '_includes/layouts'
		}
	}
};
