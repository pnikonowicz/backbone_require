define(['backbone', 'view/employees_controller', 'view/more_controller'], function(Backbone, EmployeesController, MoreController) {
	var Router = Backbone.Router.extend({
		routes : {
			'' : 'defaultRoute',
			'more/:id' : 'moreRoute'
		},
		defaultRoute : function(action) {
			new EmployeesController().render();
		},
		moreRoute : function(id) {
			new MoreController().render(id);
		}
	});

	return Router;
});
