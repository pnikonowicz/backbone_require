define([], function() {
	var JsonpSyncTrait = {
		sync : function(method, model, options) {
			var params = _.extend({
				type : 'GET',
				dataType : 'jsonp',
				url : model.url(),
				processData : false
			}, options);

			return $.ajax(params);
		},
		parse : function(response) {
			return response;
		}
	};

	return JsonpSyncTrait;
});
