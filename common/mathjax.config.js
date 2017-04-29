/*global MathJax */

MathJax.Hub.Config( {
	displayAlign: "left",
	tex2jax: {
		inlineMath: [ [ "$", "$" ], [ "\\(", "\\)" ] ],
		displayMath: [ [ "$$", "$$" ], [ "\\[", "\\]" ] ],
		processEscapes: true,
		processEnvironments: true,
		skipTags: [ "script", "noscript", "style", "textarea", "pre" ],
		TeX: {
			equationNumbers: {
				autoNumber: "AMS"
			},
			extensions: [ "AMSmath.js", "AMSsymbols.js" ]
		}
	},
	"HTML-CSS": {
		availableFonts: [],
		preferredFont: null,
		webFont: "Neo-Euler"
	}
} );
