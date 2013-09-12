define(['backbone'], function(Backbone) {
	var EmployeeDetailsView = Backbone.View.extend({
		render: function(model) {
			console.debug(model)
		}
	});
	return EmployeeDetailsView;
});
