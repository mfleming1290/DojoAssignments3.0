angular.module('app')
    .controller('customerController',
         ['$scope', 'storeFactory',
            function($scope, storeFactory){
                $scope.customers = [];
                fetchCustomers();

                function fetchCustomers(){
                  storeFactory.getCustomers()
                  .then( function(data){
                    $scope.customers = data;
                  });
                }

                $scope.createCustomer = function(newCustomer){
                  storeFactory.createCustomer(newCustomer)
                  .then( function(){
                    $scope.newCustomer = {};
                  })
                  .then( fetchCustomers )
                }

                $scope.deleteCustomer = function(id){
                  storeFactory.deleteCustomer(id)
                  .then( fetchCustomers )
                }

            }
        ]
    )
