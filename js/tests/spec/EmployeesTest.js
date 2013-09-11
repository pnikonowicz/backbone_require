define([
	'Employees'
], function(Employees) {
	describe("Employees", function() {
		it('can retreive data', function() {
			var done = false;
			var employees = null;
			
			new Employees().fetch().success(function(e) {
				employees = e;
			});
			
			waitsFor(function() {
				return employees;
			});
			
			runs(function() {
        expect(employees.length).toEqual(6);
    	});
		});	
	});
});
	