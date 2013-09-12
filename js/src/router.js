define(['backbone', 'view/employees_controller'], function(Backbone, EmployeesController) {
	var Router = Backbone.Router.extend({
		routes : {
			'' : 'defaultRoute'
		},
		defaultRoute : function(action) {
			new EmployeesController().render();
		}
	});

	return Router;
});
