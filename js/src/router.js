define(['backbone', 'view/employee_view'], function(Backbone, EmployeeView) {
	var Router = Backbone.Router.extend({
		routes : {
			'' : 'defaultRoute'
		},
		defaultRoute : function(action) {
			new EmployeeView().render();
		}
	});

	return Router;
});
