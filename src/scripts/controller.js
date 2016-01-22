function loginController($scope){
    $scope.password = "1234567896";
}
angular.module('mango').
    controller('loginController',['$scope',loginController]);
