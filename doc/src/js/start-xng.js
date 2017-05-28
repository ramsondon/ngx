(function () {
	'use strict';

	_.xng
		.base('doc/web')
		.listen({
			"contact": function () {
				_.xng.require("doc/web/js/twitter.min.js")
					.then(function (src) {
						console.log(src + ' downloaded');
					});
				_.xng.require("https://buttons.github.io/buttons.js")
					.then(function (src) {
						console.log(src + ' downloaded');
					});
			}
		})
		.xng()
		.then(function() {
			_.xng.require('doc/web/js/creative.min.js').then(function() {
				console.log('xng totally rocks and finished rendering!');
			});
		});

})();