define(['backbone', 'controller/employees_controller', 'controller/employees_details_controller'], function(Backbone, EmployeesController, EmployeesDetailsController) {
	var Router = Backbone.Router.extend({
		routes : {
			'' : 'defaultRoute',
			'more/:id' : 'moreRoute'
		},
		defaultRoute : function(action) {
			new EmployeesController().render();
		},
		moreRoute : function(id) {
			new EmployeesDetailsController({id:id}).render();
		}
	});

	return Router;
});
