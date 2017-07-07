var myAppModule = angular.module('myApp', []);
// Factory
myAppModule.factory('productFactory', ['$http', function($http) {
var products = [
    {name: 'Keyboard', price: 149.99},
    {name: 'Mouse', price: 59.99},
    {name: 'Basketball', price: 59.99}];
var factory = {};
factory.addProduct = function (product, callback){
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
return factory;
}]);
//Controller
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
