define(['backbone', 'mustache'], function(Backbone, Mustache) {
	var EmployeesView = Backbone.View.extend({
		el : '#page',
		template : $('#employees_template_mustache').html(),
	  render : function(model) {
	  	var html = Mustache.to_html(this.template, {employees: model});
	  	this.$el.html(html);
	  	
	  	this.attachEvents();
	  },
	  attachEvents: function() {
	  	$('#changeViewButton').click(this.swapView);
	  },
	  swapView: function() {
	  	var employees = $('#employees');
	  	if(employees.hasClass('grid')) {
	  		employees.removeClass('grid');
	  		employees.addClass('list');
	  	} else {
	  		employees.removeClass('list');
	  		employees.addClass('grid');
	  	}
	  }
	});

	return EmployeesView;
});
