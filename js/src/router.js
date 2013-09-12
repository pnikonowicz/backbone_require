define(['backbone', 'view/employees_view'], function(Backbone, EmployeesView) {
	var Router = Backbone.Router.extend({
		routes : {
			'' : 'defaultRoute'
		},
		defaultRoute : function(action) {
			new EmployeesView().render();
		}
	});

	return Router;
});
