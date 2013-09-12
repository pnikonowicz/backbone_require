define([
	'model/Employees'
], function(Employees) {
	describe("Employees", function() {
		it('can retreive data', function() {
			var employees = null;
			
			new Employees().fetch().success(function(e) {
				employees = e;
			});
			
			waitsFor(function() {
				return employees;
			});
			
			runs(function() {
        expect(employees.length).toEqual(6);
        expect(employees[0]).not.toBeUndefined();
        expect(employees[0].Id).toEqual(4);
    	});
		});	
	});
});
	