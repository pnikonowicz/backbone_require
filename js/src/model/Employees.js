define(['backbone', 'model/employee', 'model/jsonp_sync_trait'], function(Backbone, Employee, JsonpSyncTrait) {
	var Employees = Backbone.Collection.extend(_.extend(JsonpSyncTrait, {
		model : Employee,
		url : function() {
			return 'http://fe.interview.cheezburger.com/employees';
		}
	}));
	return Employees;
});
