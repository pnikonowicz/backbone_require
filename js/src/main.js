require.config({
	baseUrl : "./js",
	paths : {
		jquery : 'vendor/jquery',
		underscore : 'vendor/underscore',
		backbone : 'vendor/backbone',
		src : 'src'
	},
	shim : {
		underscore : {
			exports : "_"
		},
		backbone : {
			deps : ['underscore', 'jquery'],
			exports : 'Backbone'
		}
	}
});

define(['src/router'], function(Router) {
	return new Router();
}); 