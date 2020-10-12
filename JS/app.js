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