define(['backbone'], function(Backbone) {
	var EmployeesView = Backbone.View.extend({
		el : '#page',
		template : $('#employees_template_mustache').html(),
	  render : function(model) {
	  	this.$el.html(this.template);
	  }
	});

	return EmployeesView;
});
