angular.module('acessaepedeApp', ['mm.foundation'])

.controller('AcessaepedeCtrl', function ($scope, $http) {
    $scope.cart = [];
    $http.get('products.json').success(function (response) {
        $scope.products = response.products;
    });
    $scope.addToCart = function (product) {
        $scope.cart.push(angular.extend({quantity: 1}, product));
    };
})