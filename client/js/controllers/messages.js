myApp.controller('MessageController', function($scope, MessagesFactory){
	$scope.addCustomer = function(){
		var customer_repack = { 
							name: $scope.new_customer.name,
							created_at: new Date() 
						  };
		CustomersFactory.create_customer(customer_repack, function(data){
			$scope.customers = data;
		})
	}
	MessagesFactory.get_history(function(data)
	{
		// console.log(data);
		$scope.messages = data;
	});
});