(function () {
    'use strict';
    angular.module("LunchCheck",[])
    .controller("LunchCheckController",LunchCheckController)

    LunchCheckController.inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunch = "";
        $scope.output = "";
        var itemCount = 0;
        var itemList = [];
        
        $scope.checktoomuch = function () {
            if( $scope.lunch == "" ) {
                $scope.output = "Please enter data first";
            }
            else {
                itemCount = 0;
                itemList = $scope.lunch.split(','); //.filter(function () { return true }).length;
                itemList = itemList.filter(item => item);
                itemCount = itemList.length;
                if(itemCount <= 3) {
                    $scope.output = "Enjoy!";
                }
                else 
                    $scope.output = "Too Much!";
            }
        };
    }; 
}) ();