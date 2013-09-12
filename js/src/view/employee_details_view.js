define(['backbone', 'mustache', 'colorbox'], function(Backbone, Mustache, Colorbox) {
	var EmployeeDetailsView = Backbone.View.extend({
		template : $('#employee_details_template_mustache').html(),
		render: function(model) {
			var html = Mustache.to_html(this.template, model);
			$.colorbox({html:html});
		}
	});
	return EmployeeDetailsView;
});
