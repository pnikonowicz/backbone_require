define(['backbone', 'model/jsonp_sync_trait'], function(Backbone, JsonpSyncTrait) {

	var EmployeeDetails = Backbone.Model.extend(_.extend(JsonpSyncTrait, {
		url : function() {
			return 'http://fe.interview.cheezburger.com/employees/' + this.id;
		}
	}));
	return EmployeeDetails;
});
