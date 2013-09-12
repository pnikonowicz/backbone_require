define([
	'model/employee_details'
], function(EmployeeDetails) {
	describe("EmployeeDetails", function() {
		it('can retreive data', function() {
			var employeeDetails = null;
			
			new EmployeeDetails({id:4}).fetch().success(function(e) {
				employeeDetails = e;
			});
			
			waitsFor(function() {
				return employeeDetails;
			});
			
			runs(function() {
        expect(employeeDetails).not.toBeUndefined();
        expect(employeeDetails.Details.Likes).toEqual('Movies');
    	});
		});	
	});
});
	