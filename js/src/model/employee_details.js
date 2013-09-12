define(['backbone'], function(Backbone) {

	var EmployeeDetails = Backbone.Model.extend({
		url : function() {
			return 'http://fe.interview.cheezburger.com/employees/' + this.id;
		},
	});
	return EmployeeDetails;
});
