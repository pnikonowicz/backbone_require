define(['backbone', 'model/employees'], function(Backbone, Employees) {
	var EmployeesController = Backbone.View.extend({
		el : '#page',
		model : new Employees,
		render : function() {
			this.model.fetch().success(function(employees) {
				this.$el.html(employees);
			}.bind(this));
		}
	});

	return EmployeesController;
});
