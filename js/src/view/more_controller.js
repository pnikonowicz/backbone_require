define(['backbone', 'model/employee_details', 'view/employee_details_view'], function(Backbone, EmployeeDetails, EmployeeDetailsView) {
	var MoreController = Backbone.View.extend({
		model : undefined,
		view : new EmployeeDetailsView,
		initialize: function(params) {
			this.model = new EmployeeDetails({id:params.id});
		},
		render : function() {
			this.model.fetch().success(function(details) {
				this.view.render(details.Details);
			}.bind(this));
		}
	});
	return MoreController;
});
