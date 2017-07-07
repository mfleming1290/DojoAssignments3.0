angular.module('app')
    .controller('productController',
         ['$scope', 'storeFactory',
            function($scope, storeFactory){
                  $scope.products = [];
                  fetchProducts();

                  function fetchProducts(){
                    storeFactory.getProducts()
                    .then( function(data){
                      $scope.products = data;
                    });
                  }

                  $scope.createProduct = function(){
                    console.log('creating prod in controller');
                    storeFactory.createProduct($scope.newProduct)
                    .then( function(){ $scope.newProduct = {}; })
                    .then( fetchProducts )
                  }

                  $scope.deleteProduct = function(id){
                    storeFactory.deleteProduct(id)
                    .then( fetchProducts )
                  }
            }
        ]
    )
