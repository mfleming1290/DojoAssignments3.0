angular.module('app')
    .controller('indexController',
         ['$scope', 'storeFactory',
            function($scope, storeFactory){
                $scope.products = [];
                $scope.recentOrders = [];
                $scope.recentCustomers = [];

                storeFactory.getProducts()
                  .then( function(data){
                      console.log(data);
                    $scope.products = data;
                  });
                storeFactory.getRecentOrders()
                  .then( function(data){
                    $scope.recentOrders = data.map( function(order){
                      order.created_at = new Date(order.created_at);
                      return order;
                    })
                  })

                storeFactory.getRecentCustomers()
                  .then( function(data){
                    $scope.recentCustomers = data.map( function(customer){
                      customer.created_at = new Date(customer.created_at);
                      return customer;
                    })
                  })

            }
        ]
    )
