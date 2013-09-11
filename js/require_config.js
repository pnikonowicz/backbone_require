require.config({
	baseUrl : "js",
	paths : {
		//"test" : "some/v1.0"
	},
	waitSeconds : 15,

	shim : {
		'backbone' : {
			deps : ['underscore', 'jquery'],
			exports : 'Backbone'
		},
		'underscore' : {
			exports : '_'
		},
		'jquery' : {
			exports : '$'
		}
	}
});

