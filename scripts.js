
angular.module('acessaepedeApp', ['mm.foundation'])

.controller('AcessaepedeCtrl', function ($scope, $http) {
    $scope.cart = [];
    $http.get('products.json').success(function (response) {
        $scope.products = response.products;
    });
    $scope.addToCart = function (product) {
        var found = false;
        $scope.cart.forEach(function (item) {
            if (item.id === product.id) {
                item.quantity++;
                found = true;
            }
        });
        if (!found) {
            $scope.cart.push(angular.extend({quantity: 1}, product));
        }
    };
    $scope.getCartPrice = function () {
        var deliveryPrice = parseInt($('#deliveryPrice').val());
        var total = deliveryPrice;
        $scope.cart.forEach(function (product) {
            total += product.price * product.quantity;
        });
        return total;
    };
    $scope.removeFromCart = function (product, cart) {
        $scope.cart.forEach(function (item) {
            if (item.id === product.id) {
                cart.splice(cart.indexOf(item), 1);
            }
        });
    };
})