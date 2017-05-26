(function () {
	'use strict';
	var begin = new Date().getTime();

	_.xng
		.base('web')
		.listen({
			"contact": function () {
				_.xng.require("web/js/twitter.min.js")
					.then(function (src) {
						console.log(src + ' downloaded');
					});
				_.xng.require("https://buttons.github.io/buttons.js")
					.then(function (src) {
						console.log(src + ' downloaded');
					});
			},
			"quickstart": function () {
				// _.xng.require([
					// "https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/prism.min.js",
					// "https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/components/prism-javascript.min.js",
					// "https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/plugins/line-numbers/prism-line-numbers.js"
				// ], 'data-manual').then(function (src) {
				// 	console.log('loaded ', src);
				// 	console.log('ready to highlight syntax');
				// });
			}
		})
		.xng()
		.then(function() {
			_.xng.require('web/js/creative.min.js').then(function() {
				console.log('xng totally rocks and finished rendering!');

				var end = new Date().getTime();
				console.log('DURATION', (end- begin)/1000, 's');
			});
		});

})();