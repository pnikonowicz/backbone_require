define(['backbone', 'mustache'], function(Backbone, Mustache) {
	var EmployeesView = Backbone.View.extend({
		el : '#page',
		template : $('#employees_template_mustache').html(),
	  render : function(model) {
	  	this.$el.html(Mustache.to_html(this.template, {employees: model}));
	  }
	});

	return EmployeesView;
});
