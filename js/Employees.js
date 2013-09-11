define(['backbone', 'Employee'], function(Backbone, Employee) {
	var Employees = Backbone.Collection.extend({
		model : Employee,
		url : function() {
			return 'http://fe.interview.cheezburger.com/employees';
		},
		sync : function(method, model, options) {
			var params = _.extend({
				type : 'GET',
				dataType : 'jsonp',
				url : model.url(),
				processData: false
			}, options);

			// Make the request.
			return $.ajax(params);
		},
		parse : function(response) {
			return response;
		}
	});
	return Employees;
});
