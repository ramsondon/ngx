(function () {
	'use strict';

	_.xng
		.base('docs/web')
		.listen({
			"*": function (trigger, view) {
				console.log('view: ', view.getAttribute('data-xng-view'), trigger);
			},
			"footer": function () {
				_.xng.require([
					"docs/web/js/twitter.min.js",
					"https://buttons.github.io/buttons.js"
				]).then(function (src) {
					console.log(src + ' downloaded');
				});
			},
			"markdown_init" : function () {
				_.xng.require('https://spikespaz.github.io/tagdownjs/scripts/tagdown.min.js');
			}
		})
		.route({
			"*": function (cur) {
				console.log('routing * at', cur);
				if ( cur !== '.') {
					$('html, body').stop().animate({
						scrollTop: 0
					});
				}
			}
		})
		.run()
		.then(function() {
			_.xng.require('docs/web/js/creative.min.js').then(function() {
				console.log('xng totally rocks and finished rendering!');
			});
		});

})();