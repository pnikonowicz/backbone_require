require.config({
	baseUrl : "../",
	paths : {
		jquery : 'vendor/jquery',
		underscore : 'vendor/underscore',
		backbone : 'vendor/backbone',
		jasmine : 'tests/lib/jasmine-1.3.1/jasmine',
		'jasmine-html' : 'tests/lib/jasmine-1.3.1/jasmine-html',
		spec : 'tests/spec/'
	},
	shim : {
		underscore : {
			exports : "_"
		},
		backbone : {
			deps : ['underscore', 'jquery'],
			exports : 'Backbone'
		},
		'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
	}
});

require(['jasmine-html', 'jquery'], function(jasmine, $) {
	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;

	var htmlReporter = new jasmine.HtmlReporter();

	jasmineEnv.addReporter(htmlReporter);

	jasmineEnv.specFilter = function(spec) {
		return htmlReporter.specFilter(spec);
	};

	var specs = [];
	specs.push('spec/EmployeesTest');

	$(function() {
		require(specs, function() {
			jasmineEnv.execute();
		});
	});

}); 