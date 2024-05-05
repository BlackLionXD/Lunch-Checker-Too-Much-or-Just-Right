


var app = angular.module('rootModule',[]);

app.controller('helloController', ($scope)=>{
$scope.message = 'hello world';

});

app.controller('formController',($scope)=>{
    $scope.checkLunch = function() {
        var lunchItems = $scope.lunchMenu ? $scope.lunchMenu.split(',') : [];
        if (lunchItems.length === 0 || (lunchItems.length === 1 && lunchItems[0].trim() === '')) {
            $scope.message = 'Please enter data first';
        } else if (lunchItems.length <= 3) {
            $scope.message = 'Enjoy!';
        } else {
            $scope.message = 'Too much!';
        }
    };
})