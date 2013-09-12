define(['backbone'], function(Backbone) {
	var Router = Backbone.Router.extend({
		routes : {
			'' : 'defaultRoute'
		},
		defaultRoute : function(action) {
			console.debug("enter view here! :D")
		}
	});

	return Router;
});
