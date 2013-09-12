define(['backbone', 'view/main_view'], function(Backbone, MainView) {
	var Router = Backbone.Router.extend({
		routes : {
			'' : 'defaultRoute'
		},
		defaultRoute : function(action) {
			new MainView().render();
		}
	});

	return Router;
});
