var myAppModule = angular.module('myApp', []);
// Products Factory
myAppModule.factory('productFactory', ['$http', function($http) {
var products = [
    {name: 'Keyboard', price: 149.99, qty: 50},
    {name: 'Mouse', price: 59.99, qty: 50},
    {name: 'Basketball', price: 59.99, qty: 50}];
var factory = {};
factory.addProduct = function (product, callback){
   product.qty = 50;
   products.push(product);
   callback(products);
}
factory.deleteProduct = function(val, callback){
  delete products[val];
  callback(products);
  }
factory.getProducts = function (callback){
    callback(products);
}
factory.buyProduct = function (data, callback){
    if (products[data.id].qty - data.qty > 0) {
        products[data.id].qty -= data.qty;
    } else {
        products[data.id].qty = 0;
    }
}
return factory;
}]);
//Products Controller
myAppModule.controller('productController', ['$scope', 'productFactory', function ($scope, productFactory){
function setProducts(data){
    $scope.products = data;
    $scope.product = {};
 }
$scope.product = {};
$scope.products = {};
productFactory.getProducts(function (data){
    $scope.products = data;
})
$scope.addProduct = function(){
    productFactory.addProduct($scope.product, setProducts);
  }
$scope.deleteProduct = function(id){
    productFactory.deleteProduct(id,setProducts);
}
}])


// Orders Controller
myAppModule.controller('ordersController', ['$scope', 'productFactory', function ($scope, productFactory){
function setProducts(data){
    $scope.products = data;
    $scope.product = {};
 }

$scope.products = [];
productFactory.getProducts(function (data){
    $scope.products = data;
})
$scope.buyProduct = function(id){
    productFactory.buyProduct({id: id, qty: 1});
    }
}])
