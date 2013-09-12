define(['backbone', 'model/employees', 'view/employees_view'], function(Backbone, Employees, EmployeesView) {
	var EmployeesController = Backbone.View.extend({
		model : new Employees,
		view : new EmployeesView,
		render : function() {
			this.model.fetch().success(function(employees) {
				this.view.render(employees);
			}.bind(this));
		}
	});

	return EmployeesController;
});
