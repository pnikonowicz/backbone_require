define(['backbone'], function(Backbone) {
	var EmployeesView = Backbone.View.extend({
		el : '#page',
	  render : function(model) {
	  	this.$el.html(model.length);
	  }
	});

	return EmployeesView;
});
