angular.module('app')
    .controller('orderController',
         ['$scope', 'storeFactory',
            function($scope, storeFactory){
                $scope.customers = [];
                $scope.products = [];
                $scope.orders = [];

                storeFactory.getCustomers()
                 .then( function(data){
                   $scope.customers = data;
                 })

                storeFactory.getProducts()
                 .then( function(data){
                   $scope.products = data;
                 })

                getOrders();

                function getOrders(){
                   storeFactory.getOrders()
                   .then( function(data){
                     $scope.orders = data;
                   })
                 }


                $scope.createOrder = function(newOrder){
                   storeFactory.createOrder(newOrder)
                   .then(function(){
                     $scope.newOrder = {};
                   })
                   .catch( function(err){
                     console.log(err);
                   })
                   .then( getOrders )
                 }

                $scope.deleteOrder = function(id){
                   storeFactory.deleteOrder(id)
                   .then( getOrders )
                 }

            }
        ]
    )
