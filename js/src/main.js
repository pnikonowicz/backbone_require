require.config({
	baseUrl : "./js",
	paths : {
		jquery : 'vendor/jquery',
		underscore : 'vendor/underscore',
		backbone : 'vendor/backbone',
		src : 'src',
		view : 'src/view',
		model: 'src/model'
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

define(['src/router', 'backbone'], function(Router, Backbone) {
	new Router();
	Backbone.history.start();
}); 