// var student = {
//     name: "",
//     type: student
// };

// document.addEventListener('DOMContentLoaded',contentloaded);

// function contentloaded(event) {
//     document.getElementById('name').addEventListener("keyup", keyup);
// }

// function keyup(event) {
//     calculateNumericOutput();
// }

// function calculateNumericOutput() {
//     student.name = document.getElementById('name').value;

//     var totalnameval = 0;
//     for(var i=0; i < student.name.length; i++){
//         totalnameval += student.name.charCodeAt(i);
//     }

//     //insert result into Output
//     var Output = "Total Numeric Value of Person's name is :" + totalnameval ;
//     document.getElementById('output').innerText = Output;
// }

(function () {
    'use strict';
    
    angular.module('myFirstApp', [])
    .controller('MyFirstController', function ($scope) {
        $scope.name = ""
        $scope.namecalculator = function () {
        $scope.calc = 0;    
            for(var i = 0; i < $scope.name.length; i++){
                $scope.calc += $scope.name.charCodeAt(i);
            }
        };
    });
})();

// (function() {
//     'use strict';

//     angular.module('DIApp', [])
//     .controller('DIController', DIController);

//     function DIController ($scope, $filter){
//         $scope.name = "Siddharth";
//         $scope.upper = function () {
//             var uCase = $filter('uppercase');
//             $scope.name = uCase($scope.name); 
//         };
//     }
// }) ();

// (function() {
//     'use strict';

//     angular.module('DIApp', [])
//     .controller('DIController', DIController);
//     DIController.$inject = ['$scope','$filter'];

//     function DIController ($scope, $filter){
//         $scope.name = "Siddharth";
//         $scope.upper = function () {
//             var uCase = $filter('uppercase');
//             $scope.name = uCase($scope.name); 
//         };
//     }
// }) ();

//Minified JS
!function(){"use strict";function e(e,n){e.name="Siddharth",e.upper=function()
{var r=n("uppercase");e.name=r(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();

(function () {
    'use strict';
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];

    function MsgController($scope) {
        $scope.name = "Siddharth";
        $scope.PSState = "no";
        $scope.sayMsg = function () {
            return "Siddharth wants a PS5!";
        };

        $scope.givePS5 = function () {
            $scope.PSState = "";
        }
    }   
}) ();