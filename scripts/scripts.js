let myModule = angular
    .module('myModule', [])
    .controller('myController', function($scope) {
        let employee = {
            name: 'ნინო',
            surname: 'ქრისტესიაშვილი',
            img: './images/cosmos-010.jpg'
        }
        $scope.message = 'ჩემი პირველი კონტროლერი';
        $scope.employee = employee;
    });

